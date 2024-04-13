//This is the same thing as the T-shirt function, but we are to call it different number of times for different 
//sizes and different messages in it.

function tshirt(size:string, Message:string= "I love Typescript."):void{
console.log(`The size is : ${size} and the message is : ${Message}`)
}

tshirt("Large");//For Large T-shirt.
tshirt("Medium");//For Medium T-shirt.
tshirt("Small","I love Python");//For Small T-shirt with a custom message.



