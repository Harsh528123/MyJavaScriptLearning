function b() {
	var myVar;
    console.log(myVar);
	// prints undefined
}

function a() {
	var myVar = 2;
    console.log(myVar);
	// prints 2
	b();
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar);

/* printing order:
1
2
undefined
1
*/
