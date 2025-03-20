<script setup lang="ts">
const lines = [
    '9 4 5 2 3',
    '1 0',
    '1 2',
    '1 3',
    '1 4',
    '2 2',
    '2 3',
    '2 4',
    '3 3',
    '3 4'
]
const [N, H, W, P, Q] = lines[0].split(' ').map(Number);
const reserved = new Set();
let minDistance = Infinity;
const result = [];

for(let i = 1; i <= N; i++) {
    const [p, q] = lines[i].split(' ').map(Number);
    reserved.add(`${p},${q}`);
}

for(let i = 0; i < H; i++) {
    for(let j = 0; j < W; j++) {
        if(reserved.has(`${i},${j}`)) continue;
        
        const distance = Math.abs(P - i) + Math.abs(Q - j);
        
        if(distance < minDistance) {
            minDistance = distance;
            result.length = 0;
            result.push(`${i} ${j}`);
        }else if(distance === minDistance){
            result.push(`${i} ${j}`);
        }
    }
}

result.forEach(r => console.log(r));
</script>