import React from 'react';
import Header from './components/header';
import Balance from './components/balance';
import AddTransaction from './components/addTransaction';
import IncomeList from './components/IncomeList';
import ExpensesList from './components/ExpenseList';
import {GlobalContextProvider} from './context/GlobalState';
// import "./App.css";

export const App = () => {
    return (
        <GlobalContextProvider>
        <div className="container">
            <div className="app-wrapper">
            {/* <h1>Palming App</h1> */}
            <Header />
            <Balance />
            <AddTransaction />
            <IncomeList />
            <ExpensesList />
            </div>
        </div>
        </GlobalContextProvider>
    )
}
export default App;