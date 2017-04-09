//// Lecture: Hoisting

// FUNCTIONS 

/* In the creation phase of the execution context (global) the                                            function declaration calculateAge is already available for use. */

calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
}

/* Because we have a function expression instead of declaration, we cannot call                           retirement before the function is called. hoisting only works for function                             declarations. */

/* retirement(1990);  
   var retirement = function(year) {
        console.log(65 - (2016 - year));
   } */

// VARIABLES

//console.log(age);
var age = 23;
console.log(age);



///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









