const person = {
    name: 'Brandon',
    age: 39,
    greet() {
        console.log(`Hi my name is ${this.name}!`)
    }
};

person.greet();

const hobbies = ['Music', 'Gardening', 'Cooking', 'Movies', 'Computers'];
// for (let hobby of hobbies) {
//     console.log(hobby);
// }

// I can use the method. This one is map

// console.log(hobbies.map(hobby => {
//     return 'Hobby: ' + hobby;
// }));
// console.log(hobbies);

// or a shorter way...

console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);