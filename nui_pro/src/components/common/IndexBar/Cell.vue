<template>
    <view class="city-name">{{ title }}</view>
</template>

<script>
export default {
    name: "Cell",
    props: {
        title: {
            type: String,
            default: "",
        },
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
.city-name {
    position: relative;
    width: 100%;
    height: 120rpx;
    line-height: 120rpx;
    background: #ffffff;
    padding-left: 40rpx;
    box-sizing: border-box;
    font-size: 32rpx;
    font-family: PingFang SC;
    font-weight: 400;
    color: #222222;
    overflow: hidden;
    &:active {
        background-color: #f4f4f4;
    }
    &:not(:last-child):after {
        content: "";
        width: 100%;
        height: 1rpx;
        position: absolute;
        left: 40rpx;
        bottom: 0;
        background: #f4f4f4;
    }
}
</style>
