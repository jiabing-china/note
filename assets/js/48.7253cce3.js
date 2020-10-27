(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{404:function(v,_,t){"use strict";t.r(_);var e=t(25),a=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"vue-原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-原理"}},[v._v("#")]),v._v(" vue 原理")]),v._v(" "),t("h2",{attrs:{id:"vue-原理-大厂必考试看"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-原理-大厂必考试看"}},[v._v("#")]),v._v(" vue 原理-大厂必考试看")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("为何考？")])]),v._v(" "),t("li",[t("p",[v._v("如何考，什么方式？")]),v._v(" "),t("ul",[t("li",[v._v("考察重点，不考细节")]),v._v(" "),t("li",[v._v("和使用相关的原理，例如 vdom、模板渲染")]),v._v(" "),t("li",[v._v("整体流程是否全面？热门技术是否有深度？")])])]),v._v(" "),t("li",[t("p",[v._v("vue 原理包括哪些")]),v._v(" "),t("ul",[t("li",[v._v("组件化")]),v._v(" "),t("li",[v._v("响应式")]),v._v(" "),t("li",[v._v("vdom 和 diff")]),v._v(" "),t("li",[v._v("模板编译")]),v._v(" "),t("li",[v._v("渲染过程")]),v._v(" "),t("li",[v._v("前端路由")])])])]),v._v(" "),t("h2",{attrs:{id:"如何理解-mvvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何理解-mvvm"}},[v._v("#")]),v._v(" 如何理解 MVVM")]),v._v(" "),t("p",[v._v("组件化基础")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("以前的组件化")])]),v._v(" "),t("li",[t("p",[v._v("数据驱动视图（MVVM，setState）")]),v._v(" "),t("ul",[t("li",[v._v("传统组件，只是静态渲染，更新还是依赖操作 DOM")]),v._v(" "),t("li",[v._v("vue MVVM")]),v._v(" "),t("li",[v._v("React setState")])])])]),v._v(" "),t("p",[v._v("MVVM=model+view+viewmodel")]),v._v(" "),t("h2",{attrs:{id:"监听-data-变化的核心-api-是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#监听-data-变化的核心-api-是什么"}},[v._v("#")]),v._v(" 监听 data 变化的核心 API 是什么")]),v._v(" "),t("p",[v._v("vue 响应式")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("组件 data 的数据一旦变化，立刻触发视图的更新")])]),v._v(" "),t("li",[t("p",[v._v("实现数据驱动视图的第一步")])]),v._v(" "),t("li",[t("p",[v._v("核心 API-Object.defineProperty")])]),v._v(" "),t("li",[t("p",[v._v("Object.defineProperty 的一些缺点（vue3.0 启动 proxy）")])]),v._v(" "),t("li",[t("p",[v._v("proxy 有兼容性问题，且无法 polyfill")])])]),v._v(" "),t("img",{attrs:{src:v.$withBase("/面试/objectdefineproperty.png")}}),v._v(" "),t("h2",{attrs:{id:"如何深度监听-data-变化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何深度监听-data-变化"}},[v._v("#")]),v._v(" 如何深度监听 data 变化")]),v._v(" "),t("h2",{attrs:{id:"vue-如何监听数组变化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-如何监听数组变化"}},[v._v("#")]),v._v(" vue 如何监听数组变化")]),v._v(" "),t("p",[v._v("（深层次的递归，数组的，需要自己创建数据原型来监听，不然会全局污染）")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("深度监听，需要递归到底，一次性计算量大（按需监听？？？）")])]),v._v(" "),t("li",[t("p",[v._v("新增删除属性，监听不到（要用 vue.set 和 vue.delete）")])]),v._v(" "),t("li",[t("p",[v._v("无法原生监听数组，需要特殊处理。")])])]),v._v(" "),t("h2",{attrs:{id:"虚拟-dom-面试里的网红"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#虚拟-dom-面试里的网红"}},[v._v("#")]),v._v(" 虚拟 DOM-面试里的网红")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("vdom 是实现 vue 的重要基石")])]),v._v(" "),t("li",[t("p",[v._v("diff 算法是 vdom 的核心和关键部分")])]),v._v(" "),t("li",[t("p",[v._v("vdom 用 js 模拟 dom 结构，计算出最小的变更，操作 dom")])])]),v._v(" "),t("img",{attrs:{src:v.$withBase("/面试/jsdom.png")}}),v._v(" "),t("p",[v._v("标签/属性、样式、事件/子元素")]),v._v(" "),t("p",[v._v("snabbdom 学习 vdom")]),v._v(" "),t("h2",{attrs:{id:"用过虚拟-dom-吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用过虚拟-dom-吗"}},[v._v("#")]),v._v(" 用过虚拟 DOM 吗")]),v._v(" "),t("h2",{attrs:{id:"虚拟-dom-diff-算法概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#虚拟-dom-diff-算法概述"}},[v._v("#")]),v._v(" 虚拟 DOM-diff 算法概述")]),v._v(" "),t("p",[v._v("树的 diff 时间复杂度 O（n^3）,算法不可用")]),v._v(" "),t("p",[v._v("优化时间复杂度 O（n）")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("只比较同一级，不跨级比较")])]),v._v(" "),t("li",[t("p",[v._v("tag 不相同，删除，不再深度比较")])]),v._v(" "),t("li",[t("p",[v._v("tag 和 key，两者相同，则认为是相同节点，不再比较")])])]),v._v(" "),t("p",[v._v("适合 web 网页的开发")]),v._v(" "),t("h2",{attrs:{id:"深入-diff-算法源码-生成-vnode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#深入-diff-算法源码-生成-vnode"}},[v._v("#")]),v._v(" 深入 diff 算法源码-生成 vnode")]),v._v(" "),t("p",[v._v("snabbdom 源码")]),v._v(" "),t("p",[v._v("h 函数 返回一个 vnode 结构的对象")]),v._v(" "),t("p",[v._v("patch")]),v._v(" "),t("h2",{attrs:{id:"深入-diff-算法源码-patch-函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#深入-diff-算法源码-patch-函数"}},[v._v("#")]),v._v(" 深入 diff 算法源码-patch 函数")]),v._v(" "),t("p",[v._v("相同的 key 和 sel（元素），patchVnode")]),v._v(" "),t("p",[v._v("都不传 key，则 key 相同")]),v._v(" "),t("h2",{attrs:{id:"深入-diff-算法源码-patchvnode-函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#深入-diff-算法源码-patchvnode-函数"}},[v._v("#")]),v._v(" 深入 diff 算法源码-patchVnode 函数")]),v._v(" "),t("p",[v._v("新旧 vnode 对比，text 和 children 的逻辑判断")]),v._v(" "),t("ul",[t("li",[v._v("updatechildren，新旧都有")]),v._v(" "),t("li",[v._v("addvnodes，新有旧无")]),v._v(" "),t("li",[v._v("removevnode，旧有新无")]),v._v(" "),t("li",[v._v("旧的有直接删除")])]),v._v(" "),t("h2",{attrs:{id:"深入-diff-算法源码-updatechildren-函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#深入-diff-算法源码-updatechildren-函数"}},[v._v("#")]),v._v(" 深入 diff 算法源码-updateChildren 函数")]),v._v(" "),t("p",[v._v("old/newchildren 的对比")]),v._v(" "),t("h2",{attrs:{id:"虚拟-dom-考点总结和复习"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#虚拟-dom-考点总结和复习"}},[v._v("#")]),v._v(" 虚拟 DOM-考点总结和复习")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("patchvnode")])]),v._v(" "),t("li",[t("p",[v._v("addremovevnodes")])]),v._v(" "),t("li",[t("p",[v._v("updatechildren（key 的重要性）")])]),v._v(" "),t("li",[t("p",[v._v("vdom 核心概念：h、vnode、patch、diff、key")])]),v._v(" "),t("li",[t("p",[v._v("vdom 存在的价值：数据驱动视图，控制 dom 的操作")])])]),v._v(" "),t("h2",{attrs:{id:"模板编译前置知识点-with-语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模板编译前置知识点-with-语法"}},[v._v("#")]),v._v(" 模板编译前置知识点-with 语法")]),v._v(" "),t("ul",[t("li",[v._v("前置只是，js 的 with 语法")])]),v._v(" "),t("img",{attrs:{src:v.$withBase("/面试/with.png")}}),v._v(" "),t("p",[v._v("慎用，打破了作用域规则，易读性变差")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("vue template complier 将模板编译为 render 函数")])]),v._v(" "),t("li",[t("p",[v._v("执行 render 函数生成 vnode")])])]),v._v(" "),t("h2",{attrs:{id:"vue-模板被编译成什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-模板被编译成什么"}},[v._v("#")]),v._v(" vue 模板被编译成什么")]),v._v(" "),t("img",{attrs:{src:v.$withBase("/面试/模板编译.png")}}),v._v(" "),t("p",[v._v("createElement 就是 h 函数")]),v._v(" "),t("p",[v._v("v-model 模板编译的时候，声明一个变量，显示的也是这个变量，同时绑定监听事件，当值变化，就修改这个变量，达到数据的双向绑定。")]),v._v(" "),t("img",{attrs:{src:v.$withBase("/面试/模板编译2.png")}}),v._v(" "),t("h2",{attrs:{id:"vue-组件可用-render-代替-template"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-组件可用-render-代替-template"}},[v._v("#")]),v._v(" vue 组件可用 render 代替 template")]),v._v(" "),t("img",{attrs:{src:v.$withBase("/面试/render代替template.png")}}),v._v(" "),t("p",[v._v("总结")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("with 语法")])]),v._v(" "),t("li",[t("p",[v._v("模板到 render 函数，再到 vnode，再到渲染和更新")])]),v._v(" "),t("li",[t("p",[v._v("vue 组件可用 render 代替 template")])])]),v._v(" "),t("h2",{attrs:{id:"回顾和复习已学的知识点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#回顾和复习已学的知识点"}},[v._v("#")]),v._v(" 回顾和复习已学的知识点")]),v._v(" "),t("p",[v._v("组件渲染/更新过程")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("初次渲染")])]),v._v(" "),t("li",[t("p",[v._v("更新过程")])]),v._v(" "),t("li",[t("p",[v._v("异步渲染")])])]),v._v(" "),t("img",{attrs:{src:v.$withBase("/面试/模板编译回顾.png")}}),v._v(" "),t("h2",{attrs:{id:"vue-组件是如何渲染和更新的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-组件是如何渲染和更新的"}},[v._v("#")]),v._v(" vue 组件是如何渲染和更新的")]),v._v(" "),t("img",{attrs:{src:v.$withBase("/面试/初次渲染过程.png")}}),v._v(" "),t("img",{attrs:{src:v.$withBase("/面试/render触发getter.png")}}),v._v(" "),t("img",{attrs:{src:v.$withBase("/面试/模板更新.png")}}),v._v(" "),t("p",[v._v("新旧 vnode 的差异由 diff 算法来处理")]),v._v(" "),t("img",{attrs:{src:v.$withBase("/面试/模板完整流程图.png")}}),v._v(" "),t("p",[v._v("touch 触发")]),v._v(" "),t("p",[v._v("collect asdependency 收集依赖")]),v._v(" "),t("h2",{attrs:{id:"vue-组件是异步渲染的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-组件是异步渲染的"}},[v._v("#")]),v._v(" vue 组件是异步渲染的")]),v._v(" "),t("ul",[t("li",[v._v("回顾$nextTick")]),v._v(" "),t("li",[v._v("汇总 data 的修改，一次性更新视图")]),v._v(" "),t("li",[v._v("减少 dom 操作次数，提高性能")])]),v._v(" "),t("p",[v._v("总结")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("渲染和响应式的关系")])]),v._v(" "),t("li",[t("p",[v._v("渲染和模板编译的关系")])]),v._v(" "),t("li",[t("p",[v._v("渲染和 vdom 的关系")])]),v._v(" "),t("li",[t("p",[v._v("初次渲染的过程")])]),v._v(" "),t("li",[t("p",[v._v("更新过程")])]),v._v(" "),t("li",[t("p",[v._v("异步渲染")])])]),v._v(" "),t("h2",{attrs:{id:"如何用-js-实现-hash-路由"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何用-js-实现-hash-路由"}},[v._v("#")]),v._v(" 如何用 JS 实现 hash 路由")]),v._v(" "),t("p",[v._v("hash 变化会触发网页跳转，即浏览器的前进后退")]),v._v(" "),t("p",[v._v("不会刷新页面，spa 必需的特点")]),v._v(" "),t("p",[v._v("永远不会提交到 server 端")]),v._v(" "),t("p",[v._v("js 修改 url， 手动修改 url 的 hash，前进后退")]),v._v(" "),t("ul",[t("li",[v._v("hash=>windown.onhashchange")])]),v._v(" "),t("h2",{attrs:{id:"如何用-js-实现-h5-history-路由"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何用-js-实现-h5-history-路由"}},[v._v("#")]),v._v(" 如何用 JS 实现 H5 history 路由")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("用 url 规范的路由，但是跳转时不刷新页面")])]),v._v(" "),t("li",[t("p",[v._v("history.pushState")])]),v._v(" "),t("li",[t("p",[v._v("window.onpopstate")])]),v._v(" "),t("li",[t("p",[v._v("后台处理前端的请求的页面，统一到 index.html，以免 404")])])]),v._v(" "),t("h2",{attrs:{id:"vue-原理-考点总结和复习"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-原理-考点总结和复习"}},[v._v("#")]),v._v(" vue 原理-考点总结和复习")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("组件化")]),v._v(" "),t("ul",[t("li",[v._v("组件历史")]),v._v(" "),t("li",[v._v("数据驱动视图")]),v._v(" "),t("li",[v._v("MVVM")])])]),v._v(" "),t("li",[t("p",[v._v("响应式")]),v._v(" "),t("ul",[t("li",[v._v("Object.defineProperty")]),v._v(" "),t("li",[v._v("监听对象（深度），监听数组")]),v._v(" "),t("li",[v._v("Object.defineProperty 的缺点（3 个缺点）（vue3 用 proxy）")])])]),v._v(" "),t("li",[t("p",[v._v("vdom 和 diff")])]),v._v(" "),t("li",[t("p",[v._v("模板编译")])]),v._v(" "),t("li",[t("p",[v._v("应用背景")]),v._v(" "),t("ul",[t("li",[v._v("vnode 结果")]),v._v(" "),t("li",[v._v("snabbdom vnode h patch")]),v._v(" "),t("li",[v._v("with 语法")]),v._v(" "),t("li",[v._v("模板编译为 render 函数")]),v._v(" "),t("li",[v._v("执行 render 函数生成 vnode")])])]),v._v(" "),t("li",[t("p",[v._v("渲染过程")]),v._v(" "),t("ul",[t("li",[v._v("初次渲染")]),v._v(" "),t("li",[v._v("更新渲染")]),v._v(" "),t("li",[v._v("异步渲染")])])]),v._v(" "),t("li",[t("p",[v._v("前端路由")]),v._v(" "),t("ul",[t("li",[v._v("hash 和 H5 history")])])])])])}),[],!1,null,null,null);_.default=a.exports}}]);