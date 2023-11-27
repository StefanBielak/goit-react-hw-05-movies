"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[471],{471:function(e,r,t){t.r(r),t.d(r,{default:function(){return w}});var n=t(861),c=t(439),a=t(757),s=t.n(a),o=t(791),i=t(689),u=t(777),v="reviews_reviewsList__LkXr4",p="reviews_reviewItem__+kTjt",h="reviews_author__KE2jH",f="reviews_content__mUyX9",l=t(184),w=function(){var e=(0,i.UO)().movieId,r=(0,o.useState)([]),t=(0,c.Z)(r,2),a=t[0],w=t[1];return(0,o.useEffect)((function(){var r=function(){var r=(0,n.Z)(s().mark((function r(){var t;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.getMovieReviews(e);case 3:t=r.sent,w(t.results),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error("Error fetching reviews:",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[e]),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Reviews"}),(0,l.jsx)("ul",{className:v,children:a.map((function(e){return(0,l.jsxs)("li",{className:p,children:[(0,l.jsx)("p",{className:h,children:e.author}),(0,l.jsx)("p",{className:f,children:e.content})]},e.id)}))})]})}},777:function(e,r,t){var n=t(861),c=t(757),a=t.n(c),s="fec326186e089e37ab730141e063b47b",o={getTrendingMovies:function(){var e=(0,n.Z)(a().mark((function e(){var r,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(s));case 3:return r=e.sent,e.next=6,r.json();case 6:return t=e.sent,e.abrupt("return",t);case 10:throw e.prev=10,e.t0=e.catch(0),new Error("Error fetching trending movies:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),searchMovies:function(){var e=(0,n.Z)(a().mark((function e(r){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&query=").concat(r));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:throw e.prev=10,e.t0=e.catch(0),new Error("Error searching movies:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(r){return e.apply(this,arguments)}}(),getMovieDetails:function(){var e=(0,n.Z)(a().mark((function e(r){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(r,"?api_key=").concat(s));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:throw e.prev=10,e.t0=e.catch(0),new Error("Error fetching movie details:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(r){return e.apply(this,arguments)}}(),getMovieCredits:function(){var e=(0,n.Z)(a().mark((function e(r){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(r,"/credits?api_key=").concat(s));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:throw e.prev=10,e.t0=e.catch(0),new Error("Error fetching cast:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(r){return e.apply(this,arguments)}}(),getMovieReviews:function(){var e=(0,n.Z)(a().mark((function e(r){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(r,"/reviews?api_key=").concat(s));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:throw e.prev=10,e.t0=e.catch(0),new Error("Error fetching reviews:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(r){return e.apply(this,arguments)}}()};r.Z=o},861:function(e,r,t){function n(e,r,t,n,c,a,s){try{var o=e[a](s),i=o.value}catch(u){return void t(u)}o.done?r(i):Promise.resolve(i).then(n,c)}function c(e){return function(){var r=this,t=arguments;return new Promise((function(c,a){var s=e.apply(r,t);function o(e){n(s,c,a,o,i,"next",e)}function i(e){n(s,c,a,o,i,"throw",e)}o(void 0)}))}}t.d(r,{Z:function(){return c}})}}]);
//# sourceMappingURL=471.50d2ef1d.chunk.js.map