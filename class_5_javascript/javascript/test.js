// for (let current = 20; current < 100; current = current + 1)
// {
//     if (current % 7 == 0) 
//     {
//         console.log(current);
//         //break;
//     }
// }

//run this code in terminal with(if you installed node.js) : node ./test.js


let my_var = 7; // this has a type and its number, type inferencing
my_var="hello"; // my_var is going to have a type of string
my_var=3.14; // is still the number type
my_var="a"; // this is type string   
// auto my_var = 8; // this is type inferencing in c++
my_var = true; //boolean type
my_var=2.718;
let my_var2=3.14;
let my_var3 = my_var+my_var2; 

//console.log(my_var3); // EVERY LINE OF CODE IS CONSIDERED A STATEMENT. STATEMENTS MUST END IN SEMICOLONS.
// console.log() function is going to print to the terminal (cout)
// alert() function prints something to a pop up box

// MY_FUNCTION(PARAM1,
//             PARAM2); // EVERY STATEMENT ENDS IN A SEMICOLON
// We only have 3 types: string, number, boolean


let str1 = "hello"; // with double quotaion marks
let str2 = "world";
//console.log(str1+" "+str2);// + is overloaded for string for the concatenation operation

let str3 = 'single quotation marks ${100+2}';
let str4 = `back-tick marks ${100+2}`; // are the most powerful
//console.log(str3,"////" ,str4);


let special_num_1 = Infinity;
let special_num_2 = -Infinity;
let special_num_3 = NaN; // equivalent to null, stands for "not a number" 
//console.log(special_num_1+1000000,special_num_2,special_num_3, 0/0);

// console.log(typeof 4.5);
// // → number
// console.log(typeof "str");
// // → string
// my_var= false;
// console.log(typeof my_var);

//console.log(1 + 1 == 2 && 10 * 10 > 50); // (2 == 2 && 100 > 50) // (true && true) -> true
// logical (||, &&, !) lowest to highest
// math (pemdas) highest to lowest
// alll the logical operator have lower precedence than the math operators
// ALL: PEMDAS!&&|| COMPLETE ORDER OF OPERATIONS

// JAVASCRIPT IS A VERY LIBERAL LANGUAGE; IT DOESN'T COMPLAIN MUCH.


// console.log("5"+1);
// console.log(1+"5");
// console.log("5"-1);

// console.log(false == 0);
// console.log(false !== 0);

let x;
console.log(x);

var name1 = "Ayda"; // var keyword (var is global)
const greeting = "Hello "; //const keyword
name1="albert";
//greeting="ALL";
//console.log(greeting + name1);
let catch22_good = "whatever";
// let 22catch = "whatever"; no good
// you can have _ and $

//console.log() // function that I did not define
let z = Math.max(100,105, -7, 1000000, 2.7818);
console.log(z);
