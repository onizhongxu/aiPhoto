<template>
  <view>
    <view
      class="status_bar"
      style="
        height: var(--status-bar-height);
        width: 100%;
        position: fixed;
        background-color: #fff;
        z-index: 9999;
      "
    >
    </view>
    <view
      class="status_bar"
      style="
        height: var(--status-bar-height);
        width: 100%;
        background-color: #fff;

        z-index: 9999;
      "
    >
    </view>

    <view class="top">
      <view class="box">
        <view class="box_top">
          <view class="top_title">
            <view class="left">
              <span
                ><text style="color: #83a1c2; padding-right: 4px">享</text>
                <text style="color: white"> 极速出图 等 8 项特权</text></span
              >
            </view>
            <view class="right">
              <view style="color: white"> 权益介绍</view>
            </view>
          </view>

          <view class="top_content">
            <view class="item">
              <view class="item_icon">
                <image src="/static/img/1@3x.png" mode="scaleToFill" />
              </view>
              <view class="item_bottom">
                <view class="bottom_top">
                  <span>最快0.8秒</span>
                </view>

                <view>
                  <span class="bottom_bottom">极速出图</span>
                </view>
              </view>
            </view>
            <view class="item">
              <view class="item_icon">
                <image src="/static/img/2@3x.png" mode="scaleToFill" />
              </view>
              <view class="item_bottom">
                <view class="bottom_top">
                  <span>放大创作自由</span>
                </view>

                <view>
                  <span class="bottom_bottom">创作无限制</span>
                </view>
              </view>
            </view>
            <view class="item">
              <view class="item_icon">
                <image src="/static/img/3@3x.png" mode="scaleToFill" />
              </view>
              <view class="item_bottom">
                <view class="bottom_top">
                  <span>一次生成多张</span>
                </view>

                <view>
                  <span class="bottom_bottom">批量生成</span>
                </view>
              </view>
            </view>
            <view class="item">
              <view class="item_icon">
                <image src="/static/img/4@3x.png" mode="scaleToFill" />
              </view>
              <view class="item_bottom">
                <view class="bottom_top">
                  <span>特色功能尝鲜</span>
                </view>

                <view>
                  <span class="bottom_bottom">AI视频</span>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
      <view></view>
    </view>
    <view class="vip_title">
      <view class="box">
        <view class="left">
          <view class="shu"></view>
        </view>
        <view class="center">
          <text>加入会员</text>
        </view>
        <view class="right">
          <view class="shu"></view>
        </view>
      </view>
    </view>

    <view class="vip_introduce">
      <view style="justify-content: space-evenly" class="box">
        <view
          @click="optChange(0)"
          :class="{ opt: optIndex == 0 }"
          class="item"
        >
          <view class="item_box">
            <view class="one">
              <text>1个月</text>
            </view>
            <view class="two">
              <text>¥99</text>
            </view>

            <view class="three">
              <text><del>¥108</del></text>
            </view>
          </view>

          <view class="bottom">
            <view class="box"><text>送600颗星</text></view>
          </view>
        </view>

        <view
          @click="optChange(1)"
          :class="{ opt: optIndex == 1 }"
          class="item"
        >
          <view class="bg_title"><text>最受欢迎</text></view>
          <view class="item_box">
            <view class="one">
              <text>1年</text>
            </view>
            <view class="two">
              <text>¥199</text>
            </view>

            <view class="three">
              <text><del>¥1008</del></text>
            </view>
          </view>

          <view class="bottom">
            <view class="box"><text>送600颗星</text></view>
          </view>
        </view>

        <!-- <view
          @click="optChange(2)"
          :class="{ opt: optIndex == 2 }"
          class="item"
        >
          <view class="item_box">
            <view class="one">
              <text>1个月</text>
            </view>
            <view class="two">
              <text>¥50</text>
            </view>

            <view class="three">
              <text>¥108</text>
            </view>
          </view>

          <view class="bottom">
            <view class="box"><text>送600颗星</text></view>
          </view>
        </view> -->
      </view>
    </view>

    <view class="buy_title">
      <view class="box">
        <view @click="buyChange(0)" class="item">
          <view class="left">
            <image src="/static/img/zfb.png" mode="scaleToFill" />
            <span>
              <text>支付宝</text>
            </span>
          </view>
          <view class="right">
            <view class="content">
              <view class="w">
                <view :class="{ n: buyIndex == 0 }"></view>
              </view>
            </view>
          </view>
        </view>

        <view @click="buyChange(1)" class="item">
          <view class="left">
            <image
              style="height: 26px"
              src="/static/img/wx.png"
              mode="scaleToFill"
            />
            <span>
              <text>微信</text>
            </span>
          </view>
          <view class="right">
            <view class="content">
              <view class="w">
                <view :class="{ n: buyIndex == 1 }"></view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <view @click="buyBtn()" class="buy_btn">
      <view class="box">
        <view class="left">
          <text style="">128元</text>
        </view>
        <view class="right">
          <text>去支付</text>
        </view>
      </view>
    </view>
    <!-- <view @click="goBack" class="backBtn">&gt;</view> -->
  </view>
