//for loop
/*for(let i=0;i<100;i++){
    console.log('Namaste, How are you guys?');
}
for(let i=5;i<100;i=i+5){
    console.log('I am fine');
}
for(let i=65;i>4;i=i-5){
    console.log(i);
}

//while loop
let i=10;
while(i>=0)
{
    console.log("Namaste, How are you guys?");
    i--;
}

//do while loop
let j=0
do{
    console.log("Namaste, How are you guys?");
    j++;
}
while(j<100)
*/

//for..in loop
//object
let animal = {
    name:"puppy",
    legs: 4
};
for (let key in animal){
    console.log(key, animal[key]);
}

//arrays
let names=["Ananya", "Neha","Aman","Anuj"];
for(let index in names){
    console.log(index, names[index]);
}

//for..of loop
for(let name of names){
    console.log(name)
}