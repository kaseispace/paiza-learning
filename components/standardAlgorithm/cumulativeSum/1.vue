<script setup lang="ts">
const lines = [
    '10 3 8',
    'bwwbwbbwbw'
];
const [n, x, y] = lines[0].split(' ').map(Number);
const a = lines[1];
const s = [0];

for(let i = 0; i < n; i++) {
    const w = a[i] === 'b' ? 1 : 0;
    s.push(s[i] + w);
}

console.log(s[y] - s[x - 1]);
</script>