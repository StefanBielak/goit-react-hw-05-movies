"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[634],{634:(t,e,a)=>{a.r(e),a.d(e,{default:()=>w});var r=a(791),c=a(689),s=a(777);const o="cast_castContainer__x7ue-",i="cast_castList__UX8mR",n="cast_castItem__pxq0l",h="cast_actorImage__8b5b9";var m=a(184);const w=()=>{const{movieId:t}=(0,c.UO)(),[e,a]=(0,r.useState)([]);return(0,r.useEffect)((()=>{(async()=>{try{const e=await s.Z.getMovieCredits(t);a(e.cast)}catch(e){console.error("Error fetching cast:",e)}})()}),[t]),(0,m.jsxs)("div",{className:o,children:[(0,m.jsx)("h2",{children:"Cast"}),(0,m.jsx)("ul",{className:i,children:e.map((t=>(0,m.jsxs)("li",{className:n,children:[(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/w185".concat(t.profile_path),alt:t.name,className:h}),(0,m.jsx)("p",{children:t.name})]},t.id)))})]})}},777:(t,e,a)=>{a.d(e,{Z:()=>c});const r="fec326186e089e37ab730141e063b47b",c={getTrendingMovies:async()=>{try{const t=await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(r));return await t.json()}catch(t){throw new Error("Error fetching trending movies:",t)}},searchMovies:async t=>{try{const e=await fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(r,"&query=").concat(t));return await e.json()}catch(e){throw new Error("Error searching movies:",e)}},getMovieDetails:async t=>{try{const e=await fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(r));return await e.json()}catch(e){throw new Error("Error fetching movie details:",e)}},getMovieCredits:async t=>{try{const e=await fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(r));return await e.json()}catch(e){throw new Error("Error fetching cast:",e)}},getMovieReviews:async t=>{try{const e=await fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(r));return await e.json()}catch(e){throw new Error("Error fetching reviews:",e)}}}}}]);
//# sourceMappingURL=634.aaafcf22.chunk.js.map