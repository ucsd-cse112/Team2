!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=315)}({315:function(e,t){window.customElements.define("team2-learn",class extends HTMLElement{constructor(){super(),this._items=[];const e=this.attachShadow({mode:"open"});this._shadowRoot=e,this.template=document.createElement("template"),this.template.innerHTML='\n        <style>\n            #container {\n                background-color: lightgrey;\n                border: 1px solid black;\n                width: 300px;\n            }\n            span {\n                display: block;\n                overflow-wrap: break-word;\n            }\n        </style>\n        <div id="container"></div>\n        ',this._shadowRoot.appendChild(this.template.content.cloneNode(!0)),this._render()}connectedCallback(){}_render(){const e=this._shadowRoot.querySelector("#container");e.innerHTML="",this._items.forEach((t,n)=>{const r=document.createElement("span");r.id=n,r.innerHTML=t,r.addEventListener("click",e=>{this._items.splice(e.target.id,1),this._render()}),e.appendChild(r)})}set items(e){this._items=e,this._render()}get items(){return this._items}})}});