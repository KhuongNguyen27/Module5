let sum = 0;
function Fibonacci(x: number,y: number) {
    console.log(x);
    sum += x;
    setTimeout(() => {
        if (sum < 500) {
            Fibonacci(y,x+y);
        }else{
            console.log(`Tổng dãy số Fibonacci là : ${sum}`);
        }},1000
    );
}
Fibonacci(1,1);