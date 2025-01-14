<script setup lang="ts">
// 配列Aの要素と配列Bの要素数で得られる積の最大値
// 求め方として以下が考えられる
// ・比較して最大値を保持する
    //  利点：メモリ使用量が少ない
    //  欠点：可読性が低い場合がある
// ・配列を作成してMath.maxを使う
    //  利点：コードが短く、読みやすい
    //  欠点：時的に巨大な1次元配列 a を作成するため、メモリ使用量が増加する可能性がある

const lines = [
    '10 10',
    '85 -46 93 44 -40 -75 -75 -18 -54 95',
    '1 95 -92 -90 32 -25 36 55 22 86',
]
const [n, k] = lines[0].split(' ').map(Number);
const a = lines[1].split(' ').map(Number);
const b = lines[2].split(' ').map(Number);
let result = a[0] * b[0];
// const result = [];
  
for(let i = 0; i < a.length; i++) {
    for(let j = 0; j < b.length; j++) {
        const num = a[i] * b[j];
        // result.push(a[i] * b[j]);
        
        if(num > result) {
            result = num;
        }
    }
}
</script>

<template>
    <div/>
 </template>