<script setup lang="ts">
const lines = [
    "3",
    "90 10 10",
    "10 30 20",
    "10 10 20"
];
const N = Number(lines[0]);
const H: number[][] = Array.from({length: N + 2}, (_, i) => i === 0 || i === N + 1 ? Array(N + 2).fill(0) : [0, ...lines[i].split(' ').map(Number), 0]);
const result: number[] = [];

for(let i = 1; i <= N; i++) {
    for(let j = 1; j <= N; j++) {
        const target = H[i][j];
        
        const top = H[i - 1][j];
        const bottom = H[i + 1][j];
        const right = H[i][j + 1];
        const left = H[i][j - 1];
        if(target > top && target > bottom && target > right && target > left) {
            result.push(target);
        }
    }
}

const sortResult = result.sort((a, b) => b - a);
sortResult.forEach(r => console.log(r));
</script>