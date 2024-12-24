class BankAccount {
  public id: number;
  public name: string;
  private balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }

  // Getters
  get balances(): number {
    return this.balance;
  }

  //   getBalance(): number {
  //     return this.balance;
  //   }

  // Setters
  set deposit(amount: number) {
    this.balance = this.balance + amount;
  }
//   addDeposit(amount: number) {
//     this.balance = this.balance + amount;
//   }
}

class StudentAccount extends BankAccount {
  test() {
    // this.balance;
  }
}

const myAccount = new BankAccount(522, 'Bikrom', 60000);

console.log(myAccount.balances);
myAccount.deposit = 15000;
console.log(myAccount.balances);