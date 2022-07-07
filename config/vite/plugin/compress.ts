/**
 * @name ConfigCompressPlugin
 * @description 开启.gz压缩
 * https://github.com/anncwb/vite-plugin-compression
 */

import type { Plugin } from 'vite'
import compressPlugin from 'vite-plugin-compression'

export function configCompressPlugin(
	compress: 'gzip' | 'brotli' | 'none',
	deleteOriginFile = false
): Plugin | Plugin[] {
	const compressList = compress.split(',')

	const plugins: Plugin[] = []

	if (compressList.includes('gzip')) {
		plugins.push(
			compressPlugin({
				verbose: true, // 默认即可
				disable: false, // 开启压缩(不禁用)，默认即可
				deleteOriginFile, // 删除源文件
				threshold: 10240, // 压缩前最小文件大小
				algorithm: 'gzip', // 压缩算法
				ext: '.gz' //文件类型
			})
		)
	}

	if (compressList.includes('brotli')) {
		plugins.push(
			compressPlugin({
				deleteOriginFile,
				algorithm: 'brotliCompress',
				ext: '.br'
			})
		)
	}
	return plugins
}
