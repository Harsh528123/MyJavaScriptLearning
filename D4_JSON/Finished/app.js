var objectLiteral = {
    firstname: 'Mary',
    isAProgrammer: true
}
/* valid javascript */


console.log(JSON.stringify(objectLiteral));
// converts object to JSON string

var jsonValue = JSON.parse('{ "firstname": "Mary", "isAProgrammer": true }');
/* in JSON all properties have to be in quotes 
stringify converts object to JSON string 
var jsonValue = JSON.parse will take the string and convert to javascript object 
*/
console.log(jsonValue);
