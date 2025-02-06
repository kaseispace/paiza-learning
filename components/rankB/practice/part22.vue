<script setup>
const [n, x, a, y, b] = lines[0].split(' ').map(Number);
const dp = Array(n + 1).fill(Infinity);
dp[0] = 0;

for(let i = 1; i <= n; i++) {
    if(i >= y) {
        dp[i] = Math.min(dp[i - x] + a, dp[i - y] + b);
    }else if(i >= x) {
        dp[i] = Math.min(dp[i - x] + a, b);
    }else{
        dp[i] = a;
    }
}
console.log(dp[n]);
</script>

<template>
    <div/>
 </template>