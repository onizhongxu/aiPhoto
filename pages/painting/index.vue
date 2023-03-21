<template >
  <view class="background">
    <!-- top -->
    <view>
      <view
        style="position: fixed; position: fixed; z-index: 9999"
        class="top-title"
      >
        <span>AI绘图</span>
      </view>
      <view class="top-title">
        <!-- <span>AI绘图</span> -->
      </view>
    </view>
    <!-- content -->
    <view class="content-box">
      <view>
        <!-- 画面描述 -->
        <view class="view-title">
          <view>
            <span class="title-font"> <text>画面描述</text></span>
          </view>
          <view class="view-inputBox">
            <view>
              <textarea
                style="padding: 8px"
                class="textarea view-input"
                placeholder="可爱的毛茸茸小兔子，坐在草地上晒太阳，慵懒舒适的，春天，花朵，温暖阳光，高度详细，4K，明亮的颜色，突出画面主体"
                placeholder-style="color: #999999"
                show-confirm-bar="true"
                maxlength="300"
                :value="value"
                @input="onInput"
              />
            </view>
          </view>

          <!-- <view class="content-swiper">
            <scroll-view class="headerv" :scroll-x="true">
              <view
                class="headerv_list"
                :class="{ headerv_list_sc: titsel == idx }"
                v-for="(tit, idx) in titlist"
                :key="idx"
                @click="didSeltit(idx)"
              >
                <image
                  style="width: 13px; height: 13px"
                  src="/static/img/yezi.png"
                  mode="scaleToFill"
                />{{ tit }}</view
              >
            </scroll-view>
          </view> -->
        </view>
        <!-- 选择画板 -->
        <view class="view-drawing">
          <view>
            <span class="title-font"> <text>画板</text></span>
          </view>
          <view>
            <radio-group @change="radioChange">
              <label
                style="display: flex; padding-top: 15px"
                class="uni-list-cell radioNode uni-list-cell-pd"
                v-for="(item, index) in items"
                :key="item.value"
              >
                <view>
                  <radio
                    color="#9342ED"
                    :value="item.value"
                    :checked="index === current"
                  />
                </view>
                <view style="color: white">
                  <view>
                    <span style="font-size: 15px"> {{ item.name }}</span>
                  </view>
                  <view>
                    <span style="color: #999999; font-size: 14px">{{
                      item.title
                    }}</span>
                  </view>
                </view>
              </label>
            </radio-group>
          </view>
        </view>

        <!-- 梦境增强 绑定第一个画板 -->
        <view class="view-dream">
          <view>
            <span class="title-font"> <text>梦境增强模式</text> </span>
            <span style="float: right; margin-right: 10px"
              ><switch style="transform: scale(0.7)" @change="switch2Change"
            /></span>
          </view>
        </view>
        <!-- ai生成参考图 -->
        <view id="style1" class="view-style">
          <view>
            <span class="title-font"> <text>风格</text></span>
          </view>
          <view class="content-swiper">
            <view>
              <scroll-view class="view-styleBox" :scroll-x="true">
                <view class="style-viewBox">
                  <view v-for="(item, idx) in titlist2" :key="idx">
                    <view
                      class="styBox_list"
                      :style="{ backgroundImage: `url(${item.src})` }"
                      :class="{ styBox_list_sc: viewIndex == idx }"
                      @click="styleChange(idx)"
                    >
                      <span style="color: #e9e9ea">{{ item.title }}</span></view
                    >
                  </view>
                </view>
              </scroll-view>
            </view>
          </view>
        </view>

        <!-- <view class="view-artist">
          <view>
            <span class="title-font"> <text>艺术家</text></span>
          </view>
          <view>
            <scroll-view class="view-artistBox" :scroll-x="true">
              <view class="style-artistBox">
                <view v-for="(item, idx) in titlist2" :key="idx">
                  <view
                    class="artist_list"
                    :style="{ backgroundImage: `url(${item.src})` }"
                    :class="{ artist_list_sc: artistIndex == idx }"
                    @click="artistChange(idx)"
                  >
                    <span style="color: #e9e9ea">{{ item.title }}</span></view
                  >
                </view>
              </view>
            </scroll-view>
          </view>
        </view> -->
