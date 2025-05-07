<script setup lang="ts">
const lines = [
    "5 5",
    "###..",
    "..#.#",
    "#####",
    "...##",
    ".###."
]
const [H, W] = lines[0].split(' ').map(Number);
const grid = lines.slice(1).map(line => line.split(''));
const visited: boolean[][] = Array.from({length: H} , () => Array(W).fill(false));
const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

const dfs = (y: number, x: number) => {
    visited[y][x] = true;
    
    for(const [dy, dx] of directions) {
        const ny = dy + y;
        const nx = dx + x;
        
        if(ny >= 0 && ny < H && nx >= 0 && nx < W && !visited[ny][nx] && grid[ny][nx] === '.') {
            dfs(ny, nx);
        }
    }
};

let count = 0;

for(let y = 0; y < H; y++) {
    for(let x = 0; x < W; x++) {
        if(grid[y][x] === '.' && !visited[y][x]) {
            count++;
            dfs(y, x);
        }
    }
}

console.log(count);
</script>