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
john.getFullName();
for (var prop in john) {
    // loops through all properties & methods of john 
    if (john.hasOwnProperty(prop)) {
        // without this if statement it would give all propeties & methods of john and it's prototypes 
        // if it exists 
        console.log(prop + ': ' + john[prop]);
        // john[prop] grabs value 
    }
}

var jane = {
    address: '111 Main St.',
    getFormalFullName: function() {
        return this.lastname + ', ' + this.firstname;   
    }
}

var jim = {
    getFirstName: function() {
        return firstname;   
    }
}

_.extend(john, jane, jim);
// john's prototypes are jane & jim. 
// adds properties & methods of jane & jim to john

console.log(john);








