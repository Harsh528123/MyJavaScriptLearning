/*
b();
this will work

console.log(a)
this wont because a isnt defined yet 

*/

var a = 'Hello World!';

function b() {
    console.log('Called b!');
    /* prints it out in console */
}
b();
console.log(a);