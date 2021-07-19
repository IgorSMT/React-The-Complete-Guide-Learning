import './ExpenseRenderer.css';
import { ExpenseItem } from '../ExpenseItem/ExpenseItem';

export const ExpenseRenderer = props => {
    return (
        <div className="expenses">
            {
                props.expenses.map((item, index) => {
                    return (
                        <ExpenseItem key={index} expenceItem={item} />
                    )
                })
            }
        </div>
    )
}