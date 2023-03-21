<template>
  <view>
    <top-view />
    <view class="top">
      <view class="box">
        <view class="box_top">
          <view class="tou_box">
            <view class="top_tou">
              <image src="/static/img/to.png" mode="scaleToFill" />
            </view>

            <view class="top_title">
              <text>神笔马良29129</text>
            </view>
          </view>

          <view class="bottom_list">
            <view class="item">
              <view class="item_top">
                <text> 4</text>
              </view>
              <view class="item_bottom">
                <text> 展出</text>
              </view>
            </view>

            <view class="item">
              <view class="item_top">
                <text> 1</text>
              </view>
              <view class="item_bottom">
                <text> 获赞</text>
              </view>
            </view>

            <view class="item">
              <view class="item_top">
                <text> 3</text>
              </view>
              <view class="item_bottom">
                <text> 关注</text>
              </view>
            </view>

            <view class="item">
              <view class="item_top">
                <text> 2</text>
              </view>
              <view class="item_bottom">
                <text> 粉丝</text>
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
          <text>展览中</text>
        </view>
        <view class="right">
          <view class="shu"></view>
        </view>
      </view>
    </view>

    <view class="waterfalls_box">
      <custom-waterfalls-flow
        @imageClick="goto('release')"
        :listStyle="{ 'border-radius': '16px' }"
        :value="list"
      >
        <template v-slot:default="item">
          <view class="waterfalls_item">
            <view class="title">{{ item.title }}</view>
            <view class="desc">
              <view class="desc_left_box">
                <view class="desc_left">
                  <image src="/static/img/list_t.png" mode="scaleToFill" />
                  <text>{{ item.userName }}</text>
                </view>
              </view>
              <view class="desc_right">
                <image src="/static/img/zan@3x.png" mode="scaleToFill" />
                <text>{{ item.num }}</text>
              </view>
            </view>
          </view>
        </template>
      </custom-waterfalls-flow>
    </view>

    <!-- <view @click="goBack" class="backBtn">&gt;</view> -->
  </view>
</template> 
  
<script>
import topView from "@/components/top-view/index.vue";
export default {
  components: {
    topView,
  },
  data() {
    return {
      list: [
        {
          image: "/static/img/list5.webp",
          hide: 0,
          title: "水中仙子",
          userName: "用户1",
          num: 5,
        },
        {
          image: "/static/img/list3.webp",
          title: "魔女",
          userName: "用户2",
          num: 2,
        },
        {
          image: "/static/img/index2.webp",
          title: "水中仙子",
          userName: "用户3",
          num: 6,
        },
        {
          image: "/static/img/index3.webp",
          title: "魔女",
          userName: "用户123",
          num: 9,
        },
        {
          image: "/static/img/list5.webp",
          title: "水中仙子",
          userName: "用户43",
          num: 4,
        },
      ], //瀑布流数据
      buyIndex: 0,
      optIndex: 0,
    };
  },
  onReachBottom() {
    console.log(777771);
    this.list.push(
      {
        image: "/static/img/list5.webp",
        title: "魔女",
        userName: "用户11",
        num: 4,
      },
      {
        image: "/static/img/list5.webp",
        title: "我是标题7",
        userName: "用户46",
        num: 6,
      }
    );
  },
  methods: {
    goto(page) {
      console.log(47777);
      uni.navigateTo({
        url: `/pages/${page}/index`,
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
<style>
.waterfalls_box >>> .img {
  border-radius: 16px;
}
</style>
<style lang="scss"scoped >
.waterfalls_box {
  width: 710rpx;
  height: auto;
  margin: auto;

  .waterfalls_item {
    padding: 10rpx 10rpx 20rpx;

    .title {
      font-weight: bold;
      line-height: 48rpx;
      font-size: 28rpx;
      color: #222;
    }

    .desc {
      margin-top: -5px;
      display: flex;
      font-size: 24rpx;
      // color: #666;
      .desc_left_box {
        width: 80%;
        height: 40px;
        // background: red;
      }
      .desc_left {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        image {
          width: 16px;
          height: 16px;
        }
        text {
          font-size: 10px;
          color: rgba(105, 192, 255, 1);
          padding-left: 5px;
          color: rgba(0, 96, 175, 1);
        }
      }
      .desc_right {
        width: 25%;
        height: 40px;
        //   background: blue;
        display: flex;
        align-items: center;
        image {
          width: 14px;
          height: 14px;
        }
        text {
          padding-left: 3px;
        }
      }
    }
  }
}

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
    .tou_box {
      width: 100%;
      height: 60%;
    }
    .top_tou {
      width: 100%;
      height: 50%;
      display: flex;
      justify-content: center;
      image {
        width: 48px;
        height: 48px;
      }
    }
    .top_title {
      width: 100%;
      height: 50%;
      display: flex;
      justify-content: center;
      text {
        color: white;
        font-weight: bold;
      }
    }
    .bottom_list {
      width: 100%;
      height: 40%;
      //   background: #ccc;
      display: flex;
      .item {
        width: 25%;
        height: 100%;
        // background: blue;
        text-align: center;
        .item_top {
          text {
            color: white;
            font-weight: bold;
            font-size: 14px;
          }
        }
        .item_bottom {
          text {
            font-size: 10px;
            color: rgba(64, 169, 255, 1);
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