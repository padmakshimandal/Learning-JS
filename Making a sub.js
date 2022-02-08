let bread1=prompt("Which type of bread would you like to have?");
let veggies1=prompt("Which vegetables would you like to include?");
let sauce1=prompt("Which sauces do you want to use?");

function makeSub(bread2,veggies2,sauce2){
    let sub =bread2+" bread "+veggies2+" " +sauce2 +" sauces sub is ready.";
    return sub;
}
let vegSub=makeSub(bread1,veggies1,sauce1);
console.log(vegSub);