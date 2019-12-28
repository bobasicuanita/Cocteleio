import Search from './models/Search';
import Cocktail from './models/Cocktail';
import * as searchCocktailView from './views/searchCocktailView';
import * as searchIngredientsView from './views/searchIngredientView';
import * as cocktailView from './views/cocktailView';
import { elements, goToSection } from './views/base';



// FIND COCKTAIL event listener and move to section
elements.findSearch.addEventListener('submit', event => {
    event.preventDefault();
    goToSection(elements.searchElement);
});

/** Global state of the app
 * Search Cocktail
 * Search Ingredient
 * Current Cocktail object
*/ 
const state = {}


// SEARCH CONTROLLER


const controlCocktailSearch = async () => {

    // 1) Get query from the view
    const query = searchCocktailView.getInput();

    if (query) {
        // 2) New search object and add to state
        state.search = new Search(query);
        // 3) Prepare UI for results
        searchCocktailView.clearResults();

        // 4) Search for Cocktails
        await state.search.getCocktailResults();

        // 5) render results on UI
        searchCocktailView.renderCocktailResults(state.search.result);
        searchCocktailView.clearInput();
    }
}

elements.searchCocktailForm.addEventListener('submit', async event => {
    event.preventDefault();
    await controlCocktailSearch();
    
    // Scroll
    if(elements.resultsElement.innerHTML != '') {
        goToSection(elements.resultsElement);
    }
});

const controlIngredientsSearch = async () => {
    // 1) get query from the view
    const query = searchIngredientsView.getInput();

    if(query) {
        // 2) New Search and add to state
        state.search = new Search(query);
        
        // 3) Prepare UI for results
        searchIngredientsView.clearResults();

        // 4) Search for Ingredients
        await state.search.getIngredientsResults();

        // 5) render results on UI
        searchIngredientsView.renderCocktailResults(state.search.result);
        searchIngredientsView.clearInput();
    }
}

elements.searchIngredientsForm.addEventListener('submit', async event => {
    event.preventDefault();
    await controlIngredientsSearch();

    // Scroll
    if(elements.resultsElement.innerHTML != '') {
        goToSection(elements.resultsElement);
    }
});

// COCKTAIL CONTROLLER

const controlThisCoctail = async () => {
    // 1) get cocktail ID from URL
    const id = window.location.hash.replace('#', '');

    if (id && id != 'results') {
        // 2) Create new cocktail object
        state.cocktail = new Cocktail(id);

        // 3) Get cocktail data
        await state.cocktail.getCocktail();

        // 4) Render Cocktail
        cocktailView.renderCocktail(state.cocktail);
    }
};


// Check if another cocktail is clicked and call the function
window.addEventListener('hashchange', controlThisCoctail);



// if the pop-up is open
if (elements.popup) {

    // If the popup is clicked on the close element
    elements.popup.addEventListener('click', event => {
        if(event.target.matches('a.close')) {

            // Close Window
            cocktailView.closePopup();
        }
    });
}

