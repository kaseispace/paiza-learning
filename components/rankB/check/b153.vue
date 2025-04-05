<script setup lang="ts">
const lines = [
    '4',
    '3 4 3 2',
    '7 9 3 7',
    '1 9 4 6',
    '3 7 8 6'
];
const N = Number(lines[0]);
const grid = lines.slice(1).map(line => line.split(' ').map(Number));
const totalCells = N * N;
const checkPoints = [totalCells / 4, totalCells / 2, (3 * totalCells) / 4, totalCells];
const result: number[] = [];

while(grid.length > 0) {
    result.push(...(grid.shift() ?? []));  // 右へ進む
    
    if(grid.length > 0) {
        for(let j = 0; j < grid.length; j++) {
            const bottom = grid[j].pop(); // 下へ進む
            if(bottom) result.push(bottom);
        }
    }
    
    if(grid.length > 0) {
        const left = grid.pop(); // 左へ進む
        if(left) result.push(...left.reverse());
    }
    
    if(grid.length > 0) {
        for(let j = grid.length - 1; j >= 0; j--) {
            const top = grid[j].shift(); // 上へ進む
            if(top) result.push(top);
        }
    }
}

checkPoints.map(checkPoint => {
    const sum = result.slice(0, checkPoint).reduce((total, cur) => total + cur, 0);
    console.log(sum);
});
</script>