import React from 'react'
import '../assets/css/expensedate.css'
const ExpenseDate = ({newdate}) => {
    const month=newdate.toLocaleString('en-US',{month:'long'});
    const day=newdate.toLocaleString('en-US',{day:'2-digit'})
    const year=newdate.getFullYear()
  return (
    <div className='expense-date'>
          <div className='expense-date_month'>{month}</div>
          <div className='expense-date_year'>{year}</div>
          <div className='expense-date_day'>{day}</div>
      </div>
  )
}

export default ExpenseDate
