<script setup lang="ts">
const lines = [
    '8 3',
    '10100101'
]
const [N, M] = lines[0].split(' ').map(Number);
const s = lines[1];
const S = [];
let result = '0'.repeat(M).split('').map(Number);

for(let i = 0; i < N; i += M) {
    let block = s.slice(i, i + M);
    if(block.length < M) {
        block = block.padEnd(M, '0');
    }
    
    S.push(block.split('').map(Number));
}

S.forEach(block => {
    for(let i = 0; i < M; i++) {
        result[i] ^= block[i];
    }
});

console.log(result.join(''));
</script>