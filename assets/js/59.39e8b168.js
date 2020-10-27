(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{408:function(t,s,a){"use strict";a.r(s);var n=a(25),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"收集十一-web-api-ajax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#收集十一-web-api-ajax"}},[t._v("#")]),t._v(" 收集十一(Web-API-Ajax)")]),t._v(" "),a("p",[t._v("题目")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("手写一个简易的 ajax")])]),t._v(" "),a("li",[a("p",[t._v("跨域的常用实现方式")])])]),t._v(" "),a("p",[t._v("知识点")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("XMLHttpRequest")])]),t._v(" "),a("li",[a("p",[t._v("状态码")])]),t._v(" "),a("li",[a("p",[t._v("跨域，同源策略，跨域解决方案")])])]),t._v(" "),a("p",[t._v("解析：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" xhr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/data/test.json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onreadystatechange")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readyState "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// console.log(")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     JSON.parse(xhr.responseText)")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// )")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"404 not found"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nxhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[a("p",[t._v("0-(未初始化)，还没有调用 send()方法")])]),t._v(" "),a("li",[a("p",[t._v("1-(载入)，已调用 send()方法，正在发送请求")])]),t._v(" "),a("li",[a("p",[t._v("2-(载入完成)send()方法执行完成，已经接收到全部响应内容")])]),t._v(" "),a("li",[a("p",[t._v("3-(交互)，正在解析响应内容")])]),t._v(" "),a("li",[a("p",[t._v("4-(完成)响应内容解析完成，可在客户端调用")])])]),t._v(" "),a("p",[t._v("2xx 成功")]),t._v(" "),a("p",[t._v("3xx 需要重定向")]),t._v(" "),a("p",[t._v("4xx 客户端请求错误 403（未登陆禁止访问）")]),t._v(" "),a("p",[t._v("5xx 服务器端错误")]),t._v(" "),a("p",[t._v("跨域")]),t._v(" "),a("p",[t._v("同源策略")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("ajax 请求时，浏览器要求当前网页和 server 必须同源（安全）")])]),t._v(" "),a("li",[a("p",[t._v("同源：协议、域名、端口，三者一致")])]),t._v(" "),a("li",[a("p",[t._v("加载图片、css、js 可无视同源策略")])])]),t._v(" "),a("p",[t._v("所有的跨域，都必须要经过 server 端允许和配合，未经 server 端允许就实现跨域，说明浏览器有漏洞，危险")]),t._v(" "),a("p",[t._v("JSONP")]),t._v(" "),a("p",[t._v("服务器可以任意动态拼接数据返回，只要符合 html、js 格式要求")]),t._v(" "),a("p",[t._v("script 可以获取跨域的数据，只要服务端愿意返回")]),t._v(" "),a("p",[t._v("cors-服务器设置 httpheader")]),t._v(" "),a("p",[t._v("Access-Control-Allow-Origin")]),t._v(" "),a("p",[t._v("JQuery")]),t._v(" "),a("p",[t._v("fetch")]),t._v(" "),a("p",[t._v("axios")])])}),[],!1,null,null,null);s.default=p.exports}}]);