class Circle  
{     private radius: number; 
     constructor(radius: number)  
    {         this.radius = radius; 
    } 
 
    Area(): number  
    {         return Math.PI * this.radius ** 2; 
    } 
 
    Circumference(): number {         return 2 * Math.PI * this.radius; 
    } 
}  class Circlex extends Circle  
{ 
    Behaviours(): void  
    {         console.log("Circlex class includes additional behaviors.");     } 
 
    Circumference(): number  
    { 
        return super.Circumference(); 
    } } const circlex1 = new Circlex(5); const circlex2 = new Circlex(7); 
 console.log("Circumference of circlex1:", circlex1.Circumference()); console.log("Area of circlex1:", circlex1.Area()); 
 console.log("Circumference of circlex2:", circlex2.Circumference()); console.log("Area of circlex2:", circlex2.Area()); 
 circlex1.Behaviours 
