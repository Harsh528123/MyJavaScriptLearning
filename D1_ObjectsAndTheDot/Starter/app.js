var person = new Object();

person["firstname"]="Tony";
/*one way to add properties; also not the preferred way to create an object  */

person["lastname"]="Alicea";

var firstNameProperty= "firstname";

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstname);

person.address = new Object();
person.address.street ="111 Main Street";
console.log(person.address.state);
/*dot operator is preferred */
console.log(person[address][street]);