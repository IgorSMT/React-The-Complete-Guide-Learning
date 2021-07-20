import './ExpenseRenderer.css';
import { ExpenseItem } from '../ExpenseItem/ExpenseItem';
import { Card } from '../../UI/Card/Card';
import { ExpensesFilter } from '../ExpensesFilter/ExpensesFilter';
import { useState } from 'react';

export const ExpenseRenderer = props => {
    const [filterYear, setFilterYear] = useState('');

    const filterChangehandler = event => setFilterYear(event.target.value)

    return (
        <Card className="expenses">
            <ExpensesFilter filterChangehandler={filterChangehandler} />
            {
                // filter for bonus:)
                props.expenses.filter(f => filterYear ? new Date(f.date).getFullYear() === new Date(filterYear).getFullYear() : true).map((item, index) => {
                    return (
                        <ExpenseItem key={index} expenceItem={item} />
                    )
                })
            }
        </Card>
    )
}