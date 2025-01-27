<script setup>
const [h, w, n] = lines[0].split(' ').map(Number);
const cum = Array.from({length: h + 1}, () => Array(w + 1).fill(0));
const chocoMap = Array.from({length: h}, (_, i) => lines[i + 1].split(' ').map(Number));

for(let i = 1; i <= h; i++) {
    const line = lines[i].split(' ').map(Number);
    
    for(let j = 1; j <= w; j++) {
        cum[i][j] = line[j - 1] + cum[i][j - 1] + cum[i - 1][j] - cum[i - 1][j - 1];
    }
}

for(let i = h+1; i <= h+n; i++) {
    const [y, x, b, s] = lines[i].split(' ').map(Number);
    
    // 中心からの距離
    const half_b = Math.floor(b / 2);
    const half_s = Math.floor(s / 2);
    
    // 内側の累積和（ドーナツの穴の部分）
    const innerSum = cum[y + half_s][x + half_s]
    - cum[y + half_s][x - half_s - 1] 
    - cum[y - half_s - 1][x + half_s] 
    + cum[y - half_s - 1][x - half_s - 1];
    
    // 内側の累積和（ドーナツの穴の部分）
    const outerSum = cum[y + half_b][x + half_b]
    - cum[y + half_b][x - half_b - 1] 
    - cum[y - half_b - 1][x + half_b] 
    + cum[y - half_b - 1][x - half_b - 1];
    
    const choco = outerSum - innerSum;
    console.log(choco);
}
</script>