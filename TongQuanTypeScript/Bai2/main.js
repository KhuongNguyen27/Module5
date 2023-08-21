var sum = 0;
var count = 0;
var checkPrime = function (key) {
    var isPrime = true;
    for (var j = 2; j <= Math.sqrt(key); j++) {
        if (key % j == 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
};
for (var i = 2; count < 30; i++) {
    if (i == 2) {
        sum += i;
        count++;
        continue;
    }
    if (!checkPrime(i)) {
        continue;
    }
    sum += i;
    count++;
}
console.log(sum);
