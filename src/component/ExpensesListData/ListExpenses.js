import React from 'react'
import Expense from '../Expense'
import './list.css'

const ListExpenses = (props) => {
  return (
    <div className='parentlist-div'>
      <h3>Payment History</h3>
      <div className='childlist-div'>
        {
          props.expense.map((
            exp,index) =>(
              <Expense
              key={index}
              id={exp.id}
              date ={exp.date}
              tittle = {exp.description}
              amount={exp.price}
              editExpense={props?.editExpense}
              deleteExpense={props?.deleteExpense}
              />
              )
            )
          }
        </div>
    </div>
      
  )
}

export default ListExpenses
