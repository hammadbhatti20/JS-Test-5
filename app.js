//Chapter No: 17-20

//Q1
// var arr = [[],[]];
// console.log(arr);

//Q2
// var arr = [[0, 1, 2, 3],[1, 0, 1, 2],[2, 1, 0, 1]];
// console.log(arr);

//Q3
// for(var i = 1; i <= 10; i++) {
//     document.write(i, "</br>")
// }

//Q4
// var tableNum = parseInt(prompt("Enter a number to show its multiplication table"));
// var tableLength = parseInt(prompt("Enter table length"));
// document.write(`<b>Multiplication table of ${tableNum} </br> Length ${tableLength}</b> </br> </br>`);

// for(var i = 1; i <= tableLength; i++) {
//     document.write(`${tableNum} x ${i} = ${tableNum * i} </br>`);
// }

//Q5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for(var i = 0; i <= fruits.length; i++) {
//     document.write(`${fruits[i]} </br>`);
// }

// document.write(`</br> </br> Element at index 0 ${fruits[0]} </br> Element at index 1 ${fruits[1]} </br> Element at index 2 ${fruits[2]} </br> Element at index 3 ${fruits[3]} </br> Element at index 4 ${fruits[4]} </br>`);

//Q6
// var count = [];
// document.write(`<b>Counting:</b> </br> </br>`);

// for(var i = 1; i <= 15; i++) {
//     count.push(i);
// }
// document.write(count);

// var revCount = [];
// document.write(`</br> </br> <b>Reverse counting:</b> </br> </br>`);

// for(var i = 10; i >= 1; i--) {
//     revCount.push(i);
// }
// document.write(revCount);

// var even = [];
// document.write(`</br> </br> <b>Even:</b> </br> </br>`);

// for(var i = 0; i <= 20; i += 2) {
//     even.push(i);
// }
// document.write(even);

// var odd = [];
// document.write(`</br> </br> <b>Odd:</b> </br> </br>`);

// for(var i = 1; i <= 19; i += 2) {
//     odd.push(i);
// }
// document.write(odd);

// var series = [];
// document.write(`</br> </br> <b>Series:</b> </br> </br>`);

// for(var i = 1; i <= 10; i++) {
//     series.push(2 * i + "k ");
// }
// document.write(series);

//Q7
// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// var lowercas = userInput.toLowerCase();

// for(var i = 0; i <= A.length; i++) {
//     if(lowercas == A[i]) {
//         document.write(`${lowercas} is <b>available</b> at index ${i} in our bakery`);
//         break;
//     } else {
//         document.write(`We are sorry. ${lowercas} is <b>not available</b> in our bakery`);
//         break;
//     }
// }

//Q8
// var A = [24, 53, 78, 91, 12];
// var largest = 0;

// for (let i = 0; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i];
//     }
// }
// document.write(`Array items: ${A} </br> The largest number is ${largest}`);

//Q9
// var A = [24, 53, 78, 91, 12];
// var smallest = A[0];

// for (let i = 0; i < A.length; i++) {
//     if (A[i] < smallest) {
//         smallest = A[i];
//     }
// }
// document.write(`Array items: ${A} </br> The smallest number is ${smallest}`);

//Q10
// var table = 5;
// for (var i = 1; i <= 20; i++) {
//     document.write(table * i,", ");
// }


//Chapter 17 - 20 (for Loops)

//Q1
// for (var i = 0; i < 10; i++) {
//     console.log("HELLO WORLD!");
// }

//Q2
// var usual;

// for (usual = 1; usual <= 12; usual++) {
//     console.log("HELLO WORLD!");
// }

//Q3
// for (var i =0; i <= 4; i++) {
//     console.log(true);
// }

//Q4
// var usual;

// for (usual = 0; usual < 100; usual++) {
//     console.log("HELLO WORLD!");
// }

//Q5
// for (var i = 0; i > 3; i--) {
//     console.log("HELLO WORLD!");
// }

//Q6/7/8
// var arr = ["dog","cow","sheep","cat",];
// var flag = true;

// for (var i = 0; i <= arr.length; i++) {
//     flag = false;
//     console.log(flag);
// }

//Q9
// for (let i = 0; i < 10; i++) {
//     if (i === 1) {
//         alert("Counter is: " + i);
//         break;
//     }
// }

//Q10
// var userNames = ["hammadbhatti20","bsheryar45","laiban882"];
// var userInput = prompt("Enter first name");
// var firstName = userInput;

// for (var i = 0; i <= userNames.length; i++) {
//     if (userInput == userNames[i]) {
//         alert("Enter")
//         break;
//     } else {
//         alert("Please write correct user name");
//         break;
//     }
// }

//Q11
// var list = ["dog","cow","sheep","cat",];
// var matchFound = false;
// console.log("matchFound = ",matchFound);
// var userInput = prompt("Enter Pet Name:");

// for (var i = 0; i <= list.length; i++) { 
//     if (userInput === list[i]) {
//     alert("Match found");
//     matchFound = true; 
//     break;
//     }
// };
// console.log("matchFound = ",matchFound);

//Q12
// var firstArr = ["a","b","c","d","e","f"];
// var secondArr = [1,2,3,4,5,6];

// for (var i = 0; i <= firstArr.length; i++) {
//     for (var j = 0; j <= secondArr.length; j++) {
//         document.write(firstArr[i] + secondArr[j] + "</br>");
//     }
// }