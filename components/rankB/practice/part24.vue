<script setup>
const lines = [
    '5 19',
    '7',
    '18',
    '5',
    '4',
    '8'
]
const [n, x] = lines[0].split(' ').map(Number);
const a = lines.slice(1).map(Number);
const dp = Array(n + 1).fill(false);
dp[0] = true;

// dpは総和を表し、trueの場合はその和を作れる
for(let i = 0; i < n; i++) {

    // 最後尾から（逆順に）、順に和が作れるか確認
    for(let j = x; j >= a[i]; j--) {

        // trueになるということは、jを付け足してその和を達成できる
        if(dp[j - a[i]]) {
            dp[j] = true;
        }
    }
}

console.log(dp[x] ? 'yes' : 'no');

</script>

<template>
    <div/>
 </template>