<script setup lang="ts">
const lines = [
  '3',
  'tanaka',
  'nakata',
  'takahashi',
]
const N = Number(lines[0])
const names = lines.slice(1)
let maxLen = 0

// 動的計画法(DP)を用いる
for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    const s1 = names[i]
    const s2 = names[j]
    const dp: number[][] = Array(s1.length + 1).fill(0).map(() => Array(s2.length + 1).fill(0))
    let localMax = 0

    // 連続部分文字列の場合は前の数と足し合わせる
    for (let a = 1; a <= s1.length; a++) {
      for (let b = 1; b <= s2.length; b++) {
        if (s1[a - 1] === s2[b - 1]) {
          dp[a][b] = dp[a - 1][b - 1] + 1
          localMax = Math.max(localMax, dp[a][b])
        }
      }
    }

    maxLen = Math.max(maxLen, localMax)
  }
}

console.log(maxLen)

//        t a n a k a
//      -------------
//    | 0 0 0 0 0 0 0
//  n | 0 0 0 0 0 1 0
//  a | 0 0 1 0 1 0 2
//  k | 0 1 0 0 0 0 0
//  a | 0 0 2 0 1 0 1
//  t | 0 0 0 3 0 0 0
//  a | 0 0 1 0 4 0 1

//        t a k a h a s h i
//      -------------------
//    | 0 0 0 0 0 0 0 0 0 0
//  t | 0 1 0 0 0 0 0 0 0 0
//  a | 0 0 2 0 1 0 1 0 0 0
//  n | 0 0 0 0 0 0 0 0 0 0
//  a | 0 0 1 0 1 0 1 0 0 0
//  k | 0 0 0 2 0 0 0 0 0 0
//  a | 0 0 1 0 3 0 1 0 0 0

//        t a k a h a s h i
//      -------------------
//    | 0 0 0 0 0 0 0 0 0 0
//  n | 0 0 0 0 0 0 0 0 0 0
//  a | 0 0 1 0 1 0 1 0 0 0
//  k | 0 0 0 2 0 0 0 0 0 0
//  a | 0 0 1 0 3 0 1 0 0 0
//  t | 0 1 0 0 0 0 0 0 0 0
//  a | 0 0 2 0 1 0 1 0 0 0
</script>
