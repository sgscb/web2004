<template>
  <div class="tabbar">
    <van-tabbar
      v-model="active"
      route
      active-color="#10BBB8"
      inactive-color="#878787"
    >
      <van-tabbar-item
        v-for="(item, i) of tabbarData"
        :key="i"
        :to="item.url"
        :placeholder="true"
      >
        <span>{{ item.desc }}</span>
        <template #icon="props">
          <img
            :class="
              i == (tabbarData.length - 1) / 2
                ? 'tabbar-img-active'
                : 'tabbar-img'
            "
            :src="props.active ? item.activeImg : item.inactiveImg"
            alt=""
          />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem, Icon } from 'vant'
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Icon.name]: Icon,
  },
  data() {
    return {
      active: 0,
      tabbarData: [
        {
          activeImg:
            'https://dgg-xiaodingyun.oss-cn-beijing.aliyuncs.com/xdy-xcx/portal/tabbar/tabbar_icon_home_hover.png?x-oss-process=image/resize,m_fill,w_50,h_50,limit_0',
          inactiveImg:
            'https://dgg-xiaodingyun.oss-cn-beijing.aliyuncs.com/xdy-xcx/portal/tabbar/tabbar_icon_home.png?x-oss-process=image/resize,m_fill,w_50,h_50,limit_0',
          desc: '首页',
          url: '/',
        },
        {
          activeImg:
            'https://dgg-xiaodingyun.oss-cn-beijing.aliyuncs.com/xdy-xcx/portal/tabbar/tabbar_icon_class_hover.png?x-oss-process=image/resize,m_fill,w_50,h_50,limit_0',
          inactiveImg:
            'https://dgg-xiaodingyun.oss-cn-beijing.aliyuncs.com/xdy-xcx/portal/tabbar/tabbar_icon_class.png?x-oss-process=image/resize,m_fill,w_50,h_50,limit_0',
          desc: '分类',
          url: '/type',
        },
        {
          activeImg: 'https://img10.dgg.cn/pt01wap/tabbar_tel_icon.png',
          inactiveImg: 'https://img10.dgg.cn/pt01wap/tabbar_tel_icon.png',
          desc: '',
          url: '',
        },
        {
          activeImg:
            'https://dgg-xiaodingyun.oss-cn-beijing.aliyuncs.com/xdy-xcx/portal/tabbar/tabbar_icon_car_hover.png?x-oss-process=image/resize,m_fill,w_50,h_50,limit_0',
          inactiveImg:
            'https://dgg-xiaodingyun.oss-cn-beijing.aliyuncs.com/xdy-xcx/portal/tabbar/tabbar_icon_car.png?x-oss-process=image/resize,m_fill,w_50,h_50,limit_0',
          desc: '购物车',
          url: '/购物车',
        },
        {
          activeImg:
            'https://dgg-xiaodingyun.oss-cn-beijing.aliyuncs.com/xdy-xcx/portal/tabbar/tabbar_icon_my_hover.png?x-oss-process=image/resize,m_fill,w_50,h_50,limit_0',
          inactiveImg:
            'https://dgg-xiaodingyun.oss-cn-beijing.aliyuncs.com/xdy-xcx/portal/tabbar/tabbar_icon_my.png?x-oss-process=image/resize,m_fill,w_50,h_50,limit_0',
          desc: '我的',
          url: 'me',
        },
      ],
    }
  },
}
</script>
<style lang="less" scoped>
.tabbar {
  width: 375px;
}
/deep/ .van-tabbar--fixed {
  width: 375px !important;
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
}
.tabbar-img {
  width: 25px;
  height: 25px;
}
.tabbar-img-active {
  width: 35px;
  height: 35px;
}
</style>
