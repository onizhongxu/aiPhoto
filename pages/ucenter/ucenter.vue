<template>
  <view class="center">
    <view
      class="status_bar"
      style="
        height: 120rpx;
        width: 100%;
        position: fixed;
        background-color: #f8f8f8;
        z-index: 9999;
      "
    >
    </view>
    <view
      class="status_bar"
      style="
        height: 120rpx;
        width: 100%;
        background-color: #f8f8f8;

        z-index: 9999;
      "
    >
    </view>

    <!-- 登录组件 -->
    <uni-sign-in ref="signIn"></uni-sign-in>
    <view class="userInfo" @click.capture="toUserInfo">
      <cloud-image
        width="150rpx"
        height="150rpx"
        v-if="hasLogin && userInfo.avatar_file && userInfo.avatar_file.url"
        :src="userInfo.avatar_file.url"
      ></cloud-image>

      <view v-else class="defaultAvatarUrl">
        <uni-icons color="#ffffff" size="50" type="person-filled" />
      </view>

      <view class="logo-title">
        <text class="uer-name" v-if="hasLogin">{{
          userInfo.nickname || userInfo.username || userInfo.mobile
        }}</text>
        <text class="uer-name" v-else>{{ $t("mine.notLogged") }}</text>
      </view>
    </view>

    <view @click.stop="open(111)" class="view_vipBox">
      <!-- 会员组件 -->
      <view class="vipBox_w">
        <view class="vip_w">
          <view class="vip_w_one">
            <view class="left"
              ><text
                style="
                  font-family: YouSheBiaoTiHei;
                  color: white;
                  font-size: 18px;
                "
                >未开通会员</text
              ></view
            >
            <view class="right"
              ><span style="font-family: YouSheBiaoTiHei"
                >加入会员解锁所有权益 <text> &gt;</text></span
              ></view
            >
          </view>
        </view>

        <view class="vip_t_one">
          <view class="vip_t_one_box">
            <view class="left">
              <image src="/static/img/capacity.png" mode="scaleToFill" />
              <view
                style="
                  font-size: 14px;
                  font-family: YouSheBiaoTiHei;
                  color: white;
                "
                >更大容量</view
              >
            </view>
            <view class="right">
              <image src="/static/img/buy.png" mode="scaleToFill" />
              <view
                style="
                  font-size: 14px;
                  font-family: YouSheBiaoTiHei;
                  color: white;
                "
                >更多下载</view
              >
            </view>
          </view>

          <view @click="goto('buy')" class="vip_t_two_box">
            <view class="btn">升级会员</view>
          </view>
        </view>
      </view>

      <!--  -->
      <!--  -->
      <!-- 下方列表 -->

      <view class="list_box">
        <view @click="goto('creation')" class="contnet">
          <view class="contnet_box">
            <view class="left"><span style="">我的创作</span></view>
            <view class="right"
              ><uni-icons
                :size="16"
                class="uni-icon-wrapper"
                color="#bbb"
                type="arrowright"
            /></view>
          </view>
        </view>

        <view  @click="goto('orderList') " class="contnet">
          <view class="contnet_box">
            <view class="left"><span style="">我的订单</span></view>
            <view class="right"
              ><uni-icons
                :size="16"
                class="uni-icon-wrapper"
                color="#bbb"
                type="arrowright"
            /></view>
          </view>
        </view>

        <view class="contnet">
          <view class="contnet_box">
            <view class="left"><span style="">我的邀请码</span></view>
            <view class="right"
              ><uni-icons
                :size="16"
                class="uni-icon-wrapper"
                color="#bbb"
                type="arrowright"
            /></view>
          </view>
        </view>

        <view @click="issue()" class="contnet">
          <view class="contnet_box">
            <view class="left"><span style="">常见问题</span></view>
            <view class="right"
              ><uni-icons
                :size="16"
                class="uni-icon-wrapper"
                color="#bbb"
                :type="bottomStatus ? 'bottom' : 'arrowright'"
            /></view>
          </view>
        </view>

        <view v-show="bottomStatus" style="height: auto" class="contnet">
          <view class="contnet_box">
            <view class="bigBox">
              <view class="top"
                ><image src="/static/img/wen.png" mode="scaleToFill" /><text
                  >生成的图片归谁所有?</text
                ></view
              >
              <view class="bottomBox">
                <text>
                  生成的图片版权归生成此图片的平台用户所有。本平台
                  (造梦日记)中所有素材图片作品仅供网友学习交流、分享使用，未经上传用户书面授权，请勿作他用。由于平台不拥有此类素材图片的版权，若需商业使用，需获得版权拥有者授权，并遵循国家相关法律、法规之规定。如因非法使用他人生成图片引起的纠纷，一切后果由使用者自负。</text
                >
              </view>
            </view>
          </view>
        </view>

        <view v-show="bottomStatus" style="height: auto" class="contnet">
          <view class="contnet_box">
            <view class="bigBox">
              <view class="top"
                ><image src="/static/img/wen.png" mode="scaleToFill" /><text
                  >生成的图片归谁所有?</text
                ></view
              >
              <view class="bottomBox">
                <text>
                  生成的图片版权归生成此图片的平台用户所有。本平台
                  (造梦日记)中所有素材图片作品仅供网友学习交流、分享使用，未经上传用户书面授权，请勿作他用。由于平台不拥有此类素材图片的版权，若需商业使用，需获得版权拥有者授权，并遵循国家相关法律、法规之规定。如因非法使用他人生成图片引起的纠纷，一切后果由使用者自负。</text
                >
              </view>
            </view>
          </view>
        </view>
      </view>

      <uni-list
        class="center-list"
        v-for="(sublist, index) in ucenterList"
        :key="index"
      >
        <uni-list-item
          v-for="(item, i) in sublist"
          :title="item.title"
          link
          :rightText="item.rightText"
          :key="i"
          :clickable="true"
          :to="item.to"
          @click.stop="ucenterListClick(item)"
          :show-extra-icon="true"
          :extraIcon="{ type: item.icon, color: '#999' }"
        >
          <template v-slot:footer>
            <view v-if="item.showBadge" class="item-footer">
              <text class="item-footer-text">{{ item.rightText }}11</text>
              <view class="item-footer-badge"></view>
            </view>
          </template>
        </uni-list-item>
      </uni-list>
    </view>
  </view>
