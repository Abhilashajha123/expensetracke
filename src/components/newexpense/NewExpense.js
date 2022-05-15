import React from 'react'
import ExpenseForm from './ExpenseForm'
import '../../assets/css/expenseform.css'
const NewExpense = (props) => {
  const expensesaveDatahandler=(newdata)=>{
    const data={
      ...newdata,
      id:Math.random().toString()
    }
    
    props.getData(data)
  }
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpensedata={expensesaveDatahandler}/>
    </div>
  )
}

export default NewExpense
