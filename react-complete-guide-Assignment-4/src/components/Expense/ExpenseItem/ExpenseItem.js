import { Card } from '../../UI/Card/Card';
import { ExpenseDate } from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.css';

export const ExpenseItem = props => {
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.expenceItem.date} />
                <div className="expense-item__description">
                    <h2>{props.expenceItem.title}</h2>
                    <div className="expense-item__price">${props.expenceItem.amount}</div>
                </div>
            </Card>
        </li>
    )
}