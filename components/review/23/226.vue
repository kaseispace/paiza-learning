<script setup lang="ts">
const lines = [
  '2 100',
  '100 100',
  '99 99',
]
const [nStr, cStr] = lines[0].split(' ')
const N = Number(nStr)
const C = Number(cStr)

const A = lines[1].split(' ').map(Number)
const B = lines[2].split(' ').map(Number)

const days: number[] = []

for (let i = 0; i < N; i++) {
  const diff = C - B[i]
  const d = Math.floor((A[i] + diff - 1) / diff)
  days.push(d)
}

days.sort((a, b) => a - b)

const ans: number[] = []
for (let j = 1; j <= N; j++) {
  ans.push(days[N - j])
}

console.log(ans.join(' '))
</script>
