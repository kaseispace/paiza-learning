<script setup lang="ts">
const lines = [
  '12 4 12',
  'aapizaapizaa',
]
const [N, A, B] = lines[0].split(' ').map(Number)
const str = lines[1]

const S: number[] = new Array(N + 1).fill(0)

for (let i = 1; i <= N; i++) {
  const isEnd = i >= 3 && str[i - 3] === 'p' && str[i - 2] === 'i' && str[i - 1] === 'z'
  S[i] = S[i - 1] + (isEnd ? 1 : 0)
}

const ans = B >= A + 2 ? S[B] - S[A + 1] : 0
console.log(ans)
</script>
