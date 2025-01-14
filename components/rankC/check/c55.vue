<script setup lang="ts">
const lines = [
    '51x8',
    '5',
    'JeURgwGqr PInzkAatxAEhs51x8',
    'OLxiu!TR0wyafgp?cdSeuO4IF3',
    'rwwLTTb$$g5v51x8TvQyMeiiP BDYDEcRV',
    'CNZ9e8A!LFMsl!ZFsv nBdy3',
    'kk Ulzd:RnOzDGo1'
];

const s = lines[0];
const n = Number(lines[1]);

for(let i = 2; i <= 1 + n; i++) {
    const result = lines[i].includes(s);
    
    console.log(result ? 'Yes' : 'No');
}
</script>

<template>
    <div/>
 </template>