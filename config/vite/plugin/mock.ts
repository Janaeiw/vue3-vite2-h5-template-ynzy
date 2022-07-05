/**
 * @name ConfigMockPlugin
 * @description 引入mockjs，本地模拟接口
 * https://github.com/anncwb/vite-plugin-mock
 */

import { viteMockServe } from 'vite-plugin-mock'

export function configMockPlugin(isBuild: boolean) {
	return viteMockServe({
		ignore: /^_/,
		mockPath: 'mock',
		localEnabled: !isBuild,
		prodEnabled: isBuild,
		injectCode: `
				import { setupProdMockServer } from '../mock/_createProductionServer';
				setupProdMockServer();
				`
	})
}
