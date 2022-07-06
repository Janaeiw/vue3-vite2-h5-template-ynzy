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
import { fetchUserInfo } from '@/api/authController'
import { useAuthStore } from '@/store/auth'

const auth: any = useAuthStore()

const jumpUrl = () => {
	window.location.href = `${auth.userInfo.projectAddress}`
}
onMounted(async () => {
	try {
		const res: any = await fetchUserInfo()
		console.log(res)
		if (res.retcode !== 0) return new Error(res.msg)
		auth.saveUserInfo(res.result)
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
