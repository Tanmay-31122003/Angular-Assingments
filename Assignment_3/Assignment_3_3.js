var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.Area = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    Circle.prototype.Circumference = function () {
        return 2 * Math.PI * this.radius;
    };
    return Circle;
}());
var Circlex = /** @class */ (function (_super) {
    __extends(Circlex, _super);
    function Circlex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circlex.prototype.Behaviours = function () { console.log("Circlex class includes additional behaviors."); };
    Circlex.prototype.Circumference = function () {
        return _super.prototype.Circumference.call(this);
    };
    return Circlex;
}(Circle));
var circlex1 = new Circlex(5);
var circlex2 = new Circlex(7);
console.log("Circumference of circlex1:", circlex1.Circumference());
console.log("Area of circlex1:", circlex1.Area());
console.log("Circumference of circlex2:", circlex2.Circumference());
console.log("Area of circlex2:", circlex2.Area());
circlex1.Behaviours;
