<script setup>
const [h, w] = lines[0].split(' ').map(Number);
const panelStates = lines.slice(1, h + 1);
const panelScore = lines.slice(h + 1).map(line => line.split(' ').map(Number));
let totalScore = 0;

for(let i = 0; i < h; i++) {
    for(let j = 0; j < w; j++) {
        if(panelStates[i][j] === 'o') {
            totalScore += panelScore[i][j];
        }
    }
}

console.log(totalScore);
</script>