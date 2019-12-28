import axios from 'axios';


// Export Search Class
export default class Search {
    constructor (query) {
        this.query = query;
    }

    // Search API according to Cocktail search
    async getCocktailResults() {
        try {
            // Api request
            const res = await axios(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.query}`);
            // Store results to this.result
            this.result = res.data.drinks;
        } catch (error) {
            console.log(error);
            alert("Error searching for cocktail.");
        }
    
    }

    // Search API according to Ingredient search
    async getIngredientsResults() {
        try {
            // Api request
            const res = await axios(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.query}`);
            // Store results to this.result
            this.result = res.data.drinks;
        } catch (error) {
            console.log(error);
            alert('Error searching for ingredient.');
        }
    }
}


