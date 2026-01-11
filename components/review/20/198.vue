<script setup lang="ts">
const lines = [
  '2',
  'aaa',
  'bbb',
  'aabbccddee',
]
const N = Number(lines[0])
const S = lines.slice(1, N + 1)
const T = lines[N + 1]
let result = false

for (let i = 0; i < N; i++) {
  if (T.includes(S[i])) {
    result = true
    break
  }
}

console.log(result ? 'Yes' : 'No')
</script>
