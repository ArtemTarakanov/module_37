const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know'];
const uniqueArr = [];

for (let element of arr) {
    if (!uniqueArr.includes(element)) {
        uniqueArr.push(element);
    }
}

console.log(uniqueArr);