<!-- 
        <view class="view-reference">
          <view>
            <span class="title-font"> <text>参考图</text></span>
          </view>
          <view class="reference-box">
         
            <view style="width: 27%">
              <imgUpload
                @change="getImageInfo"
                :upload_auto="true"
                ref="upimg"
                :upimg_preview="imgList"
                :upload_count="1"
                :url="imgUploadUrl"
              ></imgUpload
            ></view>
        

            <view class="reference-box-right">
              <view class="reference-box-rightJ"></view>
              <view class="reference-box-right-conent">
                <view class="right-content-title">参考图影响因子</view>
                <view style="margin-top: 12px">
                  <view class="cu-progress">
                    <view class="show">
                      <cu-progress
                        activeColor="#9342ED"
                        noActiveColor="#6A6A6A"
                        min="0"
                        max="1"
                        width="200px"
                        step="0.05"
                        infoColor="#fff"
                        handleColor="#fff"
                        iconBorderRadius="12px"
                        showInfo="true"
                      ></cu-progress>
                    </view>
                  </view>
                </view>
              </view>
            </view>
          </view>
        </view> -->

        <!-- <view class="view_no">
          <view>
            <span class="title-font">
              <text
                >我不要<text style="font-size: 13px">（选填）</text>
              </text></span
            >
          </view>
          <view style="margin-top: 15px; height: 65px">
            <input
              style="
                border: 2px solid #4ca5ed !important;
                border-radius: 5px;
                background: #2b2b2b;
                padding-left: 10px;
                height: 45px;
                color: #fff;
              "
              class="uni-input"
              maxlength="140"
              placeholder="请输入你不希望出现的元素"
              placeholder-style="color: #999999;padding-left: 10px;font-size: 14px"
              v-model="noTitle"
            />
          </view>
        </view> -->

        <view class="view_size">
          <view>
            <span class="title-font"> <text>尺寸 </text></span>
          </view>

          <view style="margin-top: 15px">
            <view class="size_box">
              <view @click="sizeChange(0)" class="size_list">
                <view
                  class="list_box"
                  :class="{
                    under_borderStyle: sizeIndex == 0,
                    under_bgStyle: sizeIndex == 0,
                  }"
                >
                  <view class="list_box_w">
                    <view style="height: 25px">
                      <image
                        style="width: 25px; height: 25px"
                        src="/static/img/1_1.png"
                      />
                    </view>
                  </view>
                </view>
                <view class="list_fontBox">
                  <text
                    :class="{ under_fontStyle: sizeIndex == 0 }"
                    style="width: 100%"
                    class="list_fontSyle"
                    >1:1</text
                  >
                </view>
              </view>

              <view @click="sizeChange(1)" class="size_list">
                <view class="vipBox">
                  <image src="/static/img/VIP@3x.png" mode="scaleToFill"
                /></view>
                <view
                  class="list_box"
                  :class="{
                    under_borderStyle: sizeIndex == 1,
                    under_bgStyle: sizeIndex == 1,
                  }"
                >
                  <view class="list_box_w">
                    <view style="height: 25px">
                      <image
                        style="width: 16px; height: 25px"
                        src="/static/img/1_2.png"
                      />
                    </view>
                  </view>
                </view>
                <view class="list_fontBox">
                  <text
                    :class="{ under_fontStyle: sizeIndex == 1 }"
                    class="list_fontSyle"
                    >1:2</text
                  >
                </view>
              </view>

              <view @click="sizeChange(2)" class="size_list">
                <view class="vipBox">
                  <image src="/static/img/VIP@3x.png" mode="scaleToFill"
                /></view>
                <view
                  class="list_box"
                  :class="{
                    under_borderStyle: sizeIndex == 2,
                    under_bgStyle: sizeIndex == 2,
                  }"
                >
                  <view class="list_box_w">
                    <view style="height: 20px">
                      <image
                        style="width: 25px; height: 20px"
                        src="/static/img/4_3.png"
                      />
                    </view>
                  </view>
                </view>
                <view class="list_fontBox">
                  <text
                    :class="{ under_fontStyle: sizeIndex == 2 }"
                    class="list_fontSyle"
                    >4:3</text
                  >
                </view>
              </view>

              <view @click="sizeChange(3)" class="size_list">
                <view class="vipBox">
                  <image src="/static/img/VIP@3x.png" mode="scaleToFill"
                /></view>
                <view
                  class="list_box"
                  :class="{
                    under_borderStyle: sizeIndex == 3,
                    under_bgStyle: sizeIndex == 3,
                  }"
                >
                  <view class="list_box_w">
                    <view style="height: 23px">
                      <image
                        style="width: 18px; height: 23px"
                        src="/static/img/3_4.png"
                      />
                    </view>
                  </view>
                </view>
                <view class="list_fontBox">
                  <text
                    :class="{ under_fontStyle: sizeIndex == 3 }"
                    class="list_fontSyle"
                    >3:4</text
                  >
                </view>
              </view>

              <view @click="sizeChange(4)" class="size_list">
                <view class="vipBox">
                  <image src="/static/img/VIP@3x.png" mode="scaleToFill"
                /></view>
                <view
                  class="list_box"
                  :class="{
                    under_borderStyle: sizeIndex == 4,
                    under_bgStyle: sizeIndex == 4,
                  }"
                >
                  <view class="list_box_w">
                    <view style="height: 18px">
                      <image
                        style="width: 25px; height: 18px"
                        src="/static/img/16_9.png"
                      />
                    </view>
                  </view>
                </view>
                <view class="list_fontBox">
                  <text
                    :class="{ under_fontStyle: sizeIndex == 4 }"
                    class="list_fontSyle"
                    >16:9</text
                  >
                </view>
              </view>

              <view @click="sizeChange(5)" class="size_list">
                <view class="vipBox">
                  <image src="/static/img/VIP@3x.png" mode="scaleToFill"
                /></view>
                <view
                  class="list_box"
                  :class="{
                    under_borderStyle: sizeIndex == 5,
                    under_bgStyle: sizeIndex == 5,
                  }"
                >
                  <view class="list_box_w">
                    <view style="height: 25px">
                      <image
                        style="width: 18px; height: 25px"
                        src="/static/img/9_16.png"
                      />
                    </view>
                  </view>
                </view>
                <view class="list_fontBox">
                  <text
                    :class="{ under_fontStyle: sizeIndex == 5 }"
                    class="list_fontSyle"
                    >9:16</text
                  >
                </view>
              </view>

              <!-- <view @click="sizeChange(5)" class="size_list">
                <view class="list_phoneBox">
                  <view class="list_phone">
                    <view style="width: 100%">
                      <view class="list_phone_n">
                        <view
                          :class="{ under_bgStyle: sizeIndex == 5 }"
                          class="list_phone_n_box"
                        >
                          <view
                            style="
                              width: 80%;
                              height: 30px;
                              margin: auto;
                              background: #141414;
                            "
                          ></view>
                          <view
                            style="
                              width: 3px;
                              height: 3px;
                              border-radius: 100%;
                              background: #141414;
                              margin: 1px auto;
                            "
                          ></view>
                        </view>
                      </view>
                    </view>
                  </view>
                </view>

                <view class="list_fontBox">
                  <text
                    :class="{ under_fontStyle: sizeIndex == 5 }"
                    class="list_fontSyle"
                    >壁纸</text
                  >
                </view>
              </view> -->
            </view>
          </view>
        </view>
        <!-- 分辨率 -->
        <view class="view_resolution">
          <view>
            <span class="title-font"> <text>分辨率 </text></span>
          </view>
          <view class="resolution_box">
            <view class="resolution_boxList">
              <view class="resolution_boxList_item">
                <view
                  @click="resolutionChange(0)"
                  :class="{ under_resolution: resolutionIndex == 0 }"
                  class="resolution_itemBox"
                >
                  <view class="resolution_itemBox_n">
                    <text class="resolution_itemBox_font">标准</text></view
                  >
                </view>

                <view
                  @click="resolutionChange(1)"
                  :class="{ under_resolution: resolutionIndex == 1 }"
                  class="resolution_itemBox"
                >
                  <view class="vipBox">
                    <image src="/static/img/VIP@3x.png" mode="scaleToFill"
                  /></view>
                  <view class="resolution_itemBox_n">
                    <text class="resolution_itemBox_font"
                      >高清 | 1币</text
                    ></view
                  >
                </view>
              </view>
            </view>
          </view>
        </view>
        <!-- 生产数量 -->
        <view style="height: 120px" class="view_resolution">
          <view>
            <span class="title-font">
              <text>生成数量 </text>
              <span style="float: right; font-size: 13px; padding-top: 3px"
                ><text style="color: #b7b3bd"
                  >二次生成多张图片， 超高性价比
                </text></span
              >
            </span>
          </view>
          <view class="resolution_box">
            <view class="resolution_boxList">
              <view class="resolution_boxList_item" style="width: 100%">
                <view
                  style="width: 23%"
                  @click="generateNumChange(0)"
                  :class="{ under_resolution: generateNumIndex == 0 }"
                  class="resolution_itemBox"
                >
                  <view class="resolution_itemBox_n">
                    <text class="resolution_itemBox_font">1</text></view
                  >
                </view>

                <view
                  style="width: 23%"
                  @click="generateNumChange(1)"
                  :class="{ under_resolution: generateNumIndex == 1 }"
                  class="resolution_itemBox"
                >
                  <view class="vipBox">
                    <image src="/static/img/VIP@3x.png" mode="scaleToFill"
                  /></view>
                  <view class="resolution_itemBox_n">
                    <text class="resolution_itemBox_font">4</text></view
                  >
                </view>

                <view
                  style="width: 23%"
                  @click="generateNumChange(2)"
                  :class="{ under_resolution: generateNumIndex == 2 }"
                  class="resolution_itemBox"
                >
                  <view class="vipBox">
                    <image src="/static/img/VIP@3x.png" mode="scaleToFill"
                  /></view>
                  <view class="resolution_itemBox_n">
                    <text class="resolution_itemBox_font">8</text></view
                  >
                </view>

                <view
                  style="width: 23%"
                  @click="generateNumChange(3)"
                  :class="{ under_resolution: generateNumIndex == 3 }"
                  class="resolution_itemBox"
                >
                  <view class="vipBox">
                    <image src="/static/img/VIP@3x.png" mode="scaleToFill"
                  /></view>
                  <view class="resolution_itemBox_n">
                    <text class="resolution_itemBox_font">16</text></view
                  >
                </view>
              </view>
            </view>
          </view>
        </view>

        <!-- 底部按钮 -->
        <view class="bottom_btnBox">
          <view class="bottom_btn">
            <view class="btn_fontBox">
              <span>
                <text class="font_one">开始生成</text>
              </span>
              <span>
                <text class="font_two">| &nbsp; 消耗2</text>
              </span>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import imgUpload from "../../components/sunui-upimg/sunui-upimg.vue";
