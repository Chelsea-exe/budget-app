//JS tutorial from freecodecamp.org
// window.alert("javascript is loaded and ready!");
class UI {
    //setting variables
    constructor() {
        this.budgetFeedback = document.querySelector(".budget-feedback");
        this.expenseFeedback = document.querySelector(".expense-feedback");
        this.budgetForm = document.getElementById("budget-form");
        this.budgetInput = document.getElementById("budget-input");
        this.budgetAmount = document.getElementById("budget-amount");
        this.expenseAmount = document.getElementById("expense-amount");
        this.balance = document.getElementById("balance");
        this.balanceAmount = document.getElementById("balance-amount");
        this.expenseForm = document.getElementById("expense-form");
        this.expenseInput = document.getElementById("expense-input");
        this.amountInput = document.getElementById("amount-input");
        this.expenseList = document.getElementById("expense-list");
        this.itemList = [];
        this.itemID = 0;
    }
    //submit button budget, function will run the following code
    submitBudgetForm(){
        // console.log('hello from es6');
        const value = this.budgetInput.value;
        if(value === '' || value <0){
            this.budgetFeedback.classList.add('showItem');
            this.budgetFeedback.innerHTML = `<p>value can't be empty or negative</p>`;
        }
    }
}

function eventListeners(){
    const budgetForm = document.getElementById('budget-form');
    const expenseForm = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');

    //new UI Class
    const ui = new UI()

    //budget form submit
    budgetForm.addEventListener('submit', function(event){
        event.preventDefault();
        ui.submitBudgetForm();

    });

    //expense form submit
    expenseForm.addEventListener('submit', function(event){
        event.preventDefault();

    })

    //expense click (expense value & title edit and trash)
    expenseList.addEventListener('click', function(){
        
    })

}

document.addEventListener('DOMContentLoaded', function(){
    eventListeners();
})