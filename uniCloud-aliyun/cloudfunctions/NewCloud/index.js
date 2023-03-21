//云函数代码

'use strict';

exports.main = async (event, context) => {

    //event为客户端上传的参数

    exports.main = async (event, context) => {

        //event为客户端上传的参数

        console.log('event : ', event);

        console.log('参数', event.queryStringParameters);

        // event里包含着客户端提交的参数

        const res = await uniCloud.getPhoneNumber({

            appid: '__UNI__76AD0C1', // 替换成自己开通一键登录的应用的DCloud appid，使用callFunction方式调用时可以不传（会自动取当前客户端的appid），如果使用云函数URL化的方式访问必须传此参数

            provider: 'univerify',

            apiKey: '997b3e17bead301dd15c3f7d9a9cb2ed', // 在开发者中心开通服务并获取apiKey

            apiSecret: '94d62400b65561327029535c4e4631cd', // 在开发者中心开通服务并获取apiSecret

            access_token: event.queryStringParameters.access_token,

            openid: event.queryStringParameters.openid

            //通过自己服务器获取的参数和官方事列不一样要这样写

        })

        console.log('res', res); // res里包含手机号

        // 执行用户信息入库等操作，正常情况下不要把完整手机号返回给前端

        // 如果数据库在uniCloud上，可以直接入库

        // 如果数据库不在uniCloud上，可以通过 uniCloud.httpclient API，将手机号通过http方式传递给其他服务器的接口，详见：简介@intro | uni-app官网

        return {

            code: 0,

            message: '获取手机号成功',

            data: res

        }

    };

    //返回数据给客户端

    return event

};

//所有云函数写完过后一定要点击cloudFunctions右键上传云函数。 第一次上传过后有可能回出现问题，关闭编辑器重开就行



// 客户端代码

let that = this

uni.preLogin({

    provider: 'univerify',

    success() { //预登录成功

        // 显示一键登录选项

        uni.login({

            provider: 'univerify',

            univerifyStyle: { // 自定义登录框样式

                //参考`univerifyStyle 数据结构`这个可以参考官网的一键登录自定义事列我就不一一写出来了

                "fullScreen": false, // 是否全屏显示，默认值： false

                "backgroundColor": "#ffffff", // 授权页面背景颜色，默认值：#ffffff

                "backgroundImage": "", // 全屏显示的背景图片，默认值："" （仅支持本地图片，只有全屏显示时支持）

                "icon": {

                    "path": "static/login/logo.png" // 自定义显示在授权框中的logo，仅支持本地图片 默认显示App logo

                },



                "phoneNum": {

                    "color": "#202020" // 手机号文字颜色 默认值：#202020

                },

                "slogan": {

                    "color": "#BBBBBB" // slogan 字体颜色 默认值：#BBBBBB

                },

                "authButton": {

                    "normalColor": "#3479f5", // 授权按钮正常状态背景颜色 默认值：#3479f5

                    "highlightColor": "#2861c5", // 授权按钮按下状态背景颜色 默认值：#2861c5（仅ios支持）

                    "disabledColor": "#73aaf5", // 授权按钮不可点击时背景颜色 默认值：#73aaf5（仅ios支持）

                    "textColor": "#ffffff", // 授权按钮文字颜色 默认值：#ffffff

                    "title": "本机号码一键登录", // 授权按钮文案 默认值：“本机号码一键登录”

                    "borderRadius": "24px" // 授权按钮圆角 默认值："24px" （按钮高度的一半）

                },

                "otherLoginButton": {

                    "visible": false, // 是否显示其他登录按钮，默认值：true

                    "normalColor": "", // 其他登录按钮正常状态背景颜色 默认值：透明

                    "highlightColor": "", // 其他登录按钮按下状态背景颜色 默认值：透明

                    "textColor": "#656565", // 其他登录按钮文字颜色 默认值：#656565

                    "title": "其他登录方式", // 其他登录方式按钮文字 默认值：“其他登录方式”

                    "borderColor": "", //边框颜色 默认值：透明（仅iOS支持）

                    "borderRadius": "0px" // 其他登录按钮圆角 默认值："24px" （按钮高度的一半）

                },

            },

            success(res) { // 登录成功

                // {openid:'登录授权唯一标识',access_token:'接口返回的 token'}

                that.dataL.access_token = res.authResult.access_token

                that.dataL.openid = res.authResult.openid

                let header = {

                    "Content-Type": "multipart/form-data",

                    "Authorization": "Basic cGlnOnBpZw=="

                }

                uni.request({

                    url: url,//为自己服务器的链接

                    header: header,

                    method: 'post',

                    timeout: 20000,

                    success: (res) => {

                        if (res.statusCode == 200) {

                            //服务端返回的结果

                        } else {

                            uni.showToast({

                                title: res.data.msg,

                                icon: "none"

                            })

                        }

                        uni.closeAuthView()

                    },

                })

                // uniCloud.callFunction({

                // name: 'cyq', // 你的云函数名称

                // data: {

                // 'access_token': res.authResult.access_token, // 客户端一键登录接口返回的access_token

                // 'openid': res.authResult.openid // 客户端一键登录接口返回的openid

                // }

                // }).then(res => {

                // console.log(res.result.mobile)

                // uni.showToast({

                // title:res.result.mobile,

                // icon:"none"

                // })

                // uni.closeAuthView()

                // }).catch(err=>{

                // uni.showToast({

                // title:'获取手机号失败，请使用邮箱登录',

                // icon:"none"

                // })

                // uni.closeAuthView()

                // // 处理错误

                // })



            },

            fail(res) { // 登录失败

                uni.showToast({

                    title: '你已取消一键登录，请使用其他登录',

                    icon: "none"

                })

                uni.closeAuthView()

            }

        })

    },

    fail(res) { // 预登录失败

        // 不显示一键登录选项（或置灰）

        // 根据错误信息判断失败原因，如有需要可将错误提交给统计服务器

        uni.showToast({

            title: '获取手机号失败，请使用邮箱登录',

            icon: "none"

        })

        // uni.closeAuthView()

    }

})



