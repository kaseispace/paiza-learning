<script setup lang="ts">
const lines = [
    '10 7 10',
    '6 1'
];
const [H, W, N] = lines[0].split(' ').map(Number);
const [startY, startX] = lines[1].split(' ').map(Number);
const grid: string[][] = Array.from({length: H}, () => Array(W).fill('.'));
const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
const queue = [[startY, startX, 0]];

grid[startY][startX] = '*';
while(queue.length > 0) {
    const next = queue.shift();
    if(!next) break;

    const [y, x, depth] = next;
    if(depth === N) continue;
    
    for(const [dy, dx] of directions) {
        const ny = dy + y;
        const nx = dx + x;
        
        if(ny >= 0 && ny < H && nx >= 0 && nx < W && grid[ny][nx] === '.') {
            grid[ny][nx] = '*';
            queue.push([ny, nx, depth + 1]);
        }
    }
}

grid.forEach(row => console.log(row.join('')));
</script>