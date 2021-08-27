import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css';
import './styles/styles.scss';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

const store = configureStore();

// setTimeout(() => {
//     store.dispatch(filtersActions.setTextFilter('bill'));
// }, 3000);

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

// class OldSyntax {
//     constructor() {
//         this.name = 'James';
//         this.getGreeting = this.getGreeting.bind(this);
//     }

//     getGreeting() {
//         return `Hi, my name is ${this.name}`;
//     }
// }
// const old = new OldSyntax();
// const greet = old.getGreeting;
// console.log(greet());


// //-- new
// class NewSyntax {
//     name = 'Jan';

//     getGreeting = () => {
//         return `Hi, my name is ${this.name}`;
//     }
// }

// const newS = new NewSyntax();
// const newGreet = newS.getGreeting;
// console.log(newGreet());