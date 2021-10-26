import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";
import "./Expenses.css";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2022");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    // filters the state based on the selectedYear executed by the filterChangeHandler
    const filteredExpenses = props.data.filter((expense) => {
        return expense.date.getFullYear() === parseInt(filteredYear);
    });

    // create a variable with a message to display in the conditional
    let expensesContent = <p>No expenses found.</p>;

    // checks to see if there are any results from the filtered array
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ));
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                {expensesContent}
            </Card>
        </div>
    );
};

export default Expenses;
