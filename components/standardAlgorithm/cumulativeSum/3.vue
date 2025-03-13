<script setup lang="ts">
const lines = [
    '10 5',
    '1 3',
    '1 8',
    '3 8',
    '3 6',
    '7 9'
]
const [n, q] = lines[0].split(' ').map(Number);
const s = Array(n).fill(0);

for(let i = 1; i <= q; i++) {
    const [l, r] = lines[i].split(' ').map(Number);
    
    s[l - 1] += 1;
    s[r] -= 1;
}

for(let i  = 1; i < n; i++) {
    s[i] += s[i - 1];
}

console.log(Math.max(...s));
</script>