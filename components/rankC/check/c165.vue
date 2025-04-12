<script setup lang="ts">
const lines = [
    '3',
    '1 3',
    '2 5',
    '4 6'
];
const N = Number(lines[0]);
const sequence = lines[1].split(' ');
const curryQueue: number[] = [];
const riceQueue: number[] = [];
const result: number[][] = [];

for(let i = 0; i < N; i++) {
    if(sequence[i] === 'C') {
        curryQueue.push(i + 1);
    }else{
        riceQueue.push(i + 1);
    }
    
    if(curryQueue.length > 0 && riceQueue.length > 0) {
        const curryIndex = curryQueue.shift();
        const riceIndex = riceQueue.shift();

        if(curryIndex !== undefined && riceIndex !== undefined) {
            result.push([curryIndex, riceIndex]);
        }
    }
}

if(result.length === 0) {
    console.log(0);
}else{
    console.log(result.length);
    result.forEach(r => console.log(r.join(' ')));
}
</script>