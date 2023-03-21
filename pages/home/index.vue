<template>
  <view>
    <!-- <view>45555555555555555555555555test</view> -->
    <!-- #ifndef H5 -->

    <!-- #endif -->
    <!-- <statusBar></statusBar> -->
    <!-- 搜索功能 -->
    <!-- <view class="uni-search-box">
      <uni-search-bar
        v-model="keyword"
        ref="searchBar"
        radius="100"
        cancelButton="none"
        disabled
        :placeholder="inputPlaceholder"
      />
      <view class="cover-search-bar" @click="searchClick"></view>
    </view> -->

    <view
      class="status_bar"
      style="
        height: 120rpx;
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
        height: 120rpx;
        width: 100%;
        background-color: #fff;

        z-index: 9999;
      "
    >
    </view>
    <!-- // height: var(--status-bar-height); 自动匹配各个手机端的高度 -->
    <!-- 轮播图 -->

    <customSwiper
      class="my-customSwiper"
      :list="list"
      :height="356"
      :autoPlay="true"
      :indicator-dots="true"
      :interval="2000"
      @clickItem="clickBanner"
    />

    <view class="navBtn">
      <view class="navBtn-view">
        <image
          style="width: 210px; height: 100px"
          src="/static/img/AIimg@3x.png"
          mode="scaleToFill"
        />
        <!-- <view>AI绘图</view> -->
        <!-- <view class="navBtnBox">
          <image src="/static/img/huihua.png" alt="" />
        </view> -->
      </view>
      <view class="navBtn-view">
        <image
          style="width: 210px; height: 100px"
          src="/static/img/AIvideo@3x.png"
          mode="scaleToFill"
        />
      </view>
    </view>
    <!-- <unicloud-db
      ref="udb"
      v-slot:default="{ data, pagination, loading, hasMore, error }"
      collection="ai-user-picture"
      field="picture,picturePath,pictureDesc,pictureModel,pictureSize,pictureTopic,pictureStyle"
    > -->
    <view v-for="(item, index) in viewList" :key="index" class="content-big">
      <view class="content-big-titleBox">
        <view class="content-big-title">
          <view class="title-left-box">
            <image src="/static/img/toxiang.png" mode="scaleToFill" />
          </view>
          <view class="title-right-box">
            <text class="right-box-one">{{item.user_id && item.user_id[0].nickname}}</text>
            <view class="right-box-two"></view>
            <text class="right-box-three">{{ item.time }}</text>
          </view>
        </view>

        <view class="content-big-introduce">
          <view>{{ item.title }}</view>
        </view>
      </view>
      <view class="Photo-viewBox" style="border-radius: 12px">
        <image :src="item.picturePath" mode="widthFix" alt="" />
      </view>

      <view class="comment-box">
        <view>
          <view class="comment-box-view">
            <view>
              <image src="/static/img/like.png" />
            </view>
            <text class="comment-box-view-font">1</text>
          </view>
          <view class="comment-box-view">
            <view>
              <image src="/static/img/keep.png" />
            </view>
            <text class="comment-box-view-font">0</text>
          </view>
          <view class="comment-box-view">
            <view>
              <image src="/static/img/comment.png" />
            </view>
            <text class="comment-box-view-font">0</text>
          </view>
        </view>
        <view style="width: 50%">
          <view style="width: 50%"></view>
          <view class="comment-rightBox">
            <!-- <image
                src="/static/img/go.png"    
                mode="scaleToFill"
            /> -->
            <view class="comment-rightBox-font">一键同款</view>
          </view>
        </view>
      </view>
    </view>
    <!-- </unicloud-db> -->
  </view>
