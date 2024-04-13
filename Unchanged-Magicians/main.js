//Here we have to continue where we left off and now we have to return the orignal array
//as well as the new edited array.
var magicians2 = ["Houdini", "Chris Angel", "The Aunt in most desi dramas"];
//we'll make a copy of an array
function show_magicians(Title) {
    var greet = "";
    for (var _i = 0, magicians2_1 = magicians2; _i < magicians2_1.length; _i++) {
        var item = magicians2_1[_i];
        greet = greet + " ".concat(item, " ").concat(Title, ", ");
    }
    return greet;
}
;
var Greetings = show_magicians("The Great");
var array = Greetings.split("\n");
console.log(array);
console.log(magicians2);
