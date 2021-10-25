import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    // function to pass data up to parent
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = { ...enteredExpenseData, id: Math.random().toString()};

        // Sends the 'expenseData' up to the parent component (App.js)
        props.onAddExpense(expenseData);
    }

    return(
        <div className="new-expense">
            {/* 'onSaveExpenseData' is passed down as a prop to ExpenseForm so the submit event can be passed back up into 'saveExpenseDataHandler' */}
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> {/* IMPORTANT - props required to pass data between child and parent */}
        </div>
    )
};

export default NewExpense;