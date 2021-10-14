class MealItem extends HTMLElement {
  set meal (meal) {
    this._meal = meal;
    this.render();
  }

  get meal () {
    return this._meal;
  }

  render () {
    this.innerHTML = `
           <div class="card">
           <img class="meal-picture" src="${this._meal.strMealThumb}" alt="Meal Picturez">
           <div class="meal-info">
               <h2>${this._meal.strMeal}</h2>
               <p>Category: ${this._meal.strCategory}</p>
               <p>${this._meal.strInstructions}</p>
               <p>Video Resep:${this._meal.strYoutube}</p>
           </div>
           </div>`;
  }
}

customElements.define("meal-item", MealItem);
