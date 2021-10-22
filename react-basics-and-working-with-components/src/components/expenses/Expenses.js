import ExpenseItem from './ExpenseItem';
import Card from "../ui/Card";
import './Expenses.css';

function Expenses(props) {
  return (
    <Card className="expenses">
      <h2>Let's get started!</h2>
      {props.data.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expenseDate={expense.date}
          expenseTitle={expense.title}
          expenseAmount={expense.amount}
        />
      ))}
    </Card>
  );
}

export default Expenses;
