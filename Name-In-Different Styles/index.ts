// Zeeshan Afzal 24-3-2024
// this program will print any name in lowercase , uppercase and titlecase 
let Name: String = "chinna swami mutha swami verh gopal ayyer";

//Step 1 : Convert into lowercase

let lowercaseName: String=Name.toLowerCase();
console.log(lowercaseName);

//Step 2 : Convert to Uppercase

let uppercaseName: String=Name.toUpperCase();
console.log(uppercaseName);

//Step 3: Convert to Titlecase

let words:String[]=Name.split(" ");
let titlecaseName: String = "";

for(let i=0 ; i<words.length ; i++){
    titlecaseName+=words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase()+" ";

}
console.log(titlecaseName);