function Fibonacci(Value2) {
    var i = 0;
    var isum = 0;
    var first = 0;
    var second = 1;
    while (isum <= Value2) {
        console.log(second);
        isum = first + second;
        first = second;
        second = isum;
    }
}
Fibonacci(21);
