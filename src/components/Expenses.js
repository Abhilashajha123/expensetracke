import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import '../assets/css/expenses.css'
import Card from './Card'
import FilterExpense from './FilterExpense'
const Expenses = ({items}) => {
  const[value,SetValue]=useState("2022")

  const getselectedvalue=(selectedvalue)=>{
    SetValue(selectedvalue)
    
  }

  const newitem=items.filter((data)=>{
    return data.date.getFullYear()==value
  })

  return (
    
       <div className='expenses'>
         <FilterExpense selected={value} selectdata={getselectedvalue} />
            {
              newitem.length===0?<p className='not-found'>No Expense Found</p>:
              newitem.map((item)=>(
                  <ExpenseItem 
                  key={item.id}
                  title={item.title}
                  amount={item.amount}
                  date={item.date}/>
              ))
            }
            
        </div>

   
    
  )
}

export default Expenses
