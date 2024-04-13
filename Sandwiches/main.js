//In this program we will make a function that returns the sandwich toppings . it is upto us 
//to decide the number of toppings every time we call the function.
function sandwich() {
    var toppings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        toppings[_i] = arguments[_i];
    }
    //The "..." is a rest parameter it allows us to add as much elements as we want.
    return "I want a sandwich with: ".concat(toppings);
}
var combo1 = sandwich("Beef", "Mustard", "Lettuce", "Tomato");
var combo2 = sandwich("Chicken", "Ketchup", "Cheese");
var combo3 = sandwich("Turkey", "Mayonnaise", "Chillies");
console.log(combo1);
console.log(combo2);
console.log(combo3);
