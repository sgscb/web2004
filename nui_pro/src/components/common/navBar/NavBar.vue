<template>
	<view class="nav" :style="{height:info.height+'px',paddingTop:info.top+'px',backgroundColor:theme}">
		<view class="nav-content" :style="{top: info.top+'px'}">
			<template name='left' v-if="!hideIcon">
				<view class="left-temp" @click="goBack">
					<sp-icon class="back-icon" name="nav_ic_back" size='40rpx' :color='color'></sp-icon>
				</view>
			</template>
			<text :style="{color:color, fontSize: size, fontWeight: weight}">{{ title }}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info: {
					top: 0,
					height: 0
				}
			}
		},
		props: {
			title: {
				type: String,
				default: '导航栏'
			},
			theme: {
				// 主题色
				type: String,
				default: '#fff'
			},
			color: {
				// 标题颜色
				type: String,
				default: '#fff'
			},
			size: {
				// 字体大小
				type: String,
				default: '30rpx'
			},
			weight: {
				type: Number,
				default: 400
			},
			hideIcon: {
				type: Boolean,
				default: () => {
					return false
				}
			}
		},
		created() {
			const info = uni.getMenuButtonBoundingClientRect()
			this.info.top = info.top
			this.info.height = info.height
		},
		methods: {
			goBack() {
				this.$emit('goBack')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nav {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 26rpx;
		padding-bottom: 12rpx;

		&-content {
			position: absolute;
			width: 100%;
			bottom: 12rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}

		.left-temp {
			position: absolute;
			left: 40rpx;
			top: 0;
			bottom: 0;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>
