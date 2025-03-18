<script setup lang="ts">
const lines = [
    '3 2',
    '2 4',
    '1 2 3 4 1',
    '1 1 1 4 2',
    '1 2 2 3 1'
];
const [n, m] = lines[0].split(' ').map(Number);
const [h, w] = lines[1].split(' ').map(Number);
const A = Array.from({length: h}, () => Array(w).fill('.'));
const H = Array(m).fill(0);

for(let i = 2; i <= n + 1; i++) {
    const [a, b, c, d, e] = lines[i].split(' ').map(Number);
    
    // 収穫と植える
    for(let j = a - 1; j < b; j++) {
        for(let k = c - 1; k < d; k++) {
            // 収穫できるものがある
            if(A[j][k] !== '.') {
                H[A[j][k] - 1]++;
            }
            
            A[j][k] = e; 
        }
    }
}

H.forEach(h => console.log(h));  
A.forEach(low => console.log(low.join('')));
</script>