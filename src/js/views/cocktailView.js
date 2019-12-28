import { elements } from './base';


// Close Pop-up window function
export const closePopup = () => {

    // Turn visibility and opacity off
    elements.popup.style.visibility = 'hidden';
    elements.popup.style.opacity = 0;

    // Delete all content
    elements.popup.innerHTML = '';
};


// Render cocktail chosen to the UI function
export const renderCocktail = cocktail => {


    // Create Mark-up for HTML
    const markup = `
        <div class="popup">
            <img src="${cocktail.img}" alt="Cocktail" >
            <h1 class="details-title">${cocktail.title}</h1>
            <a class="close" href="#results">&times;</a>
            <div class="content">
                <ul>
                    <li>Alcoholic: ${cocktail.alcoholic}</li>
                    <li>Category: ${cocktail.category}</li>
                    <li>Ingredients: ${cocktail.ingredients.join(', ')}</li>
                    <li>Instructions: ${cocktail.instructions}</li>
                </ul>
            </div>
        </div>
    `;

    // Turn visibility and opacity on
    elements.popup.style.visibility = 'visible';
    elements.popup.style.opacity = 1;

    // Place the HTML after the element
    elements.popup.insertAdjacentHTML('afterbegin', markup);
};