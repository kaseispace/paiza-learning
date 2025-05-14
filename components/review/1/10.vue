<script setup>
const [h, w, d] = lines[0].split(' ').map(Number);

const generateNumbering = (H, W, D) => {
    const grid = Array.from({ length: H }, () => Array(W).fill(0));
    let count = 1;

    switch (D) {
        case 1:
            for (let k = 0; k < H + W - 1; k++) {
                for (let i = 0; i < W; i++) {
                    for (let j = 0; j < H; j++) {
                        if (i + j === k) {
                            grid[j][i] = count++;
                        }
                    }
                }
            }
            break;
        case 2:
            for (let i = 0; i < H; i++) {
                for (let j = 0; j < W; j++) {
                    grid[i][j] = count++;
                }
            }
            break;
        case 3:
            for (let j = 0; j < W; j++) {
                for (let i = 0; i < H; i++) {
                    grid[i][j] = count++;
                }
            }
            break;
        case 4:
            for (let k = 0; k < H + W - 1; k++) {
                for (let i = 0; i < H; i++) {
                    for (let j = 0; j < W; j++) {
                        if (i + j === k) {
                            grid[i][j] = count++;
                        }
                    }
                }
            }
            break;
    }

    grid.forEach(row => {
        console.log(row.join(' '));
    });
}

generateNumbering(h, w, d);
</script>

<template>
    <div/>
 </template>