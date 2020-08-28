import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
import IncomeTransactions from './IncomeTransactions';
const IncomeList = () => {
    const {incomeTransaction} = useContext(GlobalContext);
    console.log(incomeTransaction);
    return (
        <div className="transactions transaction-income">
            <h2>Transaction History</h2>
            <ul className="transaction-list">
                {incomeTransaction.map(incomeTransaction => {
                <IncomeTransactions key={incomeTransaction.id} incomeTransaction={incomeTransaction} />
                })}
            </ul>
        </div>
    )
}

export default IncomeList;