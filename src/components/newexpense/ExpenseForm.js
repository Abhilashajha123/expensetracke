import React, { useState } from 'react'

const ExpenseForm = (props) => {
   
    const[userdata,setUserData]=useState({
        enteredTitle:"",
        enteredAmount:"",
        enteredDate:""

    })
    const textchangehandle=(event)=>{
        const { name, value } = event.target;
        setUserData({
            ...userdata,
            [name]: value,
          });
         

    }
    const handlesubmit=(e)=>{
        e.preventDefault()
       const expensedata={
           title:userdata.enteredTitle,
           amount:parseFloat(userdata.enteredAmount),
           date:new Date(userdata.enteredDate)
       }
       props.onSaveExpensedata(expensedata)

       setUserData({
        enteredTitle:"",
        enteredAmount:"",
        enteredDate:""
       })

    }

  return (
    
   <form onSubmit={handlesubmit}>
       <div className='new-expense_controls'>
            <div className='new_expense_control'>
                <label>Title</label>
                <input type="text" name="enteredTitle" value={userdata.enteredTitle} onChange={textchangehandle}/>
            </div>

            <div className='new_expense_control'>
                <label>Amount</label>
                <input type="number" name="enteredAmount" value={userdata.enteredAmount} min="0.01" step="0.01" onChange={textchangehandle}/>
            </div>

            <div className='new_expense_control'>
                <label>Date</label>
                <input type="date" name="enteredDate"value={userdata.enteredDate}min="2019-01-01" max="2025-12-31" onChange={textchangehandle}/>
            </div>
            
       </div>

       <div className="new-expense_action">
            <button type="submit">Add Expense</button>
       </div>
   </form>
  )
}

export default ExpenseForm
