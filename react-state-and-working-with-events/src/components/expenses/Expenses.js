import ExpenseItem from './ExpenseItem';
import Card from "../ui/Card";
import './Expenses.css';

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <h2>Let's get started!</h2>
      {props.data.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
}

export default Expenses;
