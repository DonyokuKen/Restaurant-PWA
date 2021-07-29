class contentresto extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <main id="mainContent"></main>
        `;
  }
}

customElements.define('resto-content', contentresto);
