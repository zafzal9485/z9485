//Here we have to continue where we left off and now we have to return the orignal array
//as well as the new edited array.
let magicians2 = ["Houdini", "Chris Angel","The Aunt in most desi dramas"];
//we'll make a copy of an array
let magicianscopy = [...magicians2];

function show_magicians(Title:string){
    let greet = "";
    for(let item of magicians2){
        greet = greet + ` ${item} ${Title}, `
    }
    return greet ;
};
let Greetings = show_magicians("The Great");
let array = Greetings.split(`\n`);
console.log(array);
console.log(magicians2);