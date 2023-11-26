"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[311,634,471],{634:(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var a=s(791),i=s(689),r=s(777);const c="cast_castContainer__x7ue-",o="cast_castList__UX8mR",n="cast_castItem__pxq0l",d="cast_actorImage__8b5b9";var l=s(184);const h=()=>{const{movieId:e}=(0,i.UO)(),[t,s]=(0,a.useState)([]);return(0,a.useEffect)((()=>{(async()=>{try{const t=await r.Z.getMovieCredits(e);s(t.cast)}catch(t){console.error("Error fetching cast:",t)}})()}),[e]),(0,l.jsxs)("div",{className:c,children:[(0,l.jsx)("h2",{children:"Cast"}),(0,l.jsx)("ul",{className:o,children:t.map((e=>(0,l.jsxs)("li",{className:n,children:[(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w185".concat(e.profile_path),alt:e.name,className:d}),(0,l.jsx)("p",{children:e.name})]},e.id)))})]})}},311:(e,t,s)=>{s.r(t),s.d(t,{default:()=>g});var a=s(791),i=s(689),r=s(87),c=s(777);const o="moviedetails_container__+PuMs",n="moviedetails_movieDetails__VGy6P",d="moviedetails_moviePoster__ih-iT",l="moviedetails_movieInfo__iWefs",h="moviedetails_genres__YU65O",v="moviedetails_navbar__3nimg",m="moviedetails_content__kA95x",_="moviedetails_additionalLinks__qN1Em";var w=s(634),j=s(471),p=s(184);const g=()=>{const{movieId:e}=(0,i.UO)(),[t,s]=(0,a.useState)(null);return(0,a.useEffect)((()=>{(async()=>{try{const t=await c.Z.getMovieDetails(e);s(t)}catch(t){console.error("B\u0142\u0105d podczas pobierania szczeg\xf3\u0142\xf3w filmu:",t)}})()}),[e]),(0,p.jsxs)("div",{children:[(0,p.jsx)("div",{className:v,children:(0,p.jsx)(r.rU,{to:"/",children:"Home"})}),(0,p.jsxs)("div",{className:"".concat(o," ").concat(m),children:[t&&(0,p.jsxs)("div",{className:n,children:[(0,p.jsx)("div",{className:d,children:(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w780".concat(t.poster_path),alt:t.title})}),(0,p.jsxs)("div",{className:l,children:[(0,p.jsx)("h2",{children:t.title}),(0,p.jsxs)("p",{children:["(",new Date(t.release_date).getFullYear(),")"]}),(0,p.jsxs)("p",{children:["Ocena u\u017cytkownik\xf3w: ",10*t.vote_average,"%"]}),(0,p.jsx)("p",{children:t.overview}),(0,p.jsxs)("div",{className:h,children:[(0,p.jsx)("strong",{children:"Genre:"}),t.genres.map((e=>(0,p.jsx)("span",{children:e.name},e.id)))]})]})]}),(0,p.jsxs)("div",{className:_,children:[(0,p.jsx)(r.rU,{to:"/movies/".concat(e,"/cast"),children:"Cast"}),(0,p.jsx)(r.rU,{to:"/movies/".concat(e,"/reviews"),children:"Reviews"})]}),(0,p.jsxs)(i.Z5,{children:[(0,p.jsx)(i.AW,{path:"/movies/:movieId/cast",element:(0,p.jsx)(w.default,{movieId:e})}),(0,p.jsx)(i.AW,{path:"/movies/:movieId/reviews",element:(0,p.jsx)(j.default,{movieId:e})})]})]})]})}},471:(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var a=s(791),i=s(689),r=s(777);const c="reviews_reviewsList__LkXr4",o="reviews_reviewItem__+kTjt",n="reviews_author__KE2jH",d="reviews_content__mUyX9";var l=s(184);const h=()=>{const{movieId:e}=(0,i.UO)(),[t,s]=(0,a.useState)([]);return(0,a.useEffect)((()=>{(async()=>{try{const t=await r.Z.getMovieReviews(e);s(t.results)}catch(t){console.error("Error fetching reviews:",t)}})()}),[e]),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Reviews"}),(0,l.jsx)("ul",{className:c,children:t.map((e=>(0,l.jsxs)("li",{className:o,children:[(0,l.jsx)("p",{className:n,children:e.author}),(0,l.jsx)("p",{className:d,children:e.content})]},e.id)))})]})}},777:(e,t,s)=>{s.d(t,{Z:()=>i});const a="fec326186e089e37ab730141e063b47b",i={getTrendingMovies:async()=>{try{const e=await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(a));return await e.json()}catch(e){throw new Error("Error fetching trending movies:",e)}},searchMovies:async e=>{try{const t=await fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(a,"&query=").concat(e));return await t.json()}catch(t){throw new Error("Error searching movies:",t)}},getMovieDetails:async e=>{try{const t=await fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(a));return await t.json()}catch(t){throw new Error("Error fetching movie details:",t)}},getMovieCredits:async e=>{try{const t=await fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(a));return await t.json()}catch(t){throw new Error("Error fetching cast:",t)}},getMovieReviews:async e=>{try{const t=await fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(a));return await t.json()}catch(t){throw new Error("Error fetching reviews:",t)}}}}}]);
//# sourceMappingURL=311.056bf5f5.chunk.js.map