<script setup lang="ts">
const lines = [
  '4',
  '0 800',
  '1 100',
  '1 200',
  '0 400',
]
const N = Number(lines[0])
const out: string[] = []

for (let i = 1; i <= N; i++) {
  const [t, p] = lines[i].split(' ').map(Number)

  const rate = t === 0 ? 110 : 108
  out.push(String((p * rate) / 100))
}

console.log(out.join('\n'))
</script>
