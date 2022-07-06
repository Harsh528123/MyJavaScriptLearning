var people = [
    // array of people
    {
        // object literal 
        // the 'john' object
        firstname: 'John',
        lastname: 'Doe',
        addresses: [
            '111 Main St.',
            '222 Third St.'
        ]
    },
    {
        // object literal
        // the 'jane' object
        firstname: 'Jane',
        lastname: 'Doe',
        addresses: [
            '333 Main St.',
            '444 Fifth St.'
        ],
        greet: function() {
            return 'Hello!';   
        }
    }
]
people.push({
    firstname: 'Harsh',
    lastname: 'Kothari',
});
console.log(people);