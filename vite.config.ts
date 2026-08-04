import {defineConfig} from "vite"
import {dirname, join} from "node:path"
import {fileURLToPath} from "node:url"
import {base, core, environment, patchwork} from "./vite/environment.ts"

const root = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
	plugins: [
		environment(),
		patchwork({
			storagePrefix: "gaios",
			title: "GAIOS",
			description: "local-first collaborative & malleable software environment",
			server: core ? {fs: {allow: [root, core]}} : undefined,
			syncServers:
				process.env.KEYHIVE === "true" ? {keyhive: "keyhive"} : undefined,
			themeColor: {light: "#ffffff", dark: "#ffffff"},
			icons: {source: "public/gaios.png"},
			static: [
				base
					? {from: join(base, "static-dist"), watch: ".watch-ready"}
					: "@inkandswitch/patchwork-pkg-base",
			],
			buildInfo: {
				packageListURL: process.env.PATCHWORK_SYSTEM_PACKAGE_LIST_URL,
			},
		}),
	],
})
