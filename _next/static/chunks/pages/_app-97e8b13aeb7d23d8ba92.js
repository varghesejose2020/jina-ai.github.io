(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1612:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(6265),o=n(5893),i=n(7294),u=n(1163),c=n(4155).env.NEXT_PUBLIC_GA_ID;n(6699);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var s=function(e){var t=e.Component,n=e.pageProps,s=(0,u.useRouter)();return(0,i.useEffect)((function(){var e=function(e){!function(e){window&&window.gtag&&window.gtag("config",c,{page_path:e})}(e)};return s.events.on("routeChangeComplete",e),function(){s.events.off("routeChangeComplete",e)}}),[s.events]),(0,o.jsx)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n))}},6363:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(1612)}])},6699:function(){},6265:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},1163:function(e,t,n){e.exports=n(2441)},4155:function(e){var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var c,f=[],s=!1,a=-1;function l(){s&&c&&(s=!1,c.length?f=c.concat(f):a=-1,f.length&&p())}function p(){if(!s){var e=u(l);s=!0;for(var t=f.length;t;){for(c=f,f=[];++a<t;)c&&c[a].run();a=-1,t=f.length}c=null,s=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function w(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];f.push(new h(e,t)),1!==f.length||s||u(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=w,r.addListener=w,r.once=w,r.off=w,r.removeListener=w,r.removeAllListeners=w,r.emit=w,r.prependListener=w,r.prependOnceListener=w,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,351],(function(){return t(6363),t(2441)}));var n=e.O();_N_E=n}]);