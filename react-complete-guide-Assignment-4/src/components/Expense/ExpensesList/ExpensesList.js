import './ExpensesList.css';
import { ExpenseItem } from '../ExpenseItem/ExpenseItem';

export const ExpensesList = props => {
    const expensesContent = props.filteredExpenses.length
        ? props.filteredExpenses.map(item => (
            <ExpenseItem key={item.id} expenceItem={item} />
        ))
        : <h2 className="expenses-list__fallback">Found no expenses</h2>

    return (
        <ul className="expenses-list">
            {expensesContent}
        </ul>
    )
}