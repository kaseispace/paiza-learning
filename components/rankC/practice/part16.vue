<script setup lang="ts">
const lines = [
    '142358',
    '3',
    '195283',
    '167358',
    '142359',
];
const first = Number(lines[0]);
const adjacent = [];
const second = [];
const third = [];
const n = Number(lines[1]);
const a = [];

if(first == 100000) {
    adjacent.push(100001);
}else if(first == 199999) {
    adjacent.push(199998);
}else{
    adjacent.push(first + 1);
    adjacent.push(first - 1);
}

for(let i = 0; i <= 9; i++) {
    const num = first.toString().substring(2);
    const result = `1${i}${num.toString()}`;
    
    if(Number(result) != first) {
        second.push(Number(result));
    }
}

for(let i = 0; i <= 99; i++) {
    const num = first.toString().substring(3);
    const result = `1${i.toString().padStart(2, '0')}${num.toString()}`;
    
    if(Number(result) != first && second.indexOf(Number(result)) == -1) {
        third.push(Number(result));
    }
}

for(let i = 2; i <= n+1; i++) {
    a.push(Number(lines[i]));
}

for(let i = 0; i < n; i++) {
    if(first == a[i]) {
        console.log('first');
    }else if(adjacent.indexOf(a[i]) != -1) {
        console.log('adjacent');
    }else if(second.indexOf(a[i]) != -1) {
        console.log('second');
    }else if(third.indexOf(a[i]) != -1) {
        console.log('third');
    }else{
        console.log('blank');
    }
}
</script>

<template>
    <div/>
 </template>