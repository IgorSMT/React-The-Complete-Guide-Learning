import { useState } from 'react';
import './ExpenseCreatorForm.css';

export const ExpenseCreatorForm = props => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    // alternative approach (save state to one object)
    // const [newExpense, setNewExpense] = useState({
    //     title: "",
    //     amount: "",
    //     date: ""
    // })

    const titleChangehandler = event => {
        setTitle(event.target.value);
        
        // setNewExpense({
        //     ...newExpense,
        //     title: event.target.value
        // })

        // alternative approach (we always getting last state snapshot)
        // setNewExpense(prevState => {
        //     return {
        //         ...prevState,
        //         title: event.target.value
        //     };
        // })
    }

    const amountChangehandler = event => {
        setAmount(event.target.value);

        // setNewExpense({
        //     ...newExpense,
        //     amount: event.target.value
        // })
    }

    const dateChangehandler = event => {
        setDate(event.target.value);

        // setNewExpense({
        //     ...newExpense,
        //     date: event.target.value
        // })
    }

    const cretaeExpensehandler = event => {
        event.preventDefault();

        const newExpense = {
            title: title,
            amount: amount,
            date: new Date(date)
        };

        props.onSaveExpenseHandler(newExpense);
        setTitle("");
        setAmount("");
        setDate("");
    }

    return (
        <form onSubmit={cretaeExpensehandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleChangehandler}/>
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={amount} min="0.01" step="0.01" onChange={amountChangehandler}/>
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" value={date} max="2022-12-31" onChange={dateChangehandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}