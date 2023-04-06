// object destructuring...

const person = {
    name: 'Brandon',
    age: 39,
    greet() {
        console.log(`Hi my name is ${this.name}!`)
    }
};

const printName = ({ name, greet }) => {
    console.log(name, greet);
};

printName(person);