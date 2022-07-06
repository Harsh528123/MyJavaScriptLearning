greet();

function greet() {
    console.log('hi');   
}
/* this is a function statement that does not return a value unless called   */

var anonymousGreet = function() {
    console.log('hi');   
}
/* function expression

we are creating an object called anonymousGreet and its address in memory points to a function object 
function name property is anonymous with console.log('hi') as code 
*/



anonymousGreet();
/* invokes the code 
but does not work if above the declaration 
*/

function log(a) {
   a();    
}

log(function() {
    console.log('hi');   
});
/* creates object on the fly, puts code in that.
puts function as parameter for function and thus you can call invoke argument. 
*/




