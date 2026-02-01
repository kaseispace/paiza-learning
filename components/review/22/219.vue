<script setup lang="ts">
const lines = [
  '6',
  '1 2 3 4 5 6',

]
const A = lines[1].split(' ').map(Number)

const S = A.reduce((a, b) => a + b, 0)
const max = S

const dp: boolean[] = Array(max + 1).fill(false)
dp[0] = true

for (const w of A) {
  for (let i = max; i >= w; i--) {
    if (dp[i - w]) dp[i] = true
  }
}

let best = 0
for (let i = 0; i <= S; i++) {
  if (dp[i] && Math.abs(S - 2 * i) < Math.abs(S - 2 * best)) {
    best = i
  }
}

console.log(Math.abs(S - 2 * best))
</script>
