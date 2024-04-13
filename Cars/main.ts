//This program will output two compulsory properties of cars and two other arbitrary properties such as type
//and year of manafacture.

function carDescription(manafacturer : string , modelname : string ,  ...additonalInfo: any[])
{
const car = {manafacturer ,  modelname , ...Object.fromEntries(additonalInfo)};
return car ; 
}
const details = carDescription("Toyota","Corolla",["category" , "sedan"],["year" , "2020"]);
console.log(details);

const details1 = carDescription("Honda","Civic",["category" , "sedan"],["year" , "2020"]);
console.log(details1);

