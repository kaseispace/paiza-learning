<script setup lang="ts">
const lines = [
    "3",
    "22 23",
    "17 20",
    "14 19"
]
const n = Number(lines[0]);
let commonDays = new Set();

const [s, e] = lines[1].split(' ').map(Number);
for(let i = s; i <= e; i++) {
    commonDays.add(i);
}

for(let i = 1; i <= n; i++) {
    const [s, e] = lines[i].split(' ').map(Number);
    const tempSet = new Set();
    
    for(let j = s; j <= e; j++) {
        if(commonDays.has(j)) {
            tempSet.add(j);
        } 
    }
    
    commonDays = tempSet;

    if(commonDays.size === 0) {
        break;
    }
}

console.log(commonDays.size > 0 ? 'OK' : 'NG');
</script>