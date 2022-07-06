function greet(firstname, lastname, language) {
    // can have function greet(firstname, ...other){}
    // 
 
    // can have default parameters such as language = 'en'
    language = language || 'en';
    
    if (arguments.length === 0) {
        console.log('Missing parameters!');
        console.log('-------------');
        return;
    }
    
    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments);
    // prints out an array (doesnt have all features of javascript arrays) of all argument parameter passed 
    console.log('arg 0: ' + arguments[0]);
    console.log('-------------');
    
}

greet();
// will print out undefined 
greet('John');
// will print out undefined for lastname and language
greet('John', 'Doe');
// undefined for language 
greet('John', 'Doe', 'es');
// nothing is undefined

// in ES6 I can do:  function greet(firstname, ...other)
// and 'other' will be an array that contains the rest of the arguments
