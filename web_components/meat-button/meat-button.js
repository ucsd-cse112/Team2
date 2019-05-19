const template = document.createElement("template");
template.innerHTML = `
<style>
/* define color scheme for default button */
:host {
    display: inline-block;
    position: relative;
    width: 90px;
    height: 40px;

    /* special override-able css variables */

    --font-family: sans-serif;

    /* round */
    --border-radius: 100px;

    /* colors */
    --background-color: #ffffff;
    --text-color: #444444;
    --border: 1px solid #cccccc;

    --hover-background-color: #daeeff;
    --focus-background-color: #daeeff;
    --active-background-color: #daeeff;

    --hover-text-color: #3388ff;
    --focus-text-color: #3388ff;

    --hover-border: 1px solid #daeeff;
    --focus-border: 1px solid #bbccff;
    --active-border: 1px solid #3388ff;
}

/* Default style if no type is specified */
button {
    display: inline-block;
    width: 100%;
    height: 100%;
    background-color: var(--background-color);
    color:  var(--text-color); /* text color */
    border: var(--border);
    outline: none; /* outline when focused, doesn't play nicely with round button/border-radius so hide it; instead we create our own focus */
    font-size: var(--font-size, 15px);
    font-family: var(--font-family);
    vertical-align: top; /* this is important, word wrapping messes up positioning of button unless we have this */
    margin: 0px;
    padding: 0px;
}

/* define color scheme for white button */
:host([color="white"]) {
  /* colors */
  --background-color: #ffffff;
  --text-color: #444444;
  --border: 1px solid #cccccc;

  --hover-background-color: #daeeff;
  --focus-background-color: #daeeff;
  --active-background-color: #daeeff;

  --hover-text-color: #3388ff;
  --focus-text-color: #3388ff;

  --hover-border: 1px solid #daeeff;
  --focus-border: 1px solid #bbccff;
  --active-border: 1px solid #3388ff;
}

:host([color="grey"]) {
  /* colors */
  --background-color: #777777;
  --text-color: #ffffff;
  --border: 1px solid #777777;

  --hover-background-color: #999999;
  --focus-background-color: #999999;
  --active-background-color: #555555;

  --hover-text-color: #ffffff;
  --focus-text-color: #ffffff;

  --hover-border: 1px solid #999999;
  --focus-border: 1px solid #999999;
  --active-border: 1px solid #555555;
}

/* define color scheme for red button */
:host([color="red"]) {
  /* colors */
  --background-color: #cc5050;
  --text-color: #ffffff;
  --border: 1px solid #cc5050;

  --hover-background-color: #e46060;
  --focus-background-color: #e46060;
  --active-background-color: #b03737;

  --hover-text-color: #ffffff;
  --focus-text-color: #ffffff;

  --hover-border: 1px solid #e46060;
  --focus-border: 1px solid #e46060;
  --active-border: 1px solid #b03737;
}

/* define color scheme for orange button */
:host([color="orange"]) {
  /* colors */
  --background-color: #df8a40;
  --text-color: #ffffff;
  --border: 1px solid #df8a40;

  --hover-background-color: #dfaa70;
  --focus-background-color: #dfaa70;
  --active-background-color: #cf7a30;

  --hover-text-color: #ffffff;
  --focus-text-color: #ffffff;

  --hover-border: 1px solid #dfaa70;
  --focus-border: 1px solid #dfaa70;
  --active-border: 1px solid #cf7a30;
}

/* define color scheme for yellow button */
:host([color="yellow"]) {
  /* colors */
  --background-color: #eedd00;
  --text-color: #ffffff;
  --border: 1px solid #eedd00;
  
  --hover-background-color: #f6e690;
  --focus-background-color: #f6e690;
  --active-background-color: #ddcc00;

  --hover-text-color: #ffffff;
  --focus-text-color: #ffffff;

  --hover-border: 1px solid #f6e690;
  --focus-border: 1px solid #f6e690;
  --active-border: 1px solid #ddcc00;
}

/* white text is hard to read against a yellow background, add some subtle text shadow */
:host([color="yellow"]) > button {
  text-shadow: 0 0 5px #c5b500, 0 0 10px #c5b500, 0 0 15px #eedd00;
}

/* define color scheme for green button */
:host([color="green"]) {
  /* colors */
  --background-color: #59c040;
  --text-color: #ffffff;
  --border: 1px solid #59c040;

  --hover-background-color: #79cc69;
  --focus-background-color: #79cc69;
  --active-background-color: #50a050;

  --hover-text-color: #ffffff;
  --focus-text-color: #ffffff;

  --hover-border: 1px solid #79cc69;
  --focus-border: 1px solid #79cc69;
  --active-border: 1px solid #50a050;
}

/* define color scheme for blue button */
:host([color="blue"]) {
  /* colors */
  --background-color: #40a5ff;
  --text-color: #ffffff;
  --border: 1px solid #40a5ff;

  --hover-background-color: #65b5ff;
  --focus-background-color: #65b5ff;
  --active-background-color: #2285dd;

  --hover-text-color: #ffffff;
  --focus-text-color: #ffffff;

  --hover-border: 1px solid #65b5ff;
  --focus-border: 1px solid #65b5ff;
  --active-border: 1px solid #2285dd;
}

/* define color scheme for blue button */
:host([color="purple"]) {
  /* colors */
  --background-color: #aa55aa;
  --text-color: #ffffff;
  --border: 1px solid #aa55aa;

  --hover-background-color: #cc66cc;
  --focus-background-color: #cc66cc;
  --active-background-color: #994499;

  --hover-text-color: #ffffff;
  --focus-text-color: #ffffff;

  --hover-border: 1px solid #cc66cc;
  --focus-border: 1px solid #cc66cc;
  --active-border: 1px solid #994499;
}

/* Attribute: round */
    /* if host element, i.e. <meat-button> has attribute round, apply this css to button*/
    :host([round]) > button {
        border-radius: var(--border-radius);
    }

/* Attribute: size */

    /* if host element, i.e. <meat-button> has attribute size="small", apply this css */
    :host([size="small"]) {
        width: 80px;
        height: 36px;
    }

    :host([size="medium"]) {
        width: 90px;
        height: 40px;
    }

    :host([size="large"]) {
        width: 100px;
        height: 44px;
    }

  /* Attribute: circle */
    :host([circle]) > button {
      border-radius: 50%;
    }

    /* default size for circle button */
    :host([circle]) {
      width: 40px;
      height: 40px;
    }

    /* if size specified, use the following dimensions */
    :host([circle][size="small"]) {
      width: 30px;
      height: 30px;
    }

    :host([circle][size="medium"]) {
        width: 40px;
        height: 40px;
    }

    :host([circle][size="large"]) {
      width: 50px;
      height: 50px;
  }

/* Actions: focus */
    :host > button:focus {
        border: var(--focus-border);
        color: var(--focus-text-color);
        outline: none;
        background-color: var(--focus-background-color);
    }

/* Actions: hover */
    :host(:not([disabled])) > button:hover {
        -webkit-animation: hover .1s linear forwards;
        animation: hover .1s linear forwards;
    }

    @keyframes hover {
        100% { background-color: var(--hover-background-color) }
        100% { color: var(--hover-text-color) }
        100% { border: var(--hover-border) }
    }
    @-webkit-keyframes hover {
        100% { background-color: var(--hover-background-color) }
        100% { color: var(--hover-text-color) }
        100% { border: var(--hover-border) }
    }

/* Actions: active/click */
    :host(:not([disabled])) > button:active {
        -webkit-animation: active .1s linear forwards;
        animation: active .1s linear forwards;
    }
    @keyframes active {
        100% { background-color: var(--active-background-color)  }
        100% { border: var(--active-border)  }
    }
    @-webkit-keyframes active {
        100% { background-color: var(--active-background-color)  }
        100% { border: var(--active-border)  }
    }

/* Attribute: disabled */
    /* if host element, i.e. <meat-button> has attribute round, apply this css to button*/
    :host([disabled]) > button {
      background-color: lightgrey; 
      color: white;
      cursor: not-allowed;
    }
</style>
<button id="button" type="reset"></button>
`;

