import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpenses/NewExpense';

const dummyValues = [
  {
    id: 'e1',
    date: new Date(2022, 2, 25),
    title: 'Toilet Papers',
    amount: 1545.3
  },
  {
    id: 'e2',
    date: new Date(2021, 3, 26),
    title: 'New TV',
    amount: 459.3
  },
  {
    id: 'e3',
    date: new Date(2020, 4, 27),
    title: 'Car Insurance',
    amount: 779.86
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummyValues)
  const AddExpenseHandler = (expense) => {
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses];
    });
  }
  return (
    <div>
      <NewExpense onAddExpense={AddExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
