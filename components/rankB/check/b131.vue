<script setup lang="ts">
const lines = [
    '3 4',
    '0 1 2 3',
    '0 4 5 6',
    '0 7 8 9',
    '3',
    '1 4',
    '3 2',
    '2 2'
];
const [N, M] = lines[0].split(' ').map(Number);
const A = Array.from({length: N}, (_, i) => lines[1 + i].split(' ').map(Number));
const X = Number(lines[N + 1]);
const [firstR, firstS] = lines[N + 2].split(' ').map(Number);

let cost = A[firstR - 1][firstS - 1];

for(let i = N + 3; i <= N + X + 1; i++) {
    const [prevR, prevS] = lines[i - 1].split(' ').map(Number);
    const [nextR, nextS] = lines[i].split(' ').map(Number);
    
    // 同じ路線の移動の場合
    if(nextR === prevR) {
        const diff = Math.abs(A[prevR - 1][prevS - 1] - A[nextR - 1][nextS - 1]);
        
        cost += diff;
    }else{
        const startCost = A[nextR - 1][prevS - 1];
        const endCost = A[nextR - 1][nextS - 1];
        
        cost += Math.abs(startCost - endCost);
    }
}
console.log(cost);
</script>