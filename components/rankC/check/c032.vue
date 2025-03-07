<script lang="ts">
const lines = [
    '6',
    '0 200',
    '1 240',
    '0 120',
    '3 460',
    '1 240',
    '2 3200'
]
const n = Number(lines[0]);
const points = new Map();
let sum = 0;
const pointPer100Yen = [5, 3, 2, 1];

for(let i = 1; i <= n; i++) {
    const [v, p] = lines[i].split(' ').map(Number);
    
    if(points.has(v)) {
        points.set(v, points.get(v) + p);
    }else{
        points.set(v, p);
    }
}

for(const [key, value] of points) {
    sum += Math.floor(value / 100) * pointPer100Yen[key];
}

console.log(sum);
</script>