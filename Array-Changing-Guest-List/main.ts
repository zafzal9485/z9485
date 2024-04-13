// This program is just a simple array that prints each component inside of it individually
// but this time we are going to change the guest list a bit by replacing one name with another

let Guest_List = ["Muzammil","Owais","Farah","Zeeshan","Anam","Zain"]; 
Guest_List.pop();
Guest_List.push("Moosa");

console.log(`The invited guests are as follows:\n\t ${Guest_List[0]}`);
console.log(`\t ${Guest_List[1]}`);
console.log(`\t ${Guest_List[2]}`);
console.log(`\t ${Guest_List[3]}`);
console.log(`\t ${Guest_List[4]}`);
console.log(`\t ${Guest_List[5]}`);

console.log("Zain could'nt make it unfortunately");

// Now all of a sudden, we have found a bigger table and so we can invite more guests

Guest_List.splice(0,0,"Imran");
Guest_List.splice(4,0,"Amir");
Guest_List.push("Shahrukh");   
// Instead of append() ,I used push as the function of both these methods are the same 
console.log("We now have a new Guest list,it is as follows:");
console.log(`\t ${Guest_List[0]}`);
console.log(`\t ${Guest_List[1]}`);
console.log(`\t ${Guest_List[2]}`);
console.log(`\t ${Guest_List[3]}`);
console.log(`\t ${Guest_List[4]}`);
console.log(`\t ${Guest_List[5]}`);
console.log(`\t ${Guest_List[6]}`);
console.log(`\t ${Guest_List[7]}`);
console.log(`\t ${Guest_List[8]}`);

console.log("We made a new guest list because we found a bigger table,we hope to see you there");

// Now it is discovered that we can only invite only 2 guests, we have to remove people until only 2 are left 
// It should also be noted that we must print a message to each individual apologizing that we can't invite them 

console.log("No, Sorry , an inconvenience came up, We can only invite 2 people for now");

console.log(`Sorry ${Guest_List[8]}, we cannot invite you today`);
Guest_List.pop();
console.log(`Sorry ${Guest_List[7]}, we cannot invite you today`);
Guest_List.pop();
console.log(`Sorry ${Guest_List[6]}, we cannot invite you today`);
Guest_List.pop();
console.log(`Sorry ${Guest_List[5]}, we cannot invite you today`);
Guest_List.pop();
console.log(`Sorry ${Guest_List[4]}, we cannot invite you today`);
Guest_List.pop();
console.log(`Sorry ${Guest_List[3]}, we cannot invite you today`);
Guest_List.pop();
console.log(`Sorry ${Guest_List[2]}, we cannot invite you today`);
Guest_List.pop();
console.log(`Don't worry ${Guest_List[0]} and ${Guest_List[1]} you both are still invited`);
Guest_List.pop();
Guest_List.pop();
console.log(`${Guest_List}`); 
// This list however will be completely blank as there is not any element left in it to be printed 
//Assignment #31- we are supposed to print "We need to find more guests."
console.log("We need to find more guests.");
