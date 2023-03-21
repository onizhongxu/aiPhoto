<template>
  <view
    style="border-radius: 14px; width: 94%; margin: auto"
    class="customSwiper-wrap"
  >
    <view
      class="customSwiper"
      @touchstart="onTouchstart"
      @touchmove="onTouchmove"
      @touchend="onTouchend"
      :style="
        'transition-duration: ' +
        cloneDuration +
        'ms;transform: translateX(-' +
        curIndex * (100 / cloneList.length) +
        '%); width: ' +
        cloneList.length * 100 +
        '%; height: ' +
        height +
        'rpx;'
      "
    >
      <slot>
        <view
          class="customSwiper-item"
          v-for="(item, index) in cloneList"
          :key="index"
          @click="handleClickItem(item)"
        >
          <image
            class="customSwiper-item__img"
            :src="item.src"
            mode="aspectFill"
          ></image>
        </view>
      </slot>
    </view>

    <!-- dots -->
    <view class="customSwiper-dots" v-if="indicatorDots">
      <view
        class="customSwiper-dot"
        :class="{ 'is-active': curDotIndex == index }"
        v-for="(item, index) in list"
        :key="index"
      ></view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      cloneList: [], //list的副本，会比list在前面和尾巴各多一条数据
      curIndex: 0, //当前索引
      curDotIndex: 0, //当前dot的索引
      cloneDuration: 500, //duration的副本
      isBannerMoving: false, //是否轮播图正在做切换中
      clearI: "",
      clearT: "",
      clearM: "",
      startX: 0,
      moveX: 0,
    };
  },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },

    /* 自动切换时间间隔，单位毫秒 */
    interval: {
      type: Number,
      default: 2000,
    },

    /* 自动切换时间间隔，单位毫秒 */
    duration: {
      type: Number,
      default: 500,
    },

    height: {
      type: Number,
      default: 356,
    },

    current: {
      type: Number,
      default: 0,
    },

    autoPlay: {
      type: Boolean,
      default: false,
    },

    indicatorDots: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    this.curIndex = this.current + 1;
    this.curDotIndex = this.current;
    this.cloneDuration = this.duration;
  },
  mounted() {
    this.handleData();
    this.startAuto()
  },
  methods: {
    handleClickItem(item) {
      this.$emit("clickItem", item);
    },

    /* 加工源数据生成源数据副本 */
    handleData() {
      this.cloneList = JSON.parse(JSON.stringify(this.list));
      if (this.list.length) {
        this.cloneList.unshift(this.list[this.list.length - 1]); //复制最后一张到队列最前
        this.cloneList.push(this.list[0]); //复制首张到队列最后
      }
    },

    handleAuto() {
      if (this.autoPlay) {
        this.startAuto();
      } else {
        this.stopAuto();
      }
    },

    /* 自动轮播 */
    startAuto() {
      // console.log('startAuto')
      clearInterval(this.clearI);
      this.clearI = setInterval(() => {
        if (this.cloneList.length && !this.isBannerMoving) {
          this.curIndex++;
        }
      }, this.interval);
    },

    stopAuto() {
      clearInterval(this.clearI);
    },

    onTouchstart(e) {
      this.stopAuto();
      this.startX = e.touches[0].clientX;
    },

    onTouchmove(e) {
      this.moveX = e.touches[0].clientX;
    },

    onTouchend(e) {
      this.handleAuto();
      // console.log(this.isBannerMoving, 'this.isBannerMoving on end', this.curIndex)
      if (!this.isBannerMoving) {
        if (this.moveX - this.startX > 0) {
          //手指向右滑动
          this.curIndex--;
        } else {
          //手指向左滑动
          this.curIndex++;
        }
      }
    },
  },
  watch: {
    list() {
      // console.log('list change')
      this.handleData();
      this.handleAuto();
    },
    autoPlay() {
      // console.log(this.autoPlay, 'autoPlay')
      this.handleAuto();
    },
    curIndex() {
      // console.log(this.curIndex, 'curIndex change', this.cloneList.length)
      if (!this.cloneList.length) {
        return false;
      }

      this.curDotIndex = this.curIndex - 1;

      /* 控制在最后或者最前的过渡时期，由于duration时间内isBannerMoving变量的原因导致此时间内滑动无效的问题 */
      if (this.curIndex > 1 && this.curIndex < this.cloneList.length - 2) {
        this.isBannerMoving = true;
        clearTimeout(this.clearM);
        this.clearM = setTimeout(() => {
          this.isBannerMoving = false;
        }, this.duration);
      }

      /* 切换到最后一张"克隆的首张"的时候，在做完切换动画后瞬间将画面定位到cloneList的第2张 */
      if (this.curIndex >= this.cloneList.length - 1) {
        this.curDotIndex = 0;
        clearTimeout(this.clearT);
        this.clearT = setTimeout(() => {
          // console.log('ff this.cloneDuration', this.curIndex, this.cloneList.length - 1)
          this.cloneDuration = 0; //瞬间切换，关闭过渡动效
          this.curIndex = 1;
        }, this.duration);
      } else if (this.curIndex <= 0) {
        //切换到第一张“克隆的最后一张”的时候，在做完切换动画后瞬间将画面定位到cloneList的倒数第2张
        this.curDotIndex = this.list.length - 1;
        clearTimeout(this.clearT);
        this.clearT = setTimeout(() => {
          // console.log('kk this.cloneDuration', this.curIndex, this.cloneList.length - 1)
          this.cloneDuration = 0; //瞬间切换，关闭过渡动效
          this.curIndex = this.cloneList.length - 2;
        }, this.duration);
      } else {
        /* 此处延时是为了做无缝过渡 */
        setTimeout(() => {
          this.cloneDuration = this.duration;
        }, 20);
      }
    },
  },
};
</script>

<style>
.customSwiper-wrap {
  position: relative;
  overflow: hidden;
}
.customSwiper {
  display: flex;
  transition: all 500ms;
}
.customSwiper.has-transition {
}
.customSwiper-item {
  width: 100%;
  height: 100%;
}
.customSwiper-item__img {
  width: 100%;
  height: 100%;
}
.customSwiper-dots {
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
}
.customSwiper-dot {
  display: inline-block;
  width: 12rpx;
  height: 4rpx;
  margin: 0 10rpx;
  background-color: #fff;
}
.customSwiper-dot.is-active {
  background-color: #fc7848;
  width: 24rpx;
}
</style>