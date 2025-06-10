const arr = ['HTML', 'CSS', 'Python'];
const index = arr.indexOf('Python');
if (index !== -1) {
    arr.splice(index, 1, 'JavaScript');
}

console.log(arr); // ['HTML', 'CSS', 'JavaScript']