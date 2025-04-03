<script setup lang="ts">
const lines = [
    '2 4 5',
    '0 0 3',
    '2 1 3',
    '2 0 2',
    '2 1 3',
    '1 0 2',
    '3 2 3'
];
const [N, H, W] = lines[0].split(' ').map(Number);
const grid: number[][] = Array.from({length: H}, () => Array(W).fill(0));

// 各ターン
for(let i = 0; i < N; i++) {
    for(let player = 1; player <= 3; player++) {
        const [x, y, s] = lines[i * 3 + player].split(' ').map(Number);
        
        for(let dx = x; dx < x + s; dx++) {
            for(let dy = y; dy < y + s; dy++) {
                
                if(dx < W && dy < H) {
                    if(grid[dy][dx] === 0 || grid[dy][dx] === player) {
                        grid[dy][dx] = player;
                    }else{
                        grid[dy][dx] = 6 - player - grid[dy][dx];
                    }
                }
            }
        }
    }
}

const result = [1, 2, 3].map(player => {
    return grid.flat().filter(cell => cell === player).length;
});

console.log(result.join(' '));
</script>