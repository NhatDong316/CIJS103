import * as utils from "./utils.js"

//Bai 1
console.log("Bai 1: ", utils.sumArray([1,2,3,4]));

//Bai 2
console.log("Bai 2: ", utils.countOccurrences([1,2,2,3,2], 2));

//Bai 3
console.log("Bai 3: ", utils.removeDuplicates([1, 2, 2, 3, 4, 4, 6, 2, 3, 6]));

//Bai 4
console.log("Bai 4: ", utils.flattenArray([[1,2],[3,4]]));

//Bai 5 
console.log("Bai 5: ", utils.isSymmetric([1,2,3,2,1]));

//Bai 6
console.log("Bai 6: ", utils.findSecondLargest([3, 1, 4, 2, 4]));

//Bai 7 
console.log("Bai 7: ", 
    utils.sortProductsByPrice([
        { name: 'Product A', price: 30 },
        { name: 'Product B', price: 20 },
        { name: 'Product C', price: 50 }
    ])
);

//bai 8 
console.log("Bai 8: ",
    utils.findMostExpensiveProduct([    
        { name: 'Product A', price: 30 },
        { name: 'Product B', price: 20 },
        { name: 'Product C', price: 50 }
    ])
);

//Bai 9
console.log("Bai 9: ",
    utils.groupByType([
        { type: 'fruit', name: 'apple' }, 
        { type: 'vegetable', name: 'carrot' },
        { type: 'fruit', name: 'banana' }
    ])
);

//Bai 10
console.log("Bai 10: ", utils.isSubset([1, 2, 3, 4], [2, 4]));

//Bai 11 
console.log("Bai 11: ", utils.findMaxKey({ a: 10, b: 20, c: 15 }));

//Bai 12
console.log("Bai 12: ", utils.mergeObjectsSumValues({ a: 10, b: 20 }, { b: 30, c: 40 }));

//Bai 13
console.log("Bai 13: ", utils.countElements(['a', 'b', 'a', 'c', 'b', 'a']));

//Bai 14
console.log("Bai 14: ", utils.cleanObject({ a: 1, b: null, c: undefined, d: 4 }));

//Bai 15 [1, 2, 3, 4, 2]
console.log("Bai 15: ", utils.hasDuplicate([1, 2, 3, 4, 2]));

//Bai 16
console.log("Bai 16: ", utils.sumByGroup([{ type: 'fruit', price: 10 }, { type: 'vegetable', price: 20 }, { type: 'fruit', price: 30 }], "price"));

//Bai 17 
console.log("Bai 17: ", utils.uniqueValues([1,2,3], [3,4,5]));

//Bai 18
console.log("Bai 18: ", utils.isPermutation([1,2,3], [3,2,1]));

//Bai 19 
console.log("Bai 19: ", utils.findLongestString(['abc', 'abcd', 'a']));

//Bai 20 
console.log("Bai 20: ", utils.intersection([1,2,3], [2,3,4]));

//Bai 21
console.log("Bai 21: ", utils.filterByMinValue([5,10,15,20], 12));

//Bai 22
console.log("Bai 22: ", utils.findLongestValue({ a: 'cat', b: 'elephant', c: 'dog' }));

//Bai 23
console.log("Bai 23: ", utils.groupByFirstLetter(['apple', 'banana', 'avocado', 'blueberry']));

//Bai 24
console.log("Bai 24: ", utils.getAdults([
    { name: 'Alice', age: 17 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 16 },
    { name: 'David', age: 22 }
]));

//Bai 25
console.log("Bai 25: ", utils.convertToArray({ a: 1, b: 2, c: 3 }));

//Bai 26
console.log("Bai 26: ", utils.sortStringsByLength(['a', 'ccc', 'bb']));

//Bai 27 
console.log("Bai 27: ", utils.sumByKey([{ type: 'fruit', price: 10 },     { type: 'vegetable', price: 20 },     { type: 'fruit', price: 30 }], "price"));

//Bai 28
console.log("Bai 28: ", utils.countWords("Hello world! Welcome to JavaScript"));

//Bai 29
console.log("Bai 29: ", utils.findMinKey({ a: 100, b: 20, c: 50 }));