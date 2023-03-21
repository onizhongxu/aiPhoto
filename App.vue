<script>
import initApp from "@/common/appInit.js";
import openApp from "@/common/openApp.js";
// #ifdef H5
openApp(); //创建在h5端全局悬浮引导用户下载app的功能
// #endif
import checkIsAgree from "@/pages/uni-agree/utils/uni-agree.js";
import uniIdPageInit from "@/uni_modules/uni-id-pages/init.js";
export default {
  globalData: {
    searchText: "",
    appVersion: {},
    config: {},
    $i18n: {},
    $t: {},
  },
  onLaunch: function () {
    console.log("App Launch");
    this.globalData.$i18n = this.$i18n;
    this.globalData.$t = (str) => this.$t(str);
    initApp();
    uniIdPageInit();

    // #ifdef APP-PLUS
    //checkIsAgree(); APP端暂时先用原生默认生成的。目前，自定义方式启动vue界面时，原生层已经请求了部分权限这并不符合国家的法规
    // #endif

    // #ifdef H5
    // checkIsAgree(); // 默认不开启。目前全球，仅欧盟国家有网页端同意隐私权限的需要。如果需要可以自己去掉注视后生效
    // #endif

    // #ifdef APP-PLUS
    //idfa有需要的用户在应用首次启动时自己获取存储到storage中
    /*var idfa = '';
			var manager = plus.ios.invoke('ASIdentifierManager', 'sharedManager');
			if(plus.ios.invoke(manager, 'isAdvertisingTrackingEnabled')){
				var identifier = plus.ios.invoke(manager, 'advertisingIdentifier');
				idfa = plus.ios.invoke(identifier, 'UUIDString');
				plus.ios.deleteObject(identifier);
			}
			plus.ios.deleteObject(manager);
			console.log('idfa = '+idfa);*/
    // #endif
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style>
/*每个页面公共css */
/*每个页面公共css */
/* 解决小程序和app滚动条的问题 */
/* #ifdef MP-WEIXIN || APP-PLUS */
::-webkit-scrollbar {
  display: none;
  width: 0 !important;
  height: 0 !important;
  -webkit-appearance: none;
  background: transparent;
  color: transparent;
}
/* #endif */

/* 解决H5 的问题 */
/* #ifdef H5 */
uni-scroll-view .uni-scroll-view::-webkit-scrollbar {
  /* 隐藏滚动条，但依旧具备可以滚动的功能 */
  display: none;
  width: 0 !important;
  height: 0 !important;
  -webkit-appearance: none;
  background: transparent;
  color: transparent;
}
/* #endif */
</style>
<style lang="scss">
@import url("/static/css/font.css");
@import url("/static/css/public.css");
</style>