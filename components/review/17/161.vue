<script setup lang="ts">
const lines = [
  '1 2 3',
  '1 2 3',
  '1 2 3',
  '1 2 3',
  '1 2',
  '1 2 3',
  '1 2',
  '1 2 3 4',
  '1 2',
  '1 2 3',
  '1 2',
  '1 2 3',
]
// s_i の読み取り (3行分)
const s: number[] = []
for (let r = 0; r < 3; r++) {
  const row = lines[r].trim().split(' ').map(Number)
  for (const v of row) s.push(v)
}

// b_i_j の読み取り (残り行)
const needB = [3, 2, 3, 2, 4, 2, 3, 2, 3] // 各パネルが属するライン数
const b: number[][] = Array.from({ length: 9 }, () => [])
let lineIdx = 3
for (let i = 0; i < 9; i++) {
  const row = lines[lineIdx++].trim().split(' ').map(Number)
  for (let j = 1; j <= needB[i]; j++) {
    b[i][j] = row[j - 1]
  }
}

// ラインのビットマスク定義
const pos = (r: number, c: number) => r * 3 + c
const linesMask = [
  (1 << pos(0, 0)) | (1 << pos(0, 1)) | (1 << pos(0, 2)),
  (1 << pos(1, 0)) | (1 << pos(1, 1)) | (1 << pos(1, 2)),
  (1 << pos(2, 0)) | (1 << pos(2, 1)) | (1 << pos(2, 2)),
  (1 << pos(0, 0)) | (1 << pos(1, 0)) | (1 << pos(2, 0)),
  (1 << pos(0, 1)) | (1 << pos(1, 1)) | (1 << pos(2, 1)),
  (1 << pos(0, 2)) | (1 << pos(1, 2)) | (1 << pos(2, 2)),
  (1 << pos(0, 0)) | (1 << pos(1, 1)) | (1 << pos(2, 2)),
  (1 << pos(0, 2)) | (1 << pos(1, 1)) | (1 << pos(2, 0)),
]

// 各パネルが属するライン一覧
const linesOf: number[][] = Array.from({ length: 9 }, () => [])
for (let li = 0; li < linesMask.length; li++) {
  for (let i = 0; i < 9; i++) {
    if (linesMask[li] & (1 << i)) linesOf[i].push(li)
  }
}

// 新規ビンゴ数を計算
const newBingos = (S: number, i: number) => {
  let j = 0
  const ibit = 1 << i
  for (const li of linesOf[i]) {
    const maskWithoutI = linesMask[li] & ~ibit
    if ((S & maskWithoutI) === maskWithoutI) j++
  }
  return j
}

// DP
const dp = new Array(1 << 9).fill(-1e15)
dp[0] = 0

for (let S = 0; S < (1 << 9); S++) {
  if (dp[S] < -1e14) continue
  for (let i = 0; i < 9; i++) {
    if (S & (1 << i)) continue
    const j = newBingos(S, i)
    const bonus = j > 0 ? (b[i][j] || 0) : 0
    const T = S | (1 << i)
    const gain = s[i] + bonus
    dp[T] = Math.max(dp[T], dp[S] + gain)
  }
}

console.log(dp[(1 << 9) - 1])
</script>
