<script setup lang="ts">
const lines = [
  '5',
  '6167',
  '3819',
  '343',
  '554',
  '432',
]
const n = Number(lines[0])
const result: number[] = []

for (let i = 1; i <= n; i++) {
  const num = Number(lines[i])
  if (num % 2 !== 0) {
    result.push(num)
  }
}

result.sort((a, b) => a - b).forEach(num => console.log(num))
</script>
