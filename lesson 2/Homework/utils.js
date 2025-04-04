//Bai 1 
export let sumArray = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

//Bai 2
export let countOccurrences = (arr, val) => { 
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == val) {
            result++;
        }
    }
    return result;
}

//Bai 3  [1, 2, 2, 3, 4, 4, 6, 2, 3, 6]]
export let removeDuplicates = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]){
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}

//Bai 4
export let flattenArray = arr => {
    let newArr = [...arr[0], ...arr[1]];
    return newArr;
}

//Bai 5 [1,2,3,2,1]
export let isSymmetric = arr => {
    for (let i = 0; i < Math.floor(arr.length/2); i++) {
        if (arr[i] != arr[arr.length - i -1]) {
            return false;
            break;
        }
    }
    return true;
}

//Bai 6 arr = [3, 1, 4, 2, 4]
export let findSecondLargest = arr => {
    for (let i = 0; i < arr.length; i++){
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i] > arr[j]){
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return `Second largest in ${arr} is: ${arr[1]}`;
}

//Bai 7 sortProductsByPrice(products)
export let sortProductsByPrice = arr => {
    for (let i = 0; i < arr.length; i++){
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i].price > arr[j].price){
                let temp = arr[j].price;
                arr[j].price = arr[i].price;
                arr[i].price = temp;
            }
        }
    }
    return arr;
}

// Bai 8 findMostExpensiveProduct(products)
export let findMostExpensiveProduct = arr => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].price > max.price) {
            max = arr[i];
        }
    }
    return max;
}

// Bài 9. Viết hàm groupByType(arr) gom nhóm các phần tử trong mảng dựa theo loại (type).
export let groupByType = arr => {
    let resultObj = {};
    arr.forEach((item) => {
        if(!resultObj[item.type]){
            resultObj[item.type] = [];
        }
        resultObj[item.type].push(item.name);
    });
    return resultObj;
}

//Bai 10: Viết hàm isSubset(arr1, arr2) kiểm tra xem arr2 có phải là mảng con của arr1 hay không.
// Input: arr1 = [1, 2, 3, 4], arr2 = [2, 4]
// Output: true
export let isSubset = (arr1, arr2) =>  {
    let count = 0;
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr2[i] == arr1[j]){
                count++;
            }
        }   
    }
    return count == arr2.length ? true : false;
}

// Bài 11. Viết hàm findMaxKey(obj) trả về key có giá trị số lớn nhất trong object.
// Input: obj = { a: 10, b: 20, c: 15 }
// Output: 'b'
export let findMaxKey = obj =>{ 
    let arr = Object.values(obj);
    let maxValue = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }
    let maxKey = "";
    for (let key in obj) {
        if (obj[key] == maxValue) {
            maxKey = key;
        }
    }
    return maxKey;
}

// Bài 12. Viết hàm mergeObjectsSumValues(obj1, obj2) hợp hai object, nếu key trùng nhau thì cộng giá trị.
// Input:
// obj1 = { a: 10, b: 20 };
// obj2 = { b: 30, c: 40 };
// Output: { a: 10, b: 50, c: 40 }
export let mergeObjectsSumValues = (obj1, obj2) => {
    let resultObj = {...obj1, ...obj2};
    for (let key1 in obj1) {
        for (let key2 in obj2) {
            if (key1 == key2) {
                resultObj[key1] = obj1[key1] + obj2[key2];
            }
        }
    }
    return resultObj;
}

// Bài 13. Viết hàm countElements(arr) trả về object đếm số lần xuất hiện của mỗi phần tử trong mảng.
// Input: arr = ['a', 'b', 'a', 'c', 'b', 'a']
// Output: { a: 3, b: 2, c: 1 }
export let countElements = arr => {
    let resultObj = {};
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (!resultObj[element]) {
            resultObj[element] = 0;
        }
        resultObj[element]++;
    }
    return resultObj;
}

// Bài 14. Viết hàm cleanObject(obj) xóa các key có giá trị là null hoặc undefined.
// Input: obj = { a: 1, b: null, c: undefined, d: 4 }
// Output: { a: 1, d: 4 }
export let cleanObject = obj => {
    let newObj = {...obj};
    for (let key in newObj) {
        if (newObj[key] == null || newObj[key] == undefined) {
            delete newObj[key];
        }
    }
    return newObj;
}

// Bài 15. Viết hàm hasDuplicate(arr) kiểm tra xem mảng có phần tử lặp lại hay không.
// Input: arr = [1, 2, 3, 4, 2]
// Output: true
export let hasDuplicate = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] == arr[j]){
                return true;
                break;
            }
        }
        
    }
    return false;
}

// Bài 16. Viết hàm sumByGroup(arr, key) tính tổng giá trị theo nhóm.
// Input:
// arr = [
//     { type: 'fruit', price: 10 },
//     { type: 'vegetable', price: 20 },
//     { type: 'fruit', price: 30 }
// ];
// Output: { fruit: 40, vegetable: 20 }
export let sumByGroup = (arr, key) => {
    let obj = {};
    arr.forEach((item) => {
        if(!obj[item.type]) {
            obj[item.type] = 0;
        }
        obj[item.type] += item[key];
    });
    return obj;
}

// Bài 17. Viết hàm uniqueValues(arr1, arr2) trả về mảng các giá trị duy nhất từ hai mảng.
// Input: arr1 = [1, 2, 3], arr2 = [3, 4, 5]
// Output: [1, 2, 3, 4, 5]
export let uniqueValues = (arr1, arr2) => {
    let resultArr = [...arr1, ...arr2];
    for (let i = 0; i < resultArr.length; i++) {
        for (let j = i + 1; j < resultArr.length; j++) {
            if (resultArr[i] == resultArr[j]) {
                resultArr.splice(j, 1);
                j--;
            }
        }
    }   
    return resultArr;
}

