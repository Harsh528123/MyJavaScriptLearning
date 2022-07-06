// console.log(newvariable); would print out window
function a() {
    console.log(this);
    // 'this' points to global object
    this.newvariable = 'hello';
    // creates newvariable: 'hello'
}

var b = function() {
    console.log(this);   
    // also points to global object 
}

a();

console.log(newvariable); // not good!

b();

var c = {
    // if a value is primitive it is a property, if a value is a function then it is a method 
    // in the case where a method is attached to an object the this keyword becomes the object that method is sitting inside of IE c. 
    name: 'The c object',
    log: function() {
        var self = this;
        // self  points to the object "this" points to 
        
        self.name = 'Updated c object';
        console.log(self);
        
        var setname = function(newname) {
            self.name = newname;   
        }
        setname('Updated again! The c object');
        console.log(self);
    }
}

c.log();







