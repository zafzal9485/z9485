//This Program is a modification of the existing program of the magicians function
//the only difference is that the phrase "The Great" will be added to each magician.
var magicians = ["Houdini", "Chris Angel", "The Aunt in most desi dramas"];
function show_magicians(Title) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var item = magicians_1[_i];
        console.log(item, Title);
    }
}
;
show_magicians("The Great");
