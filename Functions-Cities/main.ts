//We will make a function that has two variables, one for a city and the other for a country'
//one set of arguments will be a city and country pair that is not pakistan.

function city(a:string , b:string="Pakistan"){
    console.log(`${a} is in ${b}`);
}
city("Karachi");
city("Lahore");
city("Rome","Italy"); //This is the city, country pair that is not Pakistan.