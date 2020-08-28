import React from 'react'

const IncomeTransactions = ({incomeTransaction}) => {
    return (
    <li className="transaction">
        <span className="transaction-text">{incomeTransaction.incomeText}</span>
        <span className="transaction-amount">${incomeTransaction.incomeAmount}</span>
        <button className="delete-btn">Delete</button>
    </li>
    )
}


export default IncomeTransactions