"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[664],{664:function(e,r,t){t.r(r),t.d(r,{default:function(){return k}});var n=t(861),s=t(439),c=t(757),a=t.n(c),i=t(791),o=t(689),u=t(87),v=t(777),h="movies_moviesContainer__V5JRy",p="movies_searchContainer__DVMNr",l="movies_searchInput__ob8X0",m="movies_searchButton__JoLg0",f="movies_navbar__Sn04B",d="movies_navButton__be2XM",_="movies_navButtonDisabled__qRstD",x="movies_searchResults__mi-U4",w="movies_movieResult__oQqHj",g="movies_movieImage__DdBrg",b="movies_movieTitle__frLtm",j=t(184),k=function(){var e=(0,i.useState)(""),r=(0,s.Z)(e,2),t=r[0],c=r[1],k=(0,i.useState)([]),y=(0,s.Z)(k,2),N=y[0],E=y[1],Z=(0,o.s0)(),M=function(){var e=(0,n.Z)(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.Z.searchMovies(t);case 3:r=e.sent,E(r.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error searching movies:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,j.jsxs)("div",{className:h,children:[(0,j.jsxs)("div",{className:f,children:[(0,j.jsx)(u.rU,{to:"/",className:d,children:(0,j.jsx)("div",{children:"Home"})}),(0,j.jsx)("div",{className:_,children:(0,j.jsx)("div",{children:"Movies"})})]}),(0,j.jsxs)("div",{className:p,children:[(0,j.jsx)("input",{type:"text",value:t,onChange:function(e){return c(e.target.value)},placeholder:"Search movies...",className:l}),(0,j.jsx)("button",{onClick:M,className:m,children:"Search"})]}),(0,j.jsx)("div",{className:x,children:N.map((function(e){return(0,j.jsxs)("div",{className:w,onClick:function(){return r=e.id,void Z("/movies/".concat(r));var r},children:[(0,j.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path),alt:e.title,className:g}),(0,j.jsx)("p",{className:b,children:e.title})]},e.id)}))})]})}},777:function(e,r,t){var n=t(861),s=t(757),c=t.n(s),a="fec326186e089e37ab730141e063b47b",i={getTrendingMovies:function(){var e=(0,n.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(a));case 3:return r=e.sent,e.next=6,r.json();case 6:return t=e.sent,e.abrupt("return",t);case 10:throw e.prev=10,e.t0=e.catch(0),new Error("Error fetching trending movies:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),searchMovies:function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(a,"&query=").concat(r));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:throw e.prev=10,e.t0=e.catch(0),new Error("Error searching movies:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(r){return e.apply(this,arguments)}}(),getMovieDetails:function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(r,"?api_key=").concat(a));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:throw e.prev=10,e.t0=e.catch(0),new Error("Error fetching movie details:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(r){return e.apply(this,arguments)}}(),getMovieCredits:function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(r,"/credits?api_key=").concat(a));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:throw e.prev=10,e.t0=e.catch(0),new Error("Error fetching cast:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(r){return e.apply(this,arguments)}}(),getMovieReviews:function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(r,"/reviews?api_key=").concat(a));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:throw e.prev=10,e.t0=e.catch(0),new Error("Error fetching reviews:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(r){return e.apply(this,arguments)}}()};r.Z=i},861:function(e,r,t){function n(e,r,t,n,s,c,a){try{var i=e[c](a),o=i.value}catch(u){return void t(u)}i.done?r(o):Promise.resolve(o).then(n,s)}function s(e){return function(){var r=this,t=arguments;return new Promise((function(s,c){var a=e.apply(r,t);function i(e){n(a,s,c,i,o,"next",e)}function o(e){n(a,s,c,i,o,"throw",e)}i(void 0)}))}}t.d(r,{Z:function(){return s}})}}]);
//# sourceMappingURL=664.8fce7843.chunk.js.map