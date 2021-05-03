//JS tutorial from freecodecamp.org
// window.alert("javascript is loaded and ready!");

class UI {
    //setting variables using constructor "this" method
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
        // set variabe value = the "this.budgetInput.value" value = what the user types in the field
        const value = this.budgetInput.value;
        if(value === '' || value <0){
            this.budgetFeedback.classList.add('showItem');
            this.budgetFeedback.innerHTML = `<p>field can't be empty or negative.</p>`;
            //if statement is if the value is empty or less than 0 the warning from the "budget-feedback" of HTML class with bootstrap css warning.

            const self = this;
            //set variable self to "this"
            // console.log('error message will appear on DOM');
            setTimeout(function(){
                self.budgetFeedback.classList.remove("showItem");
            }, 4000);
            //setTimeout function will remove the "budgetFeedback" in 4 secs
        }
        else{
            this.budgetAmount.textContent = value;
            this.budgetInput.value = "";
            this.showBalance();
        }
        //"thisAmount.textContent = value"
        //this.budgetInput.value = ""
        //this.showBalance() function will run
    }
    //show balance
    showBalance(){
        const expense = this.totalExpense();
        //
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
            const self = this;
            setTimeout(function(){
                self.expenseFeedback.classList.remove("showItem");
            }, 4000);
        }
        else {
            let amount = parseInt(amountValue);
            this.expenseInput.value = "";
            this.amountInput.value = "";

            let expense = {
                id:this.itemID,
                title:expenseValue,
                amount:amount,

            }
            this.itemID++;
            this.itemList.push(expense);
            this.addExpense(expense);
            this.showBalance();
            //show balance
        }
    }

    //add expense
    //creating a new div via javascript and attaching it (appendChild) in the #expense-list
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

    //total expense function
    totalExpense(){
        //set total to number 0
        let total = 0;

        if(this.itemList.length > 0){
            // console.log(this.itemList);
            total = this.itemList.reduce(function(acc,curr){
                console.log(`Total ${acc} and the current value is ${curr.amount}`);
                acc +=curr.amount
                return acc;
            },0)
        }
        this.expenseAmount.textContent = total;

        return total;
    }
    //edit expense function
    editExpense(element){
        let id = parseInt(element.dataset.id);
        let parent = element.parentElement.parentElement.parentElement;
        //remove entry from the dom
        this.expenseList.removeChild(parent);
        //remove from the list
        let expense = this.itemList.filter(function(item){
            return item.id === id;
        })
        //show value from the constructor class itemID and itemList the value will be plugged back in the expense form so the user can edit the entry
        this.expenseInput.value = expense[0].title;
        this.amountInput.value = expense[0].amount;
        //remove from list
        let tempList = this.itemList.filter(function(item){
            return item.id !== id;
        })
        this.itemList = tempList;
        this.showBalance()

    }
    //delete expense function
    deleteExpense(element){
        let id = parseInt(element.dataset.id);
        let parent = element.parentElement.parentElement.parentElement;
        //remove entry from the dom
        this.expenseList.removeChild(parent);
        //remove from the list
        let tempList = this.itemList.filter(function(item){
            return item.id !== id;
        })
        this.itemList = tempList;
        this.showBalance()
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
        console.log("calculate btn was pressed")

    });

    //expense form submit
    expenseForm.addEventListener('submit', function(event){
        event.preventDefault();
        ui.submitExpenseForm();
        console.log("Add Expense btn was pressed")

    })

    //expense click (expense value & title edit and trash)
    expenseList.addEventListener('click', function(event){
        if(event.target.parentElement.classList.contains('edit-icon')){
            ui.editExpense(event.target.parentElement)
        }
        else if (event.target.parentElement.classList.contains('delete-icon')){
            ui.deleteExpense(event.target.parentElement)
        }
        
    })

}

document.addEventListener('DOMContentLoaded', function(){
    eventListeners();
})
function portOpen() { 
    window.open("http://chelsea-exe.github.io/", "_blank"); 
}
function gitOpen() {
    window.open("http://github.com/Chelsea-Exe/", "_blank");
}
function emailOpen() {
    event.preventDefault();
    window.open("mailto:c.sjackson726@gmail.com", "_blank")
}
