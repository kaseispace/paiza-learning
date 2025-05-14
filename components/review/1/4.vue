<script setup lang="ts">
const lines = [
    '10 2 7',
    '1 2 3 4 5 6 7 8 9 10'
];
const [N, X, Y] = lines[0].split(' ').map(Number);
const a = lines[1].split(' ').map(Number);
const A = [0];

for(let i = 1; i <= N; i++) {
    const num = a[i - 1] % 2 === 0 ? 1 : 0;
    A.push(A[i - 1] + num);
}

console.log(A[Y + 1] - A[X]);
</script>