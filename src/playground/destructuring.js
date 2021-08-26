// const person = {
//     name: 'Vibhav Tamore',
//     age: 48,
//     location: {
//         city: 'Mumbai',
//         temp: 29
//     }
// };

// const { name = 'Anonymous', age } = person;
// console.log(`${name} is ${age}`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

const address = ['587 / 15 Fisherment Colony', 'Mahim', 'Mumbai', '400016'];

// const [street, area, city, pin] = address;
// console.log(`You are in ${street} street, in ${area} area in ${city} city with ${pin} pincode.`);

const [ , , city, pin] = address;
console.log(`You are in in ${city} city with ${pin} pincode.`);
