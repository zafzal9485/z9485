//Make a program that gives you an output of the value of a product before and after discount//
var products = [25, 36, 64, 128, 256, 1024];
var i = 0;
for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
    var value = products_1[_i];
    console.log("The value of products @ ".concat(i, "=").concat(value));
    var offer = value * 0.90;
    console.log("The value of ".concat(i, " @ 10 % discount is ").concat(offer));
    i++;
}
