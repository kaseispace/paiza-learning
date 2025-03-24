<script setup lang="ts">
const lines = [
    '2 3',
    '400',
    '410',
    '420',
    '400',
    '400',
    '400',
    '300',
    '300',
    '300'
];
const [N, M] = lines[0].split(' ').map(Number);
const a = lines.slice(1, M + 1).map(Number);
let maxScore = 0;

for(let i = M + 1; i <= M * N + 3; i += M) {
    let score = 100;
    
    for(let j = 0; j < M; j++) {
        const diff = Math.abs(a[j] - Number(lines[i + j]));
        
        switch (true) {
            case (diff > 30):
                score -= 5;
                break;
            case (diff > 20):
                score -= 3;
                break;
            case (diff > 10):
                score -= 2;
                break;
            case (diff > 5):
                score -= 1;
                break;
            default:
                break;
        }
    }
    
    maxScore = Math.max(maxScore, score);
}

console.log(maxScore);
</script>