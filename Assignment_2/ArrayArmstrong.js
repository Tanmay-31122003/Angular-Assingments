var Fun = function (No) {
    var Digit = 0;
    var Power = 0;
    var i = 0;
    var j = 0;
    var Arr = [];
    var Sum = 1;
    var temp = No;
    var temp1 = 0;
    while (temp >= 1) {
        Digit = temp % 10;
        temp = temp / 10;
        Arr[Power] = Digit;
        Power++;
        console.log(Digit);
    }
    for (i = 0; i < Arr.length; i++) {
        Sum = 1;
        for (j = 0; j < Power; j++) {
            Sum = Arr[j] * Sum;
        }
        temp1 = temp1 + Sum;
        console.log(" temp : " + temp1);
    }
    if (temp1 == No) {
        return true;
    }
    else {
        return false;
    }
};
var No = 153;
var Ret = false;
Ret = Fun(No);
if (Ret == true) {
    console.log("Given number is not Armstrong number : ");
}
else {
    console.log("Given number is  Armstrong number : ");
}
