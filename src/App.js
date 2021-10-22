import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {id: 1, title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 24)},
    {id: 2, title: 'Mortgage Insurance', amount: 427.97, date: new Date(2021, 3, 25)},
    {id: 3, title: 'Home Insurance', amount: 199.99, date: new Date(2021, 4, 26)},
    {id: 4, title: 'Flood Insurance', amount: 200.44, date: new Date(2021, 5, 27)}
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      { expenses.map(expense => (
        <ExpenseItem key={expense.id} expenseDate={expense.date} expenseTitle={expense.title} expenseAmount={expense.amount}></ExpenseItem>
      ))}
    </div>
  );
}

export default App;
