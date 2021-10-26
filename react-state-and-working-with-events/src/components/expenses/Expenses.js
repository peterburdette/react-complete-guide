import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../ui/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

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
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
};

export default Expenses;
