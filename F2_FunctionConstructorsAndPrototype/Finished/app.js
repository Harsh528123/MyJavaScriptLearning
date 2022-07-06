function Person(firstname, lastname) {
 
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked.');
    
}

Person.prototype.getFullName = function()
// prototype of Person function
    {
        return this.firstname + ' ' + this.lastname;    
    }
// closure. Prototype of empty object is the prototype property of the function you call.

var john = new Person('John', 'Doe');
// will print out line 3 and line 6
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);

// john and jane both get access to Person.prototype. 

Person.prototype.getFormalFullName = function() {
    return this.lastname + ', ' + this.firstname;   
}

console.log(john.getFormalFullName());
// prints out line 27


// ITS BETTER TO PUT METHODS ON PROTOTYPE SINCE IT MAKES IT FASTER SINCE IT ALL POINTS TO A COMMON MEMORY LOCATION 

