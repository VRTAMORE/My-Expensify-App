import { initializeApp } from 'firebase/app';
import { getDatabase, ref, remove, set, update, get, onChildChanged, off, push } from 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db as default };

// push(ref(db, 'expenses'), {
//     description: 'Credit Card',
//     note: '',
//     amount: 4500,
//     createdAt: 1245878
// }).then((snapshot) => {
//     console.log('data saved', snapshot);
// }).catch(error => {
//     console.log('Error: ', error);
// });;

// const onSub = onChildChanged(ref(db, 'user/01'), (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error', e);
// });

// setTimeout(() => {
//     // off(onSub);
//     off(ref(db, 'user/01'));
//     console.log('Subscription removed.');
// }, 7000);

// get(ref(db, `user/01/location`)).then((snapshot) => {
//     if (snapshot.exists()) {
//         console.log(snapshot.val());
//     } else {
//         console.log("No data available");
//     }
// }).catch((error) => {
//     console.error(error);
// });


// set(ref(db, 'user/01'), {
//     name: 'Vibhav Tamore',
//     age: 48,
//     isSingle: false,
//     location: {
//         city: 'Mumbai',
//         country: 'India'
//     }
// });

// set(ref(db, 'user/01'), {
//     name: 'Vibhav Tamore',
//     age: 28,
//     isSingle: true,
//     location: {
//         city: 'Uchheli',
//         country: 'India'
//     }
// }).then(() => {
//     console.log('data saved');
// }).catch(error => {
//     console.log('Error: ', error);
// });

// update(ref(db, 'user/01'), {
//     name: 'Vibhav Ramakant Tamore',
//     isSingle: true,
//     job: 'Solution Architect', //new field
//     'location/city': 'Dandi'
// }).then(() => {
//     console.log('data updated');
// }).catch(error => {
//     console.log('Error: ', error);
// });


// set(ref(db, 'user/01/isSingle'), null).then(() => {
//     console.log('isSingle node removed with set');
// }).catch(error => {
//     console.log('Error: ', error);
// });

// remove(ref(db, 'user/01/isSingle'))
//     .then(() => {
//         console.log('Node removed.')
//     }).catch(error => {
//         console.log('Error ', error);
//     });

