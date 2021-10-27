import React, { useState } from "react";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
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
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
};

export default Expenses;
