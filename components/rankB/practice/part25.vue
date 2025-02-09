<script setup>
const [h, w] = lines[0].split(' ').map(Number);
const grid = [];
const [y, x] = lines[h + 1].split(' ').map(Number);

for(let i = 1; i <= h; i++) {
    const poit = lines[i].split('');
    grid.push([...poit]);
}

const toggle = (y, x) => {
    if(y >= 0 && y < h && x >= 0 && x < w) {
        grid[y][x] === '.' ? grid[y][x] = '#' : grid[y][x] = '.';
    }
};

toggle(y, x);
toggle(y + 1, x);
toggle(y - 1, x);
toggle(y, x + 1);
toggle(y, x - 1);

grid.forEach(col => {
    console.log(col.join(''));
});

</script>

<template>
<div/>
</template>