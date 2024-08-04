import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  let expensesdataGet =(expenseData) =>{
    let expenseDataAddId = {
      ...expenseData,
    }
    props.expensesGetApp(expenseDataAddId);
    console.log(expenseDataAddId)
  }
  return (
    <div className='new-expense'>
       <ExpenseForm expensesGet = {expensesdataGet}/>
    </div>
  )
}

export default NewExpense
