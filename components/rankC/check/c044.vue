<script setup lang="ts">
const lines = [
    '3',
    'paper',
    'paper',
    'rock'
]
const n = Number(lines[0]);
const hands = lines.slice(1);

const hasRock = hands.includes('rock');
const hasScissors = hands.includes('scissors');
const hasPaper = hands.includes('paper');

let result = 'draw';

if(hasRock && hasScissors && !hasPaper) {
    result = 'rock';
}else if(hasRock && !hasScissors && hasPaper) {
    result = 'paper';
}else if(!hasRock && hasScissors && hasPaper) {
    result = 'scissors';
}

console.log(result);
</script>