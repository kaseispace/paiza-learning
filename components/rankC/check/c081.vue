<script setup lang="ts">
const lines = [
    '8',
    'A R',
    'A L',
    'B R',
    'A L',
    'A R',
    'B L',
    'A L',
    'C L'
]
const n = Number(lines[0]);
const k = new Map();
let pairs = 0;

for(let i = 1; i <= n; i++) {
    const [t, d] = lines[i].split(' ');
    
    if(!k.has(t)) {
        k.set(t, {'L': 0, 'R': 0});
    }
    
    k.get(t)[d]++;
}

k.forEach(({L, R}) => {
    pairs += Math.min(L, R);
})

console.log(pairs);
</script>