import moment from 'moment';

import filterReducers from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filterReducers(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filterReducers(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filterReducers(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const filterVal = 'bill';

    const action = { type: 'SET_TEXT_FILTER', text: filterVal };
    const state = filterReducers(undefined, action);
    expect(state.text).toBe(filterVal);
});

test('should set start date filter', () => {
    const filterVal = moment(0).add(10, 'days');

    const action = { type: 'SET_START_DATE', startDate: filterVal };
    const state = filterReducers(undefined, action);
    expect(state.startDate).toBe(filterVal);
});

test('should set end date filter', () => {
    const filterVal = moment(0).add(25, 'days');

    const action = { type: 'SET_END_DATE', endDate: filterVal };
    const state = filterReducers(undefined, action);
    expect(state.endDate).toBe(filterVal);
});

