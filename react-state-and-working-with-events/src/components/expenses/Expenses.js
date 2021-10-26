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

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            {filteredExpenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    date={expense.date}
                    title={expense.title}
                    amount={expense.amount}
                />
            ))}
        </Card>
    );
};

export default Expenses;
