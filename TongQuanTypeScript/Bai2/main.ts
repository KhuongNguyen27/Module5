let sum: number = 0;
let count: number = 0;
let checkPrime = (key):boolean => {
    let isPrime: boolean = true;
    for (let j = 2; j <= Math.sqrt(key); j++) {
        if (key % j == 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}
for (let i = 2; count < 30; i++) {
    if (i == 2) {
        sum += i;
        count++;
        continue;
    }
    if(!checkPrime(i)){
        continue;
    }
    sum += i;
    count++;
}
console.log(sum);