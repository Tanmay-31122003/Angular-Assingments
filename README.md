# Angular-Assingments

## Introduction to JavaScript

- Javascript is high level and interpreted programming language commonly used to create and control dyanamic web content.
- javascript have many libraries framework ike react, angular, view.js therefore javascript is crucial for web development.

Key Feature :
1. Lightweight and Interpreted : execution is line-by-line so it's easy to run in browser
2. Dynamically typing : javascript dont have datatype so it's not bound to any datatype
3. Object Oriented : supports inheritance, object, Prototype
4. Event-Driven : it have user interaction like click, without reload the page
5. client side validation : reducing server load by validate user input before sending to server 
6. Cross-Platform : it highly verstile because it can run on any browser.

Data Types : 
1. Number 
2. String 
3. Boolean
4. Undefined 
5. Null 


# JavaScript Notes
- Introduction to JavaScript

1. JavaScript is a high-level, interpreted scripting language.
2. Used for web development to create interactive and dynamic web pages.
3. Runs on the client-side in the browser and can be used server-side with Node.js.

- Features of JavaScript
1. Dynamic Typing: Variables can hold multiple types.
2. Prototype-Based: Uses prototypes instead of classes for inheritance.
3. First-Class Functions: Functions are treated as objects.
4. Event-Driven: Executes code in response to events.
5. Asynchronous Programming: Uses callbacks, promises, and async/await for handling asynchronous operations.

- Components of JavaScript
1. Variables: var, let, const.
2. Data Types: String, Number, Boolean, Object, Array, Function, Undefined, Null, Symbol.
3. Operators: Arithmetic, comparison, logical, assignment, bitwise, ternary.
4. Control Structures: if, else, switch, for, while, do-while.
5. Functions: Function declarations, expressions, arrow functions.
6. Objects: Key-value pairs, methods, this keyword.
7. Events: Mouse events, keyboard events, form events, etc.
8. DOM Manipulation: Methods to interact with and modify the HTML document.

# TypeScript Notes
- Introduction to TypeScript : 
TypeScript is a superset of JavaScript developed by Microsoft.
Adds static typing and other features to JavaScript.
Transpiles to JavaScript to run in any browser or JavaScript engine.

- Features of TypeScript

1. Static Typing: Type annotations for variables, function parameters, and return types.
2. Interfaces: Define custom types and enforce structure.
3. Classes: ES6 classes with additional TypeScript features like access modifiers.
4. Modules: Organized code with imports and exports.
5. Enums: Define a set of named constants.
6. Generics: Write functions and classes that work with different types.

- Components of TypeScript

1. Basic Types: number, string, boolean, array, tuple, enum, any, void, null, undefined, never.
2. Variables: let, const, type annotations 
```
let num: number = 5;
```
3. Functions: Type annotations for parameters and return types, optional and default parameters.
4. Classes: class, constructors, methods, properties, inheritance, access modifiers (public, private, protected).
5. Interfaces: Define shapes of objects
```
    interface Person 
	{ 
		name: string; 
		age: number; 
	}
```

6. Modules: export and import for code organization.
7. Type Assertions: let strLength: number = (someValue as string).length;.
8. Union Types: let value: string | number;.
9. Transpile TypeScript to JavaScript
10. Install TypeScript: 
	1. npm install -g typescript.
	2. Transpile: tsc [filename].ts.
	3. TypeScript Environment Setup
	4. Install Node.js.
	5. Install TypeScript: npm install -g typescript.

- TypeScript Basic Syntax
	Type annotations: let num: number = 10;.<br>
	Functions: function add(x: number, y: number): number { return x + y; }.
1. TypeScript Types
	1. Primitive types: number, string, boolean.
	2. Special types: any, void, null, undefined, never.
	3. Complex types: arrays, tuples, enums.
2. TypeScript Variables
	1. Declare with 'let' and 'const'.
	2. Type annotations: let age: number = 30;.
3. TypeScript Operators
	1. Arithmetic: +, -, *, /.
	2. Comparison: ==, ===, !=, !==, >, <, >=, <=.
	3. Logical: &&, ||, !.
	4. Bitwise: &, |, ^, ~, <<, >>, >>>.
