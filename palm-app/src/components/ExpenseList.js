import React from 'react'

const ExpenseList = () => {
    return (
        <div className="transactions transaction-expense">
            <h2>Transaction History</h2>
            <ul className="transaction-list">
                <li className="transaction">
                    <span className="transaction-text">Rent</span>
                    <span className="transaction-amount">$500</span>
                    <button className="delete-btn">Delete</button>
                </li>
            </ul>
        </div>
    )
}

export default ExpenseList
