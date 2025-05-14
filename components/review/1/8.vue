<script setup lang="ts">
const lines = [
    '3',
    '74769',
    '-62958',
    '6542',
    '-93191',
    '-6767',
    '-5945',
    '65384',
    '-97133',
    '85447',
    '-80479',
    '10143',
    '32154',
    '-19276'
];
const N = 10000;
const R = Math.sqrt(N);  // N の平方根
const K = Number(lines[0]);  // 区間の個数
const A: number[] = [];
const M: number[] = [];

for (let i = 1; i <= N; i++) {
    A.push(Number(lines[i]));  // 入力値を A に保存
}

for (let i = 0; i < R; i++) {
    const a = A.splice(0, R);  // A の値を先頭から R 個切り取り…
    A.push(...a);  // 切り取った値(配列)を A の末尾へ挿入
    M.push(Math.max(...a));
}

for (let n = N + 1; n <= N + K; n++) {
    const [l, r] = lines[n].split(' ').map(x => Number(x) - 1);
    //console.log(Math.max(...A.slice(l, r + 1)));
    let ans = A[l];
    let i = l;
    while (i <= r) {
        if (i % R === 0 && i + R - 1 <= r) {  // i mod R = 0 且つ i + 99 が 範囲内に収まれば
            ans = Math.max(ans, M[i / R]);  // ans (最大値)を ans と M[i / R]の大きい方で更新
            i += R;  // i を i + R (100) で更新
        } else {  // i mod R != 0 なら…
            ans = Math.max(ans, A[i]);  // ans (最大値)を ans と A[i]の大きい方で更新
            i++;
        }
    }
    
    console.log(ans);
}
</script>