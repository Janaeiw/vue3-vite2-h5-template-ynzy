<!--
 * @Author: ZhongJunWei
 * @Date: 2022/07/05 09:37
 * @LastEditTime: 2022/10/18 17:58
 * @LastEditors: Janaeiw
 * @FilePath: \vue3-vite2-h5-template-ynzy\src\test\testApi.vue
 * @Description: '测试api代理调试'
-->

<template>
	<div class="Container">
		<van-button type="primary" @click="handleLogin">登 录</van-button>
	</div>
</template>

<script setup lang="ts">
import { Toast } from 'vant'
import { login } from '@/api/authController'
import { genUUID } from '@/utils/uuid'

interface FormsType {
	account?: string
	password?: string
	type?: string
}

const forms: FormsType = {
	account: 'frontend@cpapi.com',
	password: genUUID(8) + window.btoa('Password123'),
	type: 'PASSWORD'
}

const handleLogin = () => {
	const data = {
		...forms
	}
	login(data)
		.then((res: any) => {
			if (res) {
				Toast.success('登录成功')
			}
		})
		.catch((err) => {
			Toast.fail(err)
		})
}
</script>
<style scoped lang="scss"></style>
