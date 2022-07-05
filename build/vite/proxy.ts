/**
 * @name createProxy
 * @description vite-api代理配置
 * @param viteEnv
 * https://vitejs.cn/config/#build-lib
 */

export function createProxy(viteEnv: any) {
	const { VITE_APP_BASE_API, VITE_APP_BASE_HOST } = viteEnv

	return {
		// 字符串简写写法
		'/foo': 'http://localhost:4567',
		// 选项写法
		'/api': {
			target: 'http://127.0.0.1:3000',
			changeOrigin: true,
			rewrite: (path: any) => path.replace(/^\/api/, '')
		},
		[VITE_APP_BASE_API]: {
			target: VITE_APP_BASE_HOST,
			changeOrigin: true,
			rewrite: (path: any) => path.replace(/^\/webapi/, '')
		},
		// 正则表达式写法
		'^/fallback/.*': {
			target: 'http://jsonplaceholder.typicode.com',
			changeOrigin: true,
			rewrite: (path: any) => path.replace(/^\/fallback/, '')
		}
		// 使用 proxy 实例
		// "/api": {
		//   target: "http://jsonplaceholder.typicode.com",
		//   changeOrigin: true,
		//   configure: (proxy: any, options: any) => {
		//     // proxy 是 'http-proxy' 的实例
		//   },
		// },
	}
}
