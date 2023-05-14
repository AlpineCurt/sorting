function selectionSort(arr) {
    // Look for smallest value and swap

    for (let i = 0; i < arr.length; i++) {
        let lowest = arr[i];
        let lowestIdx;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < lowest) {
                lowest = arr[j];
                lowestIdx = j;
            }
        }
        if (lowestIdx) {
            let temp = arr[i];
            arr[i] = arr[lowestIdx];
            arr[lowestIdx] = temp;
        }
    }
    return arr;
}

module.exports = selectionSort;