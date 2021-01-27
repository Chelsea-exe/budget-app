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
            this.budgetFeedback.innerHTML = `<p>field can't be empty or negative.</p>`;
            console.log('error message will appear on DOM');
        }
        else{
            this.budgetAmount.textContent = value;
            this.budgetInput.value = "";
            this.showBalance();
        }
    }
    //show balance
    showBalance(){
        const expense = this.totalExpense();
        //parseInt would convert argument into a string (string of numbers with no [,]).
        const total = parseInt(this.budgetAmount.textContent) - expense;
        this.balanceAmount.textContent = total;
        if(total < 0){
            this.balance.classList.remove("showGreen", "showBlack");
            this.balance.classList.add("showRed")
        }
        else if(total > 0){
            this.balance.classList.remove("showRed", "showBlack");
            this.balance.classList.add("showGreen");
        }
        else if(total === 0){
            this.balance.classList.remove("showRed", "showGreen");
            this.balance.classList.add("showBlack");
        }
        // console.log(`hey I'm getting a hold of 'this' keyword`);
    }
    //submit expense form function
    submitExpenseForm(){
        const expenseValue = this.expenseInput.value;
        const amountValue = this.amountInput.value;
        if(expenseValue === '' || amountValue === '' || amountValue < 0)
        {
            this.expenseFeedback.classList.add('showItem');
            this.expenseFeedback.innerHTML = `<p>field can't be empty or negative.</p>`
        }
        else {
            let amount = parseInt(amountValue);
            this.expenseInput = "";
            this.amountInput = "";

            let expense = {
                id:this.itemID,
                title:expenseValue,
                amount:amount,

            }
            this.itemID++;
            this.itemList.push(expense);
            this.addExpense(expense);
            //show balance
        }
    }

    //add expense

    addExpense(expense){
        const div = document.createElement('div');
        div.classList.add('expense');
        div.innerHTML = `<div class="expense-item d-flex justify-content-between align-items-baseline">
        <h6 class="expense-title mb-0 text-uppercase list-item">-${expense.title}</h6>
        <h5 class="expense-amount mb-0 list-item">${expense.amount}</h5>
        <div class="expense-icons list-item">
         <a href="#" class="edit-icon mx-2" data-id="${expense.id}">
          <i class="fas fa-edit"></i>
         </a>
         <a href="#" class="delete-icon" data-id="${expense.id}">
          <i class="fas fa-trash"></i>
         </a>
        </div>
       </div>
      </div>`;
      this.expenseList.appendChild(div);
    }
    //total expense
    totalExpense(){
        let total = 100;
        return total;
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
        ui.submitExpenseForm();

    })

    //expense click (expense value & title edit and trash)
    expenseList.addEventListener('click', function(){
        
    })

}

document.addEventListener('DOMContentLoaded', function(){
    eventListeners();
})