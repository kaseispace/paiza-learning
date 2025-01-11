<script setup lang="ts">
const lines = [
    "2 3 4", 
    "1 3", 
    "2 1", 
    "2 3",
    "3 3",
    "1 4"
];
const [a, b, c] = lines[0].split(' ').map(Number);
const ab = new Map();
const bc = new Map();

for(let i = 1; i <= a; i++) {
    const [x, y] = lines[i].split(' ').map(Number);
    ab.set(x, y);
}

for(let i = a+1; i < lines.length; i++) {
    const [x, y] = lines[i].split(' ').map(Number);
    bc.set(x, y);
}

for(let i = 1; i <= a; i++) {
    const bb = ab.get(i);
    console.log(`${i} ${bc.get(bb)}`);
}
</script>

<template>
    <div/>
 </template>