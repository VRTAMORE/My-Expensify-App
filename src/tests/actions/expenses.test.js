import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '1234567' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '1234567'
    });
});

test('should setup edit expense action object', () => {
    const updateExp = {
        note: 'New note value'
    };
    const action = editExpense('1234', updateExp);
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '1234',
        update: {
            note: 'New note value'
        }
    });
});

test('should setup add exepense action object with provided values', () => {
    const expenseData = {
        description: 'Tea Bill',
        amount: 5000,
        createdAt: 2500,
        note: 'This is tea bill amount for this month'
    };

    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});