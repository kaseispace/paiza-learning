<script setup>
const [n, k] = lines[0].split(' ').map(Number);
const N = lines.slice(1, n+1).map(Number);
const square = Math.ceil(Math.sqrt(n));
const maximum = [];
const minimum = [];
const query = [];

// 事前準備、区間ごとの最大値・最小値の算出
for(let i = 0; i < N.length; i += square) {
    maximum.push(Math.max(...N.slice(i, i+square)));
    minimum.push(Math.min(...N.slice(i, i+square)));
}

// クエリ
for(let i = n+1; i <= n+k; i++) {
    const [a_s, a_e, b_s, b_e] = lines[i].split(' ').map(Number);
    query.push([a_s, a_e, b_s, b_e]);
}

query.forEach(([a_s, a_e, b_s, b_e]) => {
    a_s--;
    a_e--;
    b_s--;
    b_e--;
    
    // クエリの始端と終端
    const a_startBlock = Math.floor(a_s / square);
    const a_endBlock = Math.floor(a_e / square);
    let a_maxValue = N[a_s];
    let a_minValue = N[a_s];
    let a_diff = 0;
    
    // 完全に同じブロック内に存在する場合
    if(a_startBlock == a_endBlock) {
        a_maxValue = Math.max(...N.slice(a_s, a_e + 1));
        a_minValue = Math.min(...N.slice(a_s, a_e + 1));
        a_diff = a_maxValue - a_minValue;
    } else {
        // 部分的な始端、次のブロックに行かないまで最大値と最小値を更新
        // ＊初めの値が完全に含まれる場合でも部分的として扱っている
        for(let i = a_s; i < (a_startBlock + 1) * square; i++) {
            a_maxValue = Math.max(a_maxValue, N[i]);
            a_minValue = Math.min(a_minValue, N[i]);
        }
        
        // 完全に同じブロック内に存在する場合、終端ブロックになるまでブロックを進める(中間ブロック)
        for(let i = a_startBlock + 1; i < a_endBlock; i++) {
            a_maxValue = Math.max(a_maxValue, maximum[i]);
            a_minValue = Math.min(a_minValue, minimum[i]);
        }
        
        // 部分的な終端、最後の値であるa_eになるまで最大値と最小値を更新
        for(let i = a_endBlock * square; i <= a_e; i++) {
            a_maxValue = Math.max(a_maxValue, N[i]);
            a_minValue = Math.min(a_minValue, N[i]);
        }
        
        a_diff = a_maxValue - a_minValue;
    }
    
    const b_startBlock = Math.floor(b_s / square);
    const b_endBlock = Math.floor(b_e / square);
    let b_maxValue = N[b_s];
    let b_minValue = N[b_s];
    let b_diff = 0;
    
      // 完全に同じブロック内に存在する場合
    if(b_startBlock == b_endBlock) {
        b_maxValue = Math.max(...N.slice(b_s, b_e + 1));
        b_minValue = Math.min(...N.slice(b_s, b_e + 1));
        b_diff = b_maxValue - b_minValue;
    } else {
        // 部分的な始端、次のブロックに行かないまで最大値と最小値を更新
        // ＊初めの値が完全に含まれる場合でも部分的として扱っている
        for(let i = b_s; i < (b_startBlock + 1) * square; i++) {
            b_maxValue = Math.max(b_maxValue, N[i]);
            b_minValue = Math.min(b_minValue, N[i]);
        }
        
        // 完全に同じブロック内に存在する場合、終端ブロックになるまでブロックを進める(中間ブロック)
        for(let i = b_startBlock + 1; i < b_endBlock; i++) {
            b_maxValue = Math.max(b_maxValue, maximum[i]);
            b_minValue = Math.min(b_minValue, minimum[i]);
        }
        
        // 部分的な終端、最後の値であるa_eになるまで最大値と最小値を更新
        for(let i = b_endBlock * square; i <= b_e; i++) {
            b_maxValue = Math.max(b_maxValue, N[i]);
            b_minValue = Math.min(b_minValue, N[i]);
        }
        
        b_diff = b_maxValue - b_minValue;
    }
    
    console.log(a_diff == b_diff ? 'DRAW' : a_diff > b_diff ? 'A' : 'B');
});
</script>