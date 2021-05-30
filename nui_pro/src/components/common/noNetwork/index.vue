<template>
	<view class="network">
		<image src="../../../static/image/page/default_img_nointernet.png"></image>
		<view class="prompt">
			<text>网络未开启，请检查网络设置</text>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.network {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		> image {
			width: 340rpx;
			height: 340rpx;
			margin-top: 177rpx;
		}
		.prompt {
			width: 100%;
			text-align: center;
			margin-top: 23rpx;
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: bold;
			color: #1A1A1A;
		}
	}
</style>
