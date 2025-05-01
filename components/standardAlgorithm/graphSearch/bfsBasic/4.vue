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
const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
const queue = [[sy, sx]];

grid[sy][sx] = '*';
while(queue.length > 0) {
    const next = queue.shift();
    if(!next) break;
    
    const [y, x] = next;
    
    for(const [dy, dx] of directions) {
        const ny = dy + y;
        const nx = dx + x;
        
        if(ny >= 0 && ny < H && nx >= 0 && nx < W && grid[ny][nx] === '.') {
            grid[ny][nx] = '*';
            queue.push([ny, nx]);
        }
    }
}

console.log(grid[gy][gx] === '*' ? 'Yes' : 'No');
</script>