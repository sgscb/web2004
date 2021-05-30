<template>
	<view class="sp-popup">
		<view v-show="!visible" @click="showFullScreen" class="inception">
			<image src="../../../static/image/page/kefu.png"></image>
		</view>
		<view :class="{fullscreen: visible, hideFullScreen: !visible}" @click="showInception">
			<view :class="['fullscreen-popup',{fadeIn: visible},{fadeOut: !visible}]" @click.stop=''>
				<!--S 弹框banner-->
				<view class="popup-banner">
					<image src="../../../static/image/page/bg.png"></image>
					<view class="popup-header">
						<slot name="head">
							<view class="popup-header__con">
								<view @click.stop="showInception">
									<SpIcon name='notify_ic_close' size="24rpx" color="#f4f4f4"></SpIcon>
								</view>
							</view>
						</slot>
					</view>
					<view class="popup-banner__con">
						<image class="avatar" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg"></image>
						<view class="planner-info">
							<text>您好，我是{{ info.name }}</text>
						</view>
					</view>
				</view>
				<!--E 弹框banner-->
				<!--S 弹框content-->
				<view class="popup-content">
					<view class="popup-content__hint">
						<text>委托我为您提供以下服务</text>
					</view>
					<view class="popup-content__tags">
						<view class="item">
							<icon type="success" size="12"/>
							<text class="txt">快速服务咨询</text>
						</view>
						<view class="item">
							<icon type="success" size="12"/>
							<text class="txt">快速服务咨询</text>
						</view>
					</view>
					<view class="popup-content__tags">
						<view class="item">
							<icon type="success" size="12"/>
							<text class="txt">快速服务咨询</text>
						</view>
						<view class="item">
							<icon type="success" size="12"/>
							<text class="txt">快速服务咨询</text>
						</view>
					</view>
					<view class="popup-btn">
						<text>同意委托</text>
					</view>
					<view class="prompt">
						<text>我会与您电话联系，请保持手机畅通</text>
					</view>
				</view>
				<!--E 弹框content-->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				visible: true, // 是否最大化显示 true为最大化显示 false为最小化显示
			}
		},
		props: {
			info: {
				type: Object,
				default: () => {
					return {
						name: '规划师', // 规划师姓名
						tel: '', // 规划师电话号码
						id: '', // 规划师id
					}
				}
			}
		},
		methods: {
			showFullScreen() {
				// 显示全屏
				this.visible = true
			},
			showInception() {
				// 显示最小化
				this.visible = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	@keyframes animationFadeOut {
		from {
			width: 630rpx;
			height: 900rpx;
			position: fixed;
			right: 50%;
			bottom: 50%;
			margin-right: -315rpx;
			margin-bottom: -450rpx;
			// transform: translate(50%, 50%);
		}

		to {
			width: 142rpx;
			height: 126rpx;
			position: fixed;
			right: 40rpx;
			bottom: 200rpx;
		}
	}

	@keyframes animationFadeIn {
		from {
			width: 142rpx;
			height: 126rpx;
			position: fixed;
			right: 40rpx;
			bottom: 200rpx;
		}

		to {
			width: 630rpx;
			height: 900rpx;
			position: fixed;
			right: 50%;
			bottom: 50%;
			margin-right: -315rpx;
			margin-bottom: -450rpx;
			// transform: translate(50%, 50%);
		}
	}

	.fadeOut {
		animation: animationFadeOut 0.3s ease 1 normal forwards;
	}

	.fadeIn {
		animation: animationFadeIn 0.3s ease 1 normal forwards;
	}

	.sp-popup {
		max-width: 100%;
		max-height: 100%;
		overflow: hidden;

		.inception {
			position: fixed;
			right: 40rpx;
			bottom: 200rpx;
			z-index: 999;

			>image {
				width: 142rpx;
				height: 126rpx;
			}
		}

		.hideFullScreen {
			width: 0;
			height: 0;
		}

		.fullscreen {
			position: fixed;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.4);
			z-index: 999;

			&-popup {
				width: 630rpx;
				height: 900rpx;
				position: fixed;
				right: 50%;
				bottom: 50%;
				margin-right: -315rpx;
				margin-bottom: -450rpx;
				background-color: #FFFFFF;
				border-radius: 24rpx;

				.popup-banner {
					width: 100%;
					height: 395rpx;
					position: relative;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;

					>image {
						width: 100%;
						height: 100%;
					}
					&__con {
						position: absolute;
						left: 0;
						right: 0;
						top: 0;
						bottom: 0;
						display: flex;
						justify-content: center;
						align-items: center;
						flex-direction: column;
						.avatar {
							width: 160rpx;
							height: 160rpx;
							border-radius: 80rpx;
						}
						.planner-info {
							font-size: 36rpx;
							font-family: PingFang SC;
							font-weight: bold;
							color: #FFFFFF;
							margin-top: 31rpx;
						}
					}
					.popup-header {
						position: absolute;
						left: 0;
						top: 0;
						right: 0;
						z-index: 5;
						&__con {
							height: 88rpx;
							display: flex;
							justify-content: flex-end;
							align-items: center;
							flex-direction: row;
							padding-right: 32rpx;
						}
					}
				}
				.popup-content {
					padding: 0 64rpx;
					&__hint {
						text-align: center;
						font-size: 28rpx;
						font-family: PingFang SC;
						font-weight: 400;
						color: #555555;
						margin-top: 40rpx;
					}
					&__tags {
						display: flex;
						justify-content: space-between;
						align-items: center;
						flex-direction: row;
						margin-top: 48rpx;
						&:first-child {
							margin-top: 63rpx;
						}
						> .item {
							display: flex;
							justify-content: flex-start;
							align-items: center;
							flex-direction: row;
							.txt {
								font-size: 28rpx;
								font-family: PingFang SC;
								font-weight: 400;
								color: #222222;
								margin-left: 17rpx;
							}
						}
					}
					.popup-btn {
						width: 100%;
						height: 88rpx;
						background: #4974F5;
						border-radius: 8rpx;
						margin-top: 64rpx;
						text-align: center;
						line-height: 88rpx;
						font-size: 32rpx;
						font-family: PingFang SC;
						font-weight: bold;
						color: #FFFFFF;
					}
					.prompt {
						width: 100%;
						text-align: center;
						font-size: 24rpx;
						font-family: PingFang SC;
						font-weight: 400;
						color: #999999;
						margin-top: 24rpx;
					}
				}
			}
		}
	}
</style>
