<script setup lang="ts">
const lines = [
    '3',
    'mako 13 08/08 nara',
    'megumi 14 11/02 saitama',
    'taisei 16 12/04 nagano',
    '14'
];

// クラスを活用
const n = Number(lines[0]);
const num = Number(lines[lines.length - 1]);

class User {
    constructor(name, old, birth, state) {
        this.name = name;
        this.old = old;
        this.birth = birth;
        this.state = state;
    }
}

for(let i = 1; i <= n; i++) {
    const [name, old, birth, state] = lines[i].split(' ');
    const user = new User(name, old, birth, state);
    
    if(user.old == num) {
        console.log(user.name);
    }
}

// 配列を活用
const n = Number(lines[0]);
const num = Number(lines[lines.length - 1]);
const a = [];

for(let i = 1; i <= n; i++) {
    const [name, old, birth, state] = lines[i].split(' ');
    a.push({name, old, birth, state})
}

a.forEach(student => {
    if(student.old == num) {
        console.log(result.name);
    }
})
</script>

<template>
    <div/>
 </template>