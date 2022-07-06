// IIFE
(function(global, name) {
    
    var greeting = 'Hello';
    // local greeting


    global.greeting = 'Hello';
    console.log(greeting + ' ' + name);
    
}(window, 'John')); // IIFE

console.log(greeting);
// prints out global greeting which is Hello






















