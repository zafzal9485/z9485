//Now we are going to carry out more true and false tests by applying more advanced
//conditions and operations.

//Test equality and inequality using strings

let a = "abcdefghij";
let b = "abcdefghijklmonpqrst";
console.log("Will string a be greater than string b ?, lets see")
console.log(a>b);//false

console.log("Will string a be lesser than string b ?, lets see")
console.log(a<b);//true

//Test using the lowercase function

let c:string="HELLO WORLD";
let d:string="hellow world";
console.log(c.toLowerCase()!==d);//false

console.log(c.toLowerCase()==d);//true

//Test using equality and inequality using numbers
 
let e=10;
let f=11;
console.log(e===f);//false

console.log(e!==f);//true

//Test using Greater than and Lesser than in numbers 
 
let g = 15;
let h = 25;
console.log(g>h);//false 

console.log(g<h);//true 

//Test using greater than equal to and lesser than equal to 
let i=180;
let j=180;
console.log(i<=j);//true
console.log(i>=j);//false


let k= 200;
let l= 220;
console.log(l<=k);//false
console.log(l>=k);//true

//Test using and/or operators
let m = 250;
let n = 150;
if(m%5==0 && n%5==0){
    console.log("true");//true
}
else(console.log("false"));//false

let o = 18;
let p = 22;
if(o%3==0 || p%2==0){
console.log("true");//true
}
else("false");//false

//Test to see if an item is part of an array or not.

const colours:string[]=["Red","Orange","Yellow","Green","Blue","Indigo"];

console.log(colours.indexOf("Red"));//True
console.log(colours.indexOf("Grey"));//False
