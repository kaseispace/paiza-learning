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
const n = Number(lines[0]);
const a = lines[1].split(' ').map(Number).sort((a, b) => a - b);
const q = Number(lines[2]);

const binarySearch = (arr: number[], target: number) => {
    let low = 0;
    let high = arr.length - 1;
    let success = 0;
    
    while(low <= high) {
        const mid = Math.floor((low + high) / 2);
        
        if(arr[mid] >= target) {
            high = mid - 1;
        }else{
            low = mid + 1;
        }
    }
    
    return low;
};

for(let i = 3; i < 3 + q; i++) {
    const index = binarySearch(a, Number(lines[i]));
    console.log(n - index);
}
</script>