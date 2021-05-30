<template>
    <view
        class="conmon-option-item"
        :class="[line ? 'line' : '', active ? 'active' : '']"
    >
        <text class="conmon-option-item-title">{{ title }}</text>
        <slot>
            <view
                class="conmon-option-item-right"
                :class="arrow ? 'arrow' : ''"
            >
                <text class="conmon-option-item-text">{{ text }}</text>
            </view>
        </slot>
    </view>
</template>

<script>
export default {
    name: "tuiListCell",
    props: {
        title: {
            type: String,
            default: "我是标题",
        },
        text: {
            type: String,
            default: "我是文本",
        },
        arrow: {
            type: Boolean,
            default: true, //是否有箭头
        },
        line: {
            type: Boolean,
            default: true, //是否有线条
        },
        active: {
            type: Boolean,
            default: true, //是否有点击样式
        },
    },
};
</script>

<style lang="scss" scoped>
.line {
    &:before {
        content: " ";
        width: 100%;
        position: absolute;
        left: 40rpx;
        top: 0;
        height: 1rpx;
        background: #f4f4f4;
    }
}
.active {
    &:active {
        background-color: #f4f4f4;
    }
}
.conmon-option-item {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 110rpx;
    background-color: #ffffff;
    padding: 0 40rpx;
    box-sizing: border-box;
    &-title {
        font-size: 32rpx;
        font-family: PingFang SC;
        font-weight: 400;
        color: #1a1a1a;
    }
    &-right {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .arrow:after {
        content: " ";
        display: inline-block;
        height: 11px;
        width: 11px;
        border-width: 2px 2px 0 0;
        border-color: #cccccc;
        border-style: solid;
        -webkit-transform: matrix(0.5, 0.5, -0.5, 0.5, 0, 0);
        transform: matrix(0.5, 0.5, -0.5, 0.5, 0, 0);
        margin-left: 26rpx;
    }
    &-text {
        font-size: 28rpx;
        font-family: PingFang SC;
        font-weight: 400;
        color: #999999;
        line-height: 28rpx;
    }
}
</style>
