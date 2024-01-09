function Summation(Arr : number[]) : number
{
    var i : number = 0;
    var Sum : number = 0;

    for(i = 0; i < Arr.length; i++)
    {
        Sum = Sum + Arr[i]; 
    }

    return Sum;
}

var Arr : number [] = [23,6,7,4,5,7];
var Ans : number = 0;

Ans = Summation(Arr);
console.log("Addition is "+Ans);