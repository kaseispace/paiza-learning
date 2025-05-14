<script setup lang="ts">
const lines = [
    '5 5 3',
    '1 2 3 4 5',
    '2 3 4 5 6',
    '3 4 5 6 7',
    '4 5 6 7 8',
    '5 6 7 8 9',
    '1 1 3 3',
    '2 2 4 4',
    '0 0 2 2'
];
const [N, M, Q] = lines[0].split(' ').map(Number);
const a: number[][] = Array.from({length: N + 1}, () => Array(M + 1).fill(0));
const A: number[][] = Array.from({length: N + 1}, () => Array(M + 1).fill(0));
const q = lines.slice(N + 1).map(line => line.split(' ').map(Number));

for(let i = 1; i <= N; i++) {
    const row = lines[i].split(' ').map(Number);
    
    for(let j = 0; j < M; j++) {
        a[i][j + 1] = row[j];
    }
}

for(let i = 1; i <= N; i++) {
    for(let j = 1; j <= M; j++) {
        A[i][j] = a[i][j] + A[i - 1][j] + A[i][j - 1] - A[i - 1][j - 1];
    }
}

q.forEach(([a, b, c, d]) => {
    console.log(A[c + 1][d + 1] - A[c + 1][b] - A[a][d + 1] + A[a][b]);
});
</script>