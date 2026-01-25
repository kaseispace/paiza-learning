<script setup lang="ts">
const lines = [
  '6 2',
  '2 foo',
  '3 bar',
]
const [n, m] = lines[0].split(' ').map(Number)

for (let i = 1; i <= n; i++) {
  const result: string[] = []

  for (let j = 1; j <= m; j++) {
    const [a, b] = lines[j].split(' ')
    if (i % Number(a) === 0) {
      result.push(b)
    }
  }

  console.log(result.length > 0 ? result.join(' ') : i)
}
</script>
