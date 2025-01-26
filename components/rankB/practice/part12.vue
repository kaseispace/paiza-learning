<script setup>
const N = 10000; // 平方分割をするデータ数
const k = Number(lines[0]); // クエリ数
const blockSize = Math.ceil(Math.sqrt(N)); // 何ブロックにするか
const maxValues = [];
const queries = lines.slice(N + 1).map(line => line.split(' ').map(Number)); // クエリ

// ブロックごとの最大値を計算
for(let i = 0; i <= N; i += blockSize) {
    const values = [];
    
    for(let j = i; j < Math.min(i + blockSize, N); j++) {
        values.push(Number(lines[j + 1]));
    }
    
    maxValues.push(Math.max(...values));
}

queries.forEach(([l, r]) => {
    // クエリ [l, r] が1-indexedで与えられているので、それを0-indexedに変換
    // 0-indexedはインデックスが0から始まる。例えば、配列の最初の要素はインデックス0
    // 1-indexedはインデックスが1から始まる。例えば、配列の最初の要素はインデックス1
    l--;
    r--;
    
    // 与えられたクエリがどこのブロックにあるか調査
    const startBlock = Math.floor(l / blockSize);
    const endBlock = Math.floor(r / blockSize);
    
    // 始めの値をセット、この時参照値を元に戻す
    let maxValue = Number(lines[l + 1]);
    
    // 同じブロック内の場合（ブロックを跨がない）
    if(startBlock == endBlock) {
        // そのブロック内で開始位置から終了位置までの最大値を探す
        for(let i = l; i <= r; i++) {
            maxValue = Math.max(maxValue, Number(lines[i + 1]));
        }
        
    // ブロックを跨ぐ場合
    }else{
        // 前列の部分的ブロック
        for(let i = l; i < (startBlock + 1) * blockSize; i++) {
            maxValue = Math.max(maxValue, Number(lines[i + 1]));
        }
        
        // 後列の部分的ブロック
        for(let i = endBlock * blockSize; i <= r; i++) {
            maxValue = Math.max(maxValue, Number(lines[i + 1]));
        }
        
        // 完全に含まれるブロック
        for(let i = startBlock + 1; i < endBlock; i++) {
            maxValue = Math.max(maxValue, maxValues[i]);
        }
    }
    
    console.log(maxValue);
});
</script>