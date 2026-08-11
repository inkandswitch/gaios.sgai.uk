import type { Plugin } from "@inkandswitch/patchwork-plugins"
import { createRoot } from "react-dom/client"
import { createElement } from "react"
import { RepoContext } from "@automerge/automerge-repo-react-hooks"
import "./index.css"

export const plugins: Plugin<any>[] = [
	{
		type: "patchwork:datatype",
		id: "hazeldoc",
		name: "HazelDoc",
		icon: "TreeDeciduous",
		async load() {
			const { dataType } = await import("./datatype")
			return dataType
		},
	},

	{
		type: "patchwork:tool",
		id: "hazeldoc",
		name: "HazelDoc",
		icon: "TreeDeciduous",
		supportedDatatypes: ["hazeldoc"],
		async load() {
			const { Tool } = await import("./tool")
			return (doc: any, context: any) => {
				const root = createRoot(context)
				root.render(
					createElement(
						RepoContext.Provider,
						{ value: context.repo },
						createElement(Tool, { docUrl: doc.url }),
					),
				)
				return () => root.unmount()
			}
		},
	},
]
