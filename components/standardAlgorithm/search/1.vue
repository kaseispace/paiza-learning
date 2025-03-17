<script setup lang="ts">
const lines = [
    '5',
    '-9 10 6 0 -3',
    '4'
];
const n = Number(lines[0]);
const a = lines[1].split(' ').map(Number);
const k = Number(lines[2]);

a.sort((a, b) => b - a);
console.log(a[k - 1]);
</script>