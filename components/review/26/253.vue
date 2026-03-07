<script setup lang="ts">
const lines = [
  '4 2',
  '1',
  '2',
  '3',
  '4',
  '2',
  '1',
]
const input = lines
const [N, K] = input[0].split(' ').map(Number)

const T: number[] = []
for (let i = 0; i < N; i++) {
  T.push(Number(input[1 + i]))
}

const D: number[] = []
for (let i = 0; i < K; i++) {
  D.push(Number(input[1 + N + i]))
}

const S: number[] = new Array(N + 1).fill(0)
for (let i = 0; i < N; i++) {
  S[i + 1] = S[i] + T[i]
}
const total = S[N]

const dist = (a: number, b: number) => {
  if (a === b) return total
  if (a < b) {
    return S[b - 1] - S[a - 1]
  }
  else {
    return total - (S[a - 1] - S[b - 1])
  }
}

let cur = 1
let ans = 0

for (let i = 0; i < K; i++) {
  const d = D[i]
  ans += dist(cur, d)
  cur = d
}

console.log(ans)
</script>
