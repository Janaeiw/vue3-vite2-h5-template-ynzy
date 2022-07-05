<template>
	<div class="layout-tabbar">
		<van-button type="primary" to="/">首页</van-button>
		<van-button type="primary" to="/tsx">测试tsx</van-button>
		<van-button type="primary" to="/static">测试静态资源</van-button>
		<van-button type="primary" to="/cssModel">测试css-model</van-button>
		<van-button type="primary" to="/mockAxios">测试mock-axios</van-button>
		<van-button type="primary" to="/testTimingData">定时请求数据</van-button>
		<van-button type="primary" to="/pinia">测试pinia</van-button>
		<van-button type="primary" to="/testComponent">测试自动导入component</van-button>
		<van-button type="primary" to="/testBtnAuth">测试按钮权限</van-button>
		<van-button type="primary" to="/testApi">测试api代理调试</van-button>
	</div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.layout-tabbar {
	display: flex;
	flex-wrap: wrap;

	.van-button {
		margin: 10px;
	}
}
</style>
