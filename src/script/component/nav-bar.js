class NavBar extends HTMLElement {
  connectedCallback () {
    this.render();
  }

  render () {
    this.innerHTML = `
        <style>
            * {
               margin: 0;
               padding: 0;
               box-sizing: border-box;
            }
            h2 {
               padding: 16px 24px;
               color: white;
            }
        </style>
        <nav class="navbar navbar-dark bg-dark">
            <h2>Meal Menu</h2>
        </nav>
       `;
  }
}

customElements.define("nav-bar", NavBar);
