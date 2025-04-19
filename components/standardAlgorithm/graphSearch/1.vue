<script setup lang="ts">
// このグリッド探索では、現在の座標から上下左右に1マス移動可能
// ただし、グリッドの外には出られないため、境界チェックが必要
// DFSやBFSの前に「移動可能なマスの探索」を理解する目的

const lines = [
    "3 3",
    "1 1"
];
const [H, W] = lines[0].split(' ').map(Number);
const [y, x] = lines[1].split(' ').map(Number);
const grid: string[][] = Array.from({length: H}, () => Array(W).fill('.'));
const directions = [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]];

directions.forEach(([dy, dx]) => {
    const ny = dy + y;
    const nx = dx + x;
    
    if(ny >= 0 && ny < H && nx >= 0 && nx < W) {
        grid[dy + y][dx + x] = '*';
    }
});

grid.forEach(row => console.log(row.join('')));
</script>