<script setup lang="ts">
type AB = 'A' | 'B';
const lines = [
    "3 5",
    "3 7 4 5 1",
    "6 9 1 8 8",
    "11 2 5 2 2"
];
const [H, W] = lines[0].split(' ').map(Number);
const a = lines.slice(1).map(line => line.split(' ').map(Number));
const A: AB[][] = Array.from({length: H}, () => Array(W).fill('B'));

const divideChocolate = () => {
    for(let i = 0; i < H; i++) {
        const row = a[i];
        const total = row.reduce((acc, cur) => acc + cur, 0);
        
        if(total % 2 !== 0) {
            console.log('No');
            return;
        }
        
        const half = total / 2;
        let sum = 0;
        
        for(let k = 0; k < W; k++) {
            sum += row[k];
            A[i][k] = 'A';
            
            if(sum === half) {
                break;
            }else if(sum > half) {
                console.log('No');
                return;
            }
        }
    }
}

divideChocolate();
console.log('Yes');
A.forEach(row => console.log(row.join('')));
</script>