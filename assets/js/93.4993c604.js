(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{441:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vue-电商系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-电商系统"}},[t._v("#")]),t._v(" Vue 电商系统")]),t._v(" "),a("h2",{attrs:{id:"第-1-章-课程简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第-1-章-课程简介"}},[t._v("#")]),t._v(" 第 1 章 课程简介")]),t._v(" "),a("p",[t._v("node 安装、升降级")]),t._v(" "),a("h2",{attrs:{id:"第-2-章-git-安装和配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第-2-章-git-安装和配置"}},[t._v("#")]),t._v(" 第 2 章 Git 安装和配置")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/项目/Git速查.png")}}),t._v(" "),a("h2",{attrs:{id:"第-3-章-vue-cli4-0-安装和使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第-3-章-vue-cli4-0-安装和使用"}},[t._v("#")]),t._v(" 第 3 章 Vue Cli4.0 安装和使用")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("npm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("g @vue"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("cli\n\nyarn global add @vue"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("cli\n\nvue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("version\n")])])]),a("p",[t._v("vue create projectName")]),t._v(" "),a("p",[t._v("Vue DevTools")]),t._v(" "),a("h2",{attrs:{id:"第-4-章-项目基础架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第-4-章-项目基础架构"}},[t._v("#")]),t._v(" 第 4 章 项目基础架构")]),t._v(" "),a("p",[t._v("前端跨域解决方案")]),t._v(" "),a("p",[t._v("问题：")]),t._v(" "),a("ul",[a("li",[t._v("跨域是浏览器为了安全而做出的限制策略")]),t._v(" "),a("li",[t._v("浏览器请求必须要遵循同源策略;同域名、同端口、同协议")])]),t._v(" "),a("p",[t._v("方案：")]),t._v(" "),a("ul",[a("li",[t._v("CORS 跨域：服务端设置，前端直接调用，后台允许前端某个站点进行访问")])]),t._v(" "),a("p",[t._v("Access-Control-Allow-Credentials:true 能够跨域的时候发送 cookie")]),t._v(" "),a("p",[t._v('Access-Control-Allow-Orgin:"*"')]),t._v(" "),a("ul",[a("li",[a("p",[t._v("JSONP 前端适配，后台配合，需要前后端同时改造。前端安装 jsonp 插件=>jsonp(url,(err,res)=>{})")])]),t._v(" "),a("li",[a("p",[t._v("接口代理：通过修改 Nginx 服务器配置来实现，前端修改，后台不动。vue.config.js=>本地开发环境代理")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    devServer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        host"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        proxy"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api'")]),t._v('"'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                targrt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("目标地址\n                changeOrigin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n                pathRewrite"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("基本插件介绍：")]),t._v(" "),a("p",[t._v("vue-lazyload element-ui node-sass sass-loader vue-awesome-swiper vue-axios vue-cookie")]),t._v(" "),a("p",[t._v("路由的封装：")]),t._v(" "),a("p",[t._v("要注意，以 / 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。")]),t._v(" "),a("p",[t._v("要是加了/，访问子路由，要加上父路由")]),t._v(" "),a("p",[t._v("storage 的封装")]),t._v(" "),a("p",[t._v("接口的返回错误拦截，请求的要看文档去，又看到一个好东西")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("axios"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("defaults"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("baseURL "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/api"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\naxios"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("defaults"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timeout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据环境变量获取不同的请求地址")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// axios.defaults.baseURL = env.baseURL;")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接口错误拦截")]),t._v("\naxios"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("interceptors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("response")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/#/login"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// return Promise.reject(res);")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Message.warning(res.msg);")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// return Promise.reject(res);")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Message.error(res.data.message);")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// return Promise.reject(error);")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("接口的环境变量的设置，要是设置代理就不需要这么写了。")]),t._v(" "),a("p",[t._v("模拟数据=>mock")]),t._v(" "),a("p",[t._v("easy-mock")]),t._v(" "),a("p",[t._v("mock.js 这个好，好用")]),t._v(" "),a("p",[t._v("import 是静态加载，require 运行时加载，我记得在哪看到的，我忘了")]),t._v(" "),a("h2",{attrs:{id:"第-5-章-商城首页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第-5-章-商城首页"}},[t._v("#")]),t._v(" 第 5 章 商城首页")]),t._v(" "),a("ol",[a("li",[t._v("封装模态框组件")]),t._v(" "),a("li",[t._v("swiper 的使用")]),t._v(" "),a("li",[t._v("vue 的 transition 进入离开的设置上下位置有讲究的,enter 需要放在下面")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".fade-enter-active,\n.fade-leave-active")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" opacity 0.5s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n.fade-enter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" .fade-leave-to "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* .fade-leave-active below version 2.1.8 */")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("opacity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("emit 使用,还能这么写，我觉得惊讶，就说明理解不够深，菜")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//子组件")]),t._v("\nv"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("on"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("click"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"$emit('submit')\"")]),t._v("\nv"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("on"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("click"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"$emit('cancel')\"")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//父组件")]),t._v("\nv"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("on"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("submit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"goToCart"')]),t._v("\nv"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("on"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("cancel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"showModal = false"')]),t._v("\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[t._v("vue-lazyload 新增一个 v-lazy 的指令代替了:src，但是注意的是指令后面跟着的是\" ' ' \"执行一串 js 代码")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("img v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("lazy"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"'/imgs/nav-img/nav-3-4.jpg'\"")]),t._v(" alt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("ol",{attrs:{start:"6"}},[a("li",[t._v("vue-awesome-swiper 使用的时候，如果使用懒加载，很可能出现空白，因为没加载出来嘛，解决的方法，就是第一张和最后一张不使用懒加载，要么就是整个都不使用懒加载。这个老师的解决方法好像是给最后一个再加一张非懒加载的图片")])]),t._v(" "),a("h2",{attrs:{id:"第-6-章-登录页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第-6-章-登录页面"}},[t._v("#")]),t._v(" 第 6 章 登录页面")]),t._v(" "),a("p",[t._v("import VueCookie from 'vue-cookie'")]),t._v(" "),a("p",[t._v("location.hash=>我们需要排除 index 页面的强制登陆")]),t._v(" "),a("h2",{attrs:{id:"第-7-章-vuex-集成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第-7-章-vuex-集成"}},[t._v("#")]),t._v(" 第 7 章 Vuex 集成")]),t._v(" "),a("p",[t._v("数据回来有延迟，要使用计算属性")]),t._v(" "),a("p",[t._v("getters 过滤脏数据")]),t._v(" "),a("h2",{attrs:{id:"第-8-章-产品站页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第-8-章-产品站页面"}},[t._v("#")]),t._v(" 第 8 章 产品站页面")]),t._v(" "),a("p",[t._v("吸顶效果")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'scroll'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("initHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    methods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initHeight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" scrollTop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageYOffset "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scrollTop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isFixed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" scrollTop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("152")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("destroyed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'scroll'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("initHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//  <div class="nav-bar" :class="{\'is_fixed\':isFixed}"></div>')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     .is_fixed{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//       position:fixed;")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//       top:0;")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//       width:100%;")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//       box-shadow: 0 5px 5px $colorE;")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     }")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// box-shadow: 0 5px 5px $colorE; X轴 Y轴 模糊值，颜色")]),t._v("\n")])])]),a("p",[t._v("???有个奇奇怪怪的事情")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("destroyed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scroll"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("initHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("HTML DOM removeEventListener() 方法,最后一个参数 useCapture 可选。布尔值，指定移除事件句柄的阶段。")]),t._v(" "),a("ul",[a("li",[t._v("可能值：")]),t._v(" "),a("li",[t._v("true - 在捕获阶段移除事件句柄")]),t._v(" "),a("li",[t._v("false- 默认。在冒泡阶段移除事件句柄")]),t._v(" "),a("li",[t._v("注意: 如果添加两次事件句柄，一次在捕获阶段，一次在冒泡阶段，你必须单独移除该事件。")])]),t._v(" "),a("p",[t._v("不是默认 false 吗？")]),t._v(" "),a("h2",{attrs:{id:"第-9-章-商品详情页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第-9-章-商品详情页面"}},[t._v("#")]),t._v(" 第 9 章 商品详情页面")]),t._v(" "),a("p",[t._v("axios 的接口错误拦截要形成闭环，不然误操作会出现 BUG")]),t._v(" "),a("h2",{attrs:{id:"第-10-章-购物车页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第-10-章-购物车页面"}},[t._v("#")]),t._v(" 第 10 章 购物车页面")]),t._v(" "),a("p",[t._v("尽量自己来分 class，虽然 scoped 可以生成区分作用域的标签，但是会让页面特别的重。")]),t._v(" "),a("p",[t._v("大量的业务逻辑，但是它的购物车的数量是后台来判断的，确实省事")]),t._v(" "),a("p",[t._v("PostCSS")]),t._v(" "),a("p",[t._v("Vue CLI 内部使用了 PostCSS。")]),t._v(" "),a("p",[t._v("你可以通过 .postcssrc 或任何 postcss-load-config 支持的配置源来配置 PostCSS。也可以通过 vue.config.js 中的 css.loaderOptions.postcss 配置 postcss-loader。")]),t._v(" "),a("p",[t._v("我们默认开启了 autoprefixer。如果要配置目标浏览器，可使用 package.json 的 browserslist 字段。")]),t._v(" "),a("h2",{attrs:{id:"第-11-章-elementui-集成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第-11-章-elementui-集成"}},[t._v("#")]),t._v(" 第 11 章 ElementUI 集成")]),t._v(" "),a("p",[t._v("按需引入，按需打包，两个概念")]),t._v(" "),a("p",[t._v("ElementUI 面向 B 端的")]),t._v(" "),a("h2",{attrs:{id:"第-12-章-订单确认页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第-12-章-订单确认页面"}},[t._v("#")]),t._v(" 第 12 章 订单确认页面")]),t._v(" "),a("h2",{attrs:{id:"第-13-章-订单结算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第-13-章-订单结算"}},[t._v("#")]),t._v(" 第 13 章 订单结算")]),t._v(" "),a("h2",{attrs:{id:"第-14-章-订单列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第-14-章-订单列表"}},[t._v("#")]),t._v(" 第 14 章 订单列表")]),t._v(" "),a("p",[t._v("document.forms[0].submit()")]),t._v(" "),a("p",[t._v("支付前后端三七开，支付宝可以返回一个表单，由前端渲染(默认不提交，手动提交的)")]),t._v(" "),a("p",[t._v("vue.config.js => lintOnSave:false 关闭 eslint 的校验")]),t._v(" "),a("h2",{attrs:{id:"第-15-章-上线部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第-15-章-上线部署"}},[t._v("#")]),t._v(" 第 15 章 上线部署")]),t._v(" "),a("p",[t._v("publicPath 域名根路径")]),t._v(" "),a("p",[t._v("outputDir 输出路径")]),t._v(" "),a("p",[t._v("indexPath 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。")]),t._v(" "),a("p",[t._v("productionSourceMap 构建慢，不安全，但是方便调试（生成了源码文件 map）")]),t._v(" "),a("p",[t._v("@babel/plugin-syntax-dynamic-import 路由懒加载用到允许解析 import")]),t._v(" "),a("p",[t._v("png 相比的画图片素质更好")]),t._v(" "),a("h2",{attrs:{id:"第-16-章-课程总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第-16-章-课程总结"}},[t._v("#")]),t._v(" 第 16 章 课程总结")])])}),[],!1,null,null,null);s.default=e.exports}}]);