export class MeatButtonElement extends HTMLElement {
  /**
   * meat-button webcomponent
   * @customelement meat-button
   * @description displays a stylized button
   * @example <meat-button></meat-button>
   * @see [Demo]{@link https://meat-space.org/web_components/meat-button/meat-button-demo.html} for working example.
   * @property {boolean} autofocus -Enables button to automatically get focus when the page loads.
   * @property {string} circle -Enables a circle shaped button.
   * @property {boolean} disabled -Disables button from accepting events.
   * @property {boolean} round -Enables a round shaped button.
   * @property {string} size -Changes the size of the button.
   * @property {string} type -Enables the specified type of button.
   * */
  constructor() {
    super();
    this._parentForm;
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.appendChild(template.content.cloneNode(true));
    this.button = this.shadow.querySelector("#button");
    this.addEventListener("click", this._onClick);
  }

  /**
   * Live-cycle method called when the custom element is loaded, often used for initialization
   */
  connectedCallback() {
    // Need to get the content inbetween the <meat-button> tags into the button so it renders
    this.button.textContent = this.textContent;
    let parentNode = this.parentNode;
    while (parentNode) {
      if (parentNode && parentNode.nodeName == "FORM") {
        this._parentForm = parentNode;
        break;
      }
      parentNode = parentNode.parentNode;
    }
  }

