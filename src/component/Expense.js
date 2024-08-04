import React from "react";
import './expense.css'

const Expense = (props) => {
   
    const {id,amount, date, tittle, deleteExpense, editExpense} = props
    console.log(id)
    const editData=()=>{
        editExpense({id, price:amount, date:date, description : tittle})
    }
    const deleteData=()=>{
        deleteExpense(id)
    }
  return (
    <div className="expense-item">
    <div className="expense-date">
        <p>{props.date}</p>
    </div>
    <div className="expense-detail">
        <p className="tittle">{props.tittle}</p>
    </div>
    <div className="expense-amount">
        <p>{props.amount}.00</p>
        <div className="expense-buttons">
            <button className="edit-button" onClick={editData}>Edit</button>
            <button className="delete-button" onClick={deleteData}>Delete</button>
        </div>
    </div>
</div>
  );
};

export default Expense;