</template> 
  
<script>
export default {
  data() {
    return {
      buyIndex: 0,
      optIndex: 0,
    };
  },
  methods: {
    buyBtn() {
      //订单对象，从服务器获取
      var orderInfo = {
        appid: "wx6b1a52595832d15a", // 应用ID（AppID）
        partnerid: "1614000936", // 商户号（PartnerID）
        prepayid: "WX1217752501201407033233368018", // 预支付交易会话ID
        package: 'Sign=WXPay', // 固定值
        noncestr: "c5sEwbaNPiXAF3iv", // 随机字符串
        timestamp: new Date(), // 时间戳（单位：秒）
        sign: "17:46:7E:5F:5B:20:07:9A:5E:0E:20:5C:74:59:44:5E", // 签名，这里用的 MD5 签名
      };

      uni.requestPayment({
        provider: "wxpay",
        orderInfo: orderInfo,
        success(res) {
          console.log("success:" + JSON.stringify(res));
          console.log("支付成功");
        },
        fail(err) {
          console.log("fail:" + JSON.stringify(err));
          console.log("支付失败");
        },
      });
    },
    buyChange(index) {
      this.buyIndex = index;
    },
    optChange(index) {
      this.optIndex = index;
    },
    goBack() {
      uni.navigateBack();
    },
  },
};
</script>

