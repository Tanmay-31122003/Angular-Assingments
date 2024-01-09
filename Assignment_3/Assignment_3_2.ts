class Circle 
{
    radius: number;
    constructor(radius: number) 
    {
      this.radius = radius;
    }
  
    Area(): number 
    {
      return Math.PI * this.radius * this.radius;
    }
}
  
class Circlex extends Circle 
{
    constructor(radius: number) 
    {
        super(radius);
    }
}
  
const circle1 = new Circlex(5); 
 const circle2 = new Circlex(8);
  
console.log("Object 1 - Radius:", circle1.radius);
console.log("Object 1 - Area:", circle1.Area());
  
console.log("Object 2 - Radius:", circle2.radius);
console.log("Object 2 - Area:", circle2.Area());