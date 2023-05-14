function insertionSort(arr) {
    let finalArr = [];
    finalArr.push(arr[0])
    for (let i = 1; i < arr.length; i++) {       
        for (let j = finalArr.length; j >= 0; j--) {
            if (arr[i] > finalArr[j - 1] || j === 0) {
                finalArr.splice(j, 0, arr[i]);
                break;
            }
        }
        
    }
    return finalArr;
}

module.exports = insertionSort;