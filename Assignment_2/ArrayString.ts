function ChkString(input: string, substring: string): void 
{
    if (input.indexOf(substring) !== -1) 
    {
        console.log(`String contains ${substring} in it.`);
    } 
    else 
    {
        console.log(`String does not contain ${substring}.`);
    }
}


let inputString: string = "Pune Kothrud Marvellous Infosystems";
ChkString(inputString, "Marvellous");
