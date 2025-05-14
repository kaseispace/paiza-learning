<script setup lang="ts">
const lines = [
    '10',
    '45 62 11 81 75 90 13 2 97 32',
    '5',
    '90',
    '75',
    '50',
    '1',
    '63'
];
const N = Number(lines[0]);
const A = lines[1].split(' ').map(Number);
const k = lines.slice(3).map(Number);

A.sort((a, b) => a - b);

k.forEach(target => {
    let low = 0;
    let high = A.length - 1;

    while(low <= high) {
        const mid = Math.floor((low + high) / 2);
        
        if(A[mid] >= target) {
            high = mid - 1;
        }else{
            low = mid + 1;
        }
    }
    
    console.log(N - low);
});
</script>