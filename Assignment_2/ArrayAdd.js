function Summation(Arr) {
    var i = 0;
    var Sum = 0;
    for (i = 0; i < Arr.length; i++) {
        Sum = Sum + Arr[i];
    }
    return Sum;
}
var Arr = [23, 6, 7, 4, 5, 7];
var Ans = 0;
Ans = Summation(Arr);
console.log("Addition is " + Ans);
