import axios from 'axios';


// Separate null arguments from valid arguments
const getValidIngredients = (res) => {
    //Declare new array
    let ingredients = [];

    // Loop through the data from the elements 21 up to 35
    for (let i = 21; i <= 35; i++) {

        // Check if they have null argument
        if (Object.entries(res.data.drinks[0])[i][1] !== null) {
            // Those who are valid push them to the new array
            ingredients.push(Object.entries(res.data.drinks[0])[i][1]);
        }
    }
    // Return the array
    return ingredients;
}


// Export Cocktail Class
export default class Cocktail {
    constructor(id) {
        this.id = id;
    }

    // Request API for specific Cocktail
    async getCocktail() {
        try {

            // Api request
            const res = await axios(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.id}`);
            // Assign response data to the constructor keys
            this.instructions = res.data.drinks[0].strInstructions;
            this.title = res.data.drinks[0].strDrink;
            this.category = res.data.drinks[0].strCategory;
            this.ingredients = getValidIngredients(res);
            this.img = res.data.drinks[0].strDrinkThumb;
            this.alcoholic = res.data.drinks[0].strAlcoholic;
        } catch (error) {
            console.log(error);
            alert("Error searching for cocktail.");
        }
    }
}
