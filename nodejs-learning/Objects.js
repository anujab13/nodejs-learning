var person = {
    firstname: 'John',
    lastname: 'Doe',
    greet: function () {
        console.log('Hello, ' + this.firstname + ' ' + this.lastname);
    }
};

person.greet();

console.log(person['firstname']);


// Using function constructors
function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname
}

var anu = new Person("Anu", "ja");



// Prototype : adding members to existing objects
function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname
}

Person.prototype.greet = function () {
    console.log(this.firstname + this.lastname);
}

var anu = new Person("Anu", "ja");
anu.greet();