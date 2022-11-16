// Given an array and an index into the array, remove and return the array value ​at that index. Do this without using any built-in array methods except ​pop()​. Think of ​PopFront(arr)​ as equivalent to ​RemoveAt(arr,0).​

function removeAt(arr, idx) {
    let popped = arr[idx];
    if (arr.length == 0) {
        return undefined;
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (i == idx) {
                for (let x = i; x < arr.length; x++) {
                    if (arr[x + 1] == null) {
                        arr.pop();
                    } else {
                        arr[x] = arr[x + 1];
                    }
                }
            }
        }
    }
    console.log(arr);
    return popped;
}

console.log(removeAt([1,2,3,4], 0));
console.log(removeAt([27,5,19,89], 2));
console.log(removeAt([], 1));