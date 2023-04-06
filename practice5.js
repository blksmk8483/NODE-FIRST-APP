const { resolve } = require("path");

// async code...
setTimeout(() => {
    console.log('Timer is done!!!')
}, 2000);

// sync. code...
console.log('Hello there....')

setTimeout(() => {
    console.log('So is this one!')
}, 3000);

setTimeout(() => {
    console.log(':)')
}, 4000);

setTimeout(() => {
    console.log('I won the race!')
}, 600);

const fetchData = callback => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise;
};


setTimeout(() => {
    console.log('Now this one is done!');
    fetchData().then(text => {
        console.log(text);
    })
}, 5000);