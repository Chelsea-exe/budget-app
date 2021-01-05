const balanceE1 = document.querySelector(".balance .value");
const incomeTotalE1 = document.querySelector(".outcome-total");
const outcomeTotalE1 = document.querySelector(".income-total");
const chartE1 = document.querySelector(".chart");
const expenseBtn = document.querySelector(".tab1");
const incomeBtn = document.querySelector(".tab2");
const allBtn = document.querySelector(".tab3");
const expenseE1 = document.querySelector("#expense");
const incomeE1 = document.querySelector("#income");
const allE1 = document.querySelector("#all");
const incomeList = document.querySelector("#income .list");
const expenseList = document.querySelector("#expense .list");
const allList = document.querySelector("#all .list");
const addIncome = document.querySelector(".add-income");
const incomeTitle = document.getElementById("income-title-input");
const incomeAmount = document.getElementById("income-amount-input");
element.classList.remove("active");
element.classList.add("active");

expenseBtn.addEventListener('click', function() {
    active(expenseBtn);
    inactive([incomeBtn, allBtn]);
});

incomeBtn.addEventListener('click', function() {

});

allBtn.addEventListener('click', function() {

});