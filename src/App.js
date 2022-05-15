import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';
import NewExpense from './components/newexpense/NewExpense';
import { useState } from 'react';

const App=()=> {

  const dummy_expense=[
    {
      id:'e1',
      title:'car insurance',
      amount:294.67,
      date:new Date(2021,2,28)
    },
    {
      id:'e2',
      title:'News Paper',
      amount:294.67,
      date:new Date(2022,2,28)
    },
    {
      id:'e3',
      title:'Toilet paper',
      amount:294.67,
      date:new Date(2021,5,28)
    },
    {
      id:'e4',
      title:'car insurance',
      amount:294.67,
      date:new Date(2022,2,28)
    },
    {
      id:'e5',
      title:'car insurance',
      amount:294.67,
      date:new Date(2020,2,28)
    },
  ]

  const[expenses,SetExpenses]=useState(dummy_expense)
  const getdata=(expense)=>{
    // expenses.push(expense)
    console.log(expense)
    SetExpenses((prevexpense)=>{
      return [expense,...prevexpense]
    })
  }
  
  return (
    <div className="App">
      <NewExpense getData={getdata}/>
       <Expenses items={expenses} />
    
    </div>
  );
}

export default App;
