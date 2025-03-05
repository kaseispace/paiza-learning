<script setup lang="ts">
const lines = [
    '26'
]
let n = Number(lines[0]);
const alfa = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
n -= 1;
let name = '';

while(n >= 0) {
    const remainder = n % 26;
    name = alfa[remainder] + name;
    n = Math.floor(n / 26) - 1;
}

console.log(name);
</script>