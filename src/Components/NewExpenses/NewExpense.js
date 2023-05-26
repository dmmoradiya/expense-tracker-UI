<<<<<<< HEAD
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
=======
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
>>>>>>> 9fef467e57b2d528b8eeb638c8178e9d91283920