</template>

<script>
import checkUpdate from "@/uni_modules/uni-upgrade-center-app/utils/check-update";
import callCheckVersion from "@/uni_modules/uni-upgrade-center-app/utils/call-check-version";
// #ifdef APP
import UniShare from "@/uni_modules/uni-share/js_sdk/uni-share.js";
const uniShare = new UniShare();
// #endif
const db = uniCloud.database();
import { store, mutations } from "@/uni_modules/uni-id-pages/common/store.js";
export default {
  // #ifdef APP
  onBackPress({ from }) {
    if (from == "backbutton") {
      this.$nextTick(function () {
        uniShare.hide();
      });
      return uniShare.isShow;
    }
  },
  // #endif
  data() {
    return {
      bottomStatus: false,
      gridList: [
        {
          text: this.$t("mine.showText"),
          icon: "chat",
        },
        {
          text: this.$t("mine.showText"),
          icon: "cloud-upload",
        },
        {
          text: this.$t("mine.showText"),
          icon: "contact",
        },
        {
          text: this.$t("mine.showText"),
          icon: "download",
        },
      ],
      ucenterList: [
        [
        //   // #ifdef APP-PLUS
        //   {
        //     title: this.$t("mine.signInByAd"),
        //     event: "signInByAd",
        //     icon: "compose",
        //   },
        //   // #endif
        //   {
        //     title: this.$t("mine.signIn"),
        //     event: "signIn",
        //     icon: "compose",
        //   },
        //   // #ifdef APP-PLUS
        //   {
        //     title: this.$t("mine.toEvaluate"),
        //     event: "gotoMarket",
        //     icon: "star",
        //   },
          //#endif
        //   {
        //     title: this.$t("mine.readArticles"),
        //     to: "/pages/ucenter/read-news-log/read-news-log",
        //     icon: "flag",
        //   },
        //   {
        //     title: this.$t("mine.myScore"),
        //     to: "",
        //     event: "getScore",
        //     icon: "paperplane",
        //   },
        //   // #ifdef APP-PLUS
        //   {
        //     title: this.$t("mine.invite"),
        //     event: "share",
        //     icon: "redo",
        //   },
          // #endif
        ],
        [
        //   {
        //     title: this.$t("mine.feedback"),
        //     to: "/uni_modules/uni-feedback/pages/opendb-feedback/opendb-feedback",
        //     icon: "help",
        //   },
          {
            title: this.$t("mine.settings"),
            to: "/pages/ucenter/settings/settings",
            icon: "gear",
          },
        ],
        // #ifdef APP-PLUS
        [
          {
            title: this.$t("mine.about"),
            to: "/pages/ucenter/about/about",
            icon: "info",
          },
        ],
        // #endif
      ],
      listStyles: {
        height: "150rpx", // 边框高度
        width: "150rpx", // 边框宽度
        border: {
          // 如果为 Boolean 值，可以控制边框显示与否
          color: "#eee", // 边框颜色
          width: "1px", // 边框宽度
          style: "solid", // 边框样式
          radius: "100%", // 边框圆角，支持百分比
        },
      },
    };
  },
  onLoad() {
    //#ifdef APP-PLUS
    this.ucenterList[this.ucenterList.length - 2].unshift({
      title: this.$t("mine.checkUpdate"), // this.this.$t('mine.checkUpdate')"检查更新"
      rightText: this.appVersion.version + "-" + this.appVersion.versionCode,
      event: "checkVersion",
      icon: "loop",
      showBadge: this.appVersion.hasNew,
    });
    //#endif
  },
  onShow() {},
  computed: {
    userInfo() {
      return store.userInfo;
    },
    hasLogin() {
      return store.hasLogin;
    },
    // #ifdef APP-PLUS
    appVersion() {
      return getApp().appVersion;
    },
    // #endif
    appConfig() {
      return getApp().globalData.config;
    },
  },
  methods: {
    goto(page) {
      uni.navigateTo({
        url: `/pages/${page}/index`,
      });
    },

    issue() {
      this.bottomStatus = !this.bottomStatus;
    },
    open(e) {
      console.log("open", e);
    },
    toSettings() {
      uni.navigateTo({
        url: "/pages/ucenter/settings/settings",
      });
    },
    signIn() {
      //普通签到
      this.$refs.signIn.open();
    },
    signInByAd() {
      //看激励视频广告签到
      this.$refs.signIn.showRewardedVideoAd();
    },
    /**
     * 个人中心项目列表点击事件
     */
    ucenterListClick(item) {
      if (!item.to && item.event) {
        this[item.event]();
      }
    },
    async checkVersion() {
      let res = await callCheckVersion();
      console.log(res);
      if (res.result.code > 0) {
        checkUpdate();
      } else {
        uni.showToast({
          title: res.result.message,
          icon: "none",
        });
      }
    },
    toUserInfo() {
      uni.navigateTo({
        url: "/uni_modules/uni-id-pages/pages/userinfo/userinfo",
      });
    },
    tapGrid(index) {
      uni.showToast({
        // title: '你点击了，第' + (index + 1) + '个',
        title: this.$t("mine.clicked") + " " + (index + 1),
        icon: "none",
      });
    },
    /**
     * 去应用市场评分
     */
    gotoMarket() {
      // #ifdef APP-PLUS
      if (uni.getSystemInfoSync().platform == "ios") {
        // 这里填写appstore应用id
        let appstoreid = this.appConfig.marketId.ios; // 'id1417078253';
        console.log({ appstoreid });
        plus.runtime.openURL(
          "itms-apps://" +
            "itunes.apple.com/cn/app/wechat/" +
            appstoreid +
            "?mt=8",
          (err) => {
            console.log("plus.runtime.openURL err:" + JSON.stringify(err));
          }
        );
      }
      if (uni.getSystemInfoSync().platform == "android") {
        var Uri = plus.android.importClass("android.net.Uri");
        var uri = Uri.parse(
          "market://details?id=" + this.appConfig.marketId.android
        );
        var Intent = plus.android.importClass("android.content.Intent");
        var intent = new Intent(Intent.ACTION_VIEW, uri);
        var main = plus.android.runtimeMainActivity();
        main.startActivity(intent);
      }
      // #endif
    },
    /**
     * 获取积分信息
     */
    getScore() {
      if (!this.userInfo)
        return uni.showToast({
          title: this.$t("mine.checkScore"),
          icon: "none",
        });
      uni.showLoading({
        mask: true,
      });
      db.collection("uni-id-scores")
        .where('"user_id" == $env.uid')
        .field("score,balance")
        .orderBy("create_date", "desc")
        .limit(1)
        .get()
        .then((res) => {
          console.log(res);
          const data = res.result.data[0];
          let msg = "";
          msg = data
            ? this.$t("mine.currentScore") + data.balance
            : this.$t("mine.noScore");
          uni.showToast({
            title: msg,
            icon: "none",
          });
        })
        .finally(() => {
          uni.hideLoading();
        });
    },
    async share() {
      let { result } = await db
        .collection("uni-id-users")
        .where("'_id' == $cloudEnv_uid")
        .field("my_invite_code")
        .get();
      let myInviteCode = result.data[0].my_invite_code;
      if (!myInviteCode) {
        return uni.showToast({
          title:
            "请检查uni-config-center中uni-id配置，是否已启用 autoSetInviteCode",
          icon: "none",
        });
      }
      console.log({ myInviteCode });
      let { appName, logo, company, slogan } = this.appConfig.about;
      // #ifdef APP-PLUS
      uniShare.show(
        {
          content: {
            //公共的分享类型（type）、链接（herf）、标题（title）、summary（描述）、imageUrl（缩略图）
            type: 0,
            href:
              this.appConfig.h5.url +
              `/#/pages/ucenter/invite/invite?code=uniInvitationCode:${myInviteCode}`,
            title: appName,
            summary: slogan,
            imageUrl: logo + "?x-oss-process=image/resize,m_fill,h_100,w_100", //压缩图片解决，在ios端分享图过大导致的图片失效问题
          },
          menus: [
            {
              img: "/static/app-plus/sharemenu/wechatfriend.png",
              text: this.$t("common.wechatFriends"),
              share: {
                provider: "weixin",
                scene: "WXSceneSession",
              },
            },
            {
              img: "/static/app-plus/sharemenu/wechatmoments.png",
              text: this.$t("common.wechatBbs"),
              share: {
                provider: "weixin",
                scene: "WXSceneTimeline",
              },
            },
            {
              img: "/static/app-plus/sharemenu/weibo.png",
              text: this.$t("common.weibo"),
              share: {
                provider: "sinaweibo",
              },
            },
            {
              img: "/static/app-plus/sharemenu/qq.png",
              text: "QQ",
              share: {
                provider: "qq",
              },
            },
            {
              img: "/static/app-plus/sharemenu/copyurl.png",
              text: this.$t("common.copy"),
              share: "copyurl",
            },
            {
              img: "/static/app-plus/sharemenu/more.png",
              text: this.$t("common.more"),
              share: "shareSystem",
            },
          ],
          cancelText: this.$t("common.cancelShare"),
        },
        (e) => {
          //callback
          console.log(e);
        }
      );
      // #endif
    },
  },
};
</script>

