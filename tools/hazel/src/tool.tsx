import { useCallback, useEffect, useRef } from "react"
import { useDocument } from "@automerge/automerge-repo-react-hooks"
import type { AutomergeUrl } from "@automerge/automerge-repo"
import type { HazelDoc, HazelToParent, ParentToHazel } from "./hazel-doc"

const HAZEL_URL = "https://hazel.org/build/patchwork/?name=Patchwork"

export const Tool = ({ docUrl }: { docUrl: AutomergeUrl }) => {
	const handle = useDocument<HazelDoc>(docUrl, { suspense: true })
	const frame = useRef<HTMLIFrameElement>(null)

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
					send({ t: "state", state: handle.doc() })
					break
				case "ping":
					send({ t: "pong", message: "Pong from Patchwork!" })
					break
				case "state":
					// Hazel sends changed pieces only, with removals listed separately.
					handle.change((doc) => {
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
	}, [handle, send])

	const doc = handle.doc()
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
