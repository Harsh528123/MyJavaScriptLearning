function sayHiLater() {
 
    var greeting = 'Hi!';
    
    setTimeout(function() {
        
        console.log(greeting);
        
    }, 3000);
    // what you want to happen after timeout is done 
    
}

sayHiLater();
// function expression

// jQuery uses function expressions and first-class functions!
//$("button").click(function() {
//    
//});
// this click is a function; it accepts another function when you click on it 

function tellMeWhenDone(callback) {
 
    var a = 1000; // some work
    var b = 2000; // some work
    
    callback(); // the 'callback', it runs the function I give it!
    
}
// declaration of function statement

tellMeWhenDone(function() {
   
    console.log('I am done!');
    
});
// invoke function

tellMeWhenDone(function() {
   
    console.log('All done...');
    
});





