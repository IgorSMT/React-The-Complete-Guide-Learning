import './ExpenseDate.css';

export const ExpenseDate = props => {
    const dateItem = {
        month: props.date.toLocaleString('en-US', { month: 'long' }),
        day: props.date.toLocaleString('en-US', { day: 'numeric' }),
        year: props.date.getFullYear()
    };

    return (
        <div className="expense-date">
            <div className="expense-date__month">{dateItem.month}</div>
            <div className="expense-date__year">{dateItem.year}</div>
            <div className="expense-date__day">{dateItem.day}</div>
        </div>
    )
}