// java服务端代码

LinkedHashMap parameters = new LinkedHashMap(tokenRequest.getRequestParameters());

String accessToken = (String) parameters.get("accessToken");

String openid = (String) parameters.get("openid");

String signSha256 = HeaUtil.sha256_HMAC("access_token=" + accessToken + "&openid=" +

    openid, "your-secret-string");

String url = BASE_URL + "access_token=" + accessToken

    + "&openid=" + openid

    + "&sign=" + signSha256;

String result = restTemplate.getForObject(url, String.class);

JSONObject jsonObject = new JSONObject(result);

Integer code = jsonObject.getInt("code");

if (0 != code) {

    throw new UsernameNotFoundException("手机号获取失败！");

}

String mobile = jsonObject.getJSONObject("data").getStr("phoneNumber");

public class HeaUtil {

    /**
    
    * sha256_HMAC加密
    
    *
    
    * @param message 消息
    
    * @param secret 秘钥
    
    * @return 加密后字符串
    
    */

    public static String sha256_HMAC(String message, String secret) {

String hash = "";

        try {

Mac sha256_HMAC = Mac.getInstance("HmacSHA256");

SecretKeySpec secret_key = new SecretKeySpec(secret.getBytes(), "HmacSHA256");

            sha256_HMAC.init(secret_key);

            byte[] bytes = sha256_HMAC.doFinal(message.getBytes());

            hash = byteArrayToHexString(bytes);

        } catch (Exception e) {

            System.out.println("Error HmacSHA256 ===========" + e.getMessage());

        }

        return hash;



    }



    /**
    
    * 将加密后的字节数组转换成字符串
    
    *
    
    * @param b 字节数组
    
    * @return 字符串
    
    */

    private static String byteArrayToHexString(byte[] b) {

StringBuilder hs = new StringBuilder();

String stmp;

        for (int n = 0; b != null && n < b.length; n++) {

            stmp = Integer.toHexString(b[n] & 0XFF);

            if (stmp.length() == 1)

                hs.append('0');

            hs.append(stmp);

        }

        return hs.toString().toLowerCase();

    }

}