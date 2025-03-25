<script setup lang="ts">
const lines = [
    '10 15',
    '1 5 9 1 20 5 3 6 5 4'
];
const [N, K] = lines[0].split(' ').map(Number);
const a = lines[1].split(' ').map(Number);

let currentSum = 0;
let left = 0;
let maxLength = 0;

for(let right = 0; right < a.length; right++) {
    currentSum += a[right];
    
    while (currentSum > K && left <= right) {
        currentSum -= a[left];
        left++;
    }
    
    maxLength = Math.max(maxLength, right - left + 1);
}

console.log(maxLength);
</script>