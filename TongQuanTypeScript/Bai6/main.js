var sum = 0;
function Fibonacci(x, y) {
    console.log(x);
    sum += x;
    if (sum < 500) {
        Fibonacci(y, x + y);
    }
    else {
        console.log("T\u00F4\u0309ng da\u0303y s\u00F4\u0301 Fibonacci la\u0300 : ".concat(sum));
    }
}
Fibonacci(1, 1);
