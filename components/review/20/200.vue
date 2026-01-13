<script setup lang="ts">
const lines = [
  '4',
  'Jimmy',
  'Bob',
  'James',
  'Jimmy',
]
const n = Number(lines[0])
const result: Set<string> = new Set()

for (let i = 1; i <= n; i++) {
  const c = lines[i]
  if (!result.has(c)) {
    result.add(c)
    console.log('YES')
  }
  else {
    console.log('NO')
  }
}
</script>
