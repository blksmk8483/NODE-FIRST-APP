const firstName = 'Brandon';
let age = 39;
const hasHobbies = ('gardening, music, and reading.');

let Brandon = {
    name: 'Brandon',
    age: 39,
    favoriteVegetable: 'yellow squash',
}

function summarizeUser(userFirstName, userAge, userHasHobby) {
    // return (
    //     'Name is ' + userFirstName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby
    // );
    
    return (
        `My name is ${userFirstName}, I am ${userAge} yearsold and my hobbies are: ${userHasHobby} ${Brandon.name} ${Brandon.age} ${Brandon.favoriteVegetable}`
    );
};

console.log(summarizeUser(firstName, age, hasHobbies, Brandon));