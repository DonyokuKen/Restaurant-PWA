class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header class="app-bar">
    <div class="app-bar__menu">
        <button aria-label="add to like" id="hamburgerButton">☰</button>
    </div>
    <div class="app-bar__brand">
        <h1><a href="#/">Restoran Catalogue</a></h1>
    </div>
    <nav id="navigationDrawer" class="app-bar__navigation">
        <ul>
            <li><a href="#/listResto">List Restoran</a></li>
            <li><a href="#/like">Resto Favorite</a></li>
            <li><a href="https://www.instagram.com/grady_kenzei/">Contact Us</a></li>
        </ul>
    </nav>
    </header>
      `;
  }
}

customElements.define('app-bar', AppBar);
