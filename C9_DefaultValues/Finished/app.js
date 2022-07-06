function greet(name) {
    name = name || '<Your name here>';
    console.log('Hello ' + name);    
}

greet('Tony');
greet();
/* if no input parameters, then it is undefined and prints  */
/* due to coersion     undefined || 'hello'       results in 'hello' being printed out */