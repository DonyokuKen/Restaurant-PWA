class FooterKu extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer>
        <p>Copyright © 2021 - Katering Catalogue</a></p>
        </footer>
      `;
  }
}

customElements.define('footer-ku', FooterKu);
