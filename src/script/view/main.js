import "../component/meal-list.js";
import "../component/search-card.js";
import DataSource from "../data/data-source.js";
import $ from "jquery";

const main = () => {
  const searchElement = document.querySelector("search-card");
  const mealListElement = document.querySelector("meal-list");

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchMeal(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    mealListElement.meals = results;
  };

  const fallbackResult = message => {
    mealListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
  onButtonSearchClicked();
};

export default main;
