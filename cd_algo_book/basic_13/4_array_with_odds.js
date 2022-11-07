function oddArray() {
    let arr = [];
    for (let i = 0; i <= 255; i++) {
        if (i % 2 !== 0) {
            arr.push(i);
        }
    }
    console.log(arr);
}

oddArray();