export default {
  components: {
    imgUpload,
  },
  data() {
    return {
      generateNumIndex: 0, // 生成数量class下标
      resolutionIndex: 0, // 分辨率class下标
      sizeIndex: 0, // 尺寸class下标
      noTitle: "",
      viewIndex: 0, // 风格class下标
      artistIndex: 0, // 艺术家class下标
      titsel: -1, //画板class下标
      // ...
      titlist: ["春风十里", "樱樱少女", "春田兔兔", "波动郁金香", "谷雨初晴"],
      titlist2: [
        {
          title: "春风十里",
          src: "https://cdn.wujiebantu.com/ai/0C5833EFFA6C93528BB33516C88CBC5B-01.jpg?imageView2/2/w/800/q/75/format/webp",
        },
        {
          title: "樱樱少女",
          src: "https://cdn.wujiebantu.com/ai/4E06F19465F7F445A6FF7AFD7FFC5F2D-01.jpg?imageView2/2/w/800/q/75/format/webp",
        },
        {
          title: "春田兔兔",
          src: "https://cdn.wujiebantu.com/ai/D427DA3C0DB054F1A4F9C0E3B570262E-01.jpg?imageView2/2/w/800/q/75/format/webp",
        },
        {
          title: "波动郁金香",
          src: "https://cdn.wujiebantu.com/ai/DB935D37F8EBAC4ABDBA0812C42BE027-01.jpg?imageView2/2/w/800/q/75/format/webp",
        },
        {
          title: "谷雨初晴",
          src: "https://cdn.wujiebantu.com/ai/06BF5E8FA3C2C02A7BC8BA3259C12E01-01.jpg?imageView2/2/w/800/q/75/format/webp",
        },
        {
          title: "春风十里",
          src: "https://cdn.wujiebantu.com/ai/93B2F08E7C3FA1B6ACFD7E5DFB458259-01.jpg?imageView2/2/w/800/q/75/format/webp",
        },
        {
          title: "樱樱少女",
          src: "https://cdn.wujiebantu.com/ai/13E8742101E70750B46DCE9FF9A58065-01.jpg?imageView2/2/w/800/q/75/format/webp",
        },
        {
          title: "春田兔兔",
          src: "https://cdn.wujiebantu.com/ai/D427DA3C0DB054F1A4F9C0E3B570262E-01.jpg?imageView2/2/w/800/q/75/format/webp",
        },
        {
          title: "波动郁金香",
          src: "https://cdn.wujiebantu.com/ai/D4DED4724678983630DE4D311013169F-01.jpg?imageView2/2/w/800/q/75/format/webp",
        },
        {
          title: "谷雨初晴",
          src: "https://cdn.wujiebantu.com/ai/1FEDA49D6287C047652B7349FB1C405D-01.jpg?imageView2/2/w/800/q/75/format/webp",
        },
        {
          title: "春风十里",
          src: "https://cdn.wujiebantu.com/ai/93B2F08E7C3FA1B6ACFD7E5DFB458259-01.jpg?imageView2/2/w/800/q/75/format/webp",
        },
        {
          title: "樱樱少女",
          src: "https://cdn.wujiebantu.com/ai/4E06F19465F7F445A6FF7AFD7FFC5F2D-01.jpg?imageView2/2/w/800/q/75/format/webp",
        },
        {
          title: "春田兔兔",
          src: "https://cdn.wujiebantu.com/ai/DB935D37F8EBAC4ABDBA0812C42BE027-01.jpg?imageView2/2/w/800/q/75/format/webp",
        },
        {
          title: "波动郁金香",
          src: "https://cdn.wujiebantu.com/ai/A667B3E062AF0E15E8BEAAA892303B0D-01.jpg?imageView2/2/w/800/q/75/format/webp",
        },
        {
          title: "谷雨初晴",
          src: "https://cdn.wujiebantu.com/ai/5A96A1DC3855332BBD57A8F3B40E8E84-01.jpg?imageView2/2/w/800/q/75/format/webp",
        },
        {
          title: "谷雨初晴",
          src: "https://cdn.wujiebantu.com/ai/0C5833EFFA6C93528BB33516C88CBC5B-01.jpg?imageView2/2/w/800/q/75/format/webp",
        },
      ],
      titContent: [
        "test测试1,test测试2,test测试3",
        "test测试11,test测试22,test测试33",
      ],
      value: "",
      items: [
        {
          value: "USA",
          name: "造梦画板",
          title: "来自造梦团队训练的专属文生图模型，稳定、高速、百搭",
          checked: "true",
        },
        {
          value: "CHN",
          name: "许愿画板",
          title: "通过文字对图片进行二次编辑的模型",
        },
        {
          value: "ControlNet画板",
          name: "ControlNet画板",
          title: "可定制化参考姿势、边缘、深度、线稿生成图片的模型",
        },
      ],
      current: 0,
      imgList: [],
      imgUploadUrl: "",
    };
  },
  methods: {
    generateNumChange(e) {
      console.log(e);
      this.generateNumIndex = e;
    },
    resolutionChange(e) {
      console.log(e);
      this.resolutionIndex = e;
    },
    sizeChange(e) {
      console.log(e);
      this.sizeIndex = e;
    },
    getImageInfo(e) {
      let that = this;
      console.log(111, e);
    },
    switch2Change(e) {
      console.log(e);
      //   this.viewIndex = e;
    },
    styleChange(e) {
      console.log(e);
      this.viewIndex = e;
    },
    artistChange(e) {
      console.log(e);
      this.artistIndex = e;
    },
    didSeltit(idx) {
      console.log(1111 + "a" + idx);
      this.titsel = idx;
      this.value = this.titContent[idx];
      console.log(1111 + "b" + this.titsel);
    },
    // ...
    onInput(e) {
      console.log(111, e);
      this.value = e.detail.value;
    },
    radioChange: function (evt) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].value === evt.detail.value) {
          this.current = i;
          break;
        }
      }
    },
  },
};
</script>

