//In this program, we will make a list of some animals sharing a common charecteristic, and use a for loop
//to individually print out a statement for each of them and in the end we are to state what exactly was
//the common charecteristic between them.

let animals = ["cat","dog","horse","camel","donkey","elephant"];
for(let i = 0 ; i < animals.length ; i++){
    console.log(`a ${animals[i]} would make a great pet.`);
}

console.log("The common charecteristic between all these animals is that they all have 4 legs.")