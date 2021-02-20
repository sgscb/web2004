<template>
  <div class="type">
    <!-- 头部 -->
    <div class="head">
      <span class="search-box">
        分类
        <img
          class="search-img"
          src="https://dgg-xiaodingyun.oss-cn-beijing.aliyuncs.com/xdy-xcx/portal/home/search_icon.png?x-oss-process=image/resize,m_fill,w_28,h_28,limit_0"
          alt=""
        />
      </span>
    </div>
    <!-- 内容 -->
    <div class="content">
      <div class="left-content">
        <van-sidebar v-model="active">
          <van-sidebar-item
            v-for="(item, index) of typeData"
            :key="index"
            :title="item.title"
            @click="changeNum"
          />
        </van-sidebar>
      </div>
      <div class="right-content">
        <div class="right-img-box">
          <img
            class="right-img"
            src="https://img10.dgg.cn/upload/mtGIL0nbsvpYUfjzY1RjQipIKpggts8UqqAdzFjP.png?x-oss-process=image/resize,m_fill,w_500,h_160,limit_0"
            alt=""
          />
        </div>
        <div class="right-scroll-box">
          <side-content v-model="active" :number="clickNum">
            <sidecontent-item v-for="(item, index) of typeData" :key="index">
              <div class="scroll-card">
                <div class="scroll-title-box">
                  <div class="scroll-icon">
                    <span class="icon-top"></span>
                    <span class="icon-bottom"></span>
                  </div>
                  <span class="scroll-title">{{ item.title }}</span>
                </div>
                <ul class="scroll-content">
                  <li
                    v-for="(value, i) of item.typeItem"
                    :key="i"
                    class="scroll-content-item"
                  >
                    <nuxt-link to="/">{{ value }}</nuxt-link>
                  </li>
                </ul>
              </div>
            </sidecontent-item>
          </side-content>
        </div>
      </div>
    </div>
    <tab-bar />
  </div>
</template>
<script>
import { Sidebar, SidebarItem } from 'vant'
import SideContent from '~/components/type/SideContent.vue'
import SidecontentItem from '~/components/type/SidecontentItem.vue'
import TabBar from '~/components/Index/Tabbar.vue'
export default {
  name: 'Type',
  components: {
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem,
    SideContent,
    SidecontentItem,
    TabBar,
  },
  data() {
    return {
      active: 0,
      clickNum: 0,
      typeData: [
        {
          title: '工商服务',
          typeItem: [
            '注册服务',
            '银行服务',
            '印章服务',
            '变更服务',
            '注销业务',
            '其他服务',
          ],
        },
        {
          title: '会计/财税',
          typeItem: [
            '代理记账',
            '税务服务',
            '咨询服务',
            '代理服务',
            '会计服务',
          ],
        },
        {
          title: '知产服务',
          typeItem: [
            '商标服务',
            '商标案件',
            '专利服务',
            '版权服务',
            '资质项目',
            '资金项目',
            '项目其他',
            '专利其他',
            '专利基础',
            '商标基础',
            '专利维权',
          ],
        },
        {
          title: '营销/网站',
          typeItem: [
            '网站建设服务',
            '网站增项服务',
            '营销服务',
            '资质业务',
            '其他服务',
            '品牌建设服务',
          ],
        },
        {
          title: '人事外包',
          typeItem: [
            '企业社保公积金服务',
            '个人社保公积金服务',
            '人事代理',
            '社保公积金代理',
          ],
        },
        {
          title: '认证/证书',
          typeItem: [
            '许可证服务',
            '认证服务',
            '互联网证书',
            '业务经营证书',
            '其他证书',
          ],
        },
        {
          title: '交易服务',
          typeItem: ['公司交易', '网店交易', '商标交易', '专利交易'],
        },
      ],
    }
  },
  methods: {
    changeNum(i) {
      this.clickNum = i
    },
  },
}
</script>
<style lang="less" scoped>
.type {
  width: 375px;
  margin: 0 auto;
  font-family: PingFang SC;
  height: 100vh;
}
.head {
  display: flex;
  align-items: center;
  width: 100%;
  height: 0.88rem;
  border-bottom: 0.01rem solid #eee;
  background: #fff;
  padding: 0 0.32rem;
  .search-box {
    font-size: 0.32rem;
    text-align: center;
    font-weight: 700;
    width: 100%;
    margin-left: 0.34rem;
    .search-img {
      width: 0.38rem;
      height: 0.38rem;
      margin-top: 0.02rem;
      float: right;
    }
  }
}
.content {
  display: flex;
  .left-content {
    width: 100px;
    height: calc(100vh - 94px);
    overflow: hidden;
  }
  .right-content {
    flex: 1;
    height: calc(100vh - 94px);
    .right-img-box {
      height: 87.5px;
      padding: 6px 12px 0px;
      overflow: hidden;
      .right-img {
        width: 249px;
        border: 1px solid transparent;
      }
    }
    .right-scroll-box {
      width: 100%;
      height: calc(100% - 87.5px);
      .scroll-card {
        width: 100%;
        padding: 17.5px 0.24rem 14.5px;
        .scroll-title-box {
          display: flex;
          align-items: center;
          height: 20px;
          width: 100%;
          .scroll-icon {
            display: flex;
            flex-direction: column;
            .icon-top {
              width: 0.04rem;
              height: 0.14rem;
              background: #fb6705;
            }
            .icon-bottom {
              width: 0.04rem;
              height: 0.14rem;
              background: #fdd1b9;
            }
          }
          .scroll-title {
            padding-left: 0.2rem;
            font-size: 0.28rem;
            color: #333;
            font-weight: 700;
            line-height: 1;
          }
        }

        .scroll-content {
          display: flex;
          flex-wrap: wrap;
          width: calc(100% + 0.16rem);
          list-style: none;
          margin-left: -0.16rem;
          &-item > a {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 0.64rem;
            font-size: 0.26rem;
            color: #666;
            margin-left: 0.16rem;
            margin-top: 0.24rem;
            padding: 0 0.24rem;
            background: #f5f7fa;
            border-radius: 0.32rem;
          }
        }
      }
    }
  }
}
/deep/ .van-sidebar {
  width: 100px;
  height: 100%;
  background-color: #f0f2f5;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
/deep/ .van-sidebar-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 47.5px;
  font-size: 0.26rem;
  font-weight: 500;
  color: #565656;
  background-color: #f0f2f5;
}
/deep/ .van-sidebar-item--select {
  font-size: 0.3rem;
  font-weight: 700;
  color: #252525;
  background-color: #fff;
  &::before {
    width: 3px;
    height: 20px;
    background-color: #f60;
  }
}
</style>
