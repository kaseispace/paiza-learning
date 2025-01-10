<script setup lang="ts">
const lines = [
    '3', 
    'PAIIZA', 
    'PAIZA', 
    'PAIIIZA 2', 
    'PAIIZA 2', 
    'PAIIIZA 3'
];
const n = Number(lines[0]);
const m = Number(lines[n+1]);
const a = new Map();

for(let i = 1; i <= n; i++) {
    const name = lines[i];
    a.set(name, 0);
}

for(let i = n+2; i < lines.length; i++) {
    const [x, y] = lines[i].split(' ');
    const sum = a.get(x);
    a.set(x, sum + Number(y));
}

const b = [];

for(const [key, value] of a) {
    b.push(`${key} ${value}`)
}

b.sort();
b.forEach(num => {
    const result = num.split(' ');
    console.log(result[1]);
})
</script>

<template>
    <div/>
 </template>