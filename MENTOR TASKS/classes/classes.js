// bank account

class Account {
    constructor(name,accno,balance) {
        this.name = name;
        this.accno = accno;
        this.balance = balance;
    }
    //method for balance
    getbalance(){
        
       
        return `Your Account balance is ₹${this.balance}.`
    }

    //method for Amount Deposite
    depositeValue(depositeAmount){
         this.balance += depositeAmount;
         alert("Successful")
         return `Your account is Credited with ₹${depositeAmount}. Available balance is ₹${this.balance}. `
    }

    //method for Amount withdraw
    withdrawValue(withdrawAmount){
        if (withdrawAmount > this.balance){
            alert(`Hold on Mr.${this.name}`)
            console.log ( " Insufficient balance. It will be better if you could recharge.")
        } else if (withdrawAmount <= 0){
            alert("Error.")
            console.log("Dear customer with no inner sense.. Minimum amount should be  greater than ₹0.")
        } else if (withdrawAmount > 1_50_000){
            alert("Error.")
            console.log("Exceeding the daily-limit. Please enter the amount bellow ₹1,50,000. Or Enough for today.. Come back tommorrow");
        } else if (withdrawAmount >0) {
            this.balance -= withdrawAmount;
            alert("Successful")
            return `₹${withdrawAmount} is debited from your Account. Available balance is ₹${this.balance}. If not done by you, curse that person.`

        }
       
    }
}

const naveen = new Account("Naveen M", "guviWD31", 2_00_000);
   
//Providing Account details
console.log(naveen);

//depositing ₹50,000
//console.log(naveen.depositeValue(50_000));

//Withdrawing ₹1,00,000
//console.log(naveen.withdrawValue(1_00_000));
//console.log(naveen.withdrawValue(2_50_000));
//console.log(naveen.withdrawValue(0.1));
//console.log(naveen.withdrawValue(0));



