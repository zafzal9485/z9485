//We will make a function that has two variables, one for a city and the other for a country'
//one set of arguments will be a city and country pair that is not pakistan.
function city(a, b) {
    if (b === void 0) { b = "Pakistan"; }
    console.log("".concat(a, " is in ").concat(b));
}
city("Karachi");
city("Lahore");
city("Rome", "Italy");
