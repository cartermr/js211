let assert = require('assert');

class BankAccount {
    accountNumber;
    owner;
    transactions;

    constructor (accountNumber, owner) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.transactions = [];
    }

    balance () {
        let balance = 0;

        this.transactions.forEach((transaction) => {
            balance = balance + transaction.amount;
        })

        return balance;
    }

    deposit (amt) {
        if (amt < 0) {
            return;
        } else {
            let deposit = new Transaction(amt);
            this.transactions.push(deposit);
        }
    }

    charge (amt, payee) {
        if (amt > 0) {
            return;
        } 
        
        if (amt * -1 > this.balance()) {
            return;
        } else {
            let debit = new Transaction(amt, payee);
            this.transactions.push(debit);
        }
    }
}

class Transaction {
    date;
    amount;
    payee;

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
            assert.ok(account.transactions[1].amount == -50);
            assert.ok(account.transactions[1].payee == 'Target');
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
            account.charge(-200, 'Target');
            assert.equal(account.balance(), 100);
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