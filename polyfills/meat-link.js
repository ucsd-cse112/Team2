!function(t){var e={};function r(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=314)}({314:function(t,e,r){"use strict";r.r(e),r.d(e,"MeatLinkElement",function(){return n});const i=document.createElement("template");i.innerHTML='\n<style></style>\n<link rel="stylesheet" href="/web_components/meat-link/meat-link.css"/>\n<a></a>\n';class n extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.shadow.appendChild(i.content.cloneNode(!0)),this.link=this.shadow.querySelector("a")}connectedCallback(){this.link.textContent=this.textContent}static get observedAttributes(){return["type","color","href","disabled","underline","icon","bootstrap"]}attributeChangedCallback(t,e,r){switch(t){case"disabled":this.link.setAttribute("disabled",r),this.link.disabled=r;break;case"underline":this.link.setAttribute("underline",r);case"href":this.link.href=r;break;case"type":this.link.type=r;break;case"color":this.link.setAttribute("color",r);break;case"bootstrap":this.link.setAttribute("bootstrap",r),this.link.className=r}}get color(){return this.getAttribute("color")}set color(t){t?this.setAttribute("color",t):this.removeAttribute("color")}get underline(){return this.getAttribute("underline")}set underline(t){t?this.setAttribute("underline",t):this.removeAttribute("underline")}get type(){return this.getAttribute("type")}set type(t){t?this.setAttribute("type",t):this.removeAttribute("type")}get href(){return this.getAttribute("href")}set href(t){t?this.setAttribute("href",t):this.removeAttribute("href")}get bootstrap(){return this.getAttribute("bootstrap")}set bootstrap(t){t?this.setAttribute("bootstrap",t):this.removeAttribute("bootstrap")}get disabled(){return this.hasAttribute("disabled")}set disabled(t){t?this.setAttribute("disabled",t):this.removeAttribute("disabled")}}window.customElements.define("meat-link",n)}});