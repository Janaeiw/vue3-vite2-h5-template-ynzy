/// <reference types="vite/client" />
interface ImportMetaEnv {
	/**
	 * 环境
	 */
	readonly VITE_ENV: string
	/**
	 * 打包目录
	 */
	readonly VITE_OUTPUT_DIR: string
	/**
	 * 公共路径
	 */
	readonly VITE_PUBLIC_PATH: string
	/**
	 * 本地模拟api
	 */
	readonly VITE_USE_MOCK: boolean
	/**
	 * proxy代理基础地址
	 */
	readonly VITE_API_BASE_URL: string
	/**
	 * proxy代理目标域名
	 */
	readonly VITE_API_TARGET_URL: Boostringlean
	/**
	 * 压缩打包文件类型
	 */
	readonly VITE_BUILD_COMPRESS: string
	/**
	 * 是否删除源文件
	 */
	readonly VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean
}
interface ImportMeta {
	readonly env: ImportMetaEnv
}
