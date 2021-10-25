import React, { useState } from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // useState is a React hook - must be called directly inside component functions
  // 'const [title, setTitle]' is array destructuring
  // 'state' is separated on a per component instance basis so individual components are update and not all of them
  // the first element ('title) points to the managed value in 'useState'. The second ('setTitle') is a function that is called later to set the new 'title'
  const [title, setTitle] = useState(props.title); // useState takes in a default value and ALWAYS returns an array with two elements
  console.log('ExpenseItem evaluated by React');

  const clickHandler = () => {
    setTitle('Updated!'); // using the state-updating function 'setTitle' to update the title
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
