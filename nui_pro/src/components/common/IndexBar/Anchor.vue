<template>
    <view class="letter-item" :class="'letter-' + letter">
        <text class="letter">{{ letter }}</text>
    </view>
</template>

<script>
export default {
    name: "Anchor",
    props: {
        letter: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            letterTop: 0,
        };
    },
    mounted() {
        this.getDescBox();
    },
    methods: {
        // 获取letter距离顶部的距离
        getDescBox() {
            uni.createSelectorQuery()
                .in(this)
                .select(".letter-" + this.letter)
                .boundingClientRect((result) => {
                    uni.$emit("getLetterTop", {
                        name: this.letter,
                        top: result.top,
                        height: result.height,
                    });
                })
                .exec();
        },
    },
};
</script>

<style lang="scss" scoped>
.letter-item {
    width: 100%;
    height: 68rpx;
    background: #f8f8f8;
    .letter {
        display: block;
        width: 100%;
        height: 68rpx;
        line-height: 68rpx;
        background: #f8f8f8;
        font-size: 26rpx;
        font-family: PingFang SC;
        font-weight: 400;
        color: #999999;
        padding-left: 40rpx;
        box-sizing: border-box;
    }
}
</style>
