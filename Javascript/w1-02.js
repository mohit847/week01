// by using var
// by using let
// by using const

// var myName = [];
// console.log(myName);
// myName.push("John");
// console.log(myName);


// let v1="mohit";
// let v2="kumar";

// console.log(`${v1} ${v2}`);




//Default params

// function addTwoNumber(num1, num2){
//     return num1+num2;
// }

// console.log(addTwoNumber(5,8));




//Arrow function

// let addTwoNumber = (num1,num2) =>{
//     return num1+num2;
// }

// // also // let addTwoNumber = (num1,num2) => num1+num2;
// console.log(addTwoNumber(8,9));





//////// Rest operatior are applicable in arrasy and obects in js

let array = [5,10,15,20,25];

// spread => ...
let newArray = [...array];
console.log(newArray);
console.log(array);




// Rest => ...

// let maxOfTwoNumber = (num1, num2) => Math.max(num1,num2);
// let maxOfThreeNumber = (num1, num2, num3) => Math.max(num1,num2, num3);


// let maxOfNumbers = (...numbers) => {
//     let maximum = Number.MIN_VALUE;
//     for(let number of numbers){
//         maximum = Math.max(maximum, number)
//     }
//     return maximum;
// }
// console.log(maxOfNumbers(1,5,8,79,7,55,4,66));
 


//spread operator in objects

let object = {
    name: "John",
    age : 25,
    city : "New York",
    address: {
        city: "new ourk",
        country:"USA",
    },
};

let object2 = {...object, country: "USA", favouriteSong: "Numb by number"}
console.log(object2);