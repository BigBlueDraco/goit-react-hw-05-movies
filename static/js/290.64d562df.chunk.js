"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[290],{290:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(861),a=n(885),i=n(757),s=n.n(i),c=n(791),o=n(739),u=n(731),d=n(273),l=n(184);function f(){var e,t,n=(0,c.useState)([]),i=(0,a.Z)(n,2),f=i[0],h=i[1],v=(0,o.UO)().movieId,p=(0,o.TH)(),m=(0,o.s0)(),x=p.state?p.state.from:{pathname:"/index",search:""},b=x.pathname,j=x.search;(0,c.useEffect)((function(){_()}));var _=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.X.fetchMoviesById(v);case 3:t=e.sent,h(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),g=f.title,k=f.vote_average,w=f.overview,y=f.genres,Z=f.poster_path;return(0,l.jsx)(l.Fragment,{children:f?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{onClick:function(){return m(b+j)},children:"Go back"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(Z),alt:"",width:"350px"}),(0,l.jsxs)("div",{className:"film-info",children:[(0,l.jsx)("p",{className:"film-info__title",children:g}),(0,l.jsx)("p",{className:"film-info__text",children:k}),(0,l.jsx)("p",{className:"film-info__title",children:"Overview"}),(0,l.jsx)("p",{className:"overview",children:w}),(0,l.jsx)("p",{className:"film-info__title"}),(0,l.jsx)("ul",{children:y&&y.map((function(e){var t=e.id,n=e.name;return(0,l.jsx)("li",{children:n},t)}))})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{children:"Additional information"}),(0,l.jsx)(u.rU,{to:"cast",state:null!==(e=p.state)&&void 0!==e?e:"",children:"Cast"}),(0,l.jsx)(u.rU,{to:"reviews",state:null!==(t=p.state)&&void 0!==t?t:"",children:"Reviews"})]}),(0,l.jsx)(c.Suspense,{fallback:(0,l.jsx)("div",{children:"Loading..."}),children:(0,l.jsx)(o.j3,{})})]}):(0,l.jsx)("div",{children:"No data"})})}},273:function(e,t,n){n.d(t,{X:function(){return u}});var r=n(861),a=n(671),i=n(144),s=n(757),c=n.n(s),o=n(44),u=function(){function e(){(0,a.Z)(this,e)}return(0,i.Z)(e,null,[{key:"searchMovies",value:function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",void 0);case 2:return e.next=4,o.ZP.get("".concat(this.baseUrl).concat(this.searchEndPoint),{params:{api_key:"fd0a7baec7e1722e7549dfbeea65227f",query:t}});case 4:return n=e.sent,r=n.data,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"fetchTrendingMoviesToday",value:function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.ZP.get("".concat(this.baseUrl).concat(this.trendingEndPoint),{params:{api_key:"fd0a7baec7e1722e7549dfbeea65227f"}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchMoviesById",value:function(){var e=(0,r.Z)(c().mark((function e(t){var n,r,a,i,s=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:"",r=n?"/"+n:"",e.next=4,o.ZP.get("".concat(this.baseUrl).concat(this.movieEndPoint,"/").concat(t).concat(r),{params:{api_key:"fd0a7baec7e1722e7549dfbeea65227f"}});case 4:return a=e.sent,i=a.data,e.abrupt("return",i);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}();u.baseUrl="https://api.themoviedb.org/3",u.trendingEndPoint="/trending/movie/day",u.searchEndPoint="/search/movie",u.movieEndPoint="/movie"}}]);
//# sourceMappingURL=290.64d562df.chunk.js.map