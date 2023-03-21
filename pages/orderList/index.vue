<template>
  <view>
    <top-view />
    <scroll-view scroll-x class="bg-white nav fixed">
      <view class="flex text-center">
        <view
          class="cu-item flex-sub text-df"
          @click="navselect(index)"
          v-for="(nav, index) in navlist"
          :key="index"
        >
        </view>
      </view>
    </scroll-view>
    <view v-if="total[currentIndex] != 0 && user.id">
      <view v-for="(orderdetail, index) in order_list" :key="index">
        <view
          class="bg-white margin-sm padding-sm solids-bottom shadow radius text-content"
          @click="goDetail(orderdetail)"
        >
          <view class="flex justify-between">
            <view class="text-bold" style="flex-shrink: 0">
              <!-- <text class="text-red">{{
                orderdetail.status == "0" ? "待支付" : ""
              }}</text>
              <text class="text-green">{{
                orderdetail.status == "1" ? "已支付" : ""
              }}</text>
              <text class="text-red">{{
                orderdetail.status == "2" ? "进行中" : ""
              }}</text>
              <text class="text-blue">{{
                orderdetail.status == "3" ? "已完成" : ""
              }}</text>
              <text class="text-grey">{{
                orderdetail.status == "4" ? "已取消" : ""
              }}</text> -->
              <text class="text-grey"> 已取消</text>
            </view>
            <view @click.stop="paste(orderdetail.order_id)"
              ><text class="icon-goods padding-right-sm"></text
              ><text class="text-bold solids-bottom">{{
                orderdetail.order_id
              }}</text></view
            >
          </view>
          <view v-if="orderdetail.type != 'BOOKSELL'">
            <view class="flex padding-top-sm solids-top">
              <image
                src="http://asset.duozhuayu.com/sell_intro_2.png"
                style="flex-shrink: 0"
                mode="aspectFill"
                class="shadow cover radius solids"
              ></image>
              <view
                class="flex text-content padding-left justify-between"
                style="flex-grow: 1"
              >
                <view>{{ orderdetail.goods_name }}</view>
                <view style="flex-shrink: 0">
                  <view>￥{{ orderdetail.price }}</view>
                  <view class="text-grey text-center">×1</view>
                </view>
              </view>
            </view>
          </view>
          <view v-if="orderdetail.type == 'BOOKSELL'">
            <view
              class="bg-white margin-xs padding-xs shadow radius text-content"
              v-for="(item, index) in orderdetail.attach"
              :key="index"
            >
              <view class="flex padding-top-sm solids-top">
                <image
                  :src="item.cover_image"
                  style="flex-shrink: 0"
                  mode="aspectFill"
                  class="shadow cover radius solids"
                ></image>
                <view
                  class="flex text-content padding-left justify-between"
                  style="flex-grow: 1"
                >
                  <view>{{ item.book_name }}</view>
                  <view style="flex-shrink: 0">
                    <view>￥{{ item.sell_price / 100 }}</view>
                    <view class="text-grey text-center">×{{ item.num }}</view>
                  </view>
                </view>
              </view>
            </view>
          </view>
          <view class="flex justify-end"
            >共{{ orderdetail.type == "BOOKSELL" ? "1" : "1" }}件商品，合计{{
              orderdetail.price
            }}元</view
          >
          <!-- <view class="flex justify-end" style="font-size: 24upx">
            <button
              @click.stop="kefu"
              class="round lines-grey cu-btn shadow mid margin-right-sm"
            >
              联系客服
            </button>
            <view v-if="orderdetail.status == '0'">
              <view
                class="round cu-btn lines-grey mid shadow margin-right-sm"
                @click.stop="cancel(index)"
                >取消订单</view
              >
              <view
                class="round cu-btn lines-orange mid shadow"
                @click.stop="goDetail(orderdetail)"
                >立即付款</view
              >
            </view>
          </view> -->
        </view>
      </view>
      <!-- <view style="margin-bottom: 50upx">
        <uni-pagination
          :total="total[currentIndex]"
          pageSize="10"
          :current="pages"
          @change="paginat"
        >
        </uni-pagination>
      </view> -->
    </view>
  </view>
</template>

