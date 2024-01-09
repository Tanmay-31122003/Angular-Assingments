class Arithmetic {
    private number1: number;
    private number2: number;

    constructor(num1: number, num2: number) {
        this.number1 = num1;
        this.number2 = num2;
    }

    addition(): number {
        return this.number1 + this.number2;
    }

    subtraction(): number {
        return this.number1 - this.number2;
    }

    multiplication(): number {
        return this.number1 * this.number2;
    }

    division(): number {
        if (this.number2 !== 0) {
            return this.number1 / this.number2;
        } else {
            console.error("Division by zero is not allowed.");
            return 0;
        }
    }
}

const obj1 = new Arithmetic(10, 5);
const obj2 = new Arithmetic(8, 2);

console.log("Object 1 - Addition:", obj1.addition());
console.log("Object 1 - Subtraction:", obj1.subtraction());
console.log("Object 1 - Multiplication:", obj1.multiplication());
console.log("Object 1 - Division:", obj1.division());

console.log("Object 2 - Addition:", obj2.addition());
console.log("Object 2 - Subtraction:", obj2.subtraction());
console.log("Object 2 - Multiplication:", obj2.multiplication());
console.log("Object 2 - Division:", obj2.division())