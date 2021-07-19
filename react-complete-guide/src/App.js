import { ExpenseItem } from './components/Expense/ExpenseItem/ExpenseItem';
import { ExpenseRenderer } from './components/Expense/ExpenseRenderer/ExpenseRenderer';

export default function App() {
  const expenses = [
    { id: 1, title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 14) },
    { id: 2, title: "House Insurance", amount: 294.67, date: new Date(2021, 4, 1) },
    { id: 3, title: "Three Insurance", amount: 294.67, date: new Date(2021, 5, 20) },
    { id: 4, title: "Human Insurance", amount: 294.67, date: new Date(2021, 9, 13) },
  ];

  return (
    <div className="App">
      <h2>Let`s get started!</h2>
      <ExpenseRenderer expenses={expenses}/>
    </div>
  );
}
