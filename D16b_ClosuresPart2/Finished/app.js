function buildFunctions() {
 
    var arr = [];
    
    for (var i = 0; i < 3; i++) {
        
        arr.push(
            function() {
                console.log(i);   
            }
        )
        // creates 3 new function objects inside array
        
    }
    
    return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();
// can call each function and prints out 3 because i only exists as 3 as the end 
// when we declared we are just writing code property not running code 

function buildFunctions2() {
 
    var arr = [];
    
    for (var i = 0; i < 3; i++) {
        // let j=i;
        // new variable in memory in every iteration 
        arr.push(
            (function(j) {
                return function() {
                    console.log(j);   
                }
            }(i))
        )
        // immediately invoked function expression 
        // every time for loop runs it will execute this function and each will be in arr. 
        // return function has to be invoked 
        
    }
    
    return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();