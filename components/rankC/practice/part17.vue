<script setup lang="ts">
const lines = [
    '50 3',
    '40',
    '90',
    '10'
];
const [n, m] = lines[0].split(' ').map(Number);
const w = lines.slice(1, lines.length).map(Number);

const siwake = (w, n) => {
    if(w <= n) {
        console.log(n);
    }else{
        const lower = Math.floor(w / n) * n;
        const upper = lower + n;
        
        console.log(Math.abs(lower - w) >= Math.abs(upper - w) ? upper : lower)
    }
}

w.forEach(num => {
    siwake(num, n);
})
</script>

<template>
    <div/>
 </template>