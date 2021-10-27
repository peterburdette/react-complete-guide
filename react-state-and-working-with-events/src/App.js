import React, { useState } from "react";
import NewExpense from "./components/newExpense/NewExpense";
import Expenses from "./components/expenses/Expenses";

const DUMMY_EXPENSES = [
    {
        id: 1,
        title: "Desk",
        amount: 294.67,
        date: new Date(2022, 2, 24),
    },
    {
        id: 2,
        title: "Chair",
        amount: 427.97,
        date: new Date(2021, 3, 25),
    },
    {
        id: 3,
        title: "Computer",
        amount: 999.97,
        date: new Date(2021, 3, 12),
    },
    {
        id: 4,
        title: "Food",
        amount: 199.99,
        date: new Date(2021, 4, 26),
    },
    {
        id: 5,
        title: "Car",
        amount: 200.44,
        date: new Date(2020, 5, 27),
    },
];

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    // function to receive expenseData from NewExpense.js - as expenseData is being passed up it is also known as 'passing state up'
    const addExpenseHandler = (expenseData) => {
        setExpenses((prevExpenses) => {
            // prevExpenses is a snapshot of the current state and will always give the latest up to date state
            return [expenseData, ...prevExpenses];
        });
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses data={expenses} />
        </div>
    );
};

export default App;
