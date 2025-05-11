<script setup lang="ts">
const lines = [
    '3 3',
    '0 0',
    '2 0',
    '...',
    '##.',
    '...'
];
const [H, W] = lines[0].split(' ').map(Number);
const [sy, sx] = lines[1].split(' ').map(Number);
const [gy, gx] = lines[2].split(' ').map(Number);
const grid = lines.slice(3).map(line => line.split(''));

const queue = [[sy, sx, 0]];
const visited: boolean[][] = Array.from({length: H}, () => Array(W).fill(false));
visited[sy][sx] = true;
let result = 0;

while(queue.length > 0) {
    const [y, x, depth] = queue.shift()!;
    if(y === gy && x === gx) {
        result = depth;
        break;
    }
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    
    for(const [dy, dx] of directions) {
        const ny = dy + y;
        const nx = dx + x;
        
        if(ny >= 0 && ny < H && nx >= 0 && nx < W && grid[ny][nx] === '.' && !visited[ny][nx]) {
            queue.push([ny, nx, depth + 1]);
            visited[ny][nx] = true;
        }
    }
}

console.log(result > 0 ? result : 'No');
</script>