  /**
   * Tell the webcomponent to observe these attributes, if any of them are added, changed, or removed, then
   * call attributeChangedCallback(name, oldVal, newVal)
   * */
  static get observedAttributes() {
    /* <meat-button type="default" disabled></meat-button> */
    return [
      "autofocus",
      "color",
      "circle",
      "disabled",
      "round",
      "size",
      "type"
    ];
  }

  /**
   * Called whenever one of the attributes specified in observedAttributes() is changed
   * @param {string} name
   * @param {string} oldVal
   * @param {string} newVal
   * */
  attributeChangedCallback(name, oldVal, newVal) {
    switch (name) {
      case "disabled":
        if (newVal == "") this.button.disabled = true;
        else this.button.disabled = false;
        break;
      case "autofocus":
        if (newVal == "") this.button.autofocus = true;
        else this.button.autofocus = false;
        break;
      case "type":
        // assigning type to button doesn't work
        break;
    }
  }

  /**
   * getters and setters for attributes
   */
  get disabled() {
    return this.hasAttribute("disabled");
  }

  set disabled(val) {
    if (val) {
      this.setAttribute("disabled", "");
    } else {
      this.removeAttribute("disabled");
    }
  }

  get round() {
    return this.hasAttribute("round");
  }

  set round(val) {
    if (val) {
      this.setAttribute("round", "");
    } else {
      this.removeAttribute("round");
    }
  }

  get circle() {
    return this.hasAttribute("circle");
  }

  set circle(val) {
    if (val) {
      this.setAttribute("circle", "");
    } else {
      this.removeAttribute("circle");
    }
  }

  get size() {
    return this.getAttribute("size");
  }

  set size(val) {
    if (val) {
      this.setAttribute("size", val);
    } else {
      this.removeAttribute("size");
    }
  }

  get type() {
    return this.getAttribute("type");
  }

  set type(val) {
    if (val) {
      this.setAttribute("type", val);
    } else {
      this.removeAttribute("type");
    }
  }

  // getters and setters for attributes
  get disabled() {
    return this.hasAttribute("disabled");
  }

  set disabled(val) {
    if (val) {
      this.setAttribute("disabled", "");
    } else {
      this.removeAttribute("disabled");
    }
  }

  get round() {
    return this.hasAttribute("round");
  }

  set round(val) {
    if (val) {
      this.setAttribute("round", "");
    } else {
      this.removeAttribute("round");
    }
  }

  get circle() {
    return this.hasAttribute("circle");
  }

  set circle(val) {
    if (val) {
      this.setAttribute("circle", "");
    } else {
      this.removeAttribute("circle");
    }
  }

  get size() {
    return this.getAttribute("size");
  }

  set size(val) {
    if (val) {
      this.setAttribute("size", val);
    } else {
      this.removeAttribute("size");
    }
  }

  get type() {
    return this.getAttribute("type");
  }

  set type(val) {
    if (val) {
      this.setAttribute("type", val);
    } else {
      this.removeAttribute("type");
    }
  }

  get color() {
    return this.getAttribute("color");
  }

  set color(val) {
    if (val) {
      this.setAttribute("color", val);
    } else {
      this.removeAttribute("color");
    }
  }

  /*
   * This is unnecessary for now, the user can just attach an event listener to <meat-button>
   * */
  _onClick(evt, thisComponent) {
    switch (this.getAttribute("type")) {
      case "reset":
        if (this._parentForm) {
          this._parentForm.reset();
        }
        break;
      case "submit":
        if (this._parentForm) {
          this._parentForm.submit();
        }
        break;
    }
  }
}

window.customElements.define("meat-button", MeatButtonElement);
