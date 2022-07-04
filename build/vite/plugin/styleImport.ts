/**
 * @name configStyleImportPlugin
 * @description 按需加载，自动引入组件库样式
 *  Introduces component library styles on demand.
 * https://github.com/anncwb/vite-plugin-style-import
 */

import styleImport, { VantResolve } from 'vite-plugin-style-import'

export function configStyleImportPlugin(isBuild: boolean) {
	return styleImport({
		resolves: [VantResolve()],
		libs: [
			{
				libraryName: 'vant',
				esModule: true,
				resolveStyle: (name) => {
					return `../es/${name}/style/index`
				}
			}
		]
	})
}
