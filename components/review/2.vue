<script setup lang="ts">
const lines = ['1 2 3 4 5 6 7 8 9 10'];
const a = lines[0].split(' ').map(Number);
const s = [0];
let maxValue = 0;

for(let i = 0; i < 10; i++) {
    s.push(a[i] + s[i]);
}

for(let i = 0; i <= 7; i++) {
    const num = s[i + 3] - s[i];
    maxValue = Math.max(maxValue, num);
}

console.log(maxValue);
</script>