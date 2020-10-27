(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{373:function(a,t,e){"use strict";e.r(t);var r=e(25),s=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"vue-js-源码全方位深入解析-vue-v2-5-17-beta-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-js-源码全方位深入解析-vue-v2-5-17-beta-0"}},[a._v("#")]),a._v(" Vue.js 源码全方位深入解析（vue-v2.5.17-beta.0）")]),a._v(" "),e("blockquote",[e("p",[a._v("写在前面，看大神解析做的笔记，说实话，不一定能看完，我尽量吧，就怕不消化。我现在就知道数据劫持和发布订阅者模式，读 vue3 源码还要学 TS。慢慢来，慢慢来。")])]),a._v(" "),e("h2",{attrs:{id:"准备工作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[a._v("#")]),a._v(" 准备工作")]),a._v(" "),e("h3",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[a._v("#")]),a._v(" 简介")]),a._v(" "),e("p",[a._v("核心：数据驱动、组件化、响应式原理 （1-4 章）")]),a._v(" "),e("p",[a._v("编译：parse、optimize、codegen（5 章）")]),a._v(" "),e("p",[a._v("扩展：event、v-model、slot、keep-alive、transition（6 章）")]),a._v(" "),e("p",[a._v("生态：Vue-Router、Vue-X（7、8 章)")]),a._v(" "),e("h3",{attrs:{id:"准备工作-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备工作-2"}},[a._v("#")]),a._v(" 准备工作")]),a._v(" "),e("p",[a._v("前提：熟练 vue，原生 js 功底、数据结构、正则、调试 debugger")]),a._v(" "),e("h3",{attrs:{id:"认识-flow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#认识-flow"}},[a._v("#")]),a._v(" 认识 Flow")]),a._v(" "),e("p",[a._v("flow：js 静态类型检查工具")]),a._v(" "),e("p",[a._v("类型推断、类型注释")]),a._v(" "),e("p",[a._v("libdef")]),a._v(" "),e("h3",{attrs:{id:"目录设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目录设计"}},[a._v("#")]),a._v(" 目录设计")]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[a._v("src\n├── compiler        # 编译相关\n├── core            # 核心代码\n├── platforms       # 不同平台的支持\n├── server          # 服务端渲染\n├── sfc             # "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("vue 文件解析\n├── shared          # 共享代码\n")])])]),e("h3",{attrs:{id:"源码构建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#源码构建"}},[a._v("#")]),a._v(" 源码构建")]),a._v(" "),e("p",[a._v("基于 rollup，适合库的构建")]),a._v(" "),e("p",[a._v("runtime only 轻量（运行时不带编译）推荐")]),a._v(" "),e("p",[a._v("runtime+compiler （运行时编译）重点分析")]),a._v(" "),e("h3",{attrs:{id:"入口开始"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#入口开始"}},[a._v("#")]),a._v(" 入口开始")]),a._v(" "),e("p",[a._v("入口：src/platforms/web/entry-runtime-with-compiler.js")]),a._v(" "),e("p",[a._v("vue=>index.js=>core/index.js=>instance/index.js")]),a._v(" "),e("p",[a._v("通过 function 构建 vue，为什么不用 class？（ES5 和 ES6）=>ES5 好拆分，好维护")]),a._v(" "),e("h2",{attrs:{id:"数据驱动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据驱动"}},[a._v("#")]),a._v(" 数据驱动")]),a._v(" "),e("h3",{attrs:{id:"数据驱动-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据驱动-2"}},[a._v("#")]),a._v(" 数据驱动")]),a._v(" "),e("p",[a._v("视图由数据驱动生成，不会直接操作 DOM，更多关心数据的修改。DOM 变成数据的映射。")]),a._v(" "),e("p",[a._v("数据更新驱动视图的变化。")]),a._v(" "),e("h3",{attrs:{id:"new-vue-发生了什么试看"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#new-vue-发生了什么试看"}},[a._v("#")]),a._v(" new Vue 发生了什么试看")]),a._v(" "),e("p",[a._v("init 方法=>合并 options=>_data 的 proxy=>$mount 挂载（中间还有分支逻辑）")]),a._v(" "),e("h3",{attrs:{id:"vue-实例挂载的实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-实例挂载的实现"}},[a._v("#")]),a._v(" Vue 实例挂载的实现")]),a._v(" "),e("p",[a._v("el 的判断，不能挂载到 html 或者 body（会覆盖），所以通常挂载到 div 上面")]),a._v(" "),e("p",[a._v("template 的判断")]),a._v(" "),e("p",[a._v("updateComponent")]),a._v(" "),e("h3",{attrs:{id:"render"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#render"}},[a._v("#")]),a._v(" render")]),a._v(" "),e("p",[a._v("Vue 的私有方法，render 方法生成 VNode，根节点只有一个 VNode（虚拟 dom）")]),a._v(" "),e("h3",{attrs:{id:"virtual-dom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#virtual-dom"}},[a._v("#")]),a._v(" Virtual DOM")]),a._v(" "),e("p",[a._v("用原生的 js 对象去描述一个 dom 节点，定义在 vnode.js 中")]),a._v(" "),e("p",[a._v("Virtual DOM 除了它的数据结构的定义，映射到真实的 DOM 实际上还要经历 VNode 的 create、diff、patch 等过程")]),a._v(" "),e("h3",{attrs:{id:"createelement"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#createelement"}},[a._v("#")]),a._v(" createElement")]),a._v(" "),e("p",[a._v("回忆一下 render 方法，分两种，一种是 template 申明，一种是手写 render 方法，这两种都会调用 createElement 方法，区别是六号位的参数是 false 和 true")]),a._v(" "),e("p",[a._v("过滤参数，参数量不一致，处理上移，再执行私有的_createElement")]),a._v(" "),e("p",[a._v("拍平成为一维 VNode 数组（简单的，复杂的=>递归）")]),a._v(" "),e("h3",{attrs:{id:"update"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#update"}},[a._v("#")]),a._v(" update")]),a._v(" "),e("p",[a._v("把 VNode 映射成真实 DOM")]),a._v(" "),e("p",[a._v("patch 在浏览器中调用=>createPatchFunction（实际的 dom 操作、dom 上面属性的钩子函数）")]),a._v(" "),e("p",[a._v("函数柯里化的技巧，因为需要多平台运行，参数复用，在执行 patch 之前抹平差异。")]),a._v(" "),e("p",[a._v("替换原有的节点")]),a._v(" "),e("p",[a._v("newVue=>init=>$mount=>compile=>render=>vnode=>patch=>DOM")]),a._v(" "),e("h2",{attrs:{id:"组件化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组件化"}},[a._v("#")]),a._v(" 组件化")]),a._v(" "),e("h3",{attrs:{id:"组件化-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组件化-2"}},[a._v("#")]),a._v(" 组件化")]),a._v(" "),e("p",[a._v("组件是资源独立的，可复用，可嵌套")]),a._v(" "),e("h3",{attrs:{id:"createcomponent"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#createcomponent"}},[a._v("#")]),a._v(" createComponent")]),a._v(" "),e("p",[a._v("构造子类构造函数、安装组件钩子函数和实例化 vnode")]),a._v(" "),e("h3",{attrs:{id:"patch-上"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#patch-上"}},[a._v("#")]),a._v(" patch（上）")]),a._v(" "),e("blockquote",[e("p",[a._v("好家伙，给我看困了，我中午可是喝了两大杯浓茶的，咋回事呢")])]),a._v(" "),e("p",[a._v("组件 patch")]),a._v(" "),e("h3",{attrs:{id:"patch-下"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#patch-下"}},[a._v("#")]),a._v(" patch（下）")]),a._v(" "),e("h3",{attrs:{id:"合并配置-上"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#合并配置-上"}},[a._v("#")]),a._v(" 合并配置（上）")]),a._v(" "),e("h3",{attrs:{id:"合并配置-下"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#合并配置-下"}},[a._v("#")]),a._v(" 合并配置（下）")]),a._v(" "),e("h3",{attrs:{id:"生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[a._v("#")]),a._v(" 生命周期")]),a._v(" "),e("h3",{attrs:{id:"组件注册-上"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组件注册-上"}},[a._v("#")]),a._v(" 组件注册（上）")]),a._v(" "),e("h3",{attrs:{id:"组件注册-下"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组件注册-下"}},[a._v("#")]),a._v(" 组件注册（下）")]),a._v(" "),e("h3",{attrs:{id:"异步组件-工厂函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#异步组件-工厂函数"}},[a._v("#")]),a._v(" 异步组件（工厂函数）")]),a._v(" "),e("h3",{attrs:{id:"异步组件-promise"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#异步组件-promise"}},[a._v("#")]),a._v(" 异步组件（Promise）")]),a._v(" "),e("h3",{attrs:{id:"异步组件-高级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#异步组件-高级"}},[a._v("#")]),a._v(" 异步组件（高级")]),a._v(" "),e("h2",{attrs:{id:"深入响应式原理-上"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#深入响应式原理-上"}},[a._v("#")]),a._v(" 深入响应式原理（上）")]),a._v(" "),e("h2",{attrs:{id:"深入响应式原理-下"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#深入响应式原理-下"}},[a._v("#")]),a._v(" 深入响应式原理（下）")]),a._v(" "),e("h2",{attrs:{id:"编译-上"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译-上"}},[a._v("#")]),a._v(" 编译（上）")]),a._v(" "),e("h2",{attrs:{id:"编译-下"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译-下"}},[a._v("#")]),a._v(" 编译（下）")]),a._v(" "),e("h2",{attrs:{id:"扩展-上"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#扩展-上"}},[a._v("#")]),a._v(" 扩展（上）")]),a._v(" "),e("h2",{attrs:{id:"扩展-中"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#扩展-中"}},[a._v("#")]),a._v(" 扩展（中）")]),a._v(" "),e("h2",{attrs:{id:"扩展-下"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#扩展-下"}},[a._v("#")]),a._v(" 扩展（下）")]),a._v(" "),e("h2",{attrs:{id:"vue-router"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-router"}},[a._v("#")]),a._v(" Vue-Router")]),a._v(" "),e("h2",{attrs:{id:"vuex"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuex"}},[a._v("#")]),a._v(" Vuex")])])}),[],!1,null,null,null);t.default=s.exports}}]);