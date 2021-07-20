import { useState } from 'react';
import { ExpenseRenderer } from './components/Expense/ExpenseRenderer/ExpenseRenderer';
import { ExpenseCreator } from './components/ExpenseCreator/ExpenseCreator';

export default function App() {
  const [expenses, setExpenses] = useState(
    [
      { id: 1, title: "Toilet Paper", amount: 94.12, date: new Date(2021, 2, 14) },
      { id: 2, title: "New TV", amount: 799.49, date: new Date(2021, 4, 1) },
      { id: 3, title: "Car Insurance", amount: 294.67, date: new Date(2021, 5, 20) },
      { id: 4, title: "New Desk (wooden)", amount: 450, date: new Date(2021, 9, 13) },
    ]
  );

  const onSaveExpenseHandler = newExpense => {
    setExpenses([
      ...expenses,
      newExpense
    ]);
  }

  return (
    <div className="App">
      <ExpenseCreator onSaveExpenseHandler={onSaveExpenseHandler} />
      <ExpenseRenderer expenses={expenses}/>
    </div>
  );
}
