<template>
    <view class="sp-index-bar">
        <view
            v-if="showLetter"
            class="letter"
            :style="{
                top: fixedLetterTop + 'px',
            }"
            >{{ showLetter }}</view
        >
        <view
            class="sticky-box"
            :style="{
                top: offsetTop - 1 + 'px',
                zIndex: stickyText && !suspend ? 2 : -1,
            }"
            >{{ stickyText }}</view
        >
        <slot></slot>
        <!-- S 城市索引 -->
        <view v-if="indexList">
            <view class="indexes-list">
                <view class="indexes-scoll">
                    <text
                        v-for="(item, index) in indexListSet"
                        :key="index"
                        class="index-item"
                        :class="item === stickyText ? 'active' : ''"
                        @click="indexHandle(index)"
                        @touchmove.stop.prevent="moveHandle($event, index)"
                        @touchstart="touchstartHandle($event)"
                        @touchend="touchendHandle"
                        @touchcancel="touchcancelHandle"
                        >{{ item }}</text
                    >
                </view>
            </view>
            <view v-if="tipsText" class="tips-content">
                <text class="tips-text">{{ tipsText }}</text>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    name: "indexBar",
    props: {
        offsetTop: {
            type: Number,
            default: 0,
        },
        scrollTop: {
            type: Number,
            default: 0,
        },
        indexList: {
            type: Array,
            default: () => {
                return [];
            },
        },
    },
    data() {
        return {
            stickyText: "", // 吸顶文字
            suspend: false, // 控制是否吸顶
            showLetter: "", // 控制下方索引显示
            clientY: 0, // 触摸索引时Y轴偏移量
            tipsText: "", // 提示索引
            letterList: [],
            fixedTop: 0,
            indexBarTop: 0,
        };
    },
    computed: {
        fixedLetterTop() {
            return this.fixedTop;
        },
        offsetTopUpx() {
            return uni.upx2px(this.offsetTop);
        },
		indexListSet() {
			return Array.from(new Set(this.indexList))
		}
    },
    watch: {
        scrollTop: {
            handler(top) {
                let curentFixedTop, curentFixedHeight, nextFixedTop;
                for (let i = 0; i < this.letterList.length; i++) {
                    try {
                        curentFixedTop =
                            this.letterList[i].top - this.offsetTop; // 当前吸顶项城市索引距离顶部的高度
                        curentFixedHeight = this.letterList[i].height; // 当前吸顶项城市索引的高度
                        nextFixedTop =
                            this.letterList[i + 1].top - this.offsetTop; // 当前吸顶项城市索引的下一项距离顶部的高度
                        if (
                            top >= nextFixedTop - curentFixedHeight &&
                            top < this.letterList[i + 2].top - curentFixedHeight
                        ) {
                            this.showLetter = this.letterList[i].name; // 显示隐藏的索引
                            this.fixedTop =
                                this.letterList[i + 1].top -
                                this.indexBarTop -
                                curentFixedHeight;
                            this.suspend = true; // 取消吸顶
                        }
                        if (top < nextFixedTop - curentFixedHeight) {
                            this.showLetter = null; // 隐藏索引
                            this.suspend = false; // 显示吸顶
                        }
                        if (top >= curentFixedTop && top < nextFixedTop) {
                            this.stickyText = this.letterList[i].name;
                            this.curentFixed = i;
                            return;
                        }
                        this.stickyText = "";
                        this.curentFixed = null;
                    } catch (error) {}
                }
            },
        },
    },
    mounted() {
        uni.$on("getLetterTop", (data) => {
            this.letterList.push(data);
        });
        uni.createSelectorQuery()
            .in(this)
            .select(".sp-index-bar")
            .boundingClientRect((result) => {
                this.indexBarTop = result.top;
            })
            .exec();
    },
    methods: {
        // 索引点击
        indexHandle(index) {
            const top = this.letterList[index].top - this.offsetTop;
            uni.pageScrollTo({
                scrollTop: top + 1, //距离页面顶部的距离
                duration: 0,
            });
        },
        // 手指触摸后移动
        moveHandle(e, index) {
            let indexHeight;
            // 获取头部高度
            uni.createSelectorQuery()
                .in(this)
                .select(".index-item")
                .boundingClientRect((data) => {
                    if (data) {
                        try {
                            indexHeight = data.height;
                            const curentclientY = e.touches[0].clientY;
                            const deviation = curentclientY - this.clientY;
                            const moveNum = Math.floor(deviation / indexHeight);
                            let curentIndex = index + moveNum;
                            if (moveNum < 0) {
                                curentIndex += 1;
                            }
                            const top =
                                this.letterList[curentIndex].top -
                                this.offsetTop;
                            this.tipsText = this.letterList[curentIndex].name;
                            uni.pageScrollTo({
                                scrollTop: top + 1, //距离页面顶部的距离
                                duration: 0,
                            });
                        } catch (error) {}
                    }
                })
                .exec();
            return;
        },
        // 手指触摸动作开始
        touchstartHandle(e) {
            this.clientY = e.touches[0].clientY;
        },
        // 手指触摸动作结束，如松开按钮
        touchendHandle() {
            this.tipsText = "";
            let timer = setTimeout(() => {
                if (this.tipsText) {
                    this.tipsText = "";
                }
                clearTimeout(timer);
            }, 200);
        },
        // 手指触摸被打断，如来电提醒，弹窗
        touchcancelHandle() {
            this.tipsText = "";
        },
    },
};
</script>

<style lang="scss" scoped>
.sp-index-bar {
    display: flex;
    flex-direction: column;
    position: relative;
    .sticky-box {
        position: fixed;
        left: 0;
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
        position: absolute;
        left: 0;
        z-index: 3;
    }
}

.indexes-list {
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 99;
    max-height: 80vh;
    overflow-y: auto;
    overflow-x: hidden;
    .indexes-scoll {
        display: flex;
        flex-direction: column;
        .index-item {
            font-size: 20rpx;
            font-family: PingFang SC;
            font-weight: bold;
            color: #222222;
            padding: 15rpx 22rpx;
            box-sizing: border-box;
            text-align: center;
        }
        .active {
            color: #4974f5;
        }
    }
}
.tips-content {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .tips-text {
        padding: 30rpx 40rpx;
        box-sizing: border-box;
        background: #000000;
        box-shadow: 0rpx 8rpx 20rpx 0rpx rgba(0, 0, 0, 0.3);
        opacity: 0.9;
        border-radius: 8rpx;
        font-size: 32rpx;
        font-family: PingFang SC;
        font-weight: bold;
        color: #ffffff;
    }
}
</style>
