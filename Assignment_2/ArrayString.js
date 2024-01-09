function ChkString(input, substring) {
    if (input.indexOf(substring) !== -1) {
        console.log("String contains ".concat(substring, " in it."));
    }
    else {
        console.log("String does not contain ".concat(substring, "."));
    }
}
var inputString = "Pune Kothrud Marvellous Infosystems";
ChkString(inputString, "Marvellous");
