<script setup lang="ts">
const lines = [
    '5 3',
    '1 2',
    '3 4',
    '5 3'
];
const [N, M] = lines[0].split(' ').map(Number);
const trains = Array.from({length: N + 1}, (_, i) => [i]);

for(let i = 1; i <= M; i++) {
    const [x, y] = lines[i].split(' ').map(Number);
    
    trains[x] = trains[x].concat(trains[y]);
    trains[y] = [];
}

const maxLength = Math.max(...trains.map(train => train.length));
const longestTrains = trains.filter(train => train.length === maxLength);

longestTrains.forEach(train => {
    console.log(train[0]);
});
</script>