<style  scoped>
.content-box {
  width: 710rpx;
  margin: auto;
}
.background {
  position: absolute;
  width: 100%;
  height: auto;
  background-color: #17141a;
}
.top-title {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180rpx;
  background-color: #17141a;
}
.top-title span {
  color: white;
  font-size: 16px;
  margin-top: 30px;

  /* margin-left: 20px; */
  /* margin-top: 30px; */
}
.view-title {
  width: 100%;
  height: auto;
  /* background-color: red; */
}
.view-inputBox {
  width: 100%;
  height: 100%;
  margin-top: 15px;

  /* background-color: blue; */
}
.title-font text {
  color: white;
}
.view-input {
  /* padding: 5px; */
  border-radius: 4px;
  background: #2c2c2c;
  width: 95%;
  color: white;

  /* border: 1px solid #999999;width:100% */
}
.headerv_list:first-child {
  margin-left: 0 !important;
}
.view-drawing {
  margin-top: 25px;
  width: 100%;
  height: 100%;
  /* background-color: red; */
}
.view-style {
  margin-top: 25px;
  width: 100%;
  height: 100%;
  /* padding-bottom: 30px; */
  /* background-color: red; */
}
.radioNode >>> .uni-radio-input {
  background: #17141a;
  border: 1px solid #555555;
  width: 15px;
  height: 15px;
}
.style-viewBox {
  display: flex;
  flex-flow: column wrap;
  height: 200px;
}
.view-dream {
  margin-top: 25px;
  width: 100%;
  height: 100%;
  /* background-color: red; */
}
.view-artist {
  /* background: blue; */
  width: 100%;
  height: 150px;
  margin-top: 25px;
}
.style-viewBox {
  display: flex;
  flex-flow: column wrap;
  height: 200px;
}

