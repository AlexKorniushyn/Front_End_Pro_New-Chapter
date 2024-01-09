// // Home task #8

// const arrayLength = prompt("Please type the array length");
// if (isNaN(arrayLength)) {
//   alert("Array length should be a number");
// }
// const array = [];

// for (let i = 0; i < arrayLength; i++) {
//   const arrayElement = prompt("Please enter numbers array element ") || "empty";
//   if (isNaN(arrayElement)) {
//     alert("Array element should be a number");
//   }
//   array.push(arrayElement);
// }

// console.log("Arr=", array);
// array.sort(function (a, b) {
//   return a - b;
// });
// console.log("Array after sorting is:", array);

// array.splice(2, 3);
// console.log("Array after removing elements is:", array);

// // const nums = Array.from({ length: 6 }).map((_, i) =>
// //   prompt(`Enter your element #${i + 1}`)
// // );

// // nums.sort(function (a, b) {
// //   return a - b;
// // });

// // nums.splice(2, 3);

// // alert(nums);

// let name_1 = prompt("whats u name?");

// let result = alert(`Hello ${name_1}`);

let a = 1;
let b = 0;

// if (a) {
//   console.log("Diana");
// } else if (b) {
//   console.log("Alex");
// } else {
//   console.log("alex & diana");
// }

switch (a) {
  case 1:
    console.log("alex");
  case 2:
    console.log("diana");
    break;
}
