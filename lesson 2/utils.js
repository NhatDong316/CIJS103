export function sumArry(arr) {
    let sum =  0;
    for( let i=0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

export function countOccurances(arr, val) {
    const filteredValue = arr.filter((item) => {
        return item === val;
    });
    return filteredValue.length;
}

export function removeDuplicates1(arr) {
    const resultArr = [];
    for(let i= 0; i < arr.length; i++){
        const existedEl = resultArr.find((item)=> item === arr[i]);
        if (!existedEl) {
            resultArr.push(arr[i]);
        }
    }
    return resultArr;
}
export function removeDuplicates2(arr){
    const resultArr = arr.filter((item,index) => {
        return arr.indexOf(item) === index;
    });
    return resultArr;
}

export function flattenArray(arr) {
    const resultArray = [];
    for (let i = 0; i < arr.length; i++) {
      // mỗi 1 phần tử này là 1 cái mảng
      const element = arr[i];
      resultArray.push(...element);
    }
    return resultArray;
}