<script>
import topView from "@/components/top-view/index.vue";
import uniPagination from "../../components/uni-pagination/uni-pagination.vue";
export default {
  data() {
    return {
      navlist: ["全部"],
      currentIndex: 0,
      pages: 1,
      order_list: [
        {
          id: "198",
          order_id: "20190816103156",
          goods_name: "精品二手书",
          price: "10.00",
          status: "0",
          user_id: "0",
          attach: {
            1: {
              book_name: "毛泽东思想和中国特色社会主义理论体系概论 毛概",
              sell_price: "1000",
              cover_image: "https://s2.ax1x.com/2019/06/09/VsnpTI.jpg",
              num: 1,
            },
          },
          addr_id: "95",
          type: "BOOKSELL",
          sushe: null,
          app_userid: "64",
        },
        {
          id: "192",
          order_id: "20190816000113",
          goods_name: "精品二手书",
          price: "11.00",
          status: "0",
          user_id: "0",
          attach: {
            3: {
              book_name: "线性代数",
              sell_price: "1100",
              cover_image: "https://s2.ax1x.com/2019/06/10/V6IUX9.jpg",
              num: 1,
            },
          },
          addr_id: "95",
          type: "BOOKSELL",
          sushe: null,
          app_userid: "64",
        },
        {
          id: "190",
          order_id: "20190815231334",
          goods_name: "精品二手书",
          price: "40.40",
          status: "1",
          user_id: "0",
          attach: {
            3: {
              book_name: "线性代数",
              sell_price: "1100",
              cover_image: "https://s2.ax1x.com/2019/06/10/V6IUX9.jpg",
              num: 2,
            },
            5: {
              book_name: "马克思主义基本原理 马原",
              sell_price: "920",
              cover_image: "https://s2.ax1x.com/2019/06/29/ZQCnKA.jpg",
              num: 2,
            },
          },
          addr_id: "95",
          type: "BOOKSELL",
          sushe: null,
          app_userid: "64",
        },
        {
          id: "189",
          order_id: "20190815231255",
          goods_name: "精品二手书",
          price: "20.20",
          status: "4",
          user_id: "0",
          attach: {
            3: {
              book_name: "线性代数",
              sell_price: "1100",
              cover_image: "https://s2.ax1x.com/2019/06/10/V6IUX9.jpg",
              num: "1",
            },
            5: {
              book_name: "马克思主义基本原理 马原",
              sell_price: "920",
              cover_image: "https://s2.ax1x.com/2019/06/29/ZQCnKA.jpg",
              num: 1,
            },
          },
          addr_id: null,
          type: "BOOKSELL",
          sushe: null,
          app_userid: "64",
        },
        {
          id: "188",
          order_id: "20190815231147",
          goods_name: "精品二手书",
          price: "10.00",
          status: "1",
          user_id: "0",
          attach: {
            1: {
              book_name: "毛泽东思想和中国特色社会主义理论体系概论 毛概",
              sell_price: "1000",
              cover_image: "https://s2.ax1x.com/2019/06/09/VsnpTI.jpg",
              num: 1,
            },
          },
          addr_id: "95",
          type: "BOOKSELL",
          sushe: null,
          app_userid: "64",
        },
        {
          id: "187",
          order_id: "20190815230709",
          goods_name: "精品二手书",
          price: "10.00",
          status: "4",
          user_id: "0",
          attach: {
            1: {
              book_name: "毛泽东思想和中国特色社会主义理论体系概论 毛概",
              sell_price: "1000",
              cover_image: "https://s2.ax1x.com/2019/06/09/VsnpTI.jpg",
              num: 1,
            },
          },
          addr_id: null,
          type: "BOOKSELL",
          sushe: null,
          app_userid: "64",
        },
        {
          id: "182",
          order_id: "20190813134847",
          goods_name: "精品二手书",
          price: "11.60",
          status: "4",
          user_id: "0",
          attach: {
            26: {
              book_name: "周三多管理学笔记和课后习题详解",
              sell_price: "1160",
              cover_image: "https://s2.ax1x.com/2019/06/29/ZQyeAg.jpg",
              num: 1,
            },
          },
          addr_id: "95",
          type: "BOOKSELL",
          sushe: null,
          app_userid: "64",
        },
        {
          id: "180",
          order_id: "20190712235556",
          goods_name: "精品二手书",
          price: "10.00",
          status: "4",
          user_id: "0",
          attach: {
            1: {
              book_name: "毛泽东思想和中国特色社会主义理论体系概论 毛概",
              sell_price: "1000",
              cover_image: "https://s2.ax1x.com/2019/06/09/VsnpTI.jpg",
              num: 1,
            },
          },
          addr_id: "95",
          type: "BOOKSELL",
          sushe: null,
          app_userid: "64",
        },
        {
          id: "179",
          order_id: "20190711190921",
          goods_name: "精品二手书",
          price: "17.40",
          status: "4",
          user_id: "0",
          attach: {
            17: {
              book_name: "会计学",
              sell_price: "1740",
              cover_image: "https://s2.ax1x.com/2019/06/29/ZQAk1U.jpg",
              num: 1,
            },
          },
          addr_id: null,
          type: "BOOKSELL",
          sushe: null,
          app_userid: "64",
        },
        {
          id: "178",
          order_id: "20190711190912",
          goods_name: "精品二手书",
          price: "10.40",
          status: "0",
          user_id: "0",
          attach: {
            24: {
              book_name: "会计学学习指导与习题集",
              sell_price: "1040",
              cover_image: "https://s2.ax1x.com/2019/06/29/ZQsRXV.jpg",
              num: 1,
            },
          },
          addr_id: null,
          type: "BOOKSELL",
          sushe: null,
          app_userid: "64",
        },
      ],
      total: { 0: "20", 1: "4", 2: "8", 3: "1", 4: "0" }, //各类订单的总数
      status: "",
      user: {
        id: 666,
      }, //此对象为用户信息，实际线上环境为vuex中的全局对象，像后端请求数据十需要使用
    };
  },
  components: { uniPagination, topView },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import url("./colorui.css");
</style>
<style>
.cover {
  width: 150upx;
  height: 150upx;
}
</style>
