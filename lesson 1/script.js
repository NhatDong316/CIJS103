import * as utils from "./utils.js";

//Bai 1
console.log(utils.productInfo("Sach", 20000));

//Bai 2
console.log(utils.greet("Tom"));

//Bai 3
console.log("Bai 3", utils.sumUpTo(5));

//Bai 4
console.log("bai 4", utils.binhPhuong(6));

//Bai 5
console.log("Bai 5", utils.oddChecker(7));

//Bai 6
console.log("Bai 6", utils.firstElement([1, 2, 3]));

//Bai 7
console.log("Bai 7", utils.sum(1, 2, 3, 4, 5));

//Bai 8
const user = { name: "Tony", age: 30 };
console.log("Bai 8", utils.extractUserInfo(user));

//Bai 9
const people = [{ name: "An" }, { name: "Binh" }];
console.log("Bai 9", utils.extractUserName(people));

//Bai 10
const str = "Hello World";
console.log("Bai 10:", utils.strLength(str));

//Bai 12
const amount = 100000;
console.log("Bai 12:", utils.formatCurrency(amount));

//Bai 13
console.log("Bai 13:", utils.isMax([10, 5, 20, 8, 11, 50]));

//Bai 14
console.log("Bai 14:", utils.isPrime(7));

//Bai 15
console.log("Bai 15:", utils.repeatStr("Hello", 3));

//Bai 16
console.log('Bai 16:', utils.sumOdd([1, 2, 3, 4]));

//Bai 17
console.log('Bai 17:', utils.sumGreaterThan([1, 2, 3, 4], 2));

//Bai 18
console.log('Bai 18:', utils.formatDate("2024-11-28"));

//Bai 19
console.log('Bai 19:', utils.firstThree([1,2,3,4,5]));

//Bai 20
console.log('Bai 20:', utils.containsChar("javascript", "j"));

//Bai 21
console.log('Bai 21:', utils.mergeArrays([1,2], [3,4]));

//Bai 22
console.log('Bai 22:', utils.countOccurrences([1,2,2,3,2], 2));

//Bai 23
console.log('Bai 23:', utils.filterOdd([1,2,3,4]));

//Bai 24
console.log('Bai 24:', utils.greaterThan([1, 2, 3, 4], 2));

//Bai 25
console.log('Bai 25:', utils.factorial(5));

//Bai 26
console.log('Bai 26:', utils.separateEvenOdd([1,2,3,4]));

//Bai 27
console.log("Bai 27:", utils.sortAsc([3, 1, 4, 2]));

//Bai 28
console.log("Bai 28:", utils.sumEvenIndex([1, 2, 3, 4]));

//Bai 29
console.log("Bai 29:", utils.multiplyByTwo([1,2,3]));

//Bai 30
console.log("Bai 30:", utils.arrayToString(["a", "b", "c"]));