// Создать объект bankAccount, который:
// 1. accountNumber: "123456789"
// 2. accountHolderName: "Alice"
// 3. balance: 0

// 4. deposit(sum) {
        // TODO Пополнение счёта
//   }
// 5. withdraw(sum) {
        // TODO Списание счёта
//   }
// 6. checkBalance() {
        // TODO Просмотр баланса счёта
//   }

let bankAccount = {
    accountNumber: "123456789",
    accountHolderName: "Alice",
    balance: 0
}
// Пополнение счёта
bankAccount.deposit = function(sum) {
   this.balance = this.balance + sum // баланс увеличиваем на сумму
// console.log(`На счет пришло ${sum}. Новый баланс: ${this.balance}`);  
// sum >= 5 && sum <= 5000 ? this.balance = this.balance + sum : alert ("Некорректная сумма пополнения")  ===> Вариант второй с с проверкой через тернарный оператор
}
// Списание счёта
bankAccount.withdraw = function(sum) {
   this.balance = this.balance - sum // баланс уменьшается на сумму
// console.log(`Со счета ушло ${sum}. Новый баланс: ${this.balance}`);
// sum <= this.balance && sum > 0 ? this.balance = this.balance - sum : alert ("Некорректная сумма списания")  ===> Вариант второй с с проверкой через тернарный оператор
}
// Просмотр баланса счёта
bankAccount.check = function(){
console.log(`Ваш баланс: ${this.balance}`);
}
