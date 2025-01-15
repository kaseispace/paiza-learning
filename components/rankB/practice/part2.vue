<script setup lang="ts">
const lines = [
    '3 2',
    'mako 13 08/08 nara',
    'taisei 16 12/04 nagano',
    'megumi 14 11/02 saitama',
    '2 taihei',
    '3 megu'
];

const [n, k] = lines[0].split(' ').map(Number);
const users = [];

class User {
    constructor (nickname: string, old: number, birth: string, state: string) {
        this.nickname = nickname;
        this.old = old;
        this.birth = birth;
        this.state = state;
    }
    
    changeName(newName: string) {
        this.nickname = newName;
    }
    
    info() {
        console.log(this.nickname, this.old, this.birth, this.state);
    }
}

for(let i = 1; i <= n; i++) {
    const [nickname, old, birth, state] = lines[i].split(' ');
    users.push(new User(nickname, Number(old), birth, state));
}

for(let i = n+1; i <= n+k; i++) {
    const [id, newName] = lines[i].split(' ');
    users[Number(id) - 1].changeName(newName);
}

users.forEach(student => {
    student.info();
})

</script>

<template>
    <div/>
 </template>