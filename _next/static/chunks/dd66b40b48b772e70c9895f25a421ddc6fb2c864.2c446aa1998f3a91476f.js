(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=s,t.useAmp=function(){return s(i.default.useContext(o.AmpStateContext))};var r,i=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,i=void 0!==r&&r,o=e.hasQuery;return n||i&&(void 0!==o&&o)}},"3niX":function(e,t,n){"use strict";t.__esModule=!0,t.flush=function(){var e=o.cssRules();return o.flush(),e},t.default=void 0;var r,i=n("q1tI");var o=new(((r=n("SevZ"))&&r.__esModule?r:{default:r}).default),s=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).prevProps={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.dynamic=function(e){return e.map((function(e){var t=e[0],n=e[1];return o.computeId(t,n)})).join(" ")};var i=r.prototype;return i.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},i.componentWillUnmount=function(){o.remove(this.props)},i.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&o.remove(this.prevProps),o.add(this.props),this.prevProps=this.props),null},r}(i.Component);t.default=s},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"81W9":function(e){e.exports=JSON.parse('{"base_url":"https://bogdbo.github.io","site_title":"Blogdan","site_description":"Next.js blog template for Netlify","site_keywords":[{"keyword":"Next.js"},{"keyword":"React"}],"posts_per_page":5,"github_account":"bogdbo"}')},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},s=n("lwAK"),a=n("FYa8"),u=n("/0+H");function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(i){var o=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var s=i.key.slice(i.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(var a=0,u=f.length;a<u;a++){var c=f[a];if(i.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?o=!1:n.add(c);else{var l=i.props[c],d=r[c]||new Set;d.has(l)?o=!1:(d.add(l),r[c]=d)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return i.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,i.useContext)(s.AmpStateContext),r=(0,i.useContext)(a.HeadManagerContext);return i.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},"8oxB":function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"===typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var u,c=[],l=!1,d=-1;function f(){l&&u&&(l=!1,u.length?c=u.concat(c):d=-1,c.length&&p())}function p(){if(!l){var e=a(f);l=!0;for(var t=c.length;t;){for(u=c,c=[];++d<t;)u&&u[d].run();d=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||l||a(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"9ZpP":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("q1tI"),i=n.n(r),o=n("8Kt/"),s=n.n(o),a=n("RMik"),u=i.a.createElement;function c(e){var t=e.url,n=e.title,r=e.description,i=e.image;return u(s.a,null,u("meta",{property:"og:site_name",content:a.a.site_title}),u("meta",{property:"og:url",content:a.a.base_url+t}),u("meta",{property:"og:title",content:n?[n,a.a.site_title].join(" | "):""}),u("meta",{property:"og:description",content:r||a.a.site_description}),u("meta",{property:"og:image",content:i||a.a.base_url+"/og_image.png"}),u("meta",{property:"og:type",content:"article"}))}},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},MX0m:function(e,t,n){e.exports=n("3niX")},Q8u6:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("q1tI"),i=n.n(r),o=n("8Kt/"),s=n.n(o),a=n("RMik"),u=i.a.createElement;function c(e){var t=e.title,n=e.description,r=e.keywords,i=e.author,o=e.url;return u(s.a,null,u("title",null,t?[t,a.a.site_title].join(" | "):a.a.site_title),u("meta",{name:"description",content:n||a.a.site_description}),u("meta",{name:"keywords",content:r?r.join(","):a.a.site_keywords.map((function(e){return e.keyword})).join(",")}),i?u("meta",{name:"author",content:i}):null,u("link",{rel:"canonical",href:a.a.base_url+o}))}},RMik:function(e,t,n){"use strict";var r=n("81W9");t.a=r},SevZ:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=o(n("9kyW")),i=o(n("bVZc"));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,o=t.optimizeForSpeed,s=void 0!==o&&o,a=t.isBrowser,u=void 0===a?"undefined"!==typeof window:a;this._sheet=r||new i.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),r&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=u,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),r=n.styleId,i=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var o=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=o,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var i=String(n),o=t+i;return e[o]||(e[o]="jsx-"+(0,r.default)(t+"-"+i)),e[o]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var i=n+r;return t[i]||(t[i]=r.replace(e,n)),t[i]}},t.getIdAndRules=function(e){var t=this,n=e.children,r=e.dynamic,i=e.id;if(r){var o=this.computeId(i,r);return{styleId:o,rules:Array.isArray(n)?n.map((function(e){return t.computeSelector(o,e)})):[this.computeSelector(o,n)]}}return{styleId:this.computeId(i),rules:Array.isArray(n)?n:[n]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=s},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),i=n("/GRZ"),o=n("i2R6"),s=n("qXWd"),a=n("48fX"),u=n("tCBg"),c=n("T0f4");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var i=c(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),f=!1,p=function(e){a(n,e);var t=l(n);function n(e){var o;return i(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,f&&o._hasHeadManager&&(o.props.headManager.mountedInstances.add(s(o)),o.emitChange()),o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=p},YFqc:function(e,t,n){e.exports=n("cTJO")},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var r="undefined"!==typeof e&&e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},o=function(){function e(e){var t=void 0===e?{}:e,n=t.name,o=void 0===n?"stylesheet":n,a=t.optimizeForSpeed,u=void 0===a?r:a,c=t.isBrowser,l=void 0===c?"undefined"!==typeof window:c;s(i(o),"`name` must be a string"),this._name=o,this._deletedRulePlaceholder="#"+o+"-deleted-rule____{}",s("boolean"===typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var d=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=d?d.getAttribute("content"):null}var t,o,a,u=e.prototype;return u.setOptimizeForSpeed=function(e){s("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},u.isOptimizeForSpeed=function(){return this._optimizeForSpeed},u.inject=function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},u.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},u.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},u.insertRule=function(e,t){if(s(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(a){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var o=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,o))}return this._rulesCount++},u.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(o){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];s(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},u.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},u.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},u.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},u.makeStyleTag=function(e,t,n){t&&s(i(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return n?o.insertBefore(r,n):o.appendChild(r),r},t=e,(o=[{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,o),a&&n(t,a),e}();function s(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=o}).call(this,n("8oxB"))},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),i=n("7KCV");t.__esModule=!0,t.default=void 0;var o,s=i(n("q1tI")),a=n("g/15"),u=n("nOHt"),c=n("elyg");var l=new Map,d=window.IntersectionObserver,f={};var p=function(e,t){var n=o||(d?o=new d((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function h(e,t,n,r){e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0}function m(e,t,n,r,i,o,s){var u=e.currentTarget,c=u.nodeName,l=u.target;"A"===c&&(l&&"_self"!==l||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)||function(e){var t=(0,a.getLocationOrigin)();return new URL(e,t).origin===t}(n)&&(e.preventDefault(),null==s&&(s=r.indexOf("#")<0),t[i?"replace":"push"](n,r,{shallow:o}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())})))}var v=function(e){var t=!1!==e.prefetch,n=s.default.useState(),i=r(n,2),o=i[0],a=i[1],l=(0,u.useRouter)(),v=l&&l.pathname||"/",y=s.default.useMemo((function(){var t=(0,c.resolveHref)(v,e.href);return{href:t,as:e.as?(0,c.resolveHref)(v,e.as):t}}),[v,e.href,e.as]),_=y.href,g=y.as;s.default.useEffect((function(){if(t&&d&&o&&o.tagName&&!f[_+"%"+g])return p(o,(function(){h(l,_,g)}))}),[t,o,_,g,l]);var x=e.children,b=e.replace,w=e.shallow,S=e.scroll;"string"===typeof x&&(x=s.default.createElement("a",null,x));var j=s.Children.only(x),k={ref:function(e){e&&a(e),j&&"object"===typeof j&&j.ref&&("function"===typeof j.ref?j.ref(e):"object"===typeof j.ref&&(j.ref.current=e))},onClick:function(e){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(e),e.defaultPrevented||m(e,l,_,g,b,w,S)}};return t&&(k.onMouseEnter=function(e){j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(e),h(l,_,g,{priority:!0})}),!e.passHref&&("a"!==j.type||"href"in j.props)||(k.href=(0,c.addBasePath)(g)),s.default.cloneElement(j,k)};t.default=v},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var i=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=i},mPvQ:function(e,t,n){var r=n("5fIB"),i=n("rlHP"),o=n("KckH"),s=n("kG2m");e.exports=function(e){return r(e)||i(e)||o(e)||s()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},soUV:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n("MX0m"),i=n.n(r),o=n("q1tI"),s=n.n(o),a=n("8Kt/"),u=n.n(a),c=n("YFqc"),l=n.n(c),d=n("nOHt"),f=s.a.createElement;function p(e){var t=e.active,n=e.onClick;return f("div",{onClick:n,className:"jsx-3058196896 "+("container "+(t?"active":"")||!1)},f("div",{className:"jsx-3058196896 meat meat-1"}),f("div",{className:"jsx-3058196896 meat meat-2"}),f("div",{className:"jsx-3058196896 meat meat-3"}),f(i.a,{id:"3058196896"},[".container.jsx-3058196896{position:fixed;width:38px;height:38px;cursor:pointer;top:1rem;left:1.25rem;z-index:2;background-color:rgba(255,255,255,0.7);}",".meat.jsx-3058196896{position:absolute;width:28px;height:2px;background:#222;top:calc(50% - 2px / 2);left:calc(50% - 28px / 2);-webkit-transition:all 150ms ease-in;transition:all 150ms ease-in;}",".meat-1.jsx-3058196896{-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px);}",".meat-2.jsx-3058196896{width:calc(28px - 6px);}",".meat-3.jsx-3058196896{-webkit-transform:translateY(10px);-ms-transform:translateY(10px);transform:translateY(10px);}",".active.jsx-3058196896 .meat-1.jsx-3058196896{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}",".active.jsx-3058196896 .meat-2.jsx-3058196896{opacity:0;}",".active.jsx-3058196896 .meat-3.jsx-3058196896{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);}","@media (min-width:769px){.container.jsx-3058196896{display:none;}}"]))}var h=s.a.createElement;function m(){var e=Object(d.useRouter)(),t=Object(o.useState)(!1),n=t[0],r=t[1];return h(s.a.Fragment,null,h(p,{active:n,onClick:function(){return r(!n)}}),h("div",{className:"jsx-4138737674 "+("container "+(n?"active":"")||!1)},h("ul",{className:"jsx-4138737674"},h("li",{className:"jsx-4138737674"},h(l.a,{href:"/"},h("a",{className:"jsx-4138737674 "+(("/"===e.pathname?"active":null)||"")},"about"))),h("li",{className:"jsx-4138737674"},h(l.a,{href:"/posts"},h("a",{className:"jsx-4138737674 "+((e.pathname.startsWith("/posts")?"active":null)||"")},"blog")))),h(i.a,{id:"4138737674"},[".container.jsx-4138737674{width:0;}","ul.jsx-4138737674{opacity:0;width:100%;height:100vh;text-align:right;list-style:none;margin:0;padding:0;position:fixed;top:0;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;z-index:1;-webkit-transform:translateY(100%);-ms-transform:translateY(100%);transform:translateY(100%);-webkit-transition:opacity 200ms;transition:opacity 200ms;}",".active.jsx-4138737674 ul.jsx-4138737674{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}","li.jsx-4138737674{margin-bottom:1.75rem;font-size:2rem;padding:0 1.5rem 0 0;}","li.jsx-4138737674:last-child{margin-bottom:0;}",".active.jsx-4138737674{color:#222;}","@media (min-width:769px){.container.jsx-4138737674{width:7rem;display:block;}ul.jsx-4138737674{opacity:1;width:7rem;top:auto;display:block;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}li.jsx-4138737674{font-size:1rem;padding:0;}}"])))}var v=s.a.createElement;function y(e){var t=e.children;return v("div",{className:"jsx-1038624251 root"},v(u.a,null,v("meta",{charSet:"utf-8",className:"jsx-1038624251"}),v("meta",{name:"viewport",content:"width=device-width, initial-scale=1",className:"jsx-1038624251"}),v("link",{rel:"manifest",href:"/site.webmanifest",className:"jsx-1038624251"}),v("link",{rel:"apple-touch-icon",href:"/icon.png",className:"jsx-1038624251"}),v("meta",{name:"theme-color",content:"#fff",className:"jsx-1038624251"})),v("nav",{className:"jsx-1038624251"},v(m,null)),v("main",{className:"jsx-1038624251"},t),v(i.a,{id:"1038624251"},[".root.jsx-1038624251{display:block;padding:4rem 0;box-sizing:border-box;height:100%;}","main.jsx-1038624251{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:100%;}","@media (min-width:769px){.root.jsx-1038624251{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;}main.jsx-1038624251{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;}}"]))}}}]);