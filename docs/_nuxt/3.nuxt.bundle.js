webpackJsonp([3],{155:function(t,e,n){n(176);var s=n(17)(n(168),n(191),null,null);t.exports=s.exports},156:function(t,e,n){"use strict";var s=n(41),r=n.n(s),a={};e.a=r.a.create(a)},157:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={baseUrl:"/nuxt-blog"};e.default={data:function(){return{}},props:{to:String},computed:{path:function(){return s.baseUrl+this.to}},mounted:function(){}}},158:function(t,e,n){var s=n(17)(n(157),n(159),null,null);t.exports=s.exports},159:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:t.path}},[t._t("default")],2)},staticRenderFns:[]}},168:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(156),r=n(158),a=n.n(r);e.default={data:function(t){var e=t.params,n=t.error,r=parseInt(e.id);return s.a.get("/api/posts/"+r).then(function(t){return{post:t.data}}).catch(function(t){n({statusCode:404,message:"Posts not found"})})},components:{aLink:a.a},head:function(){return{title:"post list"}}}},176:function(t,e){},191:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-wrapper container"},[n("div",[n("a-link",{attrs:{to:"/posts/"+t.post.meta.id}},[n("h2",[t._v(t._s(t.post.meta.title))])])],1),n("div",{staticClass:"post-meta"},[n("span",[t._v(t._s(t.post.meta.strTag))]),n("span",[t._v(t._s(t.post.meta.createTime))])]),n("div",[n("div",{domProps:{innerHTML:t._s(t.post.content)}})])])},staticRenderFns:[]}}});