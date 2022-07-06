// VERY USEFUL






// function statement; doesnt need a name 
function greet(name) {
    console.log('Hello ' + name);   
}
greet('John');

// using a function expression
var greetFunc = function(name) {
    console.log('Hello ' + name);
};
greetFunc('John');


// using an Immediately Invoked Function Expression (IIFE)
var greeting = function(name) {
    
    return 'Hello ' + name;
    
}('John');
// invokes function immediately after creating it

console.log(greeting);
// function object will be created and called at the same time with parameter John 
// prints out function and other stuff on console if no () after  } in line 19
// console.log(greeting()) will print out Hello undefined if no () after  } in line 19

// IIFE
var firstname = 'John';

(function(name) {
    
    var greeting = 'Inside IIFE: Hello';
    console.log(greeting + ' ' + name);
    
}(firstname)); // IIFE 
// anything inside brackets is an expression therefore it will evaluate on the fly






















