import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    // function to pass data up to parent
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };

        // Sends the 'expenseData' up to the parent component (App.js)
        props.onAddExpense(expenseData);

        // sets the state back to false after form submission
        setIsEditing(false);
    };

    // sets isEditing to 'true' (receives from the click event on the 'Add New Expense' button)
    const startEditingHandler = () => {
        setIsEditing(true);
    };

    // sets isEditing to 'false' (receives state from the ExpenseForm component)
    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className="new-expense">
            {/* conditionally display the 'Add New Expenses' button based on the true/false state of 'isEditing' */}
            {!isEditing && (
                <button onClick={startEditingHandler}>Add New Expense</button>
            )}
            {/* conditionally show the ExpenseForm component based on the true/false state of 'isEditing' */}
            {/* 'onSaveExpenseData' is passed down as a prop to ExpenseForm so the submit event can be passed back up into 'saveExpenseDataHandler' */}
            {/* IMPORTANT - props required to pass data between child and parent */}
            {isEditing && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={stopEditingHandler}
                />
            )}
        </div>
    );
};

export default NewExpense;
