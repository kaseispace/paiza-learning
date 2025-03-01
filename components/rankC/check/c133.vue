<script lang="ts">
const lines = [
    '6 6', 
    '3 4 6 2 4 6',
    '3 5 1 3 5 3',
    '5 1 3 6 6 4',
    '7 8 3 2 2 2',
    '5 9 3 2 2 2',
    '7 2 4 2 2 2'
]
const [H, W] = lines[0].split(' ').map(Number);

// 縦を分割
for(let i = 1; i <= H; i += 3) {
    // 各エリアの合計値を格納する配列を初期化
    const sum = Array.from({length : W / 3}, () => 0);

    for(let j = 0; j < 3; j++) {
        const rowValues = lines[i + j].split(' ').map(Number);
        
        // 各エリアの合計値を計算
        for(let k = 0; k < W; k += 3) {
            sum[k / 3] += rowValues.slice(k, k + 3).reduce((acr, cur) => acr + cur, 0);
        }
    }
    
    // 各エリアの平均値を計算
    for(let j = 0; j < sum.length; j++) {
        sum[j] = Math.floor(sum[j] / 9);
    }
    
    console.log(sum.join(' '));
}
</script>