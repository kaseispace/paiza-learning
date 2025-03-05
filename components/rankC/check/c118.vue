<script setup lang="ts">
const lines = [
    '8 3 6',
    '3',
    '6',
    '4'
]
const [D, N, L] = lines[0].split(' ').map(Number);
const d = Array.from({length: D}, (_, i) => i);
let currentPosition = 0;
let totalMoves = 0;
let result = 'Yes';

for(let i = 1; i <= N; i++) {
    const target = Number(lines[i]);
    
    const clockwise = (target - currentPosition + D) % D;
    const counterClockwise = (currentPosition - target + D) % D;
    
    totalMoves += Math.min(clockwise, counterClockwise);
    currentPosition = target;
    
    if(totalMoves > L) {
        result = 'No';
        break;
    }
}

console.log(result);
</script>