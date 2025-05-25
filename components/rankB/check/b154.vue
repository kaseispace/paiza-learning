<script setup lang="ts">
const lines = [
    "4 4",
    "#.#.",
    "....",
    "..#.",
    "...."
]
const [H, W] = lines[0].split(' ').map(Number);
const grid = lines.slice(1).map(line => line.split(''));

const bombRows = new Set<number>();
const bombCols = new Set<number>();

for(let y = 0; y < H; y++) {
    for(let x = 0; x < W; x++) {
        if(grid[y][x] === '#') {
            bombRows.add(y);
            bombCols.add(x);
        }
    }
}

const result = bombRows.size * W + bombCols.size * H - bombRows.size * bombCols.size;
console.log(result);
</script>