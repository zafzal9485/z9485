var Name = "chinna swami mutha swami verh gopal ayyer";
//Step 1 : Convert into lowercase
var lowercaseName = Name.toLowerCase();
console.log(lowercaseName);
//Step 2 : Convert to Uppercase
var uppercaseName = Name.toUpperCase();
console.log(uppercaseName);
//Step 3: Convert to Titlecase
var words = Name.split(" ");
var titlecaseName = "";
for (var i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
console.log(titlecaseName);
