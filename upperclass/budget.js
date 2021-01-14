//tutorial from CodeExplpained

//SELECT ELEMENTS

const balanceE1 = document.querySelector(".balance .value");
const incomeTotalE1 = document.querySelector(".income-total");
const outcomeTotalE1 = document.querySelector(".outcome-total");
const expenseE1 = document.querySelector("#expense");
const incomeE1 = document.querySelector("#income");
const allE1 = document.querySelector("#all");

//SELECT BUTTONS
const expenseBtn = document.querySelector(".tab1");
const incomeBtn = document.querySelector(".tab2");
const allBtn = document.querySelector(".tab3");

//INPUT BUTTONS
const addExpense = document.querySelector(".add-expense");
const expenseTitle = document.getElementById("expense-title-input");
const expenseAmount = document.getElementById("expense-title-input");

const addIncome = document.querySelector(".add-income");
const incomeTitle = document.getElementById("income-title-input");
const incomeAmount = document.getElementById("income-amount-input");

const incomeList = document.querySelector("#income .list");
const expenseList = document.querySelector("#expense .list");
const allList = document.querySelector("#all .list");
const chartE1 = document.querySelector(".chart");

//VARIABLES
let ENTRY_LIST = [];
let balance = 0, income = 0, outcome = 0;

const DELETE = "delete", EDIT = "edit";

//EVENT LISTENERS

expenseBtn.addEventListener('click', function() {
    active(expenseBtn);
    inactive([incomeBtn, allBtn]);
    show(expenseE1);
    hide([incomeE1, allE1]);
});

incomeBtn.addEventListener('click', function() {
    active(incomeBtn);
    inactive([expenseBtn, allBtn]);
    show(incomeE1);
    hide([expenseE1, allE1]);

});

allBtn.addEventListener('click', function() {
    active(allBtn);
    inactive([expenseBtn, incomeBtn]);
    show(allE1);
    hide([expenseE1, incomeE1]);

});

// function showEntry(list, type, title, amount, id){
//     const entry = `<li id="${id}" class= "${type}">
// <div class="entry">${title} : $${amount}</div>
// <div id="edit"></div>
// <div id="delete"></div>

// </li>`;

// const position = "afterbegin";
// list.insertAdjacentHTML(position, entry);
// }



//     balanceE1.innerHTML = `<small>$</small>${balance}`;
//     incomeTotalE1.innerHTML = `<small>$</small>${income}`;
//     outcomeTotalE1.innerHTML = `<small>$</small>${outcome}`;

//     clearElement([incomeList, expenseList, allList]);
//     ENTRY_LIST.forEach( (entry , index)  => {
//         if(entry.type == "income"){
//             showEntry(incomeList, entry.type, entry.title, entry.amount, index);
//         }
//         else if (entry.type == "expense"){
//             showEntry(expenseList, entry.type, entry.title, entry.amount, index);
//         }
//         showEntry(allList, entry.type, entry.title, entry.amount, index);
//     });

//     updateChart(income, outcome);


addExpense.addEventListener("click", function(){
    //If one of the input is empty the the function will exit
    if( !expenseTitle.value || !expenseAmount.value) return;

    //Save the entry from user to the ENTRY_LIST array
    let expense = {
        type : "expense",
        title : expenseTitle.value,
        amount : expenseAmount.value,
    }
    ENTRY_LIST.push(expense);
    updateUI();
    clearInput( [expenseTitle, expenseAmount] );
});

addIncome.addEventListener("click", function() {
    //If one of the input is empty the function will exit
    if(!incomeTitle.value || !incomeAmount.value) return;

    //Save the entry from the user to the ENTRY_LIST array
    let income = {
        type : "income",
        title : incomeTitle.value,
        amount : incomeAmount.value,
    }
    ENTRY_LIST.push(income);
    updateUI();
    clearInput( [incomeTitle, incomeAmount] );
});

// HELPERS

function updateUI() {
    income = calculateTotal("income", ENTRY_LIST);
    outcome = calculateTotal("expense", ENTRY_LIST);
    balance =  calculatedBalance(income, outcome);

    //Update UserInterface
    clearElement( [expenseList, incomeList, allList] );

    //Determine sign of negative or positive balance
    let sign = (income >= outcome) ? "$" : "-$";

    ENTRY_LIST.forEach( (entry, index) => {
        if( entry.type == "expense" ){
            showEntry(expenseList, entry.type, entry.title, entry.amount, index)
        }
        else if( entry.type == "income" ){
            showEntry(incomeList, entry.type, entry.title, entry.amount, index)
        }
        showEntry(allList, entry.type, entry.title, entry.amount, index)
    });
}

function showEntry(list, type, title, amount, id){
    const entry = `<li id = "${id}" class = "${type}">
                        <div class="entry">${title}: $${amount}</div>
                        <div id="edit"></div>
                        <div id="delete"></div>
                    </li>`;
    const position = "afterbegin";

    list.insertAdjacentHTML(position, entry)
}

function clearElement(elements){
    elements.forEach( element => {
        element.innerHTML = "";
    })
}


function calculateTotal (type, ENTRY_LIST){
    let sum = 0;

    ENTRY_LIST.forEach( entry => {
        if(entry.type == type){
            sum += entry.amount;
        }
    });
    
    return sum;
}

function calculatedBalance(income, outcome){
    return income - outcome;
}

function clearInput(inputs){
    inputs.forEach( input => {
        input.value = "";
    })
}

function show(element){
    element.classList.remove("hide");
}

function hide( elements ){
    elements.forEach( element => {
        element.classList.add("hide");
    })
}

function active(element){
    element.classList.add("active");
}

function inactive( elements ){
    elements.forEach( element => {
        element.classList.remove("active");
    })
}


// element.classList.remove("hide");
// element.classList.add("hide");