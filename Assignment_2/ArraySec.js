function Max(Sec) {
    Sec.sort(function (a, b) { return a - b; });
    console.log("Second Maximum number is " + Sec[(Sec.length - 2)]);
}
var Arr = [23, 6, 89, 29, 56, 45, 77, 32];
Max(Arr);
