<script setup lang="ts">
const lines = [
    '10 4',
    '1 2 3 4 5 6 7 8 9 10',
    '2 6 1 1'
]

const [n , m] = lines[0].split(' ').map(Number);
const a = lines[1].split(' ').map(Number);
const b = lines[2].split(' ').map(Number);
    
let num = 0;
    
// 何行つくるか
for(let i = 0; i < m; i++) {
    // 返す結果
    let result = '';

    for(let j = 0; j < b[i]; j++) {
        // 開始位置とループ値を足した値で取得
        result += a[num + j] + ' ';
    }
    console.log(result.trim());

    // 次の開始位置を決める値
    num = num + b[i];
    // num += b[i]
}
</script>