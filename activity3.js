class BankAccount {
    constructor(balance, accountType) {
        this.balance = balance;
        this.accountType = accountType;
    }

    deposit(amount) {
        this.balance += amount;
        console.log("Your balance after deposit is $" + this.balance);
    }

    withdraw(amount) {
        this.balance -= amount;
        console.log("Your balance after withdrawal is $" + this.balance);
    }
}

let nita = new BankAccount(50, "checking")
nita.deposit(100)
nita.withdraw(50)
