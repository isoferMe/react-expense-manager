import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpense from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.map((expense) => (
                <ExpenseListItem key={expense.id} {...expense} />
            ))
        }
    </div>
);
const mapStateToProps = (state) => {
    return {
        expenses: selectExpense(state.expenses,state.filters) //sorted and filtered
    };
};
export default connect(mapStateToProps)(ExpenseList);