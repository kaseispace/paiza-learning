<script setup>
const [h, w] = lines[0].split(' ').map(Number);
const grid = [];
const [y, x] = lines[h + 1].split(' ').map(Number);

for(let i = 1; i <= h; i++) {
    const col = lines[i].split('');
    grid.push([...col]);
}

const toggle = (y, x) => {
    if(y >= 0 && y < h && x >= 0 && x < w) {
        grid[y][x] = grid[y][x] === '#' ? '.' : '#';
    }
};

// 中心
toggle(y, x);

// 縦
for(let i = 1; i < h; i++) {
    toggle(y + i, x);
    toggle(y - i, x);
}

// 横
for(let i = 1; i < w; i++) {
    toggle(y, x + i);
    toggle(y, x - i);
}

// 斜め
for(let i = 1; i < Math.max(h, w); i++) {
    // 右斜め上
    toggle(y - i, x + i);
    
    // 右斜め下
    toggle(y + i, x + i);
    
    // 左斜め上
    toggle(y - i, x - i);
    
    // 左斜め下
    toggle(y + i, x - i);
}

grid.forEach(col => console.log(col.join('')));
</script>

<template>
    <div/>
 </template>