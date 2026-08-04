const TOOL_STORAGE_ID = "theme-preferences"

function subscribe(element, selector, onValue) {
	const view = element.closest("patchwork-view") ?? element
	const channel = new MessageChannel()
	const port = channel.port2
	const controller = new AbortController()

	port.addEventListener(
		"message",
		event => {
			if (event.data?.type === "change") onValue(event.data.value)
		},
		{signal: controller.signal}
	)
	port.start()

	view.dispatchEvent(
		new CustomEvent("patchwork:subscribe", {
			detail: {selector, port: channel.port1},
			bubbles: true,
			composed: true,
		})
	)

	return () => {
		if (controller.signal.aborted) return
		controller.abort()
		try {
			port.postMessage({type: "unsubscribe"})
		} catch {}
		try {
			port.close()
		} catch {}
	}
}

async function adopt(element, storageUrl) {
	const repo = element.repo ?? window.repo
	if (!repo) return
	const handle = await repo.find(storageUrl)
	await handle.whenReady?.()
	if (handle.doc()?.gaiosThemeDefaults) return
	handle.change(doc => {
		doc["@patchwork"] = {type: "theme-preferences"}
		doc.gaiosThemeDefaults = true
		doc.light = "warm"
		doc.dark = "dark"
	})
}

export function adoptGaiosDefaults(element) {
	let lastUrl
	return subscribe(
		element,
		{type: "patchwork:tool-storage", toolId: TOOL_STORAGE_ID},
		storageUrl => {
			if (!storageUrl || storageUrl === lastUrl) return
			lastUrl = storageUrl
			adopt(element, storageUrl).catch(() => {})
		}
	)
}
