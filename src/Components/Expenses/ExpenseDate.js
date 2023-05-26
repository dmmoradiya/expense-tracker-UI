<<<<<<< HEAD
import "./ExpenseDate.css"

const ExpenseDate = (props) => {
  const month = props.date.toLocaleDateString("en-us", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleDateString("en-us", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
export default ExpenseDate;
=======
import "./ExpenseDate.css"

const ExpenseDate = (props) => {
  const month = props.date.toLocaleDateString("en-us", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleDateString("en-us", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
export default ExpenseDate;
>>>>>>> 9fef467e57b2d528b8eeb638c8178e9d91283920
