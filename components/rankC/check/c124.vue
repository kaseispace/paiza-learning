<script setup lang="ts">
const lines = [
    '3',
    '2',
    '1 2',
    '6 3',
    '2',
    '2 2',
    '5 1',
    '1',
    '2 7'
]
const n = Number(lines[0]);
const a = Array(1000).fill(0);
let count = 1;
let entry = 0;

while(true) {
    const c = Number(lines[count]);
    let result = false;
    
    for(let i = count + 1; i <= count + c; i++) {
        const [s, p] = lines[i].split(' ').map(Number);
        let canApply = true;
        
        for(let j = s - 1; j < s - 1 + p; j++) {
            if(a[j] === 1) {
                canApply = false;
                break;
            }
        }
        
        if(canApply) {
            for(let j = s - 1; j < s - 1 + p; j++) {
                a[j] = 1;
            }
            
            result = true;
        }
    }
    
    count += c + 1;
    if(result) entry++;
    if(count >= lines.length) break;
}

console.log(entry);
</script>