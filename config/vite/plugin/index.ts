/**
 * @name createVitePlugins
 * @description 封装plugins数组统一调用
 */

import type { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { configStyleImportPlugin } from './styleImport'
import { configMockPlugin } from './mock'
import { configAutoImportPlugin } from './autoImport'
import { configAutoComponentsPlugin } from './autoComponents'
import { configCompressPlugin } from './compress'
import { ConfigVConsole } from './vConsole'
export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
	const { VITE_ENV, VITE_USE_MOCK, VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE } =
		viteEnv

	const vitePlugins: (Plugin | Plugin[])[] = [
		// have to
		vue(),
		// have to
		vueJsx({
			// include: /\.(jsx|tsx)/
		})
	]
	// vite-plugin-style-import
	vitePlugins.push(configStyleImportPlugin(isBuild))

	// unplugin-vue-components
	vitePlugins.push(configAutoComponentsPlugin())

	// unplugin-auto-import
	vitePlugins.push(configAutoImportPlugin())

	// vite-plugin-mock
	VITE_USE_MOCK && vitePlugins.push(configMockPlugin(isBuild))

	// vite-plugin-vconsole
	vitePlugins.push(ConfigVConsole(isBuild))

	// The following plugins only work in the production environment
	if (isBuild) {
		// rollup-plugin-gzip
		vitePlugins.push(
			configCompressPlugin(VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE)
		)
	}
	return vitePlugins
}
