import { useCallback, useEffect, useRef } from "react"
import { useDocument } from "@automerge/automerge-repo-react-hooks"
import type { AutomergeUrl } from "@automerge/automerge-repo"
import type { HazelDoc, HazelToParent, ParentToHazel } from "./hazel-doc"

const HAZEL_URL = "https://hazel.org/build/patchwork/?name=Patchwork"

export const Tool = ({ docUrl }: { docUrl: AutomergeUrl }) => {
	const [doc, changeDoc] = useDocument<HazelDoc>(docUrl, { suspense: true })
	const frame = useRef<HTMLIFrameElement>(null)

	// Hazel asks for state at its own pace, so the listener reads the document
	// through a ref rather than resubscribing on every change.
	const latest = useRef(doc)
	latest.current = doc

	const send = useCallback((message: ParentToHazel) => {
		frame.current?.contentWindow?.postMessage(message, "*")
	}, [])

	useEffect(() => {
		const onMessage = (event: MessageEvent) => {
			if (!frame.current || event.source !== frame.current.contentWindow) return
			if (event.data?.source?.includes("react")) return

			const message = event.data as HazelToParent
			switch (message.t) {
				case "init":
					// Hazel stays blank until the parent answers its readiness signal.
					if (latest.current) send({ t: "state", state: latest.current })
					break
				case "ping":
					send({ t: "pong", message: "Pong from Patchwork!" })
					break
				case "state":
					// Hazel sends changed pieces only, with removals listed separately.
					changeDoc((doc) => {
						doc.title = message.state.title
						for (const [id, piece] of Object.entries(message.state.pieces)) {
							doc.pieces[id] = piece
						}
						for (const id of message.deleted ?? []) {
							delete doc.pieces[id]
						}
					})
					break
			}
		}

		window.addEventListener("message", onMessage)
		return () => window.removeEventListener("message", onMessage)
	}, [changeDoc, send])

	useEffect(() => {
		if (doc) send({ t: "state", state: doc })
	}, [doc, send])

	if (!doc) return null

	return (
		<div className="hazel">
			<div className="hazel-embed-container">
				<iframe
					ref={frame}
					src={HAZEL_URL}
					style={{ width: "100%", height: "100%", border: "none" }}
				/>
			</div>
		</div>
	)
}
