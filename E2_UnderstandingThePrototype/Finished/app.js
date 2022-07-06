var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;  
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// don't do this EVER! for demo purposes only!!!
john.__proto__ = person;
// john inherits from person
console.log(john.getFullName());
console.log(john.firstname);
// any properties are first searched in the main object before it's prototype

var jane = {
    firstname: 'Jane'   
}
jane.setProt
jane.__proto__ = person;
console.log(jane.getFullName());
// prints out Jane DefaultFu

person.getFormalFullName = function() {
    return this.lastname + ', ' + this.firstname;   
}

console.log(john.getFormalFullName());
console.log(jane.getFormalFullName());