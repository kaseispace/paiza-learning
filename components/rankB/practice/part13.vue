<script setup>
const N = 10000;
const R = Math.ceil(Math.sqrt(N));  // N の平方根
const K = Number(lines[0]);  // 区間の個数
const A = []; // 与えられたデータ群
const M = [];

// 入力値からAに代入し、最大値を探す対象となるデータ群だけの配列を作成
for (let i = 1; i <= N; i++) {
    A.push(Number(lines[i]));
}

// 先頭から順に要素を取り出し、再度Aの後ろに代入
// そのうち、取り出した要素の中での最大値を抽出
for (let i = 0; i < R; i++) {
    const a = A.splice(0, R);
    A.push(...a);
    M.push(Math.max(...a));
}

// nはクエリの開始位置、クエリの数だけループする
for (let n = N + 1; n <= N + K; n++) {
    const [l, r] = lines[n].split(' ').map(x => x - 1);
    let ans = A[l]; // 最大値の初期値
    let i = l;

    // クエリの範囲が終わるまで
    while (i <= r) {
        // クエリが完全に含まれている場合
        // ブロックの開始位置がブロックの最初の位置にあるか、そのブロックが終了値であるrを超えていないか
        if (i % R === 0 && i + R - 1 <= r) {
            // i/Rの結果が少数でも自動的に切り捨てし、M配列から取得してくれる
            ans = Math.max(ans, M[i / R]); 
            i += R;

        // クエリが部分的にに含まれている場合
        } else {
            ans = Math.max(ans, A[i]);  // ans (最大値)を ans と A[i]の大きい方で更新
            i++;
        }
    }
    
    console.log(ans);
}
</script>