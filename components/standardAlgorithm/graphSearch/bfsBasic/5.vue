<script setup lang="ts">
type GridData = {
    H: number;
    W: number;
    sy: number;
    sx: number;
    gy: number;
    gx: number;
    grid: string[][];
}
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

const shortsPath = (data: GridData) => {
    const { H, W, sy, sx, gy, gx, grid } = data;
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const queue = [[sy, sx, 0]];
    const visited: boolean[][] = Array.from({length: H}, () => Array(W).fill(false));

    visited[sy][sx] = true;

    while(queue.length > 0) {
        const next = queue.shift();
        if(!next) break;
        
        const [y, x, depth] = next;
        
        if(y === gy && x === gx) {
            console.log(depth);
            return;
        }
        
        for(const [dy, dx] of directions) {
            const ny = dy + y;
            const nx = dx + x;

            if(ny >= 0 && ny < H && nx >= 0 && nx < W && grid[ny][nx] === '.' && !visited[ny][nx]) {
                visited[ny][nx] = true;
                queue.push([ny, nx, depth + 1]);
            }
        }
    }

    console.log('No');
};

const data: GridData = {H, W, sy, sx, gy, gx, grid};

shortsPath(data);
</script>
