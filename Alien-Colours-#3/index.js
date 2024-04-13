//Here we should get 10 points for the case if the alien's colour is yellow.
var b = "yellow";
if (b === "green") {
    //Be sure to add 3 equal to signs otherwise you'll keep getting 5 points.
    console.log("you get 5 points.");
}
else if (b === "yellow") {
    console.log("you get 10 points.");
}
else if (b === "red") {
    console.log("you get 15 points");
}
else
    (console.log("please choose from only 3 colours, green,yellow and red"));
