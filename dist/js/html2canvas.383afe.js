(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{643:function(t,e,a){},737:function(t,e,a){"use strict";var n=a(643);a.n(n).a},771:function(t,e,a){"use strict";a.r(e);var n=a(736),s=a.n(n),r={data:function(){return{imgURL:"https://goss.veer.com/creative/vcg/veer/800water/veer-305609193.jpg?v="+ +new Date,dataURL:"https://goss.veer.com/creative/vcg/veer/800water/veer-305609193.jpg"}},created:function(){this.setBase64()},methods:{setBase64:function(){var t=this,e=new Image;e.src=this.imgURL,e.setAttribute("crossOrigin","anonymous"),e.onload=function(){var a=document.createElement("canvas");a.width=150,a.height=150,a.getContext("2d").drawImage(e,0,0,150,150);var n=a.toDataURL("image/png");t.dataURL=n}},download:function(){s()(source,{scale:2}).then(function(t){var e=t.toDataURL(),a=document.createElement("a");a.style.display="none",a.href=e,a.download="图片",document.body.appendChild(a),a.click(),document.body.removeChild(a)})}}},c=(a(737),a(67)),o=Object(c.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"html2canvas"},[a("h4",[t._v("将指定的DOM转换成图片")]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"source",attrs:{id:"source"}},[a("p",[t._v("文字内容文字内容文字内容文字内容文字内容文字内容文字内容")]),t._v(" "),a("img",{staticClass:"avatar",attrs:{src:t.dataURL}}),t._v(" "),a("p",[t._v("文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容")])]),t._v(" "),a("br"),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.download}},[t._v("下载图片")]),t._v(" "),a("p",[t._v("#注意：如果DOM中含有图片，那么图片需要允许跨域。")])],1)},[],!1,null,"7c55bbea",null);e.default=o.exports}}]);