4. TypeScript Decision Making			
	1. if, else if, else.
	2. switch statements.
5. TypeScript Loops
	1. for, while, do-while.

6. TypeScript Functions
	1. Function declaration:  
	```
	function add(a: number, b: number): number { return a + b; }.
	```
	2. Arrow functions: 
	```
	const add = (a: number, b: number): number => a + b;.
	```
7. TypeScript Numbers
	1. All numbers are floating-point.
	2. Hexadecimal, decimal, octal, and binary literals.
8. TypeScript Strings
	1. Template strings: 
	```
	let name: string = Hello, ${firstName} ${lastName};
	```
9. TypeScript Arrays
	```
	Typed arrays: let list: number[] = [1, 2, 3];.
	Generic arrays: let list: Array<number> = [1, 2, 3];.
	```
10. TypeScript Tuples
	```
	Fixed length arrays with known types:
	let tuple: [string, number] = ["hello", 10];.
	```
11. TypeScript Unions
	```
	Combine multiple types: 
	let value: string | number;
	```
12. TypeScript Interfaces
	Define a structure:

	```
	interface Person 
	{
		name: string;
		age: number;
	}
	let person: Person = { name: "John", age: 25 };
	```
13. TypeScript Classes
	Define classes with constructors and methods:

	```
	class Animal {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
	move(distance: number = 0) {
		console.log(`${this.name} moved ${distance}m.`);
	}
	}
	```
14. TypeScript Objects
	Objects with properties and methods:
	typescript
	```
	let user = {
	name: "John",
	age: 30,
	greet: function() { console.log("Hello!"); }
	};
	```
15. TypeScript Namespaces
	Group related code:
	```
	namespace Validation 
	{
		export interface StringValidator 
		{
			isAcceptable(s: string): boolean;
		}
	}
	```
16. TypeScript Modules
		Export and import code:
	```
	export class MyClass { }
	import { MyClass } from './my-module';
	```

1. TypeScript vs. JavaScript
TypeScript provides static typing, interfaces, classes, and advanced tooling, making it more robust and maintainable for large-scale applications.
2. JavaScript is more flexible and dynamic but can lead to runtime errors and maintenance challenges.

## 5 Steps to Setup Enviourment 
1. Node js 
2. NPM 
3. CLI
4. Transpiler
5. Vs Code


randial strting from 1995 ,node.js
typescript compile by transpiller 
2010 angular.js - 
2012 typescript -


var Variable_name : Datatype = Value
(    Compulsory   )


Date : 02/12/2023


Data Types 

Number 
String 
Boolean 
Void
Null 
undefined 


Date : 03/12/2023

we can apply the logic to solve the problem statement by considering sequence, selection, iteration.

Date : 16/12/2023

json(java script object notation) It has Key value pair 

Angular project structure
Node_MOdules : 
	this folder contains all the project depedancies in the format of Modules.
	inside this folder there are sub folders which contains .ts files or .js files.
 	in future when we install any third party library then it gets install in node_module folder.
SRC :
	this folder contains the actual source code of the angular project.
	
Angular.json:
	this file contains the project dependacies and the information about the project.

Package.json :
	this file contains all the information about project like the name of the project,it's version, it's dependacies.

tsconfig.json : 
	this is configration file which contains all the configration details of the typescript compiler(TSC).

Index.html :
	it's consider as an entry point for the part of code which is responsible to display the contains on screen.(front end)

Main.ts :
	it's consider as entry point for such a code which gets executed in backend 

Styles.css:
	this is global styling file which contains the css part
	the css part is responsible to display the html contents in the better way.

contents of an angular project :
	the concept of module is used to group to releted things under a single folder.

App Folder :-
	it's the folder for route module in our angular project 
Angular components :
	component is major building block of an angular project.
	it's responsible to interact with the end user 
Name.components.work
	 
.html contains the code which is use to display on browsers window.
.css contains the code use to decorate html contents.
.ts file contains the code which gets executed when the user interacts with compenents.
.spec.ts file contains the code used for unit testing purpose.

