function Person(firstname, lastname) {
 
    console.log(this);
    // empty object in memory 
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked.');
    
}

var john = new Person('John', 'Doe');
// new means empty object is created and in this case it calls the function. "This" points to the empty object. 
// if you do not return anything then the empty object is given, otherwise whatever being return is given. 
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);