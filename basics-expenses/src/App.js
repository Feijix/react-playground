import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
import { useState } from 'react';

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  function addExpenseHandler(expense) {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;

const DUMMY_EXPENSES = [
  { id: 1, title: 'Car Insurance', amount: 298.83, date: new Date(2021, 10, 24) },
  { id: 2, title: 'Health Insurance', amount: 432.83, date: new Date(2021, 10, 23) },
  { id: 3, title: 'Food', amount: 12312.83, date: new Date(2021, 10, 22) },
];
