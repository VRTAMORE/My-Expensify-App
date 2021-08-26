store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

    console.log(visibleExpenses);
});

const e1 = store.dispatch(addExpense({ description: 'Rent', amount: 1000, createdAt: -1500 }));
const e2 = store.dispatch(addExpense({ description: 'Coffee', amount: 150, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: e1.expense.id }));
// store.dispatch(editExpense(e2.expense.id, { description: 'Tea', amount: 200 }));

// store.dispatch(setTextFilter('ee'));
// store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));
// store.dispatch(setEndDate());

//-----------------------------------------------------------
const demoState = {
    expenses: [{
        id: 'asdf',
        description: 'January Rent',
        note: 'This is the final payment for that address',
        amount: 4500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

