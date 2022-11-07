function printSum() {
    let sum = 0;
    for(let i = 0; i < 256; i++) {
        sum += i;
        console.log(i);
        console.log(sum);
    }
}

printSum();