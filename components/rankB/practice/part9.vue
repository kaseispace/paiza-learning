<script setup lang="ts">
const lines = [
    '5',
    'aiueo give 2489 !',
    ' kk join membership!',
    ' coffee_addiction join membership!',
    ' so_cute give 837 !',
    ' yoyo give 9284 !'
]

const n = Number(lines[0]);
const superchat = new Map();
const membership = new Set();

for(let i = 1; i <= n; i++) {
    const [name, action, money] = lines[i].split(' ');
    
    switch (action) {
        case 'give':
            if(superchat.has(name)) {
                superchat.set(name, superchat.get(name) + Number(money));
            }else{
                superchat.set(name, Number(money));
            }
            break;
        case 'join':
            membership.add(name);
            break;
    }
}

Array.from(superchat)
.sort((a, b) => b[0].localeCompare(a[0]))
.sort((a, b) => b[1] - a[1])
.forEach(item => console.log(item[0]));

Array.from(membership).sort().forEach(name => console.log(name));

</script>

<template>
    <div/>
 </template>