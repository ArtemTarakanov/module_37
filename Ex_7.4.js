function setFullName(fullName) {
    this.fullName = fullName;
}

const person = {
    firstName: 'John',
    lastName: 'Smith'
};

const setPersonFullName = setFullName.bind(person);
setPersonFullName("John Smith");

