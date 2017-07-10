
# Demo
![scan the qr code](https://rawgit.com/momopig/vue-flexible-app/master/qrCode.png)

[演示地址](https://momopig.github.io/#/)


# Description(基础架构简介)
本项目是基于vue开发的一个简易app，基础框架采用vue-cli 2.x版本，css预处理器使用的sass(scss)。与此同时，本项目还集成了如下前端类库和框架:

## lib-flexible
本web app项目的多终端适配方案，采用的是rem布局方案，具体使用的js类库为手淘团队分享的[lib-flexible](https://www.npmjs.com/package/lib-flexible),具体使用请参照：[使用Flexible实现手淘H5页面的终端适配](http://www.w3cplus.com/mobile/lib-flexible-for-html5-layout.html)。
## postcss-px2rem
在webpack打包项目时，将css代码中的px单位转化为rem单位，具体配置详见代码。
## mint-ui
[mint-ui](https://mint-ui.github.io/#!/en)是饿了么前端团队基于vue开发的移动端框架。在本项目中，按需使用了其Toast组件（注：由于mint-ui不支持rem，所以在项目中移除了其默认的css文件，并根据ui提供的设计稿在外部重写了Toast的样式），如果你也想在采用rem布局的app中使用mint-ui, 也建议你按需引入组件并重写样式，让集成的postcss-px2rem实现px和rem的转化,不建议使用[mint-ui-rem-dpr](https://www.npmjs.com/package/mint-ui-rem-dpr)提供的让mint-ui支持rem的方案(原因是：1. 我们在实际开发中，一般都会使用自己的组件样式；2. 本人在使用该依赖时，打包会出错)。
## vue-iscroll-view
IScroll为移动端常用的平滑滚动框架，本项目使用其vue封装[vue-iscroll-view](https://github.com/Dafrok/vue-iscroll-view)组件，实现了水平导航栏在水平方向和列表在垂直方向上的流畅滑动、以及列表的touch分页。
## isomorphic-fetch
Fetch api是新一代异步获取网络数据的js接口，在易用性和功能丰富度等方面，都远远超过了传统的ajax，未来将会有更多的人从ajax转向Fetch。由于Fetch api在部分老版本浏览器没有得到支持，在此使用了fetch的Polyfill实现[isomorphic-fetch](https://www.npmjs.com/package/isomorphic-fetch)。
## moment
[moment](http://momentjs.com)是开源社区十分著名的日期处理类库，用于用于解析、检验、操作、以及显示日期。由于vue2.x版本移除了内置的过滤器（关于作者移除的原因可以参考此讨论：[Bring back filters please](https://github.com/vuejs/vue/issues/2756)）,且本项目中需要使用日期类过滤器，故集成了第三方过滤器[vue-moment](https://www.npmjs.com/package/vue-momentjs)。与此同时，本项目还配置了自定义过滤器文件src/filter.js，方便你快速增加自定义filter。


本demo的页面虽然仅有6个，但是项目的基础框架已经配置得很完善，文件模块的划分亦较为清晰，所以对未来需要额外配置其它js类库或增加新的业务模块，都具也有很强的参考性；而且项目中涉及的vue知识点有：vue常用指令的使用、vue生命周期以及常用hook的使用、vue组件的实例化和重渲染、vue计算属性的使用、vue父子组件间通信、vue成员变量watch监听处理等，有助于帮你快速掌握vue2.x的基本使用。总之，本项目不但是很好的vue入门demo，也能帮助你快速构建高可用的中小型app项目。

＃注意事项
1. 华为部分手机的内置浏览器不支持flex布局，如果考虑对华为内置浏览器做兼容，建议舍弃flex布局

# Deployment

* npm install
* npm run dev

# Build
* npm run build

# End
由于本人水平有限，如在使用中如发现有任何问题或更好的建议，欢迎及时与我联系。

