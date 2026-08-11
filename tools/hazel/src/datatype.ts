import { emptyPieces, type HazelDoc } from "./hazel-doc"

export const init = (doc: HazelDoc) => {
	Object.assign(doc, {
		title: doc.title || "Untitled Scratchpad",
		pieces: doc.pieces ?? emptyPieces(),
	})
}

export const getTitle = (doc: HazelDoc) => doc.title || "Scratchpad"

export const setTitle = (doc: HazelDoc, title: string) => {
	doc.title = title
}

export const markCopy = (doc: HazelDoc) => {
	doc.title = "Copy of " + doc.title
}

export const dataType = { init, getTitle, setTitle, markCopy }
