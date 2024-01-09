function Maximum(Arr) {
    var i = 0;
    var Max_value = Arr[0];
    for (i = 1; i < Arr.length; i++) {
        if (Arr[i] > Max_value) {
            Max_value = Arr[i];
        }
    }
    return Max_value;
}
var Ans;
var No = [23, 89, 6, 29, 56, 45, 77, 32];
Ans = Maximum(No);
console.log("Maximum number is " + Ans);
