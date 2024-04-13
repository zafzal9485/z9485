// Zeeshan Afzal 24-3-2024

//Make a program that gives you an output of the value of a product before and after discount//
let products = [25,36,64,128,256,1024];
let i=0;

for(let value of products){
//This is the price of the products in the array before Discount//    
console.log(`The value of products @ ${i}=${value}`);

//We could have made 2 steps in which we multiplied by 0.1 and subtracted from orignal price, but that is too tedious , there is another more efficient way of doing this in one step//
let offer = value*0.90 ;
//This is the price after discount//
console.log(`The value of ${i} @ 10 % discount is ${offer}`)
i++;

}