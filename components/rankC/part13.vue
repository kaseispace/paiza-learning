<script setup lang="ts">
const lines = [100];
const n = Number(lines[0]);
//   n分の配列を作る
 const sieve = Array(n + 1).fill(true);
//  0と1は素数ではないのであらかじめfalseに設定
 sieve[0] = sieve[1] = false;
  
//   与えられたnの平方根まで調べればいい
  for(let i = 2; i <= Math.sqrt(n); i++) {
    //   trueであれば実行、例えばiが2であった場合、2の倍数を全部falseに設定
      if(sieve[i]) {
        //   iずつ増えていくので倍数になる
          for(let j = i*i; j <= n; j += i) {
              sieve[j] = false;
          }
          
      }
  }
  
//   trueの数が素数の数になる
  console.log(sieve.filter(num => num).length);

</script>

<template>
    <div/>
 </template>