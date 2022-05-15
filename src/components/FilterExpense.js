import React from 'react'
import '../assets/css/filterexpense.css'
const FilterExpense = (props) => {
    const dropdownChangeHandler=(event)=>{
        props.selectdata(event.target.value)
    }
  return (
    <div className='filter-expense'>
        <div className='filter_title'>
            <p>Filter by year</p>
        </div>
        <div className='filter-expense_dropdown'>
            <select value={props.selected} onChange={dropdownChangeHandler}>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
            </select>
        </div>
    </div>
  )
}

export default FilterExpense
