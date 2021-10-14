import "./meal-item.js";
import $ from "jquery";

class MealList extends HTMLElement {
  set meals (meals) {
    this._meals = meals;
    this.render();
  }

  get meals () {
    return this._meals;
  }

  render () {
    this.innerHTML = "";
    this._meals.forEach(meal => {
      const mealItemElement = document.createElement("meal-item");
      mealItemElement.meal = meal;
      this.appendChild(mealItemElement);
      $("meal-item").addClass("col-lg-4 col-md-6 col-sm-12 col-12");
    });
  }

  renderError (message) {
    this.innerHTML = `
        <style>
             .placeholder {
                   font-weight: lighter;
                   color: rgba(0,0,0,0.5);
                   -webkit-user-select: none;
                   -moz-user-select: none;
                   -ms-user-select: none;
                   user-select: none;
               }
        </style>`;
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define("meal-list", MealList);