<style lang="scss" scoped>
.list_box {
  background: white;
  margin-bottom: 10px;
  .contnet {
    border-bottom: 1px solid #fafafa;
    display: flex;
    height: 45px;
    font-size: 16px;
    position: relative;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    flex-direction: inherit;
    .contnet_box {
      .bigBox {
        width: 100%;
        padding-left: 25px;
      }
      font-size: 16px;
      color: #3b4144;
      flex-direction: initial;
      display: flex;
      width: 100%;
      justify-content: flex-end;
      .left {
        width: 90%;
        height: 100%;
        span {
          padding-left: 15px;
        }
      }
      .right {
        width: 10%;
        height: 100%;
      }
      .top {
        width: 95%;
        padding-bottom: 5px;
        flex-direction: initial;
        padding-top: 10px;
        image {
          width: 17px;
          height: 17px;
        }
        text {
          font-size: 15px;
          color: #40a9ff;
          padding-left: 7px;
        }
      }
      .bottomBox {
        width: 100%;
        padding-bottom: 10px;
        text {
          font-size: 14px;
        }
      }
    }
  }
}
.view_vipBox {
  width: 710rpx;
  margin: auto;
  //   padding-bottom: 40px;
  .vipBox_w {
    border-radius: 14px;
    height: 125px;
    width: 100%;
    border-radius: 16px;
    background: linear-gradient(
      180deg,
      rgba(64, 169, 255, 1) 0%,
      rgba(43, 203, 255, 1) 100%
    );
    margin-bottom: 40rpx;
  }
  .vip_w {
    width: 90%;
    height: 50%;
    margin: auto;
    // background: blue;
    display: flex;
    .vip_w_one {
      height: 100%;
      display: flex;
      flex-direction: initial;
      .left {
        width: 45%;
        height: 100%;
        // background: #ccc;
        display: flex;
        justify-content: center;
        padding-left: 15px;
      }
      .right {
        color: #ffffff;
        width: 55%;
        height: 100%;
        // background: #ccc;
        display: flex;
        justify-content: center;
        padding-left: 15px;
        font-size: 14px;
        span {
          font-size: 12px;
        }
      }
    }
  }
  .vip_t_one {
    width: 85%;
    height: 50%;
    margin: auto;
    flex-direction: initial;
    // background: blue;
    display: flex;
    .vip_t_one_box {
      width: 65%;
      height: 100%;
      flex-direction: initial;
      //   background: #f0f0f0;
      .left {
        width: 50%;
        height: 100%;
        // padding-right: 5px;
        // background: blue;
        display: flex;
        align-items: center;
        flex-direction: initial;
        // justify-content: space-around;
        image {
          padding-right: 5px;
          width: 30px;
          height: 30px;
        }
      }
      .right {
        width: 50%;
        height: 100%;
        // background: blue;
        display: flex;
        align-items: center;
        flex-direction: initial;
        // padding-right: 5px;
        // justify-content: space-around;
        image {
          padding-right: 5px;
          width: 30px;
          height: 30px;
        }
      }
    }
    .vip_t_two_box {
      width: 35%;
      height: 100%;
      //   background: cyan;
      display: flex;
      justify-content: center;
      align-items: center;
      .btn {
        font-family: YouSheBiaoTiHei;
        width: 88px;
        height: 30px;
        border-radius: 15px;
        text-align: center;
        background: rgb(255, 255, 255);
        line-height: 30px;
      }
    }
  }
}
/* #ifndef APP-NVUE */
view {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
}

