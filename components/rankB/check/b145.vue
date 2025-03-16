<script setup lang="ts">
const lines = [
    '3 8',
    '13 3 9',
    '8 0 2',
    '16 17 15',
    '7 14 9 10 3 13 16 8'
];
const [N, K] = lines[0].split(' ').map(Number);
const b = Array.from({length: N}, (_, i) => lines[1 + i].split(' ').map(Number));
const c = lines[N + 1].split(' ').map(Number);
let result = 0;

for(let i = 0; i < K; i++) {
    const num = c[i];
    let count = 0;
    
    b.forEach(low => {
        for(let j = 0; j < N; j++) {
            if(low[j] === num) {
                b[count][j] = 0;
                break;
            }
        }
        
        count++;
    })
}

const isBingo = (line: number[]) => line.every(cell => cell === 0);

const rightDiagonal: number[] = [];
const leftDiagonal: number[] = [];

for(let i = 0; i < N; i++) {
    // 横
    if(isBingo(b[i])) result++;
    
    const col = b.map(row => row[i]);
    if(isBingo(col)) result++;
    
    // 斜め
    rightDiagonal.push(b[i][i]);
    leftDiagonal.push(b[i][N - i - 1]);
}

if(isBingo(rightDiagonal)) result++;
if(isBingo(leftDiagonal)) result++;

console.log(result);
</script>