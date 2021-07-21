import './ExpenseCreator.css';
import { ExpenseCreatorForm } from './ExpenseCreatorForm/ExpenseCreatorForm';

export const ExpenseCreator = props => {
    return (
        <div className="new-expense">
            <ExpenseCreatorForm onSaveExpenseHandler={props.onSaveExpenseHandler}/>
        </div>
    )
}