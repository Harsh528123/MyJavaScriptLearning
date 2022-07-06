var arr = [
    1,
     
    false, 
    {
        name: 'Tony',
        address: '111 Main St.'
    } // object literal
    ,
    function(name) {
        var greeting = 'Hello ';
        console.log(greeting + name);
    }, // function inside array as element 
    "hello"
];

console.log(arr);
arr[3](arr[2].name);
// references the function with the object element with name 

