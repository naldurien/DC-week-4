class BankAccount {
  constructor(firstName, middleName, lastName, balance, accountType) {
      this.firstName = firstName;
      this.middleName = middleName;
      this.lastName = lastName;
      this.balance = balance;
      this.accountType = accountType;
  }

  deposit(amount) {
      this.balance += amount;
      console.log("Your " + this.accountType + " balance after deposit is $" + this.balance + ".");
  }

  withdraw(amount) {
      this.balance -= amount;
      console.log("Your " + this.accountType + " balance after withdrawal is $" + this.balance + ".");
      if (this.balance < 0) {
        this.balance -= 35
        console.log("Your " + this.accountType + " balance after Overdraft Fee is $" + this.balance + ".");
      }
  }

  transfer(amount, destination) {
    this.withdraw(amount);
    destination.deposit(amount);
  }
}

let nitaChecking = new BankAccount("Juanita", "Lyn", "Meyer", 100, "checking")

let nitaSavings = new BankAccount("Juanita", "Lyn", "Meyer", 100, "savings")

nitaChecking.transfer(101, nitaSavings)
