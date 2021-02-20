<template>
  <div class="demo2">
    <!-- 头部区域 -->
    <my-head ref="headTop"></my-head>
    <!-- 头部导航区域 -->
    <div class="portal-nav-kb">
      <div class="card-box">
        <nav-card>
          <card-item
            v-for="(item, i) of navCardData"
            :key="i"
            :number="5"
            :data="item"
            :to="item.url"
            fontsize="0.24rem"
            color="#333"
            size="24px"
          ></card-item>
        </nav-card>
      </div>
      <!-- 滚动通知 -->
      <div class="notice-roll-box">
        <img
          class="notice-img"
          src="https://dgg-xiaodingyun.oss-cn-beijing.aliyuncs.com/xdy-xcx/portal/home/kuaibao_img.png?x-oss-process=image/resize,m_fill,w_134,h_28,limit_0"
          alt=""
        />
        <van-swipe
          vertical
          class="notice-swipe"
          :touchable="false"
          :show-indicators="false"
          :autoplay="3000"
        >
          <van-swipe-item v-for="(item, i) of noticeData" :key="i">
            <p class="notice-text">
              {{ item.user }}<span>{{ item.phone }}</span
              >{{ item.action }}<span>{{ item.certificate }}</span>
            </p>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <!-- 内容区域 -->
    <!-- 1.专家定制方案 -->
    <my-design />
    <!-- 2. 优惠活动 -->
    <my-preferential />
    <!-- 3. 热门推荐 -->
    <my-recommendation />
    <!-- 4. 企业学堂 -->
    <my-school />
    <!-- 5. 推荐服务 -->
    <my-service />
    <!-- 占位 -->
    <div class="placeholder"></div>
    <!-- 底部选项卡 -->
    <tab-bar />
  </div>
