<script setup lang="ts">
const lines = [
    '6',
    '100 78 82 81 46 84'
]
const n = Number(lines[0]);
const scores = lines[1].split(' ').map(Number).sort((a, b) => b - a);

scores.shift();
scores.pop();

const sum = scores.reduce((acc, cur) => acc + cur, 0);
const avg = sum / (n - 2);
const result = Math.floor(avg * 10) / 10;
console.log(result.toFixed(1));
</script>