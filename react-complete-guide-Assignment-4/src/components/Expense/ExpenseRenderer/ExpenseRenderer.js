import './ExpenseRenderer.css';
import { Card } from '../../UI/Card/Card';
import { ExpensesFilter } from '../ExpensesFilter/ExpensesFilter';
import { useState } from 'react';
import { ExpensesList } from '../ExpensesList/ExpensesList';

export const ExpenseRenderer = props => {
    const [filterYear, setFilterYear] = useState('');

    const filterChangehandler = event => setFilterYear(event.target.value)

    const filteredExpenses = props.expenses.filter(f => filterYear ? new Date(f.date).getFullYear() === new Date(filterYear).getFullYear() : true);

    return (
        <Card className="expenses">
            <ExpensesFilter filterChangehandler={filterChangehandler} />
            <ExpensesList filteredExpenses={filteredExpenses}  />
        </Card>
    )
}