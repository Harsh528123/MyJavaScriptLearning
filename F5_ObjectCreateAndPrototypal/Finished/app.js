// polyfill
if (!Object.create) {
  // if broswer has it then it is a function
  // if browser doesnt have it then it is undefined
  // if undefined it will run the code below 
  Object.create = function (o) {
    if (arguments.length > 1) {
      throw new Error('Object.create implementation'
      + ' only accepts the first parameter.');
    }
    function F() {}
    // creates empty function
    F.prototype = o;
    // prototype becomes object passed in 
    return new F();
  };
}

var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname;   
    }
}

var john = Object.create(person);
// object.create creates an empty object with its prototype being whatever was being passed into object.create()
john.firstname = 'John';
// overrides the properties
john.lastname = 'Doe';
// overrides the properties 
console.log(john);

/*
ES6 & Classes 
  classes are very similar to C++
  the class is basically an object and you are creating new objects from that object 
  use keyword extends to set prototype of Person (basically inheritance)












*/