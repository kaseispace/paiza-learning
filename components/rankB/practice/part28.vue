<script setup>
const lines = [
    '50 20',
    '3 41',
    '2 41',
    '1 46',
    '2 37',
    '7 18',
    '7 9',
    '1 18',
    '1 27',
    '1 7',
    '4 50',
    '1 41',
    '1 21',
    '6 16',
    '5 22',
    '4 20',
    '7 37',
    '1 33',
    '6 24',
    '1 37',
    '1 46'
]

const [n, m] = lines[0].split(' ').map(Number);
const table = Array(n).fill(false);
let totalSeated = 0; // 合計着席数

for(let i = 1; i <= m; i++) {
    const [a, b] = lines[i].split(' ').map(Number);
    let canSit = true;
    const indices = [];
    
    for(let j = 0; j < a; j++) {
        // 椅子の数を超えたても良いようの対策で用意されている椅子の数で割る
        const seatIndex = (b - 1 + j) % n;

        // 既に利用している席の場合は中断
        if(table[seatIndex]) {
            canSit = false;
            break;
        }
        
        indices.push(seatIndex);
    }
    
    // 全員着席できる場合
    if(canSit) {
        // それそれの椅子に着席させる
        for(const index of indices) {
            table[index] = true;
        }
        
        // 着席した人数を追加
        totalSeated += a;
    }
}

console.log(totalSeated);
</script>

<template>
    <div/>
 </template>