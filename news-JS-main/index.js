(()=>{"use strict";var e={880:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,".find {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  height: 30px;\r\n  width: 300px;\r\n  margin: 30px auto;\r\n}\r\n\r\n.find__input {\r\n  border-radius: 5px;\r\n  font: 300 1em 'Fira Sans', sans-serif;\r\n}\r\n\r\n.find > button {\r\n  border-radius: 5px;\r\n  width: 70px;\r\n}",""]);const i=o},305:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,".about {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 100px;\r\n  width: 320px;\r\n}\r\n\r\n.about > p {\r\n  color: #333;\r\n}",""]);const i=o},669:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,".news__item {\n  display: flex;\n  flex-direction: column;\n  margin: 1rem auto;\n  margin-bottom: 1.6%;\n  background: #fff;\n  color: #333;\n  line-height: 1.4;\n  font-family: Arial, sans-serif;\n  border-radius: 5px;\n  overflow: hidden;\n}\n\n.news__item:hover .news__meta-photo {\n  transform: scale(1.3) rotate(3deg);\n}\n\n.news__item .news__meta {\n  position: relative;\n  height: 200px;\n}\n\n.news__item .news__meta-photo {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-size: cover;\n  background-position: center;\n  transition: transform 0.2s;\n}\n\n.news__item .news__meta-details,\n.news__item .news__meta-details ul {\n  margin: auto;\n  padding: 0;\n  list-style: none;\n}\n\n.news__item .news__meta-details {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: -120%;\n  margin: auto;\n  transition: left 0.2s;\n  background: rgba(0, 0, 0, 0.6);\n  color: #fff;\n  padding: 10px;\n  width: 100%;\n  font-size: 0.9rem;\n}\n\n.news__item .news__description {\n  padding: 1rem;\n  background: #fff;\n  position: relative;\n  z-index: 1;\n}\n\n.news__item .news__description h2 {\n  line-height: 1;\n  margin: 0;\n  font-size: 1.7rem;\n}\n\n.news__item .news__description h3 {\n  font-size: 1rem;\n  font-weight: 300;\n  text-transform: uppercase;\n  color: #a2a2a2;\n  margin-top: 5px;\n}\n\n.news__item .news__description .news__read-more {\n  text-align: right;\n}\n\n.news__item .news__description .news__read-more a {\n  color: #5ad67d;\n  display: inline-block;\n  position: relative;\n  text-decoration: none;\n  font-weight: 800;\n}\n\n.news__item .news__description .news__read-more a:after {\n  content: '→';\n  margin-left: -10px;\n  opacity: 0;\n  vertical-align: middle;\n  transition: margin 0.3s, opacity 0.3s;\n}\n\n.news__item .news__description .news__read-more a:hover:after {\n  margin-left: 5px;\n  opacity: 1;\n}\n\n.news__item p {\n  margin: 1rem 0 0;\n}\n\n.news__item p:first-of-type {\n  margin-top: 1.25rem;\n  position: relative;\n}\n\n.news__item p:first-of-type:before {\n  content: '';\n  position: absolute;\n  height: 5px;\n  background: #5ad67d;\n  width: 35px;\n  top: -0.75rem;\n  border-radius: 3px;\n}\n\n.news__item:hover .news__meta-details {\n  left: 0%;\n}\n\n@media (min-width: 640px) {\n  .news__item {\n    flex-direction: row;\n    max-width: 700px;\n  }\n\n  .news__item .news__meta {\n    flex-basis: 40%;\n    height: auto;\n  }\n\n  .news__item .news__description {\n    flex-basis: 60%;\n  }\n\n  .news__item .news__description:before {\n    -webkit-transform: skewX(-3deg);\n    transform: skewX(-3deg);\n    content: '';\n    background: #fff;\n    width: 30px;\n    position: absolute;\n    left: -10px;\n    top: 0;\n    bottom: 0;\n    z-index: -1;\n  }\n\n  .news__item.alt {\n    flex-direction: row-reverse;\n  }\n\n  .news__item.alt .news__description:before {\n    left: inherit;\n    right: -10px;\n    -webkit-transform: skew(3deg);\n    transform: skew(3deg);\n  }\n\n  .news__item.alt .news__meta-details {\n    padding-left: 25px;\n  }\n}\n\n@media (min-width: 1000px) {\n  .news__item {\n    max-width: 1200px;\n  }\n}",""]);const i=o},501:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,".sources {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: center;\n  max-width: 700px;\n  margin: 0 auto;\n  height: 205px;\n  overflow: auto;\n  border: 2px solid #fff;\n  border-radius: 8px;\n  font: 300 0.8em 'Fira Sans', sans-serif;\n}\n\n.source__item {\n  display: flex;\n  justify-content: center;\n  width: 120px;\n  background: none;\n  border: 2px solid #30c5ff;\n  border-radius: 8px;\n  font: inherit;\n  line-height: 1;\n  margin: 0.5em;\n  padding: 1em 2em;\n  color: #70d6ff;\n  transition: 0.25s;\n  cursor: pointer;\n}\n\n.source__item_off {\n  display: none;\n}\n\n.source__item:hover,\n.source__item:focus {\n  border-color: #3fcc59;\n  color: #69db7e;\n  box-shadow: 0 0.5em 0.5em -0.4em #3fcc59;\n  transform: translateY(-0.25em);\n}\n\n.source__item-name {\n  font-weight: 400;\n  white-space: nowrap;\n}\n\n@media (min-width: 1000px) {\n  .sources {\n    max-width: 1200px;\n    font: 300 1em 'Fira Sans', sans-serif;\n}\n  .source__item {\n    width: 150px;\n  }\n}",""]);const i=o},767:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"body {\n  color: #fff;\n  background: #17181c;\n  font-family: sans-serif;\n}\n\nheader {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 10px 30px;\n}\n\nheader h1 {\n  font-size: 40px;\n  font-weight: 800;\n}\n\nfooter {\n  height: 100px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\nfooter .copyright {\n  font-size: 14px;\n  color: #333;\n  text-align: center;\n}\nfooter .copyright a {\n  color: #444;\n}\nfooter .copyright a:hover {\n  color: #555;\n}\nfooter .copyright:before {\n  content: '©';\n}\n",""]);const i=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},615:(e,n,t)=>{t.r(n),t.d(n,{default:()=>s});var r=t(379),o=t.n(r),i=t(880);o()(i.Z,{insert:"head",singleton:!1});const s=i.Z.locals||{}},772:(e,n,t)=>{t.r(n),t.d(n,{default:()=>s});var r=t(379),o=t.n(r),i=t(305);o()(i.Z,{insert:"head",singleton:!1});const s=i.Z.locals||{}},242:(e,n,t)=>{t.r(n),t.d(n,{default:()=>s});var r=t(379),o=t.n(r),i=t(669);o()(i.Z,{insert:"head",singleton:!1});const s=i.Z.locals||{}},595:(e,n,t)=>{t.r(n),t.d(n,{default:()=>s});var r=t(379),o=t.n(r),i=t(501);o()(i.Z,{insert:"head",singleton:!1});const s=i.Z.locals||{}},427:(e,n,t)=>{t.r(n),t.d(n,{default:()=>s});var r=t(379),o=t.n(r),i=t(767);o()(i.Z,{insert:"head",singleton:!1});const s=i.Z.locals||{}},379:(e,n,t)=>{var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function s(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function a(e,n){for(var t={},r=[],o=0;o<e.length;o++){var a=e[o],c=n.base?a[0]+n.base:a[0],d=t[c]||0,l="".concat(c," ").concat(d);t[c]=d+1;var u=s(l),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:l,updater:_(f,n),references:1}),r.push(l)}return r}function c(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var s=o(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}return n}var d,l=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function u(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(n,o);else{var i=document.createTextNode(o),s=e.childNodes;s[n]&&e.removeChild(s[n]),s.length?e.insertBefore(i,s[n]):e.appendChild(i)}}function f(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,m=0;function _(e,n){var t,r,o;if(n.singleton){var i=m++;t=p||(p=c(n)),r=u.bind(null,t,i,!1),o=u.bind(null,t,i,!0)}else t=c(n),r=f.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=a(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=s(t[r]);i[o].references--}for(var c=a(e,n),d=0;d<t.length;d++){var l=s(t[d]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=c}}}},717:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const o=r(t(842)),i=t(527),s=t(230);n.default=class{constructor(){this.controller=new o.default,this.view=new i.AppView}start(){(0,s.setElement)(document,".sources").addEventListener("click",(e=>this.controller.getNews(e,(e=>i.AppView.drawNews(e))))),this.controller.getSources((e=>i.AppView.drawSources(e)))}}},853:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const o=r(t(24));class i extends o.default{constructor(){super("https://rss-news-api.onrender.com/",{apiKey:"7cc0f9b1147148cea8501478d9c54264"})}}n.default=i},842:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const o=r(t(853));class i extends o.default{getSources(e){super.getResp({endpoint:"sources"},e)}getNews(e,n){let t=e.target;const r=e.currentTarget;for(;t!==r;){if(t.classList.contains("source__item")){let e=t.getAttribute("data-source-id");return null===e&&(e="null"),void(r.getAttribute("data-source")!==e&&(r.setAttribute("data-source",e),super.getResp({endpoint:"everything",options:{sources:e}},n)))}t=t.parentNode}}}n.default=i},24:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0});class t{constructor(e,n){this.baseLink=e,this.options=n}getResp({endpoint:e,options:n},t){this.load("GET",e,t,n)}static errorHandler(e){if(!e.ok)throw 401!==e.status&&404!==e.status||console.log(`Sorry, but there is ${e.status} error: ${e.statusText}`),Error(e.statusText);return e}makeUrl(e,n){const t=Object.assign(Object.assign({},this.options),e);let r=`${this.baseLink}${n}?`;return Object.keys(t).forEach((e=>{r+=`${e}=${t[e]}&`})),r.slice(0,-1)}load(e,n,r,o={}){fetch(this.makeUrl(o,n),{method:e}).then(t.errorHandler).then((e=>e.json())).then((e=>r(e))).catch((e=>console.error(e)))}}n.default=t},527:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.AppView=void 0;const o=r(t(798)),i=r(t(53));class s{constructor(){this.news=new o.default,this.sources=new i.default}static drawNews(e){const n=(null==e?void 0:e.articles)?null==e?void 0:e.articles:[];o.default.draw(n)}static drawSources(e){const n=(null==e?void 0:e.sources)?null==e?void 0:e.sources:[];i.default.draw(n)}}n.AppView=s,n.default=s},313:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),t(615);const r=document.querySelector(".find__input"),o=document.querySelector(".find__btn");null==o||o.addEventListener("click",(()=>{const e=document.querySelectorAll(".source__item");if(r){const n=r.value.toLowerCase();e.forEach((e=>{var t;e.classList.remove("source__item_off"),(null===(t=e.children[0].textContent)||void 0===t?void 0:t.toLowerCase().includes(n))||(e.classList.add("source__item_off"),e.classList.add("source__item_off"))}))}}))},550:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),t(772);const o=r(t(103)),i=r(t(958)),s=document.querySelector(".rs-school");if(s){const e=document.createElement("a");e.href="https://rs.school/js/";const n=new Image;n.src=o.default,n.alt="RS-School",e.append(n),s.append(e)}const a=document.querySelector(".github");if(a){const e=document.createElement("a");e.href="https://github.com/oecorango/";const n=new Image;n.src=i.default,n.alt="GitHub",e.append(n),a.append(e)}},798:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),t(242);const o=t(230),i=r(t(342));n.default=class{static draw(e){const n=e.length>=10?e.filter(((e,n)=>n<10)):e,t=document.createDocumentFragment(),r=document.querySelector("#newsItemTemp");n.forEach(((e,n)=>{const s=r.content.cloneNode(!0),a=(0,o.setElement)(s,".news__item");n%2&&a.classList.add("alt"),(0,o.setElement)(s,".news__meta-photo").style.backgroundImage=`url(${e.urlToImage||i.default})`,(0,o.setElement)(s,".news__meta-author").textContent=e.author||e.source.name,(0,o.setElement)(s,".news__description-title").textContent=e.publishedAt.slice(0,10).split("-").reverse().join("-"),(0,o.setElement)(s,".news__meta-date").textContent=e.title,(0,o.setElement)(s,".news__description-source").textContent=e.source.name,(0,o.setElement)(s,".news__description-content").textContent=e.description,(0,o.setElement)(s,".news__read-more a").setAttribute("href",e.url),t.append(s)})),(0,o.setElement)(document,".news").innerHTML="",(0,o.setElement)(document,".news").appendChild(t)}}},53:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),t(595);const r=t(230);n.default=class{static draw(e){const n=document.createDocumentFragment(),t=document.querySelector("#sourceItemTemp");e.forEach((e=>{const o=t.content.cloneNode(!0);(0,r.setElement)(o,".source__item-name").textContent=e.name,(0,r.setElement)(o,".source__item").setAttribute("data-source-id",e.id),n.append(o)})),(0,r.setElement)(document,".sources").append(n)}}},607:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const o=r(t(717));t(427),t(313),t(550),(new o.default).start()},230:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.setElement=void 0,n.setElement=function(e,n){const t=e.querySelector(n);if(!t)throw new Error("Ooops!");return t}},958:(e,n,t)=>{e.exports=t.p+"e05a53c7db7b52d6c466.svg"},103:(e,n,t)=>{e.exports=t.p+"c936a50745e667625bf0.svg"},342:(e,n,t)=>{e.exports=t.p+"a27fd60deb1bfb4c8911.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,t(607)})();