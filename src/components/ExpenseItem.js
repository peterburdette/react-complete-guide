import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.expenseDate} />
      <div className="expense-item__description">
        <h2>{props.expenseTitle}</h2>
      </div>
      <div className="expense-item__price">${props.expenseAmount}</div>
    </div>
  );
}

export default ExpenseItem;
