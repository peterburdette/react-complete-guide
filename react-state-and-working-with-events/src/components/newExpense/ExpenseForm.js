import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    // Uses multiple states to store single values
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');

    // Uses a single state obj to store different values
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const titleChangeHandler = (event) => {
        // calls setUserInput function and copies existing state obj and updates title
        setUserInput({ ...userInput, enteredTitle: event.target.value });
    };
    
    const amountChangeHandler = (event) => {
        // calls setUserInput function and copies existing state obj and updates amount
        setUserInput({ ...userInput, enteredAmount: event.target.value });
    };

    const dateChangeHandler = (event) => {
        // calls setUserInput function and copies existing state obj and updates date
        setUserInput({ ...userInput, enteredDate: event.target.value });
    };

    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;