//This Program is a modification of the existing program of the magicians function
//the only difference is that the phrase "The Great" will be added to each magician.

let magicians = ["Houdini", "Chris Angel","The Aunt in most desi dramas"];

function show_magicians(Title:string){
    for(let item of magicians){
        console.log(item , Title );
    }
};
show_magicians("The Great");