<style lang="scss"scoped >
.opt {
  border: 2px solid rgba(64, 169, 255, 1) !important;
  background: #cce8ff !important;
}
.buy_btn {
  width: 90%;
  height: 50px;
  margin: auto;
  border-radius: 24px;
  background: linear-gradient(
    -90deg,
    rgba(24, 117, 255, 1) 0%,
    rgba(0, 201, 255, 1) 50%,
    rgba(6, 167, 255, 1) 100%
  );
  display: flex;
  justify-content: center;
  margin-top: 20px;
  .box {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    .left {
      height: 100%;
      display: flex;
      align-items: center;
      text {
        font-size: 18px;
        color: white;
        font-family: YouSheBiaoTiHei;
        margin-right: 15px;
      }
    }
    .right {
      height: 100%;
      display: flex;
      align-items: center;
      text {
        font-size: 14px;
        color: white;
      }
    }
  }
}
.buy_title {
  width: 90%;
  height: 150px;
  margin: auto;
  //   background: red;
  .box {
    border: 2px solid #c4c4c4;
    border-radius: 16px;
    width: 100%;
    height: 90%;
    // background: blue;
    .item {
      width: 100%;
      height: 50%;
      //   background: #ccc;
      display: flex;
      .left {
        width: 80%;
        height: 100%;
        display: flex;
        align-items: center;
        padding-left: 25px;
        image {
          width: 30px;
          height: 30px;
        }
        text {
          color: rgb(124, 127, 141);
          font-weight: 700;
          font-size: 15px;
          padding-left: 15px;
        }
      }
      .right {
        width: 20%;
        display: flex;
        height: 100%;
        align-items: center;
        .content {
          width: 50px;
          height: 50px;
          //   background: red;
          display: flex;
          justify-content: center;
          align-items: center;
          .w {
            width: 22px;
            height: 22px;
            background: #744fee;
            border-radius: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .n {
            width: 10px;
            height: 10px;
            border-radius: 20px;
            background: white;
          }
        }
      }
    }
  }
}
.backBtn {
  width: 40px;
  height: 40px;
  background: blue;
  left: 15px;
  position: fixed;
  /* #ifdef APP-PLUS */
  top: 5%;
  /* #endif */
  /* #ifndef APP-PLUS */
  top: 15px;
  /* #endif */
}
.top {
  width: 100%;
  height: auto;

  background: black;
  .box {
    width: 710rpx;
    height: 100%;
    // background: #ccc;
    padding-top: 30px;
    margin: auto;
  }
  .box_top {
    padding-top: 15px;
    width: 100%;
    height: 178px;
    background: #003972;
    border-radius: 16px;
    .top_title {
      width: 100%;
      height: 53px;
      //   background: yellow;
      display: flex;
      .left {
        width: 50%;
        height: 100%;
        // background: #fff;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .right {
        width: 50%;
        display: flex;
        justify-content: center;
        font-size: 14px;
        align-items: center;
        height: 100%;
        // background: #ccc;
        view {
          margin-right: -75px;
        }
      }
    }
    .top_content {
      width: 90%;
      height: 120px;
      border-radius: 16px;
      background: #001c38;
      margin: auto;
      display: flex;
      .item {
        width: 25%;
        height: 100%;
        // background: #001c38;
        .item_icon {
          width: 100%;
          height: 50%;
          display: flex;
          //   background: cyan;
          justify-content: center;
          align-items: center;
          image {
            width: 30px;
            height: 30px;
          }
        }
        .item_bottom {
          width: 100%;
          height: 60%;
          text-align: center;
          //   background: #ccc;
          .bottom_top {
            color: #fff;
            font-size: 10px;
            font-family: YouSheBiaoTiHei;
          }
          .bottom_bottom {
            color: #fff;
            font-size: 12px;
            margin-top: 5px;
          }
        }
      }
    }
  }
}
.vip_title {
  width: 100%;
  height: auto;
  margin-top: -10px;
  background: #fff;
  .box {
    width: 100%;
    height: 70px;
    display: flex;
    // background: red;
    .left {
      width: 40%;
      height: 80px;
      //   background: blue;
      display: flex;
      align-items: center;
      .shu {
        width: 209px;
        height: 8px;
        border-radius: 6px;
        background: linear-gradient(
          -90deg,
          rgba(64, 169, 255, 1) 0%,
          rgba(255, 255, 255, 0) 100%
        );
      }
    }
    .center {
      width: 20%;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      //   background: cyan;
      text {
        font-family: YouSheBiaoTiHei;
        color: #2292ff;
      }
    }
    .right {
      width: 40%;
      height: 80px;
      //   background: antiquewhite;
      display: flex;
      align-items: center;
      .shu {
        width: 209px;
        height: 8px;
        border-radius: 6px;
        background: linear-gradient(
          -90deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(64, 169, 255, 1) 100%
        );
      }
    }
  }
}
.vip_introduce {
  width: 90%;
  height: 150px;
  //   background: red;
  margin: auto;
  .box {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .item {
      border-radius: 16px;
      border: 2px solid rgba(196, 196, 196, 1);
      box-sizing: border-box;
      width: 104px;
      height: 136px;
      background: #fff;
      .bg_title {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 69px;
        height: 24px;
        border-radius: 6px;
        background: radial-gradient(
          circle at 50% 50%,
          rgba(239, 89, 255, 1) 0%,
          rgba(64, 169, 255, 1) 100%
        );
        position: absolute;
        margin-left: -2px;
        margin-top: -14px;
        text {
          color: white;
          font-family: YouSheBiaoTiHei;
        }
      }
      .item_box {
        width: 100%;
        height: 70%;
        // background: #ccc;
        .one {
          text-align: center;
          width: 100%;
          height: 44px;
          line-height: 44px;
          text {
            font-size: 12px;
          }
        }
        .two {
          width: 100%;
          text-align: center;
          height: 31px;
          //   background: blue;
          text {
            font-size: 24px;
            font-family: YouSheBiaoTiHei;
          }
        }
        .three {
          width: 100%;
          height: 18px;
          text-align: center;
          text {
            font-size: 12px;
          }
        }
      }
      .bottom {
        width: 100%;
        height: 30%;
        // background: white;
        display: flex;
        justify-content: center;
        align-items: center;
        .box {
          width: 80px;
          text-align: center;
          line-height: 28px;
          height: 28px;
          border-radius: 8px;
          background: radial-gradient(
            circle at 50% 50%,
            rgb(0, 120, 255) 0%,
            rgb(0, 96, 175) 100%
          );
          text {
            margin: auto;
            color: rgba(255, 235, 88, 1);
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>