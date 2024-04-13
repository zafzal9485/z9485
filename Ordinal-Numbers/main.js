//We will now make a program to store a certain group of numbers in an array and then print their positions 
//with the number followed by "th".
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//lets manually get the 1st, 2nd and 3rd values out of the way as they are written much more differently than
//other values, then we will use the for of loop to print the remaining values.
console.log("".concat(a[0], "st"));
console.log("".concat(a[1], "nd"));
console.log("".concat(a[2], "rd"));
for (var i = 3; i < 9; i++) {
    console.log("".concat(a[i], "th"));
}
