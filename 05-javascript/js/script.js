/* JavaScript will go here */
'use strict';

console.log("Hello world!");
var message = "Hello world";
message = "Bye";
console.log(message);

//String Practice
var msg = "The iSchool is my school ";
console.log(msg);
var upperMsg = msg.toUpperCase();
console.log(upperMsg);
var char2To10 = msg.substring(2,11);
console.log(char2To10);
var check = msg.indexOf("cool");
console.log(check >= 0);

// an array of arrays
var mult_table = [ [0,0,0,0,0], 
                   [0,1,2,3,4], 
	           [0,2,4,6,8], 
	           [0,3,6,9,12], 
	           [0,4,8,12,16] ]

mult_table[1]     //=> [0,1,2,3,4] (an array)

var first_list = mult_table[1]

first_list[2]     //=> 2 (a # in that array)

mult_table[1][2]  //=> 2 (a # in an array in an array)

//Object Practice
//Declare a new variable `rect` that represents a rectangle
//This should be an Object with properties:
//  x-coordinate of 30, y-coordinate of 50
//  width of 100, height of 50
var rect ={x:30, y:50, width:100,height:50};

//Log out the rectangle's starting position (as "30, 50")
console.log(rect.x +', ' +rect.y );


//Log out the rectangle's area
console.log('area =' + rect.height*rect.width);


//"Move" the rectangle to the right by 20 and up by 10
//by changing its properties
rect.x += 20;
console.log(rect.x);
rect.y -= 10;
console.log(rect.y)


//Log out the rectangle's new position
console.log("new position "+rect.x +', ' +rect.y );


//Declare a variable `circle` that represents a circle
//This should be an Object with properties:
//  center-x-coord of 50, center-y-coord of 50
//  radius of 35
var circle ={cx: 50, cy: 50, r: 35};


//Declare a variable `shapes` that represents a list of shapes
//The list should contain the rectangle and the circle
var shapes = [circle, rect] 
console.log(shapes);


//function practice
//Implement a function `getArea()` that takes as a 
//parameter an object representing a circle (like 
//from the last exercise) and returns the area of 
//that circle. 
//  Area calculated as is π*(radius^2)
function getArea(circle){
    return  Math.PI*(circle.r*circle.r)
}

var area = getArea(circle)
console.log(area);


//HINTS: 
// 1. Pi is defined in the Math class
// 2. ^ is not an exponential operator!

//The area of your circle should be 3848.451

//function parameter are all optional

//forEach Practice
var numbers = [2,0,6,6,8,5,1,6,2,2];

//Use a forEach loop to sum up the numbers 
//in the array. Log out this sum.
var sum = 0;
var max = numbers[0];
numbers.forEach(function add(item) {
    sum += item;
    if(item > max){
        max = item;
    }
});

console.log("sum = "+ sum + " max = "+ max );




//Use a forEach loop to find the biggest 
//number in the array. Log out this number.