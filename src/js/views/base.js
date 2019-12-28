export const elements = {
    searchCocktailForm: document.querySelector('.search-cocktail-form'),
    searchCocktailInput: document.querySelector('.search-cocktail-field'),
    searchIngredientsForm: document.querySelector('.search-ingredients-form'),
    searchIngredientsInput: document.querySelector('.search-ingredients-field'),
    findSearch: document.querySelector('.find-search'),
    searchElement: document.querySelector('.search'),
    resultsElement: document.querySelector('.results'),
    searchResList: document.querySelector('.row.results-list'),
    searchHeading: document.querySelector('.search-heading'),
    seeMore: document.querySelector('.btn.btn-small'),
    popup: document.querySelector('.overlay'),
    close: document.querySelector('.close'),
    messageOne: document.querySelector('.loading-text-1'),
    messageTwo: document.querySelector('.loading-text-2')
}


// Scroll function
export const goToSection = (element) => {
    element.scrollIntoView({behavior: 'smooth'});
}

