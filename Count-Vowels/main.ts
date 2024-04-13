// Zeeshan Afzal 24-3-2024
//We must make a program to count the vowels in a word//

function vowelCount(word:string){
let i=0;
for(const char of word){
if (char === "a" ||   char === "A" ||
    char === "e" ||   char === "E" ||
    char === "i" ||   char === "I" ||
    char === "o" ||   char === "O" ||
    char === "u" ||   char === "U"){     
i++;
}

}
console.log(i);
return i;
}
vowelCount("pakistan zindabad");
