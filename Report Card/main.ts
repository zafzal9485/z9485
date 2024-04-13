
// Zeeshan Afzal 24-3-2024
// this program decides the grade of a student based on their marks 
let marks = 88;
if(marks<50){
    console.log(`your grade based on your score of ${marks} is an F, you failed, Sorry`);
}
else if(marks>=50 && marks<=60){
    console.log(`your grade based on your score of ${marks} is a D`);
}
else if(marks>60 && marks<=70)
{
console.log(`your grade based on your score of ${marks} is a C`);
}
else if(marks>70 && marks<=80)
{
console.log(`your grade based on your score of ${marks} is a B`);
}
else{
console.log(`your grade based on your score of ${marks} is a A`);
}
