import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import selectExpense from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
    const formattedexpensesTotal = numeral(expensesTotal).format('$0,0.00');

    return (
        <div>
            <h1>Viewing {expensesCount} {expenseWord} totalling {formattedexpensesTotal} </h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpesnses = selectExpense(state.expenses, state.filters);

    return {
        expensesCount: visibleExpesnses.length,
        expensesTotal: selectExpensesTotal(visibleExpesnses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);