import './ExpenseForm.css';
import { useState } from 'react';

function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const [isFormVisible, setIsFormVisible] = useState(false);

    function titleChangeHandler(event) {
        setEnteredTitle(event.target.value);
    }

    function amountChangeHandler(event) {
        setEnteredAmount(event.target.value);
    }

    function dateChangeHandler(event) {
        setEnteredDate(event.target.value);
    }

    function formVisibilityChangeHandler() {
        setIsFormVisible(!isFormVisible);
    }

    function submitHandler(event) {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);

        formVisibilityChangeHandler();
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <div>
            {isFormVisible && 
                <form onSubmit={submitHandler}>
                    <div className="new-expense__controls">
                        <div className="new-expense__control">
                            <label>Title</label>
                            <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                        </div>
                        <div className="new-expense__control">
                            <label>Amount</label>
                            <input type='number' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
                        </div>
                        <div className="new-expense__control">
                            <label>Date</label>
                            <input type='date' value={enteredDate} min="2019-01-01" onChange={dateChangeHandler}/>
                        </div>
                    </div>
                    <div className="new-expense__actions">
                        <button type='button' onClick={formVisibilityChangeHandler}>Cancel</button>
                        <button type='submit'>Add Expense</button>
                    </div>
                </form>
            }
            {!isFormVisible &&
                <button type='button' onClick={formVisibilityChangeHandler}>Add Expense</button>
            }            
        </div>
        
    )
}

export default ExpenseForm;