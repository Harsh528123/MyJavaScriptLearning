var Tony = { 
    firstname: 'Tony', 
    lastname: 'Alicea',
    address: {
        street: '111 Main St.',
        city: 'New York',
        state: 'NY'
    }
};

function greet(person) {
    console.log('Hi ' + person.firstname);
}

greet(Tony);

greet({ 
    firstname: 'Mary', 
    lastname: 'Doe' 
    /* this is an object  */
});

Tony.address2 = {
    street: '333 Second St.'
}
/*creates a address2 object inside Object Tony */
