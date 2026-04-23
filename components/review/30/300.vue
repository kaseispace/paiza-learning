<script setup lang="ts">
const lines = [
  '10',
  '0 1 2 3 4 5 6 7 8 9',
  '5',
  '0 1',
  '0 4',
  '3 8',
  '2 9',
  '1 3',
]
const N = Number(lines[0])
const A = lines[1].split(' ').map(Number)
const q = Number(lines[2])

const S: number[] = new Array(N + 1).fill(0)
for (let i = 0; i < N; i++) {
  S[i + 1] = S[i] + A[i]
}

let out = ''
for (let i = 0; i < q; i++) {
  const [l, u] = lines[3 + i].split(' ').map(Number)
  out += (S[u + 1] - S[l]) + '\n'
}

console.log(out)
</script>
