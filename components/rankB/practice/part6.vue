<script setup lang="ts">
const lines = [
    '4 4',
    '1 Sin',
    '2 Sakura',
    '3 Kayo',
    '4 Yui',
    'call 4',
    'leave 2',
    'join 2 Sakuya',
    'call 2'
]

const [n, k] = lines[0].split(' ').map(Number);
const users = new Map();

for(let i = 1; i <= n; i++) {
    const [num, id] = lines[i].split(' ');
    users.set(Number(num), id);
}

for(let i = n+1; i <= n+k; i++) {
    const event = lines[i].split(' ');

    switch (event[0]) {
        case 'join':
            users.set(Number(event[1]), event[2]);
            break;
        case 'leave':
            users.delete(Number(event[1]));
            break;
        case 'call':
            console.log(users.get(Number(event[1])));
            break;
    }
}
</script>

<template>
    <div/>
 </template>