// Bài 18. Viết hàm isPermutation(arr1, arr2) kiểm tra xem hai mảng có phải là hoán vị của nhau không.
// Input: arr1 = [1, 2, 3], arr2 = [3, 2, 1]
// Output: true
export let isPermutation = (arr1, arr2) => {
    let arr3 = [...arr2]; 
    arr1.forEach((item) => {
        for (let i = 0; i < arr2.length; i++) {
            if (item == arr2[i]) {
                arr3.splice(i, 1);
            }
        }
    });
    return arr3.length == 0;
}

// Bài 19. Viết hàm findLongestString(arr) trả về chuỗi có độ dài lớn nhất trong mảng.
// Input: arr = ['abc', 'abcd', 'a']
// Output: 'abcd'
export let findLongestString = arr => {
    let max = arr[0].length;
    let index = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > max) {
            max = arr[i].length;
            index = i;
        }
    }
    return arr[index];
}

// Bài 20. Viết hàm intersection(arr1, arr2) trả về mảng chứa các giá trị chung giữa hai mảng.
// Input: arr1 = [1, 2, 3], arr2 = [2, 3, 4]
// Output: [2, 3]
export let intersection = (arr1, arr2) => {
    let output = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                output.push(arr1[i]);
            }
        }
    }
    return output;
}

// Bài 21. Viết hàm filterByMinValue(arr, minValue) để xóa tất cả các phần tử có giá trị nhỏ hơn minValue.
// Input: arr = [5, 10, 15, 20], minValue = 12
// Output: [15, 20]
export let filterByMinValue = (arr, minValue) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minValue) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
} 

// Bài 22.  Viết hàm findLongestValue(obj) để tìm giá trị có độ dài lớn nhất trong một object.
// Input: obj = { a: 'cat', b: 'elephant', c: 'dog' }
// Output: 'elephant'

export let findLongestValue = obj => {
    let arr = Object.values(obj);
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > max.length) {
            max = arr[i]; 
        }
    }
    return max;
}

// Bài 23. Viết hàm groupByFirstLetter(arr) để gom nhóm các chuỗi theo chữ cái đầu tiên.
// Input: arr = ['apple', 'banana', 'avocado', 'blueberry']
// Output:
// {
//     a: ['apple', 'avocado'],
//     b: ['banana', 'blueberry']
// }
export let groupByFirstLetter = arr => {
    let obj = {};
    arr.forEach(item => {
        if (!obj[item[0]]) {
            obj[item[0]] = [];
        }
        obj[item[0]].push(item);
    });
    return obj;
}

// Bài 24. Viết hàm getAdults(people) để trả về danh sách người lớn (tuổi >= 18) từ một danh sách người.
// Input:
// people = [
//     { name: 'Alice', age: 17 },
//     { name: 'Bob', age: 20 },
//     { name: 'Charlie', age: 16 },
//     { name: 'David', age: 22 }
// ];
// Output:
// [{ name: 'Bob', age: 20 }, { name: 'David', age: 22 }]
export let getAdults = people => {
    let output = [];
    people.forEach(item => {
        if (item.age >= 18) {
            output.push(item);
        }
    });
    return output;
}

// Bài 25. Viết hàm convertToArray(obj) để chuyển đổi một object thành mảng các cặp [key, value].
// Input: obj = { a: 1, b: 2, c: 3 }
// Output: [['a', 1], ['b', 2], ['c', 3]]
export let convertToArray = obj => {
    let bigArr = [];
    for (let key in obj) {
        let arr = [];
        arr.push(key);
        arr.push(obj[key]);
        bigArr.push(arr);
    }
    return bigArr;
}

// Bài 26. Viết hàm sortStringsByLength(arr) để sắp xếp mảng chuỗi theo độ dài tăng dần.
// Input: arr = ['a', 'ccc', 'bb']
// Output: ['a', 'bb', 'ccc']
export let sortStringsByLength = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i].length > arr[j].length) {
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}

// Bài 27. Viết hàm sumByKey(arr, key) để tính tổng giá trị là số của một key được chỉ định trong danh sách object.
// Input:
// arr = [
//     { type: 'fruit', price: 10 },
//     { type: 'vegetable', price: 20 },
//     { type: 'fruit', price: 30 }
// ];
// key = 'price';
// Output: 60
export let sumByKey = (arr, key) => {
    let output = 0;
    arr.forEach(item => {
        output += item[key];
    })
    return output;
}

// Bài 28. Viết hàm countWords(str) để đếm số từ trong một chuỗi.
// Input: str = "Hello world! Welcome to JavaScript"
// Output: 5
export let countWords = str => {
    let count = 0;
    if (str.length == 0) {
        return 0;
    }
    for (let i = 1; i < str.length; i++) {
        if (str[i] == " " && str[i-1] != " ") {
            count++;
        }
    }
    if (str[str.length - 1] != " ") {
        count++;
    }
    return count;
}

//Bài 29. Viết hàm findMinKey(obj) để tìm key có giá trị số nhỏ nhất trong object.
// Input: obj = { a: 100, b: 20, c: 50 }
// Output: 'b'
export let findMinKey = obj => {
    let arr = Object.values(obj);
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    let result = '';
    for (let key in obj) {
        if (obj[key] == arr[0]) {
            result = key;
        }
    }
    return result;
}