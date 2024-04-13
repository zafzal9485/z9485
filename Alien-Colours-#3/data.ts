//Now we should be getting 15 points for guessing the colour of the alien as red .
let c = "red";

if(c === "green"){

    //Be sure to add 3 equal to signs otherwise you'll keep getting 5 points.

console.log("you get 5 points.");
}
else if(c === "yellow"){
    console.log("you get 10 points.");
} 
else if(c === "red"){
    console.log("you get 15 points");
}
else(console.log("please choose from only 3 colours, green,yellow and red"));