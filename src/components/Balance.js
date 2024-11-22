import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function Balance() {
  const { transactions } = useContext(GlobalContext)
  const amounts=transactions.map(transactions=>transactions.amount);
  const total = amounts.reduce((accumulatr, current) => accumulatr + current, 0);
  return (
    <>
     <h4>Your Balance</h4> 
     <h1>${total}</h1>
    </>
  )
}

export default Balance
