function mapForEach(arr, fn) {
    // takes array and function
    
    var newArr = [];
    for (var i=0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])   
            // the function return value essentially doubles the element going into new array 
        )
    };
    
    return newArr;
}

var arr1 = [1,2,3];
console.log(arr1);


var arr2 = mapForEach(arr1, function(item) {
   return item * 2; 
});
console.log(arr2);


var arr3 = mapForEach(arr1, function(item) {
   return item > 2; 
});
console.log(arr3);


var checkPastLimit = function(limiter, item) {
    return item > limiter;   
}
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);


var checkPastLimitSimplified = function(limiter) {
    // return a function that returns if item true or false based on if item> limiter
    return function(limiter, item) {
        return item > limiter;   
    }.bind(this, limiter); 
    // this function expression is fixed with the limiter 
};

var arr5 = mapForEach(arr1, checkPastLimitSimplified(1));
console.log(arr5);






