</template>
<script>
import { NoticeBar, Swipe, SwipeItem } from 'vant'
import MyHead from '~/components/Index/MyHead.vue'
import MyDesign from '~/components/Index/MyDesign.vue'
import MyPreferential from '~/components/Index/MyPreferential.vue'
import MyRecommendation from '~/components/Index/MyRecommendation.vue'
import MySchool from '~/components/Index/MySchool.vue'
import MyService from '~/components/Index/MyService.vue'
import TabBar from '~/components/Index/Tabbar.vue'
import NavCard from '~/components/common/NavCard.vue'
import CardItem from '~/components/common/CardItem.vue'
export default {
  name: 'Index',
  components: {
    MyHead,
    MyDesign,
    MyPreferential,
    MyRecommendation,
    MySchool,
    MyService,
    TabBar,
    NavCard,
    CardItem,
    [NoticeBar.name]: NoticeBar,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
  data() {
    return {
      /** 头部导航数据 */
      navCardData: [
        {
          img:
            'https://img10.dgg.cn/upload/z0BkzZWRuQ5qbgiRNhsK4TQHEUbD06uu4RScunhW.png?x-oss-process=image/resize,m_fill,w_48,h_48,limit_0',
          text: '工商平台',
          url: '/',
        },
        {
          img:
            'https://img10.dgg.cn/upload/ilWvACjmaBN5uvoq0BDxpHhrdPhjMGJzDohL0u8i.png?x-oss-process=image/resize,m_fill,w_48,h_48,limit_0',
          text: '会计财税',
          url: '/',
        },
        {
          img:
            'https://img10.dgg.cn/upload/L6w9lbFlr4n82AKu4wOFwB0o6McJ1zV1F8uK2Ttz.png?x-oss-process=image/resize,m_fill,w_48,h_48,limit_0',
          text: '商标专利',
          url: '/',
        },
        {
          img:
            'https://img10.dgg.cn/upload/A4jjh6C9nfqYRm7ZrpCMpaIf9Nz1e8KmkHfJHpzu.png?x-oss-process=image/resize,m_fill,w_48,h_48,limit_0',
          text: 'IT互联网',
          url: '/internet',
        },
        {
          img:
            'https://img10.dgg.cn/upload/rbj5fLfz9nfLEkPvqrdeV1kmlJ9cgZP43WtOiInU.png?x-oss-process=image/resize,m_fill,w_48,h_48,limit_0',
          text: '贷款平台',
          url: '/',
        },
        {
          img:
            'https://img10.dgg.cn/upload/YF2I8IaYmLJzrRyy6nQhccIzTRYhenbNQlFq9rOd.png?x-oss-process=image/resize,m_fill,w_48,h_48,limit_0',
          text: '法律平台',
          url: '/',
        },
        {
          img:
            'https://img10.dgg.cn/upload/yLCCmu1KX6RoV8CYydKweiGayp757xJlCY6jxNJJ.png?x-oss-process=image/resize,m_fill,w_48,h_48,limit_0',
          text: '交易平台',
          url: '/',
        },
        {
          img:
            'https://img10.dgg.cn/upload/DFDSF3pM2zwVCjZTcc0gtRAAY9nfNNXRBKcfwsmG.png?x-oss-process=image/resize,m_fill,w_48,h_48,limit_0',
          text: '资质认证',
          url: '/',
        },
        {
          img:
            'https://img10.dgg.cn/upload/kRfvLeI4O1vJzbpC8J4vfX3uaomm6vq4muOu5DAY.png?x-oss-process=image/resize,m_fill,w_48,h_48,limit_0',
          text: '大卓商学院',
          url: '/',
        },
        {
          img:
            'https://img10.dgg.cn/upload/ahb57Prn0SExgHME2rXCx0CTcCuvbWByoTw5Ml0C.png?x-oss-process=image/resize,m_fill,w_48,h_48,limit_0',
          text: '全部分类',
          url: '/',
        },
      ],
      /** 通知栏数据 */
      noticeData: [
        {
          user: '成都用户',
          phone: '186****2514',
          action: '刚交易了',
          certificate: '道路运输许可证',
        },
        {
          user: '北京用户',
          phone: '183****2500',
          action: '刚交易了',
          certificate: '进口出口许可证',
        },
        {
          user: '武汉用户',
          phone: '188****2666',
          action: '刚交易了',
          certificate: '卫生许可证',
        },
        {
          user: '南京用户',
          phone: '153****4956',
          action: '刚交易了',
          certificate: '发明专利申请项目许可证',
        },
        {
          user: '上海用户',
          phone: '133****1742',
          action: '刚交易了',
          certificate: '工商变更',
        },
        {
          user: '深圳用户',
          phone: '154****3214',
          action: '刚交易了',
          certificate: '有限公司注册',
        },
        {
          user: '石家庄用户',
          phone: '187****5684',
          action: '刚交易了',
          certificate: '公司核名',
        },
      ],
    }
  },
}
</script>
<style lang="less" scoped>
.placeholder {
  height: 50px;
}
.demo2 {
  background-color: #f5f7fa;
  width: 375px;
  margin: 0 auto;
}
.portal-nav-kb {
  width: 100%;
  padding: 1.66rem 0.24rem 0;
  box-sizing: border-box;
  background: url(https://dgg-xiaodingyun.oss-cn-beijing.aliyuncs.com/xdy-xcx/portal/home/nav_bg.png)
    no-repeat;
  background-size: 100% auto;
  background-position-y: bottom;
}
.card-box {
  width: 100%;
  height: 3.06rem;
  border-bottom: 1px solid #eee;
}
.notice-roll-box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 53px;
  .notice-img {
    width: 1.34rem;
    height: 0.28rem;
    margin-right: 0.24rem;
  }
  .notice-swipe {
    width: 100%;
    height: 0.36rem;
    line-height: 0.36rem;
    font-size: 0.26rem;
    color: #666;
    .notice-text {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      > span {
        font-weight: 600;
        color: #000;
      }
    }
  }
}
</style>
