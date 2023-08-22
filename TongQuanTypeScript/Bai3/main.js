var isPrime = function (number) {
    var isPrime = true;
    if (number < 2) {
        isPrime = false;
    }
    else if (number > 2) {
        for (var i = 2; i < Math.sqrt(number); i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
};
var numbers = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
var sum = 0;
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number = numbers_1[_i];
    if (isPrime(number)) {
        console.log(number);
        sum += number;
    }
}
console.log("T\u00F4\u0309ng ca\u0301c s\u00F4\u0301 nguy\u00EAn t\u00F4\u0301 ".concat(sum));
