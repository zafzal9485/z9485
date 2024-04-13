//This is the same thing as the T-shirt function, but we are to call it different number of times for different 
//sizes and different messages in it.
function tshirt(size, Message) {
    if (Message === void 0) { Message = "I love Typescript."; }
    console.log("The size is : ".concat(size, " and the message is : ").concat(Message));
}
tshirt("Large"); //For Large T-shirt.
tshirt("Medium"); //For Medium T-shirt.
tshirt("Small", "I love Python"); //For Small T-shirt with a custom message.
