(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{9331:function(e,r,t){"use strict";t.d(r,{Z:function(){return a}});var n=t(5893);t(7294);function a(e){var r=e.name,t=e.imgSrc;return(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("img",{src:t||"/assets/images/team/avatar-default.svg",className:"w-8 h-auto rounded-full mr-4",alt:r||"default profile image"}),(0,n.jsx)("div",{className:"text-gray-600",children:r})]})}},4217:function(e,r,t){"use strict";t.d(r,{Z:function(){return a}});var n=t(5893);t(7294);function a(e){var r=e.children;return(0,n.jsx)("div",{className:"container mx-auto px-5 flex flex-col",children:r})}},8331:function(e,r,t){"use strict";t.d(r,{A:function(){return l},Z:function(){return c}});var n=t(5893),a=t(4184),i=t.n(a),s=t(1664),l=(t(7294),"/assets/images/blog/default-blog-cover.svg");function c(e){var r=e.title,t=e.src,a=e.slug,c=e.height,o=e.width,d=e.className,u=(0,n.jsx)("img",{src:t||l,alt:"Cover Image for ".concat(r),className:i()("shadow-sm",d,{"hover:shadow-md transition-shadow duration-200":a}),width:o,height:c});return(0,n.jsx)("div",{className:"sm:mx-0",children:a?(0,n.jsx)(s.default,{as:"/posts/".concat(a),href:"/posts/[slug]",children:(0,n.jsx)("a",{"aria-label":r,children:u})}):u})}},7250:function(e,r,t){"use strict";t.d(r,{Z:function(){return s}});var n=t(5893),a=(t(7294),t(3855)),i=t(4790);function s(e){var r=e.dateString,t=(0,a.Z)(r);return(0,n.jsx)("time",{dateTime:r,children:(0,i.Z)(t,"d LLLL, yyyy")})}},999:function(e,r,t){"use strict";t.d(r,{V:function(){return l},d:function(){return o}});var n=t(5893),a=t(5988),i=(t(7294),["text-primary-500","text-secondary-500","text-blue-500","text-red-500","text-purple-500"]),s=["bg-primary-500","bg-secondary-500","bg-blue-500","bg-red-500","bg-purple-500"],l=function(e){var r=e.children,t=e.index,a=function(e){return i[e%i.length]}(t),l=function(e){return s[e%s.length]}(t);return(0,n.jsx)("div",{className:"inline-block px-2 py-0 rounded ".concat(a," ").concat(l," bg-opacity-20 mr-2 mb-2"),children:r})},c=function(e){var r=e.author;return(0,n.jsxs)("div",{className:"flex flex-row items-center",children:[(0,n.jsx)("div",{className:"flex-1 truncate text-right mr-2 ",children:r.displayName}),(0,n.jsx)("img",{src:r.avatarURL,className:"h-8 rounded-full",alt:r.displayName})]})},o=function(e){var r=e.image,t=e.maxTags,i=void 0===t?5:t,s=r.name,o=r.tags,d=r.description,u=r.author,x=o.length-i;return(0,n.jsx)("div",{className:"h-full rounded-md bg-white shadow-lg p-6 hover:shadow-xl",children:(0,n.jsxs)("a",{href:r.url,className:"jsx-1862857728 gap-6 flex flex-col",children:[(0,n.jsx)("div",{className:"jsx-1862857728 text-lg font-semibold truncate",children:s}),(0,n.jsxs)("div",{className:"jsx-1862857728",children:[o.slice(0,i).map((function(e,r){return(0,n.jsx)(l,{index:r,children:e},r)})),(0,n.jsx)("span",{className:"jsx-1862857728 text-xs text-gray-500",children:x>0&&"+ ".concat(x," more")})]}),(0,n.jsx)("div",{className:"jsx-1862857728 hub-image-desc text-gray-600 h-24",children:d}),(0,n.jsx)("div",{className:"jsx-1862857728 flex justify-end content-end gap-4 items-center",children:(0,n.jsx)("div",{className:"jsx-1862857728 ",children:(0,n.jsx)(c,{author:u})})}),(0,n.jsx)(a.default,{id:"1862857728",children:[".hub-image-desc.jsx-1862857728{display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden;}"]})]})})}},3148:function(e,r,t){"use strict";var n=t(5893),a=(t(7294),t(5069)),i=t(9914),s=t(1909);r.Z=function(e){var r=e.children;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{}),(0,n.jsx)("div",{className:"mt-24",children:r}),(0,n.jsx)(a.G,{}),(0,n.jsx)(i.$,{})]})}},54:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return N},default:function(){return k}});var n=t(5893),a=t(5093);var i=t(355);function s(e){return function(e){if(Array.isArray(e))return(0,a.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||(0,i.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=t(7294),c=t(8027),o=t(3148),d=t(4217),u=t(7264);function x(e){var r=e.posts;return(0,n.jsx)("section",{children:(0,n.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-x-1 lg:gap-x-4 gap-y-4 md:gap-y-8 mb-32",children:r.map((function(e){return(0,n.jsx)("div",{children:(0,n.jsx)(u.c,{title:e.title,coverImage:e.coverImage,description:e.description,date:e.date,link:e.external_url||"/blog/".concat(e.slug),excerpt:e.excerpt})},e.slug)}))})})}var m=t(9331),g=t(7250),h=t(8331),f=t(1664);function p(e){var r=e.title,t=e.description,a=e.coverImage,i=e.date,s=e.excerpt,l=e.author,c=e.slug;return(0,n.jsxs)("section",{className:"md:py-2 md:grid lg:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28 mt-28",children:[(0,n.jsx)("div",{className:"mb-8 lg:mb-2",children:(0,n.jsx)(h.Z,{title:r,src:a,slug:c,height:1e3,width:1600,className:"rounded-2xl max-h-full object-scale-down"})}),(0,n.jsxs)("div",{className:"flex flex-col gap-2 md:gap-4",children:[(0,n.jsxs)("div",{className:"gap-2 md:gap-4 flex flex-col",children:[(0,n.jsx)("div",{className:"mb-4 text-4xl lg:text-5xl leading-tight font-bold",children:(0,n.jsx)(f.default,{as:"/blog/".concat(c),href:"/blog/[slug]",children:(0,n.jsx)("a",{className:"hover:underline",children:r})})}),(0,n.jsx)("div",{className:"mb-4 md:mb-0 text-lg text-gray-500",children:(0,n.jsx)(g.Z,{dateString:i})}),(0,n.jsx)("div",{className:"text-xl text-gray-600",children:(0,n.jsx)("p",{children:t})})]}),(0,n.jsxs)("div",{className:"text-xl",children:[(0,n.jsx)("p",{className:"text-xl leading-relaxed mb-4",children:s}),(0,n.jsx)(m.Z,{name:l})]})]})]})}function v(e){var r=e.currentPage,t=e.setCurrentPage,a=e.totalPages;return(0,n.jsxs)("div",{className:"bg-white px-4 py-3 flex items-center justify-center border-t border-gray-200 sm:px-6 mx-auto w-full",children:[(0,n.jsxs)("div",{className:"flex-1 flex justify-between sm:hidden",children:[(0,n.jsx)("a",{href:"#",className:"relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",onClick:function(){return t(r-1)},children:"Previous"}),(0,n.jsx)("a",{href:"#",className:"ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",onClick:function(){return t(r+1)},children:"Next"})]}),(0,n.jsx)("div",{className:"hidden sm:flex sm:items-center sm:justify-between",children:(0,n.jsx)("div",{children:(0,n.jsxs)("nav",{className:"relative z-0 inline-flex rounded-md shadow-sm -space-x-px","aria-label":"Pagination",children:[(0,n.jsxs)("a",{href:"#",onClick:function(){return t(r-1)},className:"relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",children:[(0,n.jsx)("span",{className:"sr-only",children:"Previous"}),(0,n.jsx)("svg",{className:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"})})]}),Array.from(Array(a).keys()).map((function(e){return(0,n.jsx)("a",{href:"#","aria-current":"page",onClick:function(){return t(e)},className:r===e?"z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium":"bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium",children:e+1},e)})),(0,n.jsxs)("a",{href:"#",onClick:function(){return t(r+1)},className:"relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",children:[(0,n.jsx)("span",{className:"sr-only",children:"Next"}),(0,n.jsx)("svg",{className:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})})]})]})})})]})}var b=function(e){return Array.from(new Set(e))},j=function(e,r){return!!e&&0!==r.filter((function(r){return e.includes(r)})).length},y=function(e,r){return 0===r.length?e:e.filter((function(e){return j(e.tags,r)||j(e.categories,r)}))},w=t(7162),N=!0;function k(e){var r=e.allPosts,t=(0,l.useState)([]),a=t[0],i=t[1],u=(0,l.useState)(0),m=u[0],g=u[1],h=(0,l.useState)([]),f=h[0],j=h[1],N=(0,l.useState)(!1),k=N[0],S=N[1],Z=b(r.reduce((function(e,r){return r.tags?[].concat(s(e),s(r.tags)):e}),[])),_=b(r.reduce((function(e,r){return r.categories?[].concat(s(e),s(r.categories)):e}),[])),C=function(e){return i(a.includes(e)?a.filter((function(r){return r!==e})):[].concat(s(a),[e]))},z=r.find((function(e){return"hero"===e.layout})),A=r.filter((function(e){return e.slug!==(null===z||void 0===z?void 0:z.slug)})),I=Math.ceil(A.length/9),P=y(A,a);return(0,l.useEffect)((function(){P=y(A,a),j(P.slice(9*m,9*(m+1)))}),[m,a]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.Z,{title:w.zz.metaData.title,description:w.zz.metaData.description,canonical:w.zz.metaData.canonical}),(0,n.jsx)(o.Z,{children:(0,n.jsxs)(d.Z,{children:[z&&(0,n.jsx)(p,{title:z.title,description:z.description,coverImage:z.coverImage,date:z.date,author:z.author,slug:z.slug,excerpt:z.excerpt}),(0,n.jsx)("div",{className:"flex flex-wrap mb-8",children:_.map((function(e){return(0,n.jsx)("div",{onClick:function(){return C(e)},className:a.includes(e)?"py-1 px-2 text-xl text-primary-500 font-normal mx-2 border-b-2 border-primary-500 border-solid cursor-pointer":"py-1 px-2 text-xl text-gray-700 font-normal mx-2 cursor-pointer",children:e},e)}))}),(0,n.jsxs)("div",{className:"relative flex flex-wrap mb-20 pr-16 ".concat(!k&&"max-h-20 overflow-hidden"),children:[Z.map((function(e){return(0,n.jsx)("div",{onClick:function(){return C(e)},className:"".concat(a.includes(e)?"py-1 px-2 bg-primary-500 bg-opacity-20 rounded-full mx-2 border cursor-pointer text-primary-500 border-primary-500":"py-1 px-2 bg-gray-300 bg-opacity-20 rounded-full mx-2 border cursor-pointer"," mb-2"),children:e},e)})),(0,n.jsx)("span",{className:"absolute text-blue-500 right-0 bottom-1",onClick:function(){return S(!k)},children:k?w.zz.blogTagsShowLessLabel:w.zz.blogTagsShowMoreLabel})]}),f.length>0&&(0,n.jsx)(x,{posts:f}),A.length>f.length&&(0,n.jsx)(v,{currentPage:m,setCurrentPage:g,totalPages:I})]})})]})}},7264:function(e,r,t){"use strict";t.d(r,{c:function(){return m}});var n=t(5893),a=(t(7294),t(6395)),i=t(323),s=t(7162),l=t(999),c=t(4773),o=t(7250),d=t(1664),u=t(8331),x=[{title:"Why The Next Billion-Dollar Enterprise Software Companies Will Be Born Outside The US",date:"2021-07-14",slug:"forbes",author:"Jina Team",layout:"post",description:"Forbes featured Jina AI as one of the earlier-stage developer-driven software companies born outside the US that are on track to be billion-dollar business.",coverImage:"/assets/images/blog/forbes/cover.jpg",link:"https://www.forbes.com/sites/glennsolomon/2021/07/12/why-the-next-billion-dollar-enterprise-software-companies-will-be-born-outside-the-us/"},{title:"Search ALL the things: We're running a meme contest for Jina 2.0",date:"2021-05-31",slug:"meme-contest",author:"Alex C-G",layout:"post",description:"We're looking for your dankest memes for our upcoming launch. Much Jina. Very meme.",coverImage:"/assets/images/blog/meme_contest/cover.png",tags:[]},{title:"New Features in Jina 1.3 You Should Know About",date:"2021-05-27",slug:"jina-130-whats-new",author:"Jina Team",layout:"post",description:"Query while indexing, replicas to improve throughput and learning to rank",coverImage:"/assets/images/blog/releases/1_3/banner_1_3.jpg",link:"https://github.com/jina-ai/jina/releases/tag/v1.3.0",tags:[]}];function m(e){var r=e.coverImage,t=e.title,a=e.description,i=e.tags,s=e.date,x=e.link,m=function(){return(0,n.jsx)("div",{className:"flex",children:null===i||void 0===i?void 0:i.map((function(e,r){return(0,n.jsx)(l.V,{index:0,children:e},"".concat(e,"-").concat(r))}))})},g=function(){return(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:"float-right",children:(0,n.jsx)(o.Z,{dateString:s})})})};return(0,n.jsx)(d.default,{href:x,children:(0,n.jsx)("div",{className:"h-full",children:(0,n.jsx)(c.Z,{img:(0,n.jsx)("img",{className:"rounded-t-xl w-full",alt:r,src:r||u.A}),headerString:t,body:(0,n.jsx)(m,{}),copy:a||"",footer:(0,n.jsx)(g,{})})})})}r.Z=function(){return(0,n.jsxs)(a.$,{children:[(0,n.jsx)(i.Z,{headerStrings:s.zz.homeBlogPreviewHeaderStrings}),(0,n.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-x-1 lg:gap-x-0 gap-y-4 md:gap-y-8",children:x.map((function(e,r){var t=e.coverImage,a=e.title,i=e.description,s=e.date,l=e.tags,c=e.slug,o=e.link;return(0,n.jsx)(m,{coverImage:t,title:a,tags:l,description:i,date:s,link:o||"/blog/".concat(c)},"BlogPreview-".concat(r))}))})]})}},4773:function(e,r,t){"use strict";var n=t(5893),a=t(5988);t(7294);r.Z=function(e){var r=e.cardLink,t=e.img,i=e.headerString,s=e.copy,l=e.body,c=e.footer;return(0,n.jsxs)("div",{className:"jsx-1491863817 rounded-xl w-96 md:w-11/12 m-2 shadow-2xl bg-white cursor-pointer h-full hover:shadow-xl",children:[(0,n.jsxs)("a",{href:r,className:"jsx-1491863817",children:[t,(0,n.jsxs)("div",{className:"jsx-1491863817 px-6 pt-8 pb-4 flex flex-col gap-4",children:[l,(0,n.jsx)("div",{className:"jsx-1491863817 text-xl text-black font-bold",children:i}),(0,n.jsx)("div",{className:"jsx-1491863817 flex card-desc text-gray-600 mb-6 h-24",children:s}),(0,n.jsx)("div",{className:"jsx-1491863817 grid-cols-1 place-items-end",children:c})]})]}),(0,n.jsx)(a.default,{id:"1491863817",children:[".card-desc.jsx-1491863817{display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden;}"]})]})}},323:function(e,r,t){"use strict";var n=t(5893);t(7294);r.Z=function(e){var r=e.headerStrings,t=e.className;return(0,n.jsx)("h2",{className:"text-black  text-center font-bold  mb-10 ".concat(t),children:r.map((function(e,r){return(0,n.jsx)("span",{className:""+("green"===e[1]&&"text-primary-500"),children:e[0]},"header-part-".concat(r))}))})}},5423:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return t(54)}])},5093:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}t.d(r,{Z:function(){return n}})},355:function(e,r,t){"use strict";t.d(r,{Z:function(){return a}});var n=t(5093);function a(e,r){if(e){if("string"===typeof e)return(0,n.Z)(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,n.Z)(e,r):void 0}}}},function(e){e.O(0,[774,351,596,522,93],(function(){return r=5423,e(e.s=r);var r}));var r=e.O();_N_E=r}]);