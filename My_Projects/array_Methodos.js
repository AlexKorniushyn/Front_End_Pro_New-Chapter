// push(): Adds one or more elements to the end of an array and returns the new length of the array.

let array = [1, 2, 3];
array.push(4);
console.log(array); // Output: [1, 2, 3, 4]

// pop(): Removes the last element from an array and returns that element.

let array = [1, 2, 3];
let poppedElement = array.pop();
console.log(poppedElement); // Output: 3
console.log(array); // Output: [1, 2]

// shift(): Removes the first element from an array and returns that element. This method also updates the indexes of the remaining elements.

let array = [1, 2, 3];
let shiftedElement = array.shift();
console.log(shiftedElement); // Output: 1
console.log(array); // Output: [2, 3]

// unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.

let array = [2, 3];
array.unshift(1);
console.log(array); // Output: [1, 2, 3]

// splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

let array = [1, 2, 3, 4, 5];
array.splice(2, 1); // Remove 1 element at index 2
console.log(array); // Output: [1, 2, 4, 5]

array.splice(2, 0, "a", "b"); // Insert 'a' and 'b' at index 2
console.log(array); // Output: [1, 2, 'a', 'b', 4, 5]

// slice(): Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.

let array = [1, 2, 3, 4, 5];
let newArray = array.slice(1, 3);
console.log(newArray); // Output: [2, 3]

// concat(): Returns a new array that combines two or more arrays.

let array1 = [1, 2];
let array2 = [3, 4];
let newArray = array1.concat(array2);
console.log(newArray); // Output: [1, 2, 3, 4]
