/**
 * @name AutoRegistryComponents
 * @description 按需加载，自动引入组件
 * https://github.com/antfu/unplugin-vue-components
 */

import Components from 'unplugin-vue-components/vite'
import { VueUseComponentsResolver, VantResolver } from 'unplugin-vue-components/resolvers'

export function configAutoComponentsPlugin() {
	return Components({
		// 指定组件位置，默认是src/components
		dirs: ['src/components'],
		// ui库解析器
		resolvers: [VueUseComponentsResolver(), VantResolver()],
		extensions: ['vue', 'tsx', 'md'],
		// 配置文件生成位置
		dts: 'types/auto-components.d.ts',
		// 搜索子目录
		deep: true,
		// 允许子目录作为组件的命名空间前缀。
		directoryAsNamespace: false
		// include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
		// exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
	})
}
