function greet(whattosay) {
    // instead of doing the work inside the function; return a function that does the work 
   return function(name) {
       console.log(whattosay + ' ' + name);
   }

}

var sayHi = greet('Hi');
sayHi('Tony');
// sayHi holds a function object 
sayHi('Tony');
// can also say greet('Hi')('Tony')

// how is whattosay still there after greet execution is done?
// since sayHi is an inner function of greet, it will still have 
// reference to the outer function's memory as outer execution 
// and this is called closure. 
// inner function maintains a reference to its outer lexical environment that was created when main function was ran