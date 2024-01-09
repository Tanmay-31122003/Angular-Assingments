function Max(Sec : number[]) : void
{
    Sec.sort((a,b) => a - b)
    console.log("Second Maximum number is "+Sec[(Sec.length - 2)]);
}

var Arr : number [] = [23,6,89,29,56,45,77,32]

Max(Arr);