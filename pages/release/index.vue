<template>
  <view>
    <topView />
    <view v-show="Pop_ups" class="mask"></view>
    <view
      style="
        width: 100%;
        height: 50px;

        text-align: center;
        line-height: 50px;
        position: fixed;
      "
    >
      <!-- <text>图片详情</text> -->
    </view>
    <view
      style="
        width: 100%;
        height: 50px;

        text-align: center;
        line-height: 50px;
      "
    >
    </view>
    <view class="imgBox">
      <view class="img_title">
        <image src="/static/img/index2.webp" mode="widthFix" />
      </view>
    </view>
    <view class="imgBtn">
      <view class="item">
        <image src="/static/img/sho.png" mode="widthFix" />
        <view class="btnFont">
          <text>修手</text>
        </view>
      </view>

      <view class="item">
        <image src="/static/img/six.png" mode="widthFix" />
        <view class="btnFont">
          <text>精绘</text>
        </view>
      </view>

      <view class="item">
        <image src="/static/img/liwu.png" mode="widthFix" />
        <view class="btnFont">
          <text>定制</text>
        </view>
      </view>

      <view class="item">
        <image src="/static/img/f5.png" mode="widthFix" />
        <view class="btnFont">
          <text>再来一张</text>
        </view>
      </view>

      <view @click="Pop_ups_btnChange()" class="item">
        <image src="/static/img/fei.png" mode="widthFix" />
        <view class="btnFont">
          <text>发布广场</text>
        </view>
      </view>
    </view>

    <view v-show="Pop_ups" class="fixed_Pop_ups">
      <view class="Pop_ups_box">
        <view class="title">
          <text>将作品投稿到艺术展 </text>
        </view>

        <view class="input_title">
          <text class="font1">标题</text> <text class="font2">（选填）</text>
        </view>

        <view class="input_box">
          <input
            type="text"
            placeholder="好的标题会让你的作品更受欢迎哦"
            placeholder-style="color: #999999;font-size: 14px"
            class="input1"
          />
        </view>

        <view class="Pop_ups_btn">
          <view @click="Pop_ups_btnChange()" class="Pop_ups_left">
            <text>我再想想</text>
          </view>
          <view @click="Pop_ups_btnChange()" class="Pop_ups_right">
            <text>确定</text>
          </view>
        </view>
      </view>
    </view>
    <view @click="goBack" class="backBtn"
      ><uni-icons
        :size="18"
        class="uni-icon-wrapper"
        color="#bbb"
        type="arrowleft"
      />
      <!-- <text style="padding-left:10px">图片详情</text> -->
    </view>
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
      Pop_ups: false,
      widthImg: 0,
      // ...
    };
  },
  onReady() {
    // this.getImageHeight();
  },
  methods: {
    goBack() {
      uni.navigateBack();
    },
    Pop_ups_btnChange() {
      this.Pop_ups = !this.Pop_ups;
    },
    // ...
  },
  onLoad() {
    // ...
  },
};
</script>

<style lang="scss" scoped>
.backBtn {
  width: 40px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #ccc;
  border-radius: 30px;
  //   text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  //   background: blue;
  left: 15px;
  position: fixed;
  /* #ifdef APP-PLUS */
  top: 5%;
  /* #endif */
  /* #ifndef APP-PLUS */
  top: 15px;
  /* #endif */
}
.fixed_Pop_ups {
  z-index: 3;
  top: 40%;
  width: 100%;
  margin: auto;
  height: 200px;
  //   background: #38363b;
  position: fixed;
  .Pop_ups_box {
    width: 80%;
    height: 100%;
    background: #38363b;
    overflow: hidden;
    border-radius: 14px;
    margin: auto;
    .title {
      width: 80%;
      height: 30px;
      //   background: red;
      margin: auto;
      text-align: center;
      padding-top: 20px;
      color: white;
      font-weight: 700;
      font-size: 16px;
    }
    .input_title {
      width: 90%;
      height: 35px;
      line-height: 35px;
      //   background: #ccc;
      margin: 15px auto 0px;
      .font1 {
        font-size: 16px;
        color: white;
      }
      .font2 {
        font-size: 12px;
        color: white;
      }
    }
    .input_box {
      width: 90%;
      height: 35px;
      line-height: 35px;
      //   background: #ccc;
      margin: 1px auto 0px;
      .input1 {
        width: 90%;
        height: 100%;
        background: #4d4b50;
        border: none;
        outline: none;
        color: white;
        padding-left: 10px;
      }
    }
    .Pop_ups_btn {
      box-sizing: border-box;
      border-top: 1px solid #565459;
      width: 100%;
      height: 45px;
      display: flex;
      text-align: center;
      line-height: 45px;
      //   background: red;
      margin-top: 18px;
      .Pop_ups_left {
        width: 55%;
        height: 100%;
        // background: blue;
        border-right: 1px solid #565459;
        color: #9a989d;
      }
      .Pop_ups_right {
        color: #a36beb;
        width: 45%;
        height: 100%;
        // background: red;
      }
      .Pop_ups_left:active {
        background: #565459;
      }
      .Pop_ups_right:active {
        background: #565459;
      }
    }
  }
}
.imgBox {
  width: 710rpx;
  margin: -15px auto 0px;
  height: auto;
  .img_title {
    width: 710rpx;
    height: auto;
    margin: 25px auto 0px;
    // background: red;
    overflow: hidden;
    image {
      width: 100%;
      height: 100%;
    }
  }
}
.imgBtn {
  width: 730rpx;
  height: auto;
  background: #23262f;
  margin: 15px auto 0px;
  border-radius: 35px;
  display: flex;
  .item {
    width: 19%;

    height: 95%;
    // background: red;
    text-align: center;
    image {
      width: 30px;
      height: 30px;
      padding-top: 6px;
    }
    .btnFont {
      padding-bottom: 6px;
      text {
        font-size: 13px;
        color: #afb2bb;
      }
    }
  }
  .item:active {
    border-radius: 35px;
    background: #2f343f;
  }
}
</style>>
