//We are going to use a series of if-else statements to determine a person's age and 
//print messages based on that age.

let age = 80 ;//Here we set the age in the variable
//If we add or in the logical operator it will give incorrect output, the correct choice is && operator.
if(age >=2 && age <4){
    console.log("The Person is a toddler.");
}

else if (age >= 4 && age < 13){
    console.log("The Person is a kid.");
}

else if (age >= 13 && age < 20){
    console.log("The person is a teenager.");
}

else if(age >= 20 && age < 65){
    console.log("The person is an adult.");
}

else(console.log("The person is an elder."));

