_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/EDR":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("QeBL")}])},B3Qr:function(t,e,n){"use strict";n.d(e,"a",(function(){return k}));var a=n("MX0m"),r=n.n(a),i=n("q1tI"),s=n.n(i),l=n("8zuE"),u=n("YFqc"),o=n.n(u),c=n("/h9T"),f=n("jIYg"),p=36e5,m=6e4,d=2,g={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},x=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,N=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,w=/^([+-])(\d{2})(?::?(\d{2}))?$/;function v(t,e){Object(f.a)(1,arguments);var n=e||{},a=null==n.additionalDigits?d:Object(c.a)(n.additionalDigits);if(2!==a&&1!==a&&0!==a)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!==typeof t&&"[object String]"!==Object.prototype.toString.call(t))return new Date(NaN);var r,i=function(t){var e,n={},a=t.split(g.dateTimeDelimiter);if(a.length>2)return n;/:/.test(a[0])?(n.date=null,e=a[0]):(n.date=a[0],e=a[1],g.timeZoneDelimiter.test(n.date)&&(n.date=t.split(g.timeZoneDelimiter)[0],e=t.substr(n.date.length,t.length)));if(e){var r=g.timezone.exec(e);r?(n.time=e.replace(r[1],""),n.timezone=r[1]):n.time=e}return n}(t);if(i.date){var s=function(t,e){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),a=t.match(n);if(!a)return{year:null};var r=a[1]&&parseInt(a[1]),i=a[2]&&parseInt(a[2]);return{year:null==i?r:100*i,restDateString:t.slice((a[1]||a[2]).length)}}(i.date,a);r=function(t,e){if(null===e)return null;var n=t.match(x);if(!n)return null;var a=!!n[4],r=h(n[1]),i=h(n[2])-1,s=h(n[3]),l=h(n[4]),u=h(n[5])-1;if(a)return function(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}(0,l,u)?function(t,e,n){var a=new Date(0);a.setUTCFullYear(t,0,4);var r=a.getUTCDay()||7,i=7*(e-1)+n+1-r;return a.setUTCDate(a.getUTCDate()+i),a}(e,l,u):new Date(NaN);var o=new Date(0);return function(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(b[e]||(D(t)?29:28))}(e,i,s)&&function(t,e){return e>=1&&e<=(D(t)?366:365)}(e,r)?(o.setUTCFullYear(e,i,Math.max(r,s)),o):new Date(NaN)}(s.restDateString,s.year)}if(isNaN(r)||!r)return new Date(NaN);var l,u=r.getTime(),o=0;if(i.time&&(o=function(t){var e=t.match(N);if(!e)return null;var n=j(e[1]),a=j(e[2]),r=j(e[3]);if(!function(t,e,n){if(24===t)return 0===e&&0===n;return n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}(n,a,r))return NaN;return n*p+a*m+1e3*r}(i.time),isNaN(o)||null===o))return new Date(NaN);if(!i.timezone){var v=new Date(u+o),y=new Date(v.getUTCFullYear(),v.getUTCMonth(),v.getUTCDate(),v.getUTCHours(),v.getUTCMinutes(),v.getUTCSeconds(),v.getUTCMilliseconds());return y.setFullYear(v.getUTCFullYear()),y}return l=function(t){if("Z"===t)return 0;var e=t.match(w);if(!e)return 0;var n="+"===e[1]?-1:1,a=parseInt(e[2]),r=e[3]&&parseInt(e[3])||0;if(!function(t,e){return e>=0&&e<=59}(0,r))return NaN;return n*(a*p+r*m)}(i.timezone),isNaN(l)?new Date(NaN):new Date(u+o+l)}function h(t){return t?parseInt(t):1}function j(t){return t&&parseFloat(t.replace(",","."))||0}var b=[31,null,31,30,31,30,31,31,30,31,30,31];function D(t){return t%400===0||t%4===0&&t%100}var y=s.a.createElement;function k(t){var e=t.post;return y(o.a,{href:"/posts/"+e.slug},y("a",{className:"jsx-3864894440"},y(l.a,{date:v(e.date)}),y("h2",{className:"jsx-3864894440"},e.title),y(r.a,{id:"3864894440"},["a.jsx-3864894440{color:#222;display:inline-block;}","h2.jsx-3864894440{margin:0;font-weight:500;}"])))}},QeBL:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSG",(function(){return c})),n.d(e,"default",(function(){return f}));var a=n("q1tI"),r=n.n(a),i=n("soUV"),s=n("Q8u6"),l=n("9ZpP"),u=n("qhaX"),o=r.a.createElement,c=!0;function f(t){var e=t.posts,n=t.tags,a=t.pagination;return o(i.a,null,o(s.a,{url:"/posts",title:"All posts"}),o(l.a,{url:"/posts",title:"All posts"}),o(u.a,{posts:e,tags:n,pagination:a}))}},qhaX:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var a=n("MX0m"),r=n.n(a),i=n("q1tI"),s=n.n(i),l=n("B3Qr"),u=n("YFqc"),o=n.n(u),c=s.a.createElement;function f(t){var e=t.tag;return c(o.a,{href:"/posts/tags/[[...slug]]",as:"/posts/tags/".concat(e.slug)},c("a",null,"#"+e.name))}var p=n("rksZ"),m=s.a.createElement;function d(t){var e=t.posts,n=t.tags,a=t.pagination;return m("div",{className:"jsx-3209324780 container"},m("div",{className:"jsx-3209324780 posts"},m("ul",{className:"jsx-3209324780 post-list"},e.map((function(t,e){return m("li",{key:e,className:"jsx-3209324780"},m(l.a,{post:t}))}))),m(p.a,{current:a.current,pages:a.pages,link:{href:function(t){return 1===t?"/posts":"/posts/page/[page]"},as:function(t){return 1===t?null:"/posts/page/"+t}}})),m("ul",{className:"jsx-3209324780 categories"},n.map((function(t,e){return m("li",{key:e,className:"jsx-3209324780"},m(f,{tag:t}))}))),m(r.a,{id:"3209324780"},[".container.jsx-3209324780{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 auto;max-width:1200px;width:100%;padding:0 1.5rem;}","ul.jsx-3209324780{margin:0;padding:0;}","li.jsx-3209324780{list-style:none;}",".posts.jsx-3209324780{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;}",".posts.jsx-3209324780 li.jsx-3209324780{margin-bottom:1.5rem;}",".post-list.jsx-3209324780{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;}",".categories.jsx-3209324780{display:none;}",".categories.jsx-3209324780 li.jsx-3209324780{margin-bottom:0.75em;}","@media (min-width:769px){.categories.jsx-3209324780{display:block;}}"]))}},rksZ:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n("MX0m"),r=n.n(a),i=n("q1tI"),s=n.n(i);var l=n("YFqc"),u=n.n(l),o=s.a.createElement;function c(t){var e=t.current,n=t.pages,a=t.link,i=function(t,e){return Array.from(Array(e).keys()).map((function(t){return t+1})).filter((function(n){return 1===n||n===e||Math.abs(t-n)<=2})).map((function(n){return{page:2===Math.abs(t-n)&&1!==n&&n!==e?null:n,current:n===t,excerpt:2===Math.abs(t-n)&&1!==n&&n!==e}}))}(e,n);return o("ul",{className:"jsx-1443704391"},i.map((function(t,n){return o("li",{key:n,className:"jsx-1443704391"},t.excerpt?"...":o(u.a,{href:a.href(t.page),as:a.as(t.page)},o("a",{className:"jsx-1443704391 "+((t.page===e?"active":null)||"")},t.page)))})),o(r.a,{id:"1443704391"},["ul.jsx-1443704391{list-style:none;margin:3rem 0 0 0;padding:0;}","li.jsx-1443704391{display:inline-block;margin-right:1em;color:#9b9b9b;font-size:1.25rem;}","a.active.jsx-1443704391{color:#222;font-weight:bold;}"]))}}},[["/EDR",0,2,1,3]]]);