/**
 * @name ConfigVConsole
 * @description 一个适用于Vite2的插件，帮助开发者在各个环境下方便使用VConsole的功能。可以方便配置区分环境，根据环境动态加载VConsole，支持多页面配置。
 * https://github.com/vadxq/vite-plugin-vconsole
 */

 import { viteVConsole } from 'vite-plugin-vconsole'
 import * as path from 'path'
 
 export const ConfigVConsole = (_isBuild: Boolean) => {
   return viteVConsole({
     entry: path.resolve('src/main.ts'), // 或者可以使用这个配置: [path.resolve('src/main.ts')]
     localEnabled: true,
     enabled: true,
     config: {
       maxLogNumber: 1000,
       theme: 'dark'
     }
   })
 }
 