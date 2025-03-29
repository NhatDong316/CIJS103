export let productInfo = (name, price) => {
    return `San pham ${name}, gia ${price.toLocaleString("vi-VN")} VND`;
};

export let greet = (name) =>   `Xin chao, ${name}`;

export let sumUpTo = (n) => {
    let sum =0;
    for(let i=1; i<= n; i++){
        sum += i;
    }
    return sum;
}

export let binhPhuong = (n) => {
    let bPhg = n * n;
    return bPhg;
}

export let oddChecker = (n) => {
    let bool = true;
    if (n % 2 == 0) {
        return bool;
    } else {
        return !bool;
    }
}

export let firstElement = (arr) => {
    let [first] = arr;
    return first;
}

export let sum = (...num) => {
    let sum = 0;
    for (let i =0; i < num.length; i++) {
        sum += num[i];
    }
    return sum;
}

export let extractUserInfo = (user) => {
    const {name, age} =user;
    return `Bai 8, Name: ${name}, age: ${age}`;
}

export let extractUserName = (people) => {
    let result = [];
    for (let i =0; i < people.length; i++){
        result.push(people[i].name);
    }
    return result.join(", ");
}

export let strLength = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++){
        count += 1;
    }
    return count;
}

export let formatCurrency = (amount) => {
    return `${amount.toLocaleString("vi-VN")} VND`;
}

export let isMax = (arr) => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// export let isPrime = (n) => {

// }