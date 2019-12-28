import { elements } from './base';

// Get Input function
export const getInput = () => elements.searchIngredientsInput.value;

// Clear the input the user provided
export const clearInput = () => elements.searchIngredientsInput.value = '';

// Delete all previous Search content
export const clearResults = () => elements.resultsElement.innerHTML = '';


// Shorten Large Cocktail titles
const limitCocktailTitle = (title, limit = 15) => {

    // Declare new Title array
    const newTitle = [];

    // Check if the title is bigger than the limit
    if (title.length > limit) {

        // Split the title when 'space' is found and break into words
        title.split(' ').reduce((acc, cur) => {
            // Iterate each word
            if (acc + cur.length < limit) {
                // Push to new array until limit is reached
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0);


        // Return the new short title
        return `${newTitle.join(` `)} ...`;
    }
    return title;
};

// Render Coctail box
const renderCocktail = cocktail => {

    // Create Mark-up for HTML
    const markup = `
    <div class="result-box col span-1-of-4">
        <img src="${cocktail.strDrinkThumb}" alt="Cocktail">
        <h3 class="drink-title">${limitCocktailTitle(cocktail.strDrink)}</h3>
        <form class="cocktail-details">
            <a href="#${cocktail.idDrink}" class="btn btn-small">See More</a>
        </form>
    </div>
    `;

    // Find all Rows of boxes
    const allRows = document.getElementsByClassName('row results-list');
    // Find the last Row of boxes
    const lastRow = allRows[allRows.length-1];
    // Add this box to the last Row
    lastRow.insertAdjacentHTML('beforeend', markup);
};

// Render Coctail box to a New line
const renderCocktailNewLine = cocktail => {
    
    // Create Mark-up for HTML
    const markup = `
    <div class="row results-list">
        <div class="result-box col span-1-of-4">
        <img src="${cocktail.strDrinkThumb}" alt="Cocktail">
        <h3 class="drink-title">${limitCocktailTitle(cocktail.strDrink)}</h3>
        <form class="cocktail-details">
            <a href="#${cocktail.idDrink}" class="btn btn-small">See More</a>
        </form>
        </div>
    </div>
    `;

    // Insert the markup before the end of the div
    document.querySelector('.search-heading').insertAdjacentHTML('beforeend', markup);
};

export const renderCocktailResults = cocktails => {

    if (!cocktails) {
        // Turn the section on
        elements.resultsElement.style.visibility = 'hidden';

        // Add Error Class
        elements.messageTwo.classList.add('red');

        // Add Text
        elements.messageTwo.innerHTML = `There are no Ingredients named '${elements.searchIngredientsInput.value}'. Please try again.`;
    } else {
        
        // Clear Error messages if any
        elements.messageOne.classList.remove('red');
        elements.messageTwo.classList.remove('red');

        // Create Mark-up for HTML
        const markup = `
        <div class="row search-heading">
            <h2>Search Results</h2>
        </div>
        `;

        // Turn the section on
        elements.resultsElement.style.visibility = 'visible';

        // Start the first element at the head of the section after the h2
        elements.resultsElement.insertAdjacentHTML('afterbegin', markup);


        // Iterate each cocktail element
        cocktails.forEach(element => {

            // Check if the element needs to be place to a new row (by having remainder or not)
            if ((cocktails.indexOf(element) % 4) == 0) {
                // Add new row
                renderCocktailNewLine(cocktails[cocktails.indexOf(element)]);
            } else {
                // Continue to last row
                renderCocktail(cocktails[cocktails.indexOf(element)]);
            }

        });
    }
};