var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {
        
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
        
    }
}

var logName = function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-----------');
    
}

var logPersonName = logName.bind(person);
// .bind() will use the 'this' from the person object 
// bind returns a new function and creates a copy of the function that invokes bind() method
logPersonName('en');

logName.call(person, 'en', 'es');
// .call() allows you to choose what 'this points it'; call directly executes this 
logName.apply(person, ['en', 'es']);
// apply() wants an array of parameters; array maybe useful

(function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-----------');
    
}).apply(person, ['es', 'en']);
//function expression and immediately performs this. 











// function borrowing
var person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
}

console.log(person.getFullName.apply(person2));
// this is the function borrowing






// function currying: creating a copy of a function with preset parameters 
function multiply(a, b) {
    return a*b;   
}

var multipleByTwo = multiply.bind(this, 2);
// giving additional parameters to bind sets permanent parameters in the copy of it that is given to multipleByTwo. makes a=2. 
console.log(multipleByTwo(4));
// 4 is parameter 'b' since a is fixed

var multipleByThree = multiply.bind(this, 3);
console.log(multipleByThree(4));
// 4 is parameter 'b' since a is fixed 