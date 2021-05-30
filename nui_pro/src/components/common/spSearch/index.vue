<template>
    <view class="search">
        <view class="search-content" :class="sticky ? 'sticky-serch' : ''">
            <slot name="left"></slot>
            <view class="input-content">
                <slot name="center"></slot>
                <SpIcon
                    class="search-icon"
                    name="sear_ic_sear"
                    size="32rpx"
                    color="#999999"
                    :style="{ marginLeft: iconLeft + 'rpx' }"
                />
                <input
                    v-if="!disabled"
                    class="sp-input"
                    ref="inputRef"
                    :type="type"
                    :value="value"
                    :confirm-type="confirmType"
                    :maxlength="maxlength"
                    :placeholder="placeholder"
                    placeholder-class="placeholder"
                    @input="searchInputHandle"
                    @focus="searchFocusHandle"
                    @blur="searchBlurHandle"
                    @confirm="searchKeydownHandle"
                />
                <view
                    v-if="disabled"
                    class="imitate-input"
                    @click="clickInputHandle"
                >
                    <text class=".mn-placeholder">{{ placeholder }}</text>
                </view>
            </view>
            <slot name="right"></slot>
        </view>
    </view>
</template>

<script>
export default {
    name: "Search",
    model: {
        props: "value",
        event: "input",
    },
    props: {
        // 输入框的如如长度限制
        maxlength: {
            type: Number,
            default: 100,
        },
        // 搜索图标距离左边的位置
        iconLeft: {
            type: Number,
            default: 32,
        },
        placeholder: {
            type: String,
            default: "请输入搜索内容",
        },
        // 输入框绑定的值
        value: {
            type: String,
            default: "",
        },
        // 输入框类型
        type: {
            type: String,
            default: "text",
        },
        // 是否禁用输入
        disabled: {
            type: Boolean,
            default: false,
        },
        // 软键盘右下角按钮设置 （send:发送;search:搜索;next:'下一个';go:'前往';done:'完成'）
        confirmType: {
            type: String,
            default: "search",
        },
        // 是否吸顶
        sticky: {
            type: Boolean,
            default: true,
        },
    },
    methods: {
        // input 事件
        searchInputHandle(e) {
            this.$emit("input", e.target.value);
            this.$emit("searchInputHandle", e);
        },
        // 失焦 事件
        searchBlurHandle(e) {
            this.$emit("searchBlurHandle", e);
        },
        // 触焦 事件
        searchFocusHandle(e) {
            this.$emit("searchFocusHandle", e);
        },
        // 点击 事件
        clickInputHandle() {
            this.$emit("clickInputHandle");
        },
        // 回车 事件
        searchKeydownHandle(e) {
            this.$emit("searchKeydownHandle", e);
        },
    },
};
</script>

<style lang="scss" scoped>
.sticky-serch {
    /* #ifdef H5 */
    position: sticky;
    top: 44px;
    /* #endif */
    /* #ifndef H5 */
    position: fixed;
    top: 0;
    /* #endif */
    z-index: 10;
}
.search {
    width: 100%;
    height: 128rpx;
}
.search-content {
    width: 100%;
    padding: 16rpx 40rpx;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    background-color: #ffffff;
    .input-content {
        flex: 1;
        display: flex;
        align-items: center;
        height: 96rpx;
        background: #ffffff;
        border: 1rpx solid #cdcdcd;
        box-shadow: 0px 2rpx 12rpx 0px rgba(0, 0, 0, 0.06);
        border-radius: 8rpx;
        box-sizing: border-box;
        overflow: hidden;
        .search-icon {
            margin-right: 13rpx;
        }
        .sp-input {
            flex: 1;
            height: 100%;
            border: none;
            outline: none;
        }
        .imitate-input {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: center;
            .mn-placeholder {
                font-size: 30rpx;
                font-family: PingFang SC;
                font-weight: bold;
                color: #999999;
            }
        }
        ::v-deep .placeholder {
            font-size: 30rpx;
            font-family: PingFang SC;
            font-weight: bold;
            color: #999999;
        }
    }
}
</style>
