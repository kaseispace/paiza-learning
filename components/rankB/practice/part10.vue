<script setup lang="ts">
const lines = [
    '3 3 3',
    '1 2 3',
    '4 5 6',
    '7 8 9',
    '1 1',
    '2 2',
    '3 3'
]

const [h, w, n] = lines[0].split(' ').map(Number);
const cum = Array.from({length: h+1}, () => Array(w+1).fill(0));

for(let i = 1; i <= h; i++) {
    const result = lines[i].split(' ').map(Number);
    
    for(let j = 1; j <= w; j++) {
        cum[i][j] = cum[i-1][j] + cum[i][j-1] + result[j-1] - cum[i-1][j-1];
    }
}

for(let i = h+1; i <= h+n; i++) {
    const [x, y] = lines[i].split(' ').map(Number);
    console.log(cum[x][y]);
}

</script>

<template>
    <div/>
 </template>