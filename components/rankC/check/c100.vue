<script lang="ts">
const lines = [
    '5 6 30',
    '1 20',
    '2 30',
    '2 20',
    '3 30',
    '2 20'
]
const [N, M, S] = lines[0].split(' ').map(Number);
let sum = M * 60 + S;
const xy = [];

for(let i = 1; i <= N; i++) {
    const [x, y] = lines[i].split(' ').map(Number);
    xy.push(x * 60 + y);
}

xy.sort((a, b) => a - b);
let count = 0;

for(let i = 0; i < N; i++) {
    if(sum >= xy[i]) {
        sum -= xy[i];
        count++;
    }else{
        break;
    }
}

console.log(count);
</script>