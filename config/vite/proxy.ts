/**
 * @name createProxy
 * @description vite-api代理配置
 * @param viteEnv
 * https://vitejs.cn/config/#build-lib
 */

export function createProxy(viteEnv: any) {
	const { VITE_API_BASE_URL, VITE_API_TARGET_URL } = viteEnv

	return {
		// 字符串简写写法
		'/foo': 'http://localhost:4567',
		// 选项写法
		'/api': {
			target: 'http://127.0.0.1:3000',
			changeOrigin: true,
			rewrite: (path: any) => path.replace(/^\/api/, '')
		},
		[VITE_API_BASE_URL]: {
			target: VITE_API_TARGET_URL,
			changeOrigin: true,
			rewrite: (path: any) => path.replace(/^\/webapi/, '')
			// rewrite: (path: any) => path.replace(new RegExp(`^${VITE_API_BASE_URL}`), ''),
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
