import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts=transactions.map(transactions=>transactions.amount);

  const income=amounts.filter(item=>item>0)
  .reduce((acc,curr)=>(acc+=curr),0)
  

  const expense=amounts.filter(item=>item<0)
  .reduce((acc,curr)=>(acc+=curr),0)*-1
  

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${expense}</p>
      </div>
    </div>
  )
}

export default IncomeExpenses