</template>
<script>
import {getIndexList} from "../../utils/request.js"
const db = uniCloud.database();
import statusBar from "@/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-status-bar";
import customSwiper from "@/components/zhl-custom-swiper/zhl-custom-swiper.vue";
export default {
  components: {
    statusBar,
    customSwiper,
  },
  data() {
    return {
      // 搜索框
      inputPlaceholder: "搜索商品",
      keyword: "",
      // 轮播图

      list: [
        {
          src: "/static/img/aa1.jpg", //完整的图片访问地址
        },
        {
          src: "/static/img/aa2.jpg",
        },
      ],
      viewList: [
        {
          picturePath: "/static/img/index1.webp",
          title: "图文热点来了 #桂林1",
          name: "qmnc9NWH",
          time: "03-08",
        },
        {
          picturePath: "/static/img/index2.webp",
          title: "图文测试 #桂林",
          name: "nlgg74N",
          time: "03-08",
        },
        {
          picturePath: "/static/img/index3.webp",
          title: "图文测试 #桂林",
          name: "nlgg74N",
          time: "03-08",
        },
        {
          picturePath: "/static/img/index4.webp",
          title: "图文测试 #桂林",
          name: "nlgg74N",
          time: "03-08",
        },
      ],
      // ...
    };
  },
  methods: {
    getBannerList() {
        getIndexList().then(res=>{
            // this.viewList = res.result.data
            // 评论 点赞 转发数, 用户名称 用户头像
              this.viewList = res.result.data;
            console.log(res.result.data,"res")
            // this.list=res.data
        })
        return
      // ...
      db.collection("ai-user-picture")
        .field("picturePath,pictureDesc,pictureModel")
        .get()
        .then((res) => {
          console.log(res.result.data, "res");
          this.viewList = res.result.data;
        })
        .catch((err) => {
          console.log(err, "err");
        });
      console.log();
    },
    searchClick() {
      this.$refs.searchBar.focus();
    },
    clickBanner(obj) {
      console.log(obj, "obj", obj.src);
    },
    // ...
  },
  onReachBottom() {
    console.log(777771);
  },
  mounted() {
    this.getBannerList();
    // ...
  },
};
</script>
<style lang="scss" scoped>
.content-big {
  height: auto;
  /* border: 1px solid red; */
  width: 710rpx;
  margin: auto;
  margin-bottom: 5px;
  .content-big-titleBox {
    height: 80px;
    /* border: 1px solid blue; */
  }
}

.title-left-box {
  width: 15%;
  text-align: center;
  margin-top: 5px;
  margin-left: -5px;
  justify-content: center;
  align-items: center;
  //   image {
  //     height: 450px;
  //   }
}
</style>
<style scoped>
.bb {
  border: 1px solid #ccc;
}
.navBtn {
  display: flex;
  width: 90%;
  margin: -10px auto 15px;
  height: 70px;
  justify-content: center;
}
.navBtn-view {
  border-radius: 6px;
  width: 50%;
  display: flex;
  /* box-shadow: 0 0 10px 5px #ccc inset; */
}
.navBtn-view > view {
  width: 50%;
  line-height: 80px;
  text-align: center;
}
.navBtnBox {
  width: 45%;
  margin-top: -18px;
}
.navBtnBox > image {
  height: 80px;
  width: 80px;
}

.content-big-title {
  height: 50%;
  padding-top: 5px;
  display: flex;
}
.title-left-box {
  width: 15%;
  text-align: center;
  margin-top: 5px;
  margin-left: -5px;
  justify-content: center;
  align-items: center;
}
.title-right-box {
  width: 85%;
  display: flex;
  align-items: center;
}
.right-box-one {
  font-size: 14px;
  font-weight: 500;
}
.right-box-two {
  width: 2px;
  height: 2px;
  display: inline-block;
  background: #7e8496;
  border-radius: 20px;
  margin-left: 8px;
}
.right-box-three {
  font-size: 13px;
  font-weight: 500;
  /*  */
  margin-left: 3px;
  color: #7e8496;
}
.title-left-box > image {
  width: 30px;
  height: 30px;
  border-radius: 20px;
}
.content-big-introduce {
  margin-top: 5px;
  padding-left: 10px;
  display: flex;
  height: 50%;
}
.content-big-introduce > view {
  font-size: 15px;
  font-weight: 700;
}
.Photo-viewBox {
  height: auto;
  width: 100%;
  /* border: 1px solid red; */
  margin: auto;
  overflow: hidden;

  /* background:red */
}
.Photo-viewBox > image {
  width: 100%;
  height: 100%;
}
.comment-box {
  height: 50px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* border: 1px solid red; */
}
.comment-box > view {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
}
.comment-box-view {
  width: 33%;
  display: flex;
}
.comment-box-view image {
  width: 18px;
  height: 18px;
  margin-right: 10px;
  margin-top: 0px;
}
.comment-box-view-font {
  font-size: 14px;
  font-weight: 500;
  color: #7e8496;
}
.comment-rightBox {
  /* padding: 2px;
  border-radius: 3px;
  width: 45%;
  display: flex;
  align-items: center;
  border: 1px solid rgb(142, 87, 217); */
  border-radius: 16px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  background: linear-gradient(
    180deg,
    rgba(26, 167, 255, 1) 0%,
    rgba(34, 200, 255, 1) 100%
  );
  width: 80px;
}
.comment-rightBox-font {
  font-weight: regular;
  font-size: 16px;
  font-family: YouSheBiaoTiHei;
  color: white;
}
.comment-rightBox > image {
  width: 23px;
  height: 23px;
  float: right;
}
</style>