class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="heroelement id="heroelement">
    <h2 class="slmtdtng">Welcome To Katering Catalogue</h2>
    <picture >
    <source media="(max-width: 1920px)" srcset="./images/heros/hero-image_1.jpg">
    <img class="heroimg"
        src="./images/heros/hero-image_1-small.jpg" 
        alt="Katering"></img>
</picture>
      </div>
      `;
  }
}

customElements.define('hero-custom', Hero);
