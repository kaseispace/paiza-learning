<script setup>
const N = Number(lines[0]);
const stayTimes = [];
const travelTimes = [];
const K = parseInt(lines[2 * N + 1]);
const visitOrder = [];
let totalTime = 0;

for (let i = 1; i <= N; i++) {
    stayTimes.push(Number(lines[i]));
}

for (let i = N + 1; i <= 2 * N; i++) {
    travelTimes.push(lines[i].split(' ').map(Number));
}

for (let i = 2 * N + 2; i <= 2 * N + 1 + K; i++) {
    visitOrder.push(Number(lines[i]) - 1); // インデックスの調整
}

totalTime += stayTimes[visitOrder[0]];

for (let i = 1; i < K; i++) {
    const currentLocation = visitOrder[i - 1];
    const nextLocation = visitOrder[i];

    totalTime += travelTimes[currentLocation][nextLocation];
    totalTime += stayTimes[nextLocation];
}

console.log(totalTime);
</script>