.style-artistBox {
  display: flex;
  /* flex-flow: column wrap; */
  height: 200px;
}
.under_resolution {
  background: repeating-linear-gradient(to left, #004c7d, #2c2c2c) !important;
  border: 2px solid #4ca5ed !important;
}
</style>

<style lang="scss" scoped>
.bottom_btnBox {
  width: 100%;
  height: 80px;
  .bottom_btn {
    width: 710rpx;
    height: 48px;
    position: fixed;
    /* #ifdef APP-PLUS */
    bottom: 12px;
    /* #endif */
    /* #ifdef H5 */
    bottom: 60px;
    /* #endif */
    justify-content: center;
    display: flex;
    align-items: center;
    border-radius: 24px;
    background: linear-gradient(
      -90deg,
      rgba(24, 117, 255, 1) 0%,
      rgba(0, 201, 255, 1) 50%,
      rgba(6, 167, 255, 1) 100%
    );
  }
  .btn_fontBox {
    width: 45%;
    display: flex;
    height: 80%;
    // background: yellow;
    justify-content: space-around;
    align-items: center;
    .font_one {
      color: white;
      font-size: 18px;
      font-family: YouSheBiaoTiHei;
    }
    .font_two {
      color: white;
      font-size: 14px;
    }
  }
}

.vipBox {
  position: absolute;
  margin-left: -3px;
  margin-top: -11px;
  image {
    width: 30px;
    height: 15px;
  }
}
.view_size {
  width: 100%;
  height: 100%;
  margin-top: 25px;
  .size_box {
    display: flex;
    width: 95%;
    justify-content: space-around;
  }
  .size_list {
    width: 45px;
    height: auto;
    // background: blue;
  }
  .list_box {
    width: 100%;
    display: flex;
    height: 45px;
    box-sizing: border-box;
    // border: 1px solid #434343;
    background: #393939;
    // background: repeating-linear-gradient(to left, #004c7d, #2c2c2c) !important;

    border-radius: 5px;
  }
  .list_box_w {
    height: 35px;
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .list_box_n {
    height: 35px;
    width: 100%;
    background: #434343;
  }
  .list_fontBox {
    width: 100%;
    text-align: center;
  }
  .list_fontSyle {
    color: #434343;
    font-size: 14px;
  }
  .list_phoneBox {
    width: 100%;
    display: flex;
    height: 45px;
    // border: 1px solid #6e34af;
    border-radius: 5px;
  }
  .list_phone {
    height: 35px;
    width: 80%;
    margin: auto;
  }
  .list_phone_w {
    height: 25px;
    width: 100%;
    // background: #6e34af;
  }
  .list_phone_n {
    width: 60%;
    margin: auto;
    height: 38px;
    // width: 100%;
    // background: red;
  }
  .under_fontStyle {
    color: #6e34af;
  }
  .under_bgStyle {
    // background: #6e34af !important;
    background: repeating-linear-gradient(to left, #004c7d, #2c2c2c) !important;
    //   border: 2px solid #4ca5ed;
  }
  .under_borderStyle {
    border: 2px solid #4ca5ed;
  }
  .list_phone_n_box {
    width: 100%;
    padding-top: 3px;
    background: #434343;
    height: 93%;
  }
}
.view_no {
  width: 100%;
  height: 100%;
  margin-top: 25px;
}
.view_resolution {
  width: 100%;
  height: 100%;
  margin-top: 25px;
  .resolution_box {
    margin-top: 15px;
    height: auto;
  }
  .resolution_boxList {
    width: 100%;
    height: 50px;
  }
  .resolution_boxList_item {
    width: 69%;
    height: 100%;
    display: flex;
    justify-content: space-around;
  }
  .resolution_itemBox {
    width: 110px;
    height: 40px;
    background: #262626;
    box-sizing: border-box;
    border-radius: 7px;
    border: 2px solid transparent;
  }
  .resolution_itemBox_n {
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    align-items: center;
    height: 100%;
  }
  .resolution_itemBox_font {
    color: #dbdbdb;
    font-size: 14px;
  }
}
.headerv {
  width: 100%;
  white-space: nowrap;
  .headerv_list {
    color: #bebebe;
    background: #252525;
    margin-left: 155px;
    padding: 3;
    padding-left: 8px;
    padding-right: 12px;
    width: auto;
    font-size: 14px;
    height: 30px;
    line-height: 30px;
    border-radius: 4px;
    margin-left: 15px;
    text-align: center;
    display: inline-block;
    margin-top: 15px;
  }

  .headerv_list_sc {
    border: 1px solid #6b59cd;
  }
}

.view-styleBox {
  width: 100%;
  white-space: nowrap;
  .styBox_list {
    box-sizing: border-box;
    color: #bebebe;
    background: #252525;
    margin-left: 155px;
    background-size: cover;
    width: 80px;
    font-size: 14px;
    height: 80px;
    line-height: 30px;
    border-radius: 4px;
    margin-left: 15px;
    text-align: center;
    display: inline-block;
    margin-top: 15px;
  }

  .styBox_list_sc {
    border: 1px solid #9342ed;
  }
}

.view-artistBox {
  width: 100%;
  white-space: nowrap;
  .artist_list {
    box-sizing: border-box;
    color: #bebebe;
    background: #252525;
    margin-left: 155px;
    background-size: cover;
    width: 80px;
    font-size: 14px;
    height: 80px;
    line-height: 30px;
    border-radius: 4px;
    margin-left: 15px;
    text-align: center;
    display: inline-block;
    margin-top: 15px;
  }

  .artist_list_sc {
    border: 1px solid #9342ed;
  }
}
.view-reference {
  margin-top: 25px;
  width: 100%;
  height: 100%;
  .reference-box {
    display: flex;
    align-items: center;
  }
  .reference-box-right {
    width: 75%;
    height: 132rpx;
    display: flex;

    align-items: center;
  }
  .reference-box-rightJ {
    border-width: 8px;
    border-style: solid;
    border-color: transparent #2b2b2b transparent transparent;
  }
  .reference-box-right-conent {
    width: 95%;
    padding-left: 15px;
    height: 132rpx;
    background: #2b2b2b;
  }
  .right-content-title {
    margin-top: 5px;
    color: white;
  }
}
</style>