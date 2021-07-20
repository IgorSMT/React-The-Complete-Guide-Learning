import { useState } from 'react';
import { Card } from '../../UI/Card/Card';
import { ExpenseDate } from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.css';

export const ExpenseItem = props => {
    const [title, setTitle] = useState(props.expenceItem.title);

    const clickhandler = () => {
        setTitle(`${props.expenceItem.title} -> Changed`);
    }
    
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.expenceItem.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.expenceItem.amount}</div>
            </div>
            <button onClick={clickhandler}>
                Change Title
            </button>
        </Card>
    )
}