import MeatBase from "../meat-base.js";

const template = document.createElement("template");
template.innerHTML = `
<style></style>
<link rel="stylesheet" href="https://unpkg.com/@meatspace/webcomponents@latest/web_components/meat-boilerplate/meat-boilerplate.css"/>
`;

export class MeatBoilerplateElement extends MeatBase {
  /**
   * meat-boilerplate webcomponent
   * @customelement meat-boilerplate
   * @description A boilerplate for starting new webcomponents
   * @example <meat-boilerplate></meat-boilerplate>
   */
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.appendChild(template.content.cloneNode(true));
    this.changeLinkHref(this.shadow);
  }

  /**
   * Live-cycle method called when the custom element is loaded, often used for initialization
   */
  connectedCallback() {}

  /**
   * Tell the webcomponent to observe these attributes, if any of them are added, changed, or removed, then
   * call attributeChangedCallback(name, oldVal, newVal)
   */
  static get observedAttributes() {
    return [];
  }

  /**
   * Called whenever one of the attributes specified in observedAttributes() is changed
   * @param {string} name
   * @param {string} oldVal
   * @param {string} newVal
   */
  attributeChangedCallback(name, oldVal, newVal) {}
}
window.customElements.define("meat-boilerplate", MeatBoilerplateElement);
