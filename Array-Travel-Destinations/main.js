// We have to think of some cities we dream of visiting and print that list in it's orignal order
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var destinations = ["Rio de Janeiro", "Venice", "Trabzon", "Singapore", "Tokyo", "Macao"];
console.log("Here is the orignal order of the list:");
for (var i = 0; i < destinations.length; i++) {
    console.log(destinations[i]);
}
// Now we will sort the list in alphabetical order by using a function already set in the program
console.log("Now we will sort the list in alphabetical order by using a function already set in the program");
console.log(__spreadArray([], destinations, true).sort());
//Please note that we haven't changed the orignal order of the list , just sorted it for printing purposes
console.log("The Array is still in it's orignal order:Here is the proof");
console.log(destinations);
// Now we will sort the list in Reverse alphabetical order by using functions already set in the program
console.log("Now we print the Reverse Alphabetical order of the list");
console.log(__spreadArray([], destinations, true).sort().reverse());
//Please note that we haven't changed the orignal order of the list , just sorted it for printing purposes
console.log("The Array is still in it's orignal order:Here is the proof");
console.log(destinations);
//Now we will change the orignal order of the list
console.log("Now We will change the orignal order such that it is in Reverse Order");
destinations.reverse();
console.log(destinations);
//We will Now reverse the order of the list once more and then print it 
//to show that the orignal order has been restored
console.log("Back to Orignal Order");
destinations.reverse();
console.log(destinations);
console.log("We will Now Sort the list into Alphabetical Order once more and then print it.");
//The only difference is that the orignal order will change
destinations.sort();
console.log("The orignal order has changed, Printed below is the new order sorted in alphabetical order:");
for (var i = 0; i < destinations.length; i++) {
    console.log(destinations[i]);
}
