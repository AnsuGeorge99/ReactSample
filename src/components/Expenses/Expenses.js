import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';
import './Expenses.css'

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredData = props.item.filter(expenses => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });

  return (<div className='expenses'>
    <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
    <ExpensesChart expenses={filteredData}/>
      <ExpensesList items = {filteredData}/>
  </div>)
    ;
}

export default Expenses;