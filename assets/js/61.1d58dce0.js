(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{416:function(v,_,t){"use strict";t.r(_);var p=t(25),i=Object(p.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"收集十三-http-面试题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#收集十三-http-面试题"}},[v._v("#")]),v._v(" 收集十三(http 面试题)")]),v._v(" "),t("p",[v._v("题目")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("http 常见的状态码有哪些")])]),v._v(" "),t("li",[t("p",[v._v("http 常见的 header 有哪些")])]),v._v(" "),t("li",[t("p",[v._v("什么是 Restful API")])]),v._v(" "),t("li",[t("p",[v._v("描述一下 http 的缓存机制（重要）")])])]),v._v(" "),t("p",[v._v("知识点")]),v._v(" "),t("ol",[t("li",[v._v("http 状态码")])]),v._v(" "),t("ul",[t("li",[t("p",[v._v("1xx 服务器收到请求")])]),v._v(" "),t("li",[t("p",[v._v("2xx 请求成功，200")])]),v._v(" "),t("li",[t("p",[v._v("3xx 重定向，302")])]),v._v(" "),t("li",[t("p",[v._v("4xx 客服端错误，404")])]),v._v(" "),t("li",[t("p",[v._v("5xx 服务端错误，500")])])]),v._v(" "),t("p",[v._v("常用状态码")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("200 成功")])]),v._v(" "),t("li",[t("p",[v._v("301 永久重定向（配合 location，浏览器自动处理）")])]),v._v(" "),t("li",[t("p",[v._v("302 临时重定向（配合 location，浏览器自动处理）")])]),v._v(" "),t("li",[t("p",[v._v("304 资源未被修改")])]),v._v(" "),t("li",[t("p",[v._v("404 资源未找到")])]),v._v(" "),t("li",[t("p",[v._v("403 没有权限")])]),v._v(" "),t("li",[t("p",[v._v("500 服务器错误")])]),v._v(" "),t("li",[t("p",[v._v("504 网关超时")])])]),v._v(" "),t("p",[v._v("关于协议和规范")]),v._v(" "),t("p",[v._v("约定，要求执行，违反规范，例如 IE 浏览器")]),v._v(" "),t("p",[v._v("http methods")]),v._v(" "),t("p",[v._v("传统的 methods")]),v._v(" "),t("p",[v._v("get（获取）、post（提交）=>简单的网页功能")]),v._v(" "),t("p",[v._v("现在的 methods")]),v._v(" "),t("p",[v._v("get 获取")]),v._v(" "),t("p",[v._v("post 新建")]),v._v(" "),t("p",[v._v("patch、put 更新")]),v._v(" "),t("p",[v._v("delete 删除")]),v._v(" "),t("p",[v._v("Restful API")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("新的 api 设计方法")])]),v._v(" "),t("li",[t("p",[v._v("传统 api 设计：每个 url 当个功能")])]),v._v(" "),t("li",[t("p",[v._v("Restful api 设计：把每个 url 当做一个唯一的资源")])])]),v._v(" "),t("p",[v._v("http headers")]),v._v(" "),t("ol",[t("li",[v._v("Request Headers")])]),v._v(" "),t("ul",[t("li",[t("p",[v._v("Accept 浏览器可接受的数据格式")])]),v._v(" "),t("li",[t("p",[v._v("Accept-Encoding 浏览器可接受的压缩算法，如 gzip")])]),v._v(" "),t("li",[t("p",[v._v("Accept-Languange 浏览器可接收的语言，如 zh-CN")])]),v._v(" "),t("li",[t("p",[v._v("Connection：keep-alive 一次 TCP 连接重复使用")])]),v._v(" "),t("li",[t("p",[v._v("cookie")])]),v._v(" "),t("li",[t("p",[v._v("Host 域名")])]),v._v(" "),t("li",[t("p",[v._v("User-Agent，浏览器信息（UA）")])]),v._v(" "),t("li",[t("p",[v._v("Content-type 发送数据的格式，如 application/json")])])]),v._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[v._v("Response Headers")])]),v._v(" "),t("ul",[t("li",[t("p",[v._v("Content-type 返回数据的格式，如 application/json")])]),v._v(" "),t("li",[t("p",[v._v("Content-Encoding 返回的压缩算法，如 gzip")])]),v._v(" "),t("li",[t("p",[v._v("Content-length 返回数据的大小，多少字节")])]),v._v(" "),t("li",[t("p",[v._v("Set-cookie")])])]),v._v(" "),t("p",[v._v("自定义 header")]),v._v(" "),t("p",[v._v("缓存相关的 headers")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("Cache-Control Expires")])]),v._v(" "),t("li",[t("p",[v._v("Last-modified If-Modified-Since")])]),v._v(" "),t("li",[t("p",[v._v("Etag If-None-Match")])])]),v._v(" "),t("p",[v._v("http 缓存")]),v._v(" "),t("ul",[t("li",[v._v("关于缓存的介绍")])]),v._v(" "),t("p",[v._v("加载快，静态资源可以被缓存（js，css，img）")]),v._v(" "),t("ul",[t("li",[v._v("http 缓存策略（强制+协商）")])]),v._v(" "),t("p",[v._v("强制缓存")]),v._v(" "),t("img",{attrs:{src:v.$withBase("/面试/浏览器强制缓存.png")}}),v._v(" "),t("img",{attrs:{src:v.$withBase("/面试/浏览器缓存过期.png")}}),v._v(" "),t("p",[v._v("Cache-Control")]),v._v(" "),t("p",[v._v("在 Response Headers 中")]),v._v(" "),t("p",[v._v("控制强制缓存的逻辑")]),v._v(" "),t("p",[v._v("例如 Cache-Control:max-age=31536000(单位是秒)")]),v._v(" "),t("p",[v._v("Cache-Control 的值")]),v._v(" "),t("p",[v._v("max-age、no-cache（不用强制，服务端处理）、no-store（不用强制，服务端也不用缓存，让服务端重新返回），private（只能最终用户缓存），public（中间服务器都能缓存）")]),v._v(" "),t("p",[v._v("Expires 被 Cache-Control 代替了")]),v._v(" "),t("p",[v._v("http 缓存-协商缓存（对比缓存）")]),v._v(" "),t("p",[v._v("是一个服务端缓存策略（不是缓存在服务端）")]),v._v(" "),t("p",[v._v("服务器判断客户端资源，是否和服务端资源一样")]),v._v(" "),t("p",[v._v("判断一致则返回 304，否则返回 200 和最新的资源")]),v._v(" "),t("img",{attrs:{src:v.$withBase("/面试/浏览器协商缓存.png")}}),v._v(" "),t("p",[v._v("资源标识")]),v._v(" "),t("p",[v._v("在 Response Headers 中有两种，Last-Modified 资源的最后修改时间，Etag 资源的唯一标识（一个字符串，类似人类指纹，我记得不是数字签名吗？）")]),v._v(" "),t("img",{attrs:{src:v.$withBase("/面试/浏览器资源标识.png")}}),v._v(" "),t("img",{attrs:{src:v.$withBase("/面试/浏览器etag.png")}}),v._v(" "),t("p",[v._v("Headers 示例")]),v._v(" "),t("img",{attrs:{src:v.$withBase("/面试/浏览器head示例.png")}}),v._v(" "),t("p",[v._v("Last-Modified 和 Etag")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[v._v("- 会优先使用 Etag\n\n- Last-Modified 只能精确到秒级\n\n- 如果资源被重复生成，而内容不变，则 Etag 更精确\n\n- Etag 是根据内容计算的\n")])])]),t("p",[v._v("http 缓存-综述")]),v._v(" "),t("img",{attrs:{src:v.$withBase("/面试/浏览器http综述.png")}}),v._v(" "),t("p",[v._v("有缓存-catch-control")]),v._v(" "),t("p",[v._v("缓存是否过期-max-age")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("刷新操作方式，对缓存的影响")]),v._v(" "),t("p",[v._v("三种刷新操作")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("正常操作，地址输入 url，跳转链接，前进后退等")])]),v._v(" "),t("li",[t("p",[v._v("手动刷新，F5，点击刷新按钮，右击菜单刷新")])]),v._v(" "),t("li",[t("p",[v._v("强制刷新 Ctrl+F5")])])])])]),v._v(" "),t("p",[v._v("不同的刷新操作，不同的缓存策略")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("正常操作：强制缓存有效，协商缓存有效")])]),v._v(" "),t("li",[t("p",[v._v("手动刷新：强制缓存失效，协商缓存有效")])]),v._v(" "),t("li",[t("p",[v._v("强制刷新：强制缓存失效，协商缓存失效")])])]),v._v(" "),t("p",[v._v("小结：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("强制缓存 Cache-Control")])]),v._v(" "),t("li",[t("p",[v._v("协商缓存 Last-Modified 和 Etag，304 状态码")])]),v._v(" "),t("li",[t("p",[v._v("完整的流程图")])])]),v._v(" "),t("p",[v._v("http 面试题-总结")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("http 状态码")])]),v._v(" "),t("li",[t("p",[v._v("http method")])]),v._v(" "),t("li",[t("p",[v._v("Rsetful API")])]),v._v(" "),t("li",[t("p",[v._v("http headers")])]),v._v(" "),t("li",[t("p",[v._v("http 缓存策略")])])])])}),[],!1,null,null,null);_.default=i.exports}}]);