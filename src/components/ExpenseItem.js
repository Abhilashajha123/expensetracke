import React from 'react'
import '../assets/css/expenseitem.css'
import ExpenseDate from './ExpenseDate'
import Card from './Card'
import FilterExpense from './FilterExpense'
const ExpenseItem = ({title,amount,date}) => {
  
   
  return (
    <Card className='expense-item'>
     <ExpenseDate newdate={date}/>
      <div className='expense-item_description'>
          <h2>{title}</h2>
          <div className='expense-item_price'>${amount}</div>
      </div>
    </Card>
  )
}

export default ExpenseItem
