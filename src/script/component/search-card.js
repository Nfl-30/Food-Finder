class SearchCard extends HTMLElement {
  connectedCallback () {
    this.render();
  }

  set clickEvent (event) {
    this._clickEvent = event;
    this.render();
  }

  get clickEvent () {
    return this._clickEvent;
  }

  get value () {
    return this.querySelector("#searchElement").value;
  }

  render () {
    this.innerHTML = `
        <div class="card-search text-dark bg-light mb-3">
            <div id="search-container" class="search-container">
            <input placeholder="Search Meals" class="form-control" id="searchElement" type="search">
            <button id="searchButtonElement" class="btn btn-primary search-button" type="submit">Search</button>
            </div>
       </div>`;
    this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-card", SearchCard);
