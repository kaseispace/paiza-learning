<script setup>
const n = Number(lines[0]);
let startPrice = 0;
let endPrice = 0;
let highPrice = -Infinity;
let lowPrice = Infinity;

for(let i = 1; i <= n; i++) {
    const [s, e, h, l] = lines[i].split(' ').map(Number);
    
    if(i === 1) {
        startPrice = s;
    }
    
    if(i === n) {
        endPrice = e;
    }
    
    highPrice = Math.max(highPrice, h);
    lowPrice = Math.min(lowPrice, l);
}

console.log(startPrice, endPrice, highPrice, lowPrice);
</script>