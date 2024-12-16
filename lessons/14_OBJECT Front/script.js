let bankAccount = {
    accountNumber: "123456789",
    accountHolderName: "Alice",
    balance: 0
}

// this.balance += sum
bankAccount.deposit = function(sum) {
    sum >= 5 && sum <= 5000 ? this.balance += sum : alert("Некорректная сумма пополнения") // this.balance = this.balance + sum
}

// this.balance -= sum
// Бизнес-логика
bankAccount.withdraw = function(sum) {
    sum <= this.balance && sum > 0 ? this.balance -= sum : alert("Некорректная сумма списания")
}

// Просмотр баланса
bankAccount.checkBalance = function() {
    console.log(`Баланс Вашего аккаунта равен: ${this.balance}`);
}

const bank =[];

function createAccount() {
    const nameInput = document.getElementById ("name")
    const name = nameInput.value.trim();

    // falsy null
    if(name !== '' && name !== null){
        bank.push({
            ...bankAccount,
            accountNumber: bank.length + 1,
            accountHolderName: name
        })
        alert ("Account created successfully")
    } else {
        alert ("Please, enter a valid name")
    }
    nameInput.value = '';
    console.log (bank);
}

function showAccounts() {
    const accountsList = document.getElementById("accountsList");
    accountsList.innerHTML = "";

   for (let i = 0; i < bank.length; i++) {
        const listItem = document.createElement("li"); // создаем новый элемент списка (li) куда мы сохраним инфо про аккаунт.
        listItem.textContent = `Account Number: ${bank[i].accountNumber}, Name: ${bank[i].accountHolderName}, Balance: ${bank[i].balance}`; // с помощью textContent мы вписываем шаблонную строку `Account Number: ${bank[i].accountNumber}` в listItem
        accountsList.append(listItem);                // Добавить элемент в список

        // Для того чтобы кнопка Delete располагалась справа от аккаунта нужны следующие настройки
        listItem.style.display = "flex"
        listItem.style.justifyContent = "flex-start"
        listItem.style.alignItems = "center"
        
        const buttonDelete = document.createElement("button") // Создаем новый элемент <button> в документе
        buttonDelete.textContent = "Delete"                   // Устанавливаем текст кнопки как "Delete"
        buttonDelete.style.marginLeft = "50px"                // Устанавливаем левый отступ (margin) кнопки
        listItem.append(buttonDelete)                         // Добавляем кнопку buttonDelete как дочерний элемент к элементу listItem => чтоб  кнопка располагалась справа от Account, а не снизу

        buttonDelete.onclick = function () {
            bank.splice(i, 1);      // Удаляет элемент из оригинала массива (индекс старта, количество удаляемых элементов)
            listItem.remove();      // Удаляем элемент listItem из DOM

        }
    };


//--- Второй вариант цикла добавления аккаунта. Более наглядней! ---

// for (const account of bank) {
//    accountList.innerHTML += `<li>ID: ${account.accountNumber}, Name: ${account.accountHolderName}, Balance: ${account.balance}</li>`;
// }
    
}

const deposit = document.getElementById("deposit")
const withdraw = document.getElementById("withdraw")

deposit.onclick = function () {
    // TODO (Описание действия при нажатии на кнопку deposit)
    const accountIdInput = document.getElementById("accountId")
    const amountInput = document.getElementById("amount")

    const accountId = accountIdInput.value.trim();
    const amount = +amountInput.value.trim();

    const account = bank.find (account => account.accountNumber.toString() === accountId)
    if (account) {
        account.deposit(amount);
    }else{
        alert("Account not found")
    }
    accountIdInput.value = "";
    amountInput.value = "";
    showAccounts();
}

withdraw.onclick = function () {
    // TODO (Описание действия при нажатии на кнопку withdraw)
    const accountIdInput = document.getElementById("accountId")
    const amountInput = document.getElementById("amount")
    
    const accountId = accountIdInput.value.trim();
    const amount = +amountInput.value.trim();
    
    const account = bank.find (account => account.accountNumber.toString() === accountId)
    if (account) {
        account.withdraw(amount);
    }else{
        alert("Account not found")
    }
    accountIdInput.value = "";
    amountInput.value = "";
    showAccounts();
}

//------------- Преобразовали Deposit и Withdraw  в одну функцию -------------
// function operation(operator) {

    // Ссылки на элементы
     //const accountIdInput = document.getElementById("accountId");
     //const amountInput = document.getElementById("amount");
   
     //const accountId = accountIdInput.value.trim(); // string
     //const amount = +amountInput.value.trim(); // number (число или NaN)
   
     // Искомый элемент или undefined
     //const accountFind = bank.find(e => e.accountNumber.toString() === accountId);
   
   
     // if(accountFind) {
     //     if (operator === 'deposit') {
     //         accountFind.deposit(amount);
     //     } else {
     //         accountFind.withdraw(amount);
     //     }
     //     } else {
     //         alert('Account not found');
     //     }
   
     //     accountIdInput.value = "";
     //     amountInput.value = "";
   //};
   