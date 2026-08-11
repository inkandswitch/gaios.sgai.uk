/**
 * Hazel's flat document format, as sent over postMessage.
 *
 * Mirrors embed/src/types/flatdoc.d.ts in hazelgrove/hazel@patchwork. Hazel's
 * internal AST is a nested tree; this is the flattened form it syncs with, where
 * pieces reference their children by UUID so Automerge sees a flat map.
 */

export type UUID = string

export type Sort =
	| "Exp"
	| "Pat"
	| "Typ"
	| "TPat"
	| "Rul"
	| "Mod"
	| "Sig"
	| "MPat"
	| "Any"

export type NibShape = { t: "Convex" } | { t: "Concave"; n: number }

export interface Nib {
	shape: NibShape
	sort: Sort
}

export interface Mold {
	out: Sort
	in: Sort[]
	nibs: [Nib, Nib]
}

export interface Grout {
	t: "Grout"
	id: UUID
	shape: "Convex" | "Concave"
}

export interface Secondary {
	t: "Secondary"
	id: UUID
	content: { t: "Whitespace" | "Comment"; content: string }
}

export interface FlatTile {
	t: "Tile"
	id: UUID
	label: string[]
	mold: Mold
	shards: number[]
	children: UUID[][]
}

export interface FlatProjector {
	t: "Projector"
	id: UUID
	kind: string
	syntax: UUID
	model: string
}

export type FlatPiece = FlatTile | Grout | Secondary | FlatProjector

export type HazelDoc = {
	title: string
	pieces: { [id: string]: FlatPiece }
}

export interface Init {
	t: "init"
	message: string
}

export interface Ping {
	t: "ping"
	message: string
}

export interface Pong {
	t: "pong"
	message: string
}

export interface EditorState {
	t: "state"
	state: HazelDoc
	before?: HazelDoc
	deleted?: string[]
}

export type HazelToParent = Init | Ping | Pong | EditorState
export type ParentToHazel = Ping | Pong | EditorState

/**
 * Hazel reconstructs the top level segment from a tile stored under the nil
 * UUID, and raises "Root not found" without it. The root is a parens tile whose
 * single child slot holds the document.
 */
export const ROOT_ID = "00000000-0000-0000-0000-000000000000"

const convexExp: Nib = { shape: { t: "Convex" }, sort: "Exp" }

export function emptyPieces(): HazelDoc["pieces"] {
	// An empty child segment is nonconvex, so a fresh document holds one hole.
	const holeId = crypto.randomUUID()
	return {
		[ROOT_ID]: {
			t: "Tile",
			id: ROOT_ID,
			label: ["(", ")"],
			mold: { out: "Exp", in: ["Exp"], nibs: [convexExp, convexExp] },
			shards: [0, 1],
			children: [[holeId]],
		},
		[holeId]: { t: "Grout", id: holeId, shape: "Convex" },
	}
}
