<script setup lang="ts">
const lines = [
    '2 5 3 1000',
    '100 100',
    '500 200',
    '60 300',
    '100 500',
    '10 1000'
];
const [N, M, T, K] = lines[0].split(' ').map(Number);
const A: number[][] = Array.from({length: N}, () => Array(M + 1).fill(0));
const a = lines.slice(1).map(line => line.split(' ').map(Number));

for(let i = 0; i < N; i++) {
    for(let j = 0; j < M; j++) {
        A[i][j + 1] += a[j][i] + A[i][j];
    }
}

// それぞれの質問について調べる
for(let i = 0; i < N; i++) {
    let isMatch = false;
    
    for(let j = 0; j <= M - T; j++) {
        const result = A[i][j + T] - A[i][j];
        let c = 0;
        
        if(result >= K) {
            // その範囲内でさらに早い段階で目標を達成していなか
            for(let k = 1; k < T; k++) {
                const result2 = A[i][j + T - k] - A[i][j];
                
                if(result2 < K) {
                    break;
                }
                
                c++;
            }
            
            console.log(`yes ${j + T - c}`);
            isMatch = true;
            break;
        }
    }
    
    if(!isMatch) console.log('no 0');
}
</script>