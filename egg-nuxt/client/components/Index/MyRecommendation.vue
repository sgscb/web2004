<template>
  <div class="recommendation">
    <p class="rec-title">热门推荐</p>
    <div class="recommend-box">
      <nav-card>
        <card-item
          v-for="(item, i) of hotData"
          :key="i"
          :data="item"
          :number="5"
          :to="item.url"
          fontsize=".24rem"
          color="#666"
          size="22px"
        ></card-item>
      </nav-card>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import NavCard from '~/components/common/NavCard.vue'
import CardItem from '~/components/common/CardItem.vue'
export default {
  components: {
    NavCard,
    CardItem,
  },
  data() {
    return {
      /** 热门推荐数据模拟 */
      hotData: [
        {
          img:
            'https://img10.dgg.cn/upload/eCbl5CcvmtUN5kEw7svOIIl0dlqGc821P0YOfRRP.png?x-oss-process=image/resize,m_fill,w_44,h_44,limit_0',
          text: '企业贷款',
          url: '/',
        },
        {
          img:
            'https://img10.dgg.cn/upload/DJTgEfZMTCtnKA33mIfAcT9d5yy0yufrbhKFOCh3.png?x-oss-process=image/resize,m_fill,w_44,h_44,limit_0',
          text: '税务变更',
          url: '/',
        },
        {
          img:
            'https://img10.dgg.cn/upload/rqJEQqwrqqhEAQC1wpyYJi8p0k0FjDUNanuyRQ52.png?x-oss-process=image/resize,m_fill,w_44,h_44,limit_0',
          text: '公司注销',
          url: '/',
        },
        {
          img:
            'https://img10.dgg.cn/upload/SiT6PLkLaoVXtK643jPTLwXthN4iZDWpqnB13DJK.png?x-oss-process=image/resize,m_fill,w_44,h_44,limit_0',
          text: '商标注册',
          url: '/',
        },
        {
          img:
            'https://img10.dgg.cn/upload/3UsVn6maEjGJTetnmi3oo4rhpYEeiG2y567swpjI.png?x-oss-process=image/resize,m_fill,w_44,h_44,limit_0',
          text: '法律咨询',
          url: '/',
        },
        {
          img:
            'https://img10.dgg.cn/upload/Y1g5FPURbxMoaXiEdNKtPqBTtDrhXmU5zLZElGGI.png?x-oss-process=image/resize,m_fill,w_44,h_44,limit_0',
          text: '税务报到',
          url: '/',
        },
        {
          img:
            'https://img10.dgg.cn/upload/1OgzIVI2bGWwcHCI9wajM0xMk6Slcxhah3LRkh6X.png?x-oss-process=image/resize,m_fill,w_44,h_44,limit_0',
          text: '旧账整理',
          url: '/',
        },
        {
          img:
            'https://img10.dgg.cn/upload/xHSGRv90ow60mCllMF6txT0rGK3ILGyAOQhEahXw.png?x-oss-process=image/resize,m_fill,w_44,h_44,limit_0',
          text: '银行变更',
          url: '/',
        },
        {
          img:
            'https://img10.dgg.cn/upload/09qdRf9smFBwHbHYQvpOomXHOwj4fjGCrO8EM01G.png?x-oss-process=image/resize,m_fill,w_44,h_44,limit_0',
          text: '社保开户',
          url: '/',
        },
        {
          img:
            'https://img10.dgg.cn/upload/tTurbxuRQYSBofL1lYlToqqrjj2WgKXykzbUjEbB.png?x-oss-process=image/resize,m_fill,w_44,h_44,limit_0',
          text: '工商年检',
          url: '/',
        },
        {
          img:
            'https://img10.dgg.cn/upload/kNCGuAwZKAaJgsKnMFA5PXyHOH8hZq3kPV4dTdGm.png?x-oss-process=image/resize,m_fill,w_44,h_44,limit_0',
          text: '食品许可证',
          url: '/',
        },
        {
          img:
            'https://img10.dgg.cn/upload/YoCIRAp1C4f9XfGcQJGZeHglM00o5UZOgvTEyStQ.png?x-oss-process=image/resize,m_fill,w_44,h_44,limit_0',
          text: '软著登记',
          url: '/',
        },
        {
          img:
            'https://img10.dgg.cn/upload/9jmYXUUdNBmNySXJ7qQC1SreiFGdWrl71aCyTRlg.png?x-oss-process=image/resize,m_fill,w_44,h_44,limit_0',
          text: '发明专利',
          url: '/',
        },
        {
          img:
            'https://img10.dgg.cn/upload/OzVJQQvDDXSX0iSB0HAbZH34IWe9HdLLoiqb8os2.png?x-oss-process=image/resize,m_fill,w_44,h_44,limit_0',
          text: '驳回复审',
          url: '/',
        },
        {
          img:
            'https://img10.dgg.cn/upload/lMsMrIsE78CfLYq697sirsdhdsw9ymDGNWR7ymsc.png?x-oss-process=image/resize,m_fill,w_44,h_44,limit_0',
          text: '医疗许可证',
          url: '/',
        },
      ],
    }
  },
}
</script>
<style lang="less" scoped>
.recommendation {
  width: 100%;
  background-color: #fff;
  border-radius: 0.24rem;
  padding: 0.48rem 0.24rem 0;
  margin-bottom: 0.2rem;
  box-sizing: border-box;
  .rec-title {
    height: 21px;
    font-size: 0.36rem;
    font-family: PingFang-SC-Bold, PingFang-SC;
    font-weight: 700;
    color: #333;
    line-height: 21px;
  }
  .recommend-box {
    width: 100%;
    height: 204px;
    margin-top: 0.56rem;
  }
}
</style>