Date : 17/12/2023

steps for rendering new component

App(parent) => New Component (child)
1. new compnent import in app.component.ts
2. update component in array list (line 9)
3. Copy Selector
4. Paste in app.component.html 

Main.ts

BootStrap is starting From the component

web packs : (HTML, JS)

Interpolation
	by using the concept of interpolation .html file of the compenent can access the contents from corresponding .ts file.
	to use the concept of Interpolation we have to use pair of {}.


By the using concept of Interpolation we can,
1.Access charteristic from .ts file.
2.we can call any property.(.length)
3.we can call any in build method of typescript(toUpperCase())
4.we Can perform any mathmatical opration
5.we can call any method (behavoiur) from typescript class(Display())

3:14
when the user get interact with that component we have to take the action based on event to perform this activity we have to use perform event binding.

Style Binding :
	by using the concept of style binding we can apply the style with the html elements from the component. 
	the concept of styling is releted to look and feel of the html component 

Class Binding :
	by using the concept of class binding we can apply specific class from the css file to the html contents.
	by using the class binding the css contents gets binded with the html file 

Date :24/12/2023

Pipe in angular :
	the concept of pipe is used to transform the data from one form another form.
	there are two type of pipe in angular as 
	1.inbuild pipe 
	2.custom pipe

just like the component we can create our own pipe 



1. Structural Directivies (Inbuild Directives)
2. Custom Directives

Structural Directivies -
	Structural Directivies are used to change existing structure
	by using the structural Directivies the basic logical part into html file
	there are 3 structual directivies 
	1. ng If
	2. ng For
	3. ng Switch

Custom directives
	we can create our own directive which will add the functionality to the element of html.
	like the custom pipe we can create the custom directive.
	by using the concpt of custom directive the html elements gets updated based on the logic.

Date : 07/01/2024
Design pattern of gangs of 4 (Book)
Angular services :
	it is consider as a block of code which works like backend and it is shareable accross all the members of an angular project 
	inside the service generally we write the code which is used to the connect with the backend things like node express server.
	services gets injucted into the component 
	

batch service is dependencies by using the concpet of dependecy injection it get Injucted inside the required compnents.
that concpet is called as Dependency Injuction(DI)

Date : 07/01/2024

Rounting in Angular :
	Routing is concept where we can perform shifting from web page to another web page
	in the current the version of angular the concept of routing is by default avialable without any di
	if the web apllication contents multiple web pages then rounting is necessary perform the shifting from that web pages.
	
Bootstrap
	Bootstrap is open source frontend framework
	it contains some predefined html and css based templates for all graphical components that we can use directly.
	by using the bootstrap we can create attractive GUI.

npm install ngx-bootstrap bootstrap --save 
ng add 
Material Design :
	Material design is a design language 

Material design is library which is devloped by using the origami stratergy
the concept of material design is already used in all the google applications as well as all android application 

Date : 13/01/2024

Form designing in angular :
	Form - form is consider as any user interactive content design by using html.
		to display the content in attractive mannerwe can use third party libraries like bootstrap or material design 
		incase of angular , front end part gets handled by using .html file and we have to handle the behaviour of that content 		using .ts file
Client side validation
	by using concept of client side validation angular will validate data enterd by useronclient side. 
	if there is any issue in case of validation it will generate the message display it to client
	by using the concept of client side validation the angular is completly to validate the data and pass that data towards the server.

1.there are two types of form designing stratergy as
a)templete Driven
b)reactive

in case of templete drivn forms the validation gets handled inside the .html file of the component and incase of reactive forms validation gets handled inside .ts file of component 
incase of reactive forms we can handle all types of validation.

Date : 14/01/2024

Server-Side Webdevlopment :-
step 1) npm init --yes
step 2) create name new file Server.js
step 3) npm install express --save
step 4) server.js file open next step in this file

Date : 20/01/2024

Deploay angular Application on S3 of AWS
1) to use the S3 service we have to create our aws account
2)  
