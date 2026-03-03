<script setup lang="ts">
const lines = [
  '3',
  '10',
  '4',
  '14',
]
const N = Number(lines[0])
const a = lines.slice(1, 1 + N).map(BigInt)

const cnt: bigint[] = Array(7).fill(0n)

for (const v of a) {
  const r = Number(v % 7n)
  cnt[r]++
}

const comb2 = (x: bigint) => {
  if (x < 2n) return 0n
  return x * (x - 1n) / 2n
}

const comb3 = (x: bigint) => {
  if (x < 3n) return 0n
  return x * (x - 1n) * (x - 2n) / 6n
}

let ans = 0n

for (let i = 0; i < 7; i++) {
  for (let j = i; j < 7; j++) {
    for (let k = j; k < 7; k++) {
      if ((i + j + k) % 7 !== 0) continue

      if (i === j && j === k) {
        ans += comb3(cnt[i])
      }
      else if (i === j && j !== k) {
        ans += comb2(cnt[i]) * cnt[k]
      }
      else if (i < j && j === k) {
        ans += cnt[i] * comb2(cnt[j])
      }
      else {
        ans += cnt[i] * cnt[j] * cnt[k]
      }
    }
  }
}

console.log(ans.toString())
</script>
