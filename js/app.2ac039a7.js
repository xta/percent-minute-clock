(function(e){function t(t){for(var r,s,o=t[0],u=t[1],c=t[2],p=0,d=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==i[u]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},i={app:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/percent-minute-clock/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},"29d8":function(e,t,n){},"2af5":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"clock"},[n("Digits",{attrs:{value:e.hour,basis:24,label:"H"}}),e._v(": "),n("Digits",{attrs:{value:e.minute,basis:60,label:"M",percentMode:!0}}),e._v(": "),n("Digits",{attrs:{value:e.second,basis:60,label:"S",percentMode:!0}})],1),e._m(0)])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"source"},[n("a",{attrs:{href:"https://github.com/xta/percent-minute-clock"}},[e._v("xta/percent-minute-clock")])])}],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"digits",class:{bordered:e.percentMode}},[n("span",[e._v(e._s(e.displayed))]),n("div",{staticClass:"label"},[e._v(e._s(e.displayLabel))]),e.percentMode?n("div",{staticClass:"progress",style:{width:e.percent+"%"}}):e._e()])},o=[],u={props:["basis","label","percentMode","value"],data:function(){return{percent:10}},computed:{displayed:function(){return this.percentMode?this.displayPercent(this.value):this.displayRegular(this.value)},displayLabel:function(){var e=this.label;return this.percentMode&&(e+="%"),e}},methods:{displayRegular:function(e){var t=(""+e).length;return 1==t?"0"+e:e},displayPercent:function(e){var t=e/this.basis,n=Math.round(100*t);return this.percent=n,this.displayRegular(n)}}},c=u,l=(n("d1aa"),n("2877")),p=Object(l["a"])(c,s,o,!1,null,"4e64cb82",null),d=p.exports,f={name:"App",components:{Digits:d},data:function(){return{hour:"--",minute:"--",second:"--"}},mounted:function(){this.updateClock()},methods:{currentTime:function(){var e=new Date,t={h:e.getHours(),m:e.getMinutes(),s:e.getSeconds()};return t},updateClock:function(){var e=this.currentTime();this.hour=e.h,this.minute=e.m,this.second=e.s,setTimeout(this.updateClock,500)}}},h=f,v=(n("034f"),Object(l["a"])(h,i,a,!1,null,null,null)),b=v.exports;n("29d8");r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(b)}}).$mount("#app")},"85ec":function(e,t,n){},d1aa:function(e,t,n){"use strict";var r=n("2af5"),i=n.n(r);i.a}});
//# sourceMappingURL=app.2ac039a7.js.map