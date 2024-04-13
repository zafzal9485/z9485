//This program will output two compulsory properties of cars and two other arbitrary properties such as type
//and year of manafacture.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function carDescription(manafacturer, modelname) {
    var additonalInfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        additonalInfo[_i - 2] = arguments[_i];
    }
    var car = __assign({ manafacturer: manafacturer, modelname: modelname }, Object.fromEntries(additonalInfo));
    return car;
}
var details = carDescription("Toyota", "Corolla", ["category", "sedan"], ["year", "2020"]);
console.log(details);
var details1 = carDescription("Honda", "Civic", ["category", "sedan"], ["year", "2020"]);
console.log(details1);
