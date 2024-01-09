var Arithmetic = /** @class */ (function () {
    function Arithmetic(num1, num2) {
        this.number1 = num1;
        this.number2 = num2;
    }
    Arithmetic.prototype.addition = function () {
        return this.number1 + this.number2;
    };
    Arithmetic.prototype.subtraction = function () {
        return this.number1 - this.number2;
    };
    Arithmetic.prototype.multiplication = function () {
        return this.number1 * this.number2;
    };
    Arithmetic.prototype.division = function () {
        if (this.number2 !== 0) {
            return this.number1 / this.number2;
        }
        else {
            console.error("Division by zero is not allowed.");
            return 0;
        }
    };
    return Arithmetic;
}());
var obj1 = new Arithmetic(10, 5);
var obj2 = new Arithmetic(8, 2);
console.log("Object 1 - Addition:", obj1.addition());
console.log("Object 1 - Subtraction:", obj1.subtraction());
console.log("Object 1 - Multiplication:", obj1.multiplication());
console.log("Object 1 - Division:", obj1.division());
console.log("Object 2 - Addition:", obj2.addition());
console.log("Object 2 - Subtraction:", obj2.subtraction());
console.log("Object 2 - Multiplication:", obj2.multiplication());
console.log("Object 2 - Division:", obj2.division());
