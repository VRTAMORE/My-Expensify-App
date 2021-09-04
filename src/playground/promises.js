const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('This is my resolved data.');
        reject('Something went wrong.')
    }, 2000);
});

console.log('before');

promise.then((data) => {
    console.log(data);
}).catch(err => console.log(err));

console.log('after');