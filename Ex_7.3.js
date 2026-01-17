const users = [
    { name: 'Анна', age: 17 },
    { name: 'Петр', age: 25 },
    { name: 'Мария', age: 16 },
    { name: 'Иван', age: 30 },
    { name: 'Ольга', age: 18 }
];

const adults = users.filter(function(user) {
    return user.age >= 18;
});

console.log(adults);

const names = adults.map(function(user) {
    return user.name;
});

console.log(names);