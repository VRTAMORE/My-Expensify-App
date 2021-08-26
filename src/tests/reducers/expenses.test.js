import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        expenses[0], expenses[2]
    ]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const newExp = {
        id: '99',
        description: 'Beverage',
        note: 'Whiskey',
        amount: 8000,
        createdAt: 2300
    }

    const action = {
        type: 'ADD_EXPENSE',
        expense: newExp
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, newExp]);
});

test('should edit an expense', () => {
    const updateExp = expenses[1];
    updateExp.description = 'Home Rent';
    updateExp.note = 'Rend for Mahim Home';
    updateExp.amount = 6666;
    updateExp.createdAt = 2100;

    const action = {
        type: 'EDIT_EXPENSE',
        id: updateExp.id,
        update: updateExp
    };

    const state = expensesReducer(expenses, action);
    expect(state[1]).toEqual(updateExp);
});

test('should not edit expense if expense id not found', () => {
    const updateExp = {
        description: 'Home Rent',
        note: 'Rend for Mahim Home',
        amount: 6666,
        createdAt: 2100
    };

    const action = {
        type: 'EDIT_EXPENSE',
        id: '-999',
        update: updateExp
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});



