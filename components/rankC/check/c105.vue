<script setup lang="ts">
const lines = [
    '6',
    '5 10 11 12 24 25'
];
const n = Number(lines[0]);
const c = lines[1].split(' ').map(Number).sort((a, b) => a - b);
let num = c[0];
let result = 0;

for(let i = 1; i < n; i++) {
    if(c[i] === c[i - 1] + 1) {
        num = c[i];
    }else{
        result += num;
        num = c[i];
    }
}

result += num;
console.log(result);
</script>