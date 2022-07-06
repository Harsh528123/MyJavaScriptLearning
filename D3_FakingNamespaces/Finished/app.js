var greet = 'Hello!';
var greet = 'Hola!'; 

console.log(greet);
// doesnt work

var english = { 
    greetings: { 
        basic: 'Hello!' 
    } 
};

var spanish = {};

spanish.greet = 'Hola!';

console.log(english);