page {
  background-color: #f8f8f8;
}
/* #endif*/

.center {
  flex: 1;
  flex-direction: column;
  background-color: #f8f8f8;
}

.userInfo {
  padding: 20rpx;
  //   padding-top: 15px;
  //   background-image: url(../../static/uni-center/headers.png);
  flex-direction: column;
  align-items: center;
  color: red;
}
.userInfo text {
  color: #ccc;
}
.defaultAvatarUrl {
  width: 150rpx;
  height: 150rpx;
  background-color: #007aff;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
}

.logo-title {
  flex: 1;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}

.uer-name {
  height: 100rpx;
  line-height: 100rpx;
  font-size: 38rpx;
  color: #ffffff;
}

.center-list {
  margin-bottom: 30rpx;
  background-color: #f9f9f9;
}

.center-list-cell {
  width: 750rpx;
  background-color: #007aff;
  height: 40rpx;
}

.grid {
  background-color: #ffffff;
  margin-bottom: 6px;
}

.uni-grid .text {
  font-size: 16px;
  height: 25px;
  line-height: 25px;
  color: #817f82;
}

.uni-grid .item ::v-deep .uni-grid-item__box {
  justify-content: center;
  align-items: center;
}

/*修改边线粗细示例*/
/* #ifndef APP-NVUE */
.center-list ::v-deep .uni-list--border:after {
  -webkit-transform: scaleY(0.2);
  transform: scaleY(0.2);
  margin-left: 80rpx;
}

.center-list ::v-deep .uni-list--border-top,
.center-list ::v-deep .uni-list--border-bottom {
  display: none;
}

/* #endif */
.item-footer {
  flex-direction: row;
  align-items: center;
}

.item-footer-text {
  color: #999;
  font-size: 24rpx;
  padding-right: 10rpx;
}

.item-footer-badge {
  width: 20rpx;
  height: 20rpx;
  /* #ifndef APP-NVUE */
  border-radius: 50%;
  /* #endif */
  /* #ifdef APP-NVUE */
  border-radius: 10rpx;
  /* #endif */
  background-color: #dd524d;
}
</style>