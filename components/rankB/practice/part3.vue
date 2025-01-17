<script setup lang="ts">
const lines = [
    "2 5",
    "59", 
    "5", 
    "2 food 1223", 
    "1 alcohol 4461", 
    "1 alcohol 4573", 
    "1 alcohol 1438", 
    "2 softdrink 1581"
];

const [n, k] = lines[0].split(' ').map(Number);
const customers = [];

class Under20 {
    constructor() {
        this.pay = 0;
    }
    
    order(item, payment) {
        if(item == 'alcohol') {
            return;
        }
        
        this.pay += payment;
    }
}

class Over20 extends Under20 {
    constructor() {
        super();
        this.down = false;
    }
    
    order(item, payment) {
        if(item == 'alcohol') {
            this.down = true;
        }else if(item == 'food' && this.down == true) {
            payment -= 200;
        }
        
        this.pay += payment;
    }
}

for(let i = 1; i <= n; i++) {
    const customer = Number(lines[i]);
    customers.push(customer >= 20 ? new Over20() : new Under20());
}

for(let i = n+1; i <= n+k; i++) {
    const [customerId, item, cost] = lines[i].split(' ');
    customers[Number(customerId) - 1].order(item, Number(cost));
}

customers.forEach(customer => console.log(customer.pay));
</script>

<template>
    <div/>
 </template>