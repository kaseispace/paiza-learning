<script setup>
const N = Number(lines[0]);
const resistors = new Map();
const M = Number(lines[N + 1]);
const connections = lines[N + 2].split(' ');
let totalResistance = 0;

for(let i = 1; i <= N; i++) {
    const [s, w] = lines[i].split(' ');
    resistors.set(s, Number(w));
}

for(let i = 0; i < M; i++) {
    if(connections[i].length > 1) {
        let totalReciprocal = 0;
        for(let j = 0; j < connections[i].length; j++) {
            totalReciprocal += 1 / resistors.get(connections[i][j]);
        }
        
        totalResistance += 1 / totalReciprocal;
    }else{
        totalResistance += resistors.get(connections[i]);
    }
}

console.log(Math.floor(totalResistance));
</script>