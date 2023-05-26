import { useState } from "react";
import ExpensesList from "./ExpensesList" 
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";


const Expenses = (props) => {
  const [selectedYear,setSelectedYear] = useState('2022');
  
  const ChangeFilterHandler = (EnteredYear) => {
    setSelectedYear(EnteredYear);
  };
  
  const FilteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });
  


  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={selectedYear}
        onChangeFilter={ChangeFilterHandler}
      />
    <ExpenseChart Expenses={FilteredExpenses}/>
     <ExpensesList item={FilteredExpenses}/>
    </Card>
  );
};
export default Expenses;
