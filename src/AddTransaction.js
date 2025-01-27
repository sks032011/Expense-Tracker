import React, { useContext, useState } from 'react'
import { GlobalContext } from './context/GlobalState';

const AddTransaction = () => {
  const[text,setText]=useState('');
  const[amount,setAmount]=useState(0);

  const {addTransaction} = useContext(GlobalContext);

  const onsubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random()*1000000),
      text,
      amount:parseInt(amount)
    }
    addTransaction(newTransaction);
  }
  return (
    
    <>
       <h3>Add new transaction</h3>
      <form onSubmit={onsubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            </label
          >
          <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}  placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
