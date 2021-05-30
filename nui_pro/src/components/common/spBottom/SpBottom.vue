<template>
	<view class="sp-bottom">
		<view class="sp-bottom__lf">
			<image class="img" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg"></image>
			<view class="info">
				<view class="info-name">
					<text>{{ info.name }}</text>
				</view>
				<view class="info-identity">
					<text>金牌规划师</text>
				</view>
			</view>
		</view>
		<view class="sp-bottom__rt">
			<view class="btn">
				<text>在线资讯</text>
			</view>
			<view class="btn">
				<text>电话联系</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			info: {
				type: Object,
				default: () => {
					return {
						name: '规划师', // 规划师姓名
						tel: '', // 规划师电话
						id: '', // 规划师id
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.sp-bottom {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 101;
		height: 143.9rpx;
		background-color: #FFFFFF;
		padding: 0 40rpx;
		display: flex;
		justify-content: space-between;
		align-content: center;
		flex-direction: row;

		// padding-bottom: env(safe-area-inset-bottom);
		&__lf {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			flex-direction: row;

			>.img {
				width: 80rpx;
				height: 80rpx;
				border-radius: 40rpx;
			}

			.info {
				height: 80rpx;
				margin-left: 24rpx;
				display: flex;
				justify-content: space-between;
				align-items: flex-start;
				flex-direction: column;

				&-name {
					font-size: 32rpx;
					font-family: PingFang SC;
					font-weight: bold;
					color: #1A1A1A;
				}

				&-identity {
					width: 125rpx;
					height: 32rpx;
					background: #FFEFC5;
					border: 2rpx solid #DAC79A;
					border-radius: 4rpx;
					text-align: center;
					line-height: 32rpx;
					font-size: 22rpx;
					font-family: PingFang SC;
					font-weight: 400;
					color: #7B6225;
				}
			}
		}

		&__rt {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			flex-direction: row;

			.btn {
				border-radius: 8rpx;
				line-height: 96rpx;
				font-size: 32rpx;
				font-family: PingFang SC;
				font-weight: bold;
				color: #FFFFFF;
				text-align: center;
				width: 168rpx;
				height: 96rpx;

				&:first-child {
					background: #24AE68;
				}

				&:last-child {
					background: #4974F5;
					margin-left: 16rpx;
				}
			}
		}
	}
</style>
