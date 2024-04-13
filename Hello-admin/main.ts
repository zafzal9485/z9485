//We will make an array of 5 or more people with the name "admin" included and we will use a loop to give
//a printed message to everyone , however, we must be careful to give a special message in the case of the
//admin.

let org = ["Admin","Ali","Junaid","Amir","Naveed","Mohammad"];
//We chose i = 5 because it is 1 less than the entire length of the array and we want the loop to print an 
//individual message to everyone once, if we wanted to loop multiple times we would have written i = 0
for(let i =5 ; i < org.length; i++){
    if(org.includes("Admin")){
    console.log("Hello Admin, would you like to see a status report?");
    }
    if(org.includes("Ali")){
        console.log("Hello Ali, thank you for logging in again.");
    }
    if(org.includes("Amir")){
        console.log("Hello Amir, thank you for logging in again.");
    }
    if(org.includes("Naveed")){
        console.log("Hello Naveed, thank you for logging in again.");
    }
    if(org.includes("Mohammad")){
        console.log("Hello Mohammad, thank you for logging in again.");
    }
}