import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setenteredAmount] = useState('');
    const [enteredDate, setenteredDate] = useState('');
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setenteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setenteredDate(event.target.value);
    };
    const submitHandler = (event) => {
        event.preventDefault();
    const expenseData = {
        title:enteredTitle,
        amount: +enteredAmount,
        date:new Date (enteredDate)
    };
    props.onSaveExpenseData(expenseData);
};
    

    return (<form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label className="new-expense__control label">Title</label>
                <input className="new-expense__control input" type='text' onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label className="new-expense__control label">Amount</label>
                <input className="new-expense__control input" type='number' min='0.01' step='0.01' onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label className="new-expense__control label">Date</label>
                <input className="new-expense__control input" type='date' min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>);
};

export default ExpenseForm;