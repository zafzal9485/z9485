//In this program i will make a function to which an array is passed and it will automatically print the 
//whole array.
var magicians = ["Houdini", "Chris Angel", "The Aunt in most desi dramas"];
function show_magicians() {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magicians);
    }
}
;
var a = "alex";
magicians.push(a);
console.log(magicians);
