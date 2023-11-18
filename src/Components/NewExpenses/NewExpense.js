
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const SaveExpenseHandler = (enteredExpenseData) => {
    // console.log(enteredExpenseData)
    const ExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    
    props.onAddExpense(ExpenseData)
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={SaveExpenseHandler} />
    </div>
  );
};

export default NewExpense;
