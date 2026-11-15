<script setup lang="ts">
const lines = [
  '3',
  '1 2 3',
  '2 -2 10',
]
const N = Number(lines[0])
const a = lines[1].split(' ').map(Number)
const b = lines[2].split(' ').map(Number)

let dot = 0

for (let i = 0; i < N; i++) {
  dot += a[i] * b[i]
}

console.log(String(dot))
</script>
