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
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}());
var Circlex = /** @class */ (function (_super) {
    __extends(Circlex, _super);
    function Circlex(radius) {
        return _super.call(this, radius) || this;
    }
    return Circlex;
}(Circle));
var circle1 = new Circlex(5);
var circle2 = new Circlex(8);
console.log("Object 1 - Radius:", circle1.radius);
console.log("Object 1 - Area:", circle1.Area());
console.log("Object 2 - Radius:", circle2.radius);
console.log("Object 2 - Area:", circle2.Area());
