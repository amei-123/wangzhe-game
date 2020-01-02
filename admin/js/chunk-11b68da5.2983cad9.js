(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11b68da5"],{"1c4f":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v(t._s(t._id?"编辑":"新建")+"英雄")]),r("el-form",{attrs:{"label-width":"120px"}},[r("el-tabs",{attrs:{value:"second",type:"border-card"}},[r("el-tab-pane",{attrs:{label:"基本信息",name:"first"}},[r("el-form-item",{attrs:{label:"英雄"}},[r("el-input",{model:{value:t.model.name,callback:function(e){t.$set(t.model,"name",e)},expression:"model.name"}})],1),r("el-form-item",{attrs:{label:"头像"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.getImageUrl,headers:t.setTokenInfo(),"show-file-list":!1,"on-success":t.handleAvatarSuccess}},[t.model.avatar?r("img",{staticClass:"avatar",attrs:{src:t.model.avatar}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{label:"类型"}},[r("el-select",{attrs:{placeholder:"请选择",multiple:""},model:{value:t.model.categories,callback:function(e){t.$set(t.model,"categories",e)},expression:"model.categories"}},t._l(t.categories,(function(t){return r("el-option",{key:t._id,attrs:{label:t.name,value:t._id}})})),1)],1),r("el-form-item",{attrs:{label:"难度"}},[r("el-rate",{staticStyle:{"margin-top":".6rem"},attrs:{max:9,"show-score":""},model:{value:t.model.scores.difficult,callback:function(e){t.$set(t.model.scores,"difficult",e)},expression:"model.scores.difficult"}})],1),r("el-form-item",{attrs:{label:"技能"}},[r("el-rate",{staticStyle:{"margin-top":".6rem"},attrs:{max:9,"show-score":""},model:{value:t.model.scores.skills,callback:function(e){t.$set(t.model.scores,"skills",e)},expression:"model.scores.skills"}})],1),r("el-form-item",{attrs:{label:"攻击"}},[r("el-rate",{staticStyle:{"margin-top":".6rem"},attrs:{max:9,"show-score":""},model:{value:t.model.scores.attack,callback:function(e){t.$set(t.model.scores,"attack",e)},expression:"model.scores.attack"}})],1),r("el-form-item",{attrs:{label:"生存"}},[r("el-rate",{staticStyle:{"margin-top":".6rem"},attrs:{max:9,"show-score":""},model:{value:t.model.scores.survive,callback:function(e){t.$set(t.model.scores,"survive",e)},expression:"model.scores.survive"}})],1),r("el-form-item",{attrs:{label:"顺风出装"}},[r("el-select",{attrs:{placeholder:"请选择",multiple:""},model:{value:t.model.item1,callback:function(e){t.$set(t.model,"item1",e)},expression:"model.item1"}},t._l(t.items,(function(t){return r("el-option",{key:t._id,attrs:{label:t.name,value:t._id}})})),1)],1),r("el-form-item",{attrs:{label:"逆风出装"}},[r("el-select",{attrs:{placeholder:"请选择",multiple:""},model:{value:t.model.item2,callback:function(e){t.$set(t.model,"item2",e)},expression:"model.item2"}},t._l(t.items,(function(t){return r("el-option",{key:t._id,attrs:{label:t.name,value:t._id}})})),1)],1),r("el-form-item",{attrs:{label:"使用技巧"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.model.usageTips,callback:function(e){t.$set(t.model,"usageTips",e)},expression:"model.usageTips"}})],1),r("el-form-item",{attrs:{label:"对抗技巧"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.model.battleTips,callback:function(e){t.$set(t.model,"battleTips",e)},expression:"model.battleTips"}})],1),r("el-form-item",{attrs:{label:"团战思路"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.model.teamTips,callback:function(e){t.$set(t.model,"teamTips",e)},expression:"model.teamTips"}})],1)],1),r("el-tab-pane",{attrs:{label:"技能配置",name:"second"}},[r("el-button",{attrs:{size:"small"},on:{click:function(e){return t.model.skills.push({})}}},[r("i",{staticClass:"el-icon-plus"}),t._v("添加 ")]),r("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},t._l(t.model.skills,(function(e,n){return r("el-col",{key:n,attrs:{md:12}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:e.name,callback:function(r){t.$set(e,"name",r)},expression:"item.name"}})],1),r("el-form-item",{attrs:{label:"图标"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.getImageUrl,headers:t.setTokenInfo(),"show-file-list":!1,"on-success":function(r){return t.$set(e,"icon",r.url)}}},[e.icon?r("img",{staticClass:"avatar",attrs:{src:e.icon}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{label:"冷却值"}},[r("el-input",{model:{value:e.delay,callback:function(r){t.$set(e,"delay",r)},expression:"item.delay"}})],1),r("el-form-item",{attrs:{label:"消耗"}},[r("el-input",{model:{value:e.cost,callback:function(r){t.$set(e,"cost",r)},expression:"item.cost"}})],1),r("el-form-item",{attrs:{label:"描述"}},[r("el-input",{model:{value:e.description,callback:function(r){t.$set(e,"description",r)},expression:"item.description"}})],1),r("el-form-item",{attrs:{label:"小提示"}},[r("el-input",{model:{value:e.tips,callback:function(r){t.$set(e,"tips",r)},expression:"item.tips"}})],1),r("el-form-item",[r("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(e){return t.model.skills.splice(n,1)}}},[t._v("删除")])],1)],1)})),1)],1)],1),r("el-form-item",{staticStyle:{"margin-top":"3rem"}},[r("el-button",{attrs:{type:"primary"},on:{click:t.save}},[t._v("提交")])],1)],1)],1)},a=[],o=(r("d3b7"),r("96cf"),{name:"HerosEdit",data:function(){return{model:{scores:{},skills:[]},categories:[],items:[]}},props:["_id"],created:function(){this._id&&this.fatch(),this.fatchCategories(),this.fatchItems()},methods:{save:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:if(!this._id){t.next=5;break}return t.next=3,regeneratorRuntime.awrap(this.$http.put("/rest/heros/".concat(this._id),this.model));case 3:t.next=8;break;case 5:return t.next=7,regeneratorRuntime.awrap(this.$http.post("/rest/heros",this.model));case 7:t.sent;case 8:this.$router.push("/heros/list"),this.$message({type:"success",message:"保存成功"});case 10:case"end":return t.stop()}}),null,this)},fatch:function(){var t;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.$http.get("/rest/heros/".concat(this._id)));case 2:t=e.sent,this.model=Object.assign({},this.model,t.data);case 4:case"end":return e.stop()}}),null,this)},handleAvatarSuccess:function(t){this.$set(this.model,"avatar",t.url)},fatchCategories:function(){var t;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.$http.get("/rest/categories"));case 2:t=e.sent,this.categories=t.data;case 4:case"end":return e.stop()}}),null,this)},fatchItems:function(){var t;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.$http.get("/rest/items"));case 2:t=e.sent,this.items=t.data;case 4:case"end":return e.stop()}}),null,this)}}}),i=o,s=(r("ec02"),r("2877")),l=Object(s["a"])(i,n,a,!1,null,null,null);e["default"]=l.exports},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,r,n){var a=e&&e.prototype instanceof d?e:d,o=Object.create(a.prototype),i=new S(n||[]);return o._invoke=L(t,r,i),o}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=l;var u="suspendedStart",m="suspendedYield",h="executing",f="completed",p={};function d(){}function v(){}function y(){}var g={};g[o]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(O([])));w&&w!==r&&n.call(w,o)&&(g=w);var x=y.prototype=d.prototype=Object.create(g);function k(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function _(t){function e(r,a,o,i){var s=c(t[r],t,a);if("throw"!==s.type){var l=s.arg,u=l.value;return u&&"object"===typeof u&&n.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,o,i)}),(function(t){e("throw",t,o,i)})):Promise.resolve(u).then((function(t){l.value=t,o(l)}),(function(t){return e("throw",t,o,i)}))}i(s.arg)}var r;function a(t,n){function a(){return new Promise((function(r,a){e(t,n,r,a)}))}return r=r?r.then(a,a):a()}this._invoke=a}function L(t,e,r){var n=u;return function(a,o){if(n===h)throw new Error("Generator is already running");if(n===f){if("throw"===a)throw o;return j()}r.method=a,r.arg=o;while(1){var i=r.delegate;if(i){var s=$(i,r);if(s){if(s===p)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===u)throw n=f,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var l=c(t,e,r);if("normal"===l.type){if(n=r.done?f:m,l.arg===p)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=f,r.method="throw",r.arg=l.arg)}}}function $(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,$(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var a=c(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,p;var o=a.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,p):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function r(){while(++a<t.length)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:j}}function j(){return{value:e,done:!0}}return v.prototype=x.constructor=y,y.constructor=v,y[s]=v.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},k(_.prototype),_.prototype[i]=function(){return this},t.AsyncIterator=_,t.async=function(e,r,n,a){var o=new _(l(e,r,n,a));return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},k(x),x[s]="Generator",x[o]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return s.type="throw",s.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;T(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},ccc8:function(t,e,r){},ec02:function(t,e,r){"use strict";var n=r("ccc8"),a=r.n(n);a.a}}]);
//# sourceMappingURL=chunk-11b68da5.2983cad9.js.map