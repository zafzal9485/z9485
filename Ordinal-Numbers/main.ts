//We will now make a program to store a certain group of numbers in an array and then print their positions 
//with the number followed by "th".

const a = [1,2,3,4,5,6,7,8,9];
//lets manually get the 1st, 2nd and 3rd values out of the way as they are written much more differently than
//other values, then we will use the for of loop to print the remaining values.
console.log(`${a[0]}st`);
console.log(`${a[1]}nd`);
console.log(`${a[2]}rd`);
//I chose i = 3 because the index value of 0,1 and 2 have already been used for printing the value of 1st,2nd
//and 3rd and less than 9 so it does'nt print UNDEFINED in the next line.
for(let i=3 ; i < 9 ; i++){
    console.log(`${a[i]}th`)
}
