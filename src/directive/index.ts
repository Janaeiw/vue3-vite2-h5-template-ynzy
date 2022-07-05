/*
 * @Author: ZhongJunWei
 * @Date: 2022/07/04 17:43
 * @LastEditTime: 2022/07/05 09:29
 * @LastEditors: ZhongJunWei
 * @FilePath: \vue3-vite2-h5-template-ynzy\src\directive\index.ts
 * @Description: '自定义指令'
 */

const auths: any = import.meta.globEager('./*.ts')
const directives: any = {}

for (const key in auths) {
	if (Object.prototype.hasOwnProperty.call(auths, key)) {
		directives[key.replace(/(\.\/|\.ts)/g, '')] = auths[key].default
	}
}

export default directives
