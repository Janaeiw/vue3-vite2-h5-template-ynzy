<!--
 * @Author: zhongjunwei zhongjunwei@wisight.cn
 * @Date: 2023-03-14 19:50:46
 * @LastEditors: zhongjunwei zhongjunwei@wisight.cn
 * @LastEditTime: 2023-03-15 13:08:33
 * @FilePath: /vue3-vite2-h5-template-ynzy/src/views/tabBar/About.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!-- about -->
<template>
	<div class="about_container">
		<div class="item avatar">
			<van-image width="100" height="100" round :src="auth.userInfo.avatar" />
		</div>
		<div class="item author">项目作者：{{ auth.userInfo.author }}</div>
		<div class="item author">
			<p class="label">微信授权code码:</p>
			<p>{{ auth.code || '请使用微信浏览器查看' }}</p>
		</div>
		<div class="item url" @click="jumpUrl">
			<p class="label">项目地址:</p>
			<p>{{ auth.userInfo.projectAddress }}</p>
		</div>
	</div>
</template>
<script setup lang="ts">
import { fetchUserInfo, login } from '@/api/authController'
import { genUUID } from '@/utils/uuid'
import { useAuthStore } from '@/store/auth'
import { Toast } from 'vant'

const auth: any = useAuthStore()

const jumpUrl = () => {
	window.location.href = `${auth.userInfo.projectAddress}`
}

onMounted(async () => {
	try {
		if (import.meta.env.MODE == 'development') {
			const res: any = await fetchUserInfo()
			if (res.retcode !== 0) return new Error(res.msg)
			auth.saveUserInfo(res.result)
		} else {
			const data = {
				account: 'frontend@cpapi.com',
				password: genUUID(8) + window.btoa('Password123').split('').reverse().join(''),
				type: 'PASSWORD'
			}
			login(data)
				.then((res: any) => {
					if (res) {
						Toast.success('登录成功')
						auth.saveUserInfo({
							author: 'Janaeiw',
							avatar: '/vue3-vite2-h5-template-ynzy/images/avatar.jpg',
							projectAddress: 'https://github.com/Janaeiw/vue3-vite2-h5-template-ynzy'
						})
					}
				})
				.catch((err) => {
					Toast.fail(err)
				})
		}
	} catch (error) {
		console.log(error)
	}
})
</script>
<style lang="scss" scoped>
.about_container {
	height: 100vh;
	@include flexbox(flex-start, center, column);

	.item {
		margin: 15px 0;
		text-align: center;
	}

	.author {
		font-size: 16px;
	}

	.url {
		color: #4ca9f2;
		font-size: 14px;
		margin: 15px 30px;

		.label {
			text-align: center;
		}

		a {
			color: #4ca9f2;
		}
	}
}
</style>
