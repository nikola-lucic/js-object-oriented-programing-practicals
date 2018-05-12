/*
4.
Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, 
type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
Add a method that prints out all the ingredients necessary for the meal preparation. 
Add a method that checks if a meal can be prepared for 15 minutes. 
Add a method that changes the type of cuisine to the given value. 
Add a method that delete a given ingredient from the list of ingredients.  
*/

function myRecepie(name, type, complexity, ingredients, preprtingTime, instruction) {
    recepie = {
        name: name,
        type: type,
        complexity: complexity,
        ingredients: ingredients,
        preprtingTime: preprtingTime,
        instruction: instruction
    }
    recepie.prinListOfIngredients = function() {
        return recepie.ingredients
    }
    recepie.checkTimeOfMaking = function() {
        return recepie.preprtingTime <= 15 ? true : false;
    }
    recepie.deleteIngredient = function() {
        delete recepie.ingredients[2];
        return recepie.ingredients;
    }
    return recepie
}

var myPizzaRecepie = myRecepie("pizza", "fast food", 3, ["eggs", "pastery", "tomato", "chease"], 30, "read recepie on the internet")
console.log(myPizzaRecepie)
console.log(myPizzaRecepie.prinListOfIngredients());
console.log(myPizzaRecepie.checkTimeOfMaking());
console.log(myPizzaRecepie.deleteIngredient());