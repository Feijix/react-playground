import { useState } from "react";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";
import './Expenses.css';
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
    const [filterYear, setFilterYear] = useState('2021');

    const expensesToDisplay = props.items.filter(
        item => item.date.getFullYear().toString() === filterYear
    );

    function filterChangeHandler(selectedYear) {
        setFilterYear(selectedYear);
    }

    return (
        <Card className="expenses">
            <ExpenseFilter selected={filterYear} onFilterChange={filterChangeHandler}/>
            <ExpensesChart expenses={expensesToDisplay}/>
            <ExpensesList items={expensesToDisplay}/>
        </Card>
    );
}

export default Expenses;