const person = {
    name: 'Brandon',
    age: 39,
    greet() {
        console.log(`Hi my name is ${this.name}!`)
    }
};

const copiedPerson = {...person};
console.log(copiedPerson);

const hobbies = ['Music', 'Gardening', 'Cooking', 'Movies', 'Computers', 'Test'];

// hobbies.push('Programming');
// console.log(hobbies);


//make a copy of my array - I can also give a start and end that will select only what I want
// const copiedArray = hobbies.slice(2, 4);
// console.log(copiedArray);


// ... is my spread operator
const copiedArray = [...hobbies, 'and other stuff'];
console.log(copiedArray);