// We are going to make an object by storing different values in it 
// and then we will create a new object with the sole purpose of adding it into our
// array.

let bike ={
Name : "Ninja Zx10R ",
price : 250000 ,
Description : "A very popular sports bike amongst the young crowd"
}

//We will define an array
let inventory : Array<typeof bike> = [];
inventory.push(bike);
inventory.push({
    Name: "Hayabusa",
    price: 500000 ,
    Description: "The Most powerful Production bike made by Suzuki"
})

//Now we'll define additonal objects that we can push inside the array
let bike3 = {
    Name: "CBR Firebird",
    price: 15000000 ,
    Description:"Honda's answer to the hayabusa and it does'nt disappoint" 

}
inventory.push(bike3);
//See?? it got added into our array
//Why not make a fucntion to make it easier to display our inventory in a more
//presentable way.
function display(inventory : Array<typeof bike>){

    for(let i of inventory){
console.log(`${i.Name},
             ${i.price},
             ${i.Description}
            _______________`);
}

}
//Obviously, once we have made a function, we must invoke it as well.
display(inventory);