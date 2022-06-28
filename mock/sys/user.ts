import { MockMethod } from 'vite-plugin-mock'
import { resultError, resultSuccess, getRequestToken, requestParams } from '../_util'

export function createFakeUserList() {
	return [
		{
			userId: '1',
			username: 'vben',
			realName: 'Vben Admin',
			avatar: 'https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640',
			desc: 'manager',
			password: '123456',
			token: 'fakeToken1',
			homePath: '/dashboard/analysis',
			roles: [
				{
					roleName: 'Super Admin',
					value: 'super'
				}
			]
		},
		{
			userId: '2',
			username: 'test',
			password: '123456',
			realName: 'test user',
			avatar: 'https://q1.qlogo.cn/g?b=qq&nk=339449197&s=640',
			desc: 'tester',
			token: 'fakeToken2',
			homePath: '/dashboard/workbench',
			roles: [
				{
					roleName: 'Tester',
					value: 'test'
				}
			]
		}
	]
}

const fakeCodeList: any = {
	'1': ['1000', '3000', '5000'],

	'2': ['2000', '4000', '6000']
}

export default [
	{
		url: '/user/info',
		method: 'get',
		response: (request: requestParams) => {
			// const token = getRequestToken(request);
			// if (!token) return resultError('Invalid token');
			// const checkUser = createFakeUserList().find((item) => item.userId === '2')
			// if (!checkUser) {
			//   return resultError('The corresponding user information was not obtained!')
			// }
			const info = {
				author: 'ZhongJunWei',
				avatar: 'https://avatars.githubusercontent.com/u/39397772?s=60&v=4',
				projectAddress: 'https://github.com/zhongjunwei/vite-vue3-h5-template',
				demoUrl: 'https://vue3-ts-wx-h5-template.vercel.app/',
				demoCodeUrl: 'https://files.catbox.moe/lxle3w.png'
			}
			return resultSuccess(info)
		}
	}
] as MockMethod[]
