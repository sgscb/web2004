<template>
    <view v-if="visible" class="sp-toast" @touchmove.stop.prevent="moveHandle">
        <view class="sp-toast-content">
            <SpIcon
                v-if="toastType"
                class="defualt-cion"
                :class="type === 'loading' ? 'transform' : ''"
                :name="toastType"
                :size="size"
                :color="color"
            />
            <text class="tips-text">{{ tipsText }}</text>
        </view>
    </view>
</template>

<script>
export default {
    name: "spToast",
    props: {
        isShow: {
            type: Boolean,
            default: false,
        },
        // toast类型
        type: {
            type: String,
            default: "",
        },
        // 自定义icon
        icon: {
            type: String,
            default: "",
        },
        // 图标大小
        size: {
            type: String,
            default: "40rpx",
        },
        // 图标颜色
        color: {
            type: String,
            default: "#FFFFFF",
        },
        // 提示文案
        tipsText: {
            type: String,
            default: "提示文案",
        },
        // toast多久后自动隐藏； 0 / false 不自动隐藏
        duration: {
            type: Number,
            default: 3000,
        },
    },
    data() {
        return {
            timer: null,
            visible: false,
        };
    },
    computed: {
        toastType() {
            if (this.icon) {
                return this.icon;
            }
            let iconName = "toast_ic_error";
            switch (this.type) {
                case "error": // 失败
                    iconName = "toast_ic_error";
                    break;
                case "success": // 成功
                    iconName = "toast_ic_comp";
                    break;
                case "warning": // 警告
                    iconName = "toast_ic_remind";
                    break;
                case "loading": // 加载
                    iconName = "toast_ic_load";
                    break;
                default:
                    iconName = false;
                    break;
            }
            return iconName;
        },
    },
    created() {
        this.visible = this.isShow;
    },
    methods: {
        moveHandle() {
            return;
        },
        hidToast() {
            this.timer = setTimeout(() => {
                this.visible = false;
                clearTimeout(this.timer);
            }, this.duration);
        },
        // 显示
        showToast() {
            this.visible = true;
            console.log("77", this.visible);
            if (this.duration && this.duration > 0) {
                this.hidToast();
            }
        },
        // 隐藏
        hideToast() {
            this.visible = false;
            console.log(this.visible);
        },
    },
};
</script>
<style lang="scss" scoped>
.sp-toast {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    .sp-toast-content {
        display: flex;
        align-items: center;
        max-width: 440rpx;
        background: #000000;
        box-shadow: 0rpx 8rpx 20rpx 0rpx rgba(0, 0, 0, 0.3);
        opacity: 0.9;
        border-radius: 8rpx;
        padding: 30rpx 40rpx;
        box-sizing: border-box;
        .defualt-cion {
            margin-right: 16rpx;
        }
        .tips-text {
            flex: 1;
            font-size: 32rpx;
            font-family: PingFang SC;
            font-weight: bold;
            color: #ffffff;
            line-height: 40rpx;
        }
        @keyframes rotation {
            from {
                -webkit-transform: rotate(0deg);
            }
            to {
                -webkit-transform: rotate(360deg);
            }
        }
        .transform {
            animation: rotation 1s linear infinite;
            -moz-animation: rotation 1s linear infinite;
            -webkit-animation: rotation 1s linear infinite;
            -o-animation: rotation 1s linear infinite;
        }
    }
}
</style>
