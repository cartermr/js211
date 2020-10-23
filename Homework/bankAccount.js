let assert = require('assert');

// Class to represent a bank account
class BankAccount {
    accountNumber;
    owner;
    transactions;

    // set the account number and owner of account when class created
    constructor (accountNumber, owner) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        // transaction initially set to empty array
        this.transactions = [];
    }

    // method to display the balance
    balance () {
        let balance = 0;

        // iterate through the list of transactions, adding the amounts together
        this.transactions.forEach((transaction) => {
            balance = balance + transaction.amount;
        })

        // return the balance
        return balance;
    }

    // method to record a deposit
    deposit (amt) {
        // do not allow negative numbers on a deposit
        if (amt < 0) {
            return;
        } else {
            // create a new Transaction class, add into transactions array
            let deposit = new Transaction(amt);
            this.transactions.push(deposit);
        }
    }

    // method to record a charge to the account
    charge (amt, payee) {
        // do not allow positive numbers on a charge
        if (amt > 0) {
            return;
        } 
        // if the charge is more than the balance, decline the charge, need to change the amount entered to a positive number for comparison
        if (amt * -1 > this.balance()) {
            return 'Declined, Insufficient Funds';
        } else {
            // create a new Transaction class and add into the transactions array
            let debit = new Transaction(amt, payee);
            this.transactions.push(debit);
        }
    }
}

// class to represent a transactions
class Transaction {
    date;
    amount;
    payee;

    // add in the amount, if a payee, and date of transaction at creation of class
    constructor (amount, payee) {
        this.amount = amount;
        this.payee = payee;
        this.date = Date.now();
    }
}


// Tests
if (typeof describe === 'function') {
    describe('Test the BankAccount Class', () => {
        it('Should create a BankAccount object', () => {
            let account = new BankAccount(1234, 'John Doe');
            assert.ok(account.accountNumber == 1234);
            assert.ok(account.owner == 'John Doe');
            assert.ok(account.transactions.length == 0);
        })
        it('Should be able to record a transaction', () => {
            let account = new BankAccount(1234, 'John Doe');
            account.deposit(100);
            account.charge(-50, 'Target');
            assert.ok(account.transactions.length == 2);
            assert.ok(account.transactions[0].amount == 100);
            assert.ok(account.transactions[0].date);
            assert.ok(account.transactions[1].amount == -50);
            assert.ok(account.transactions[1].payee == 'Target');
            assert.ok(account.transactions[1].date);
        })
        it('Should be able to deposit money', () => {
            let account = new BankAccount(1234, 'John Doe');
            account.deposit(100);
            assert.ok(account.balance() == 100);
        })
        it('Should be able to charge money', () => {
            let account = new BankAccount(1234, 'John Doe');
            account.deposit(100);
            account.charge(-50, 'Target');
            assert.ok(account.balance() == 50);
        })
        it('Not allow a person to over charge their account', () => {
            let account = new BankAccount(1234, 'John Doe');
            account.deposit(100);
            assert.ok(account.charge(-200, 'Target') == 'Declined, Insufficient Funds');
        })
    })
    describe('Test the Transaction Class', () => {
        it('Should create a charge Transaction object', () => {
            let transaction = new Transaction(-100, 'Target');
            assert.ok(transaction.amount == -100);
            assert.ok(transaction.payee == 'Target');
            assert.ok(transaction.date);
        })
        it('Should create a deposit Transaction object', () => {
            let transaction = new Transaction(100);
            assert.ok(transaction.amount == 100);
            assert.ok(transaction.payee == null);
            assert.ok(transaction.date);
        })
    })
}