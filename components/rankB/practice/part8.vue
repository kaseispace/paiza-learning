<script setup lang="ts">
const lines = [
    '3 5',
    'A 0000 10000',
    'B 1234 23456',
    'C 5678 98765',
    'A 0101 1000',
    'B 1234 1000', 
    'C 5678 90000', 
    'A 0000 200',
    'B 1233 10000'
]

const [n, k] = lines[0].split(' ').map(Number);
const banks = new Map();

class Bank {
    constructor(password, balance) {
        this.password = password;
        this.balance = balance;
    }
    
    draw_out(password, money) {
        if(password == this.password) {
            this.balance -= money;
        }
    }
}

for(let i = 1; i <= n; i++) {
    const [company, password, balance] = lines[i].split(' ');
    banks.set(company, new Bank(password, Number(balance)));
}

for(let i = n+1; i <= n+k; i++) {
    const [company, password, money] = lines[i].split(' ');
    const bank = banks.get(company);
    bank.draw_out(password, Number(money));
}

for(const [key, value] of banks) {
    console.log(key, value.balance);
}

</script>

<template>
    <div/>
 </template>