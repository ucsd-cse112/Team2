!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=4)}({4:function(t,e,r){"use strict";r.r(e),r.d(e,"MeatCardElement",function(){return o});const n=document.createElement("template");n.innerHTML='\n<style></style>\n<link rel="stylesheet" href="/web_components/meat-card/meat-card.css"/>\n<slot id="header" name="header"></slot>\n<slot id="body" name="body"></slot>\n';class o extends HTMLElement{constructor(){super(),this.shadowDOM=this.attachShadow({mode:"open"}),this.shadowDOM.appendChild(n.content.cloneNode(!0)),this.drag_start=this.drag_start.bind(this),this.addEventListener("dragstart",this.drag_start,!1),document.body.addEventListener("dragover",this.drag_over,!1),document.body.addEventListener("drop",this.drop,!1)}connectedCallback(){}static get observedAttributes(){return["shadow","draggable"]}drag_start(t){console.log("Drag started");const e=window.getComputedStyle(t.target,null);t.dataTransfer.setData("text/plain",parseInt(e.getPropertyValue("left"),10)-t.clientX+","+(parseInt(e.getPropertyValue("top"),10)-t.clientY))}drop(t){console.log("Drop started");const e=t.dataTransfer.getData("text/plain").split(",");return this.style.left=t.clientX+parseInt(e[0],10)+"px",this.style.top=t.clientY+parseInt(e[1],10)+"px",t.preventDefault(),!1}drag_over(t){return t.preventDefault(),!1}attributeChangedCallback(t,e,r){t}get shadow(){return this.getAttribute("shadow")}set shadow(t){t?this.setAttribute("shadow",t):this.removeAttribute("shadow")}}window.customElements.define("meat-card",o)}});