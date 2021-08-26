import moment from 'moment';
import selectExpenses from '../selectors/expenses';

console.log(moment(0).toLocaleString());
console.log(moment(0).subtract(4, 'days').toLocaleString());
console.log(moment(0).subtract(2, 'days').toLocaleString());
console.log(moment(0).add(4, 'days').toLocaleString());


const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
},
{
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
}];

console.log(expenses);

const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).subtract(2, 'days')
};

const result = selectExpenses(expenses, filters);
console.log(filters)
console.log(result);