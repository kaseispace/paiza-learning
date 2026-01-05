<script setup lang="ts">
const lines = [
  '4',
  '3',
  '2',
  '0',
  '1',
]
const result: boolean[] = Array(4).fill(false)

for (let i = 0; i < 5; i++) {
  const hit = Number(lines[i])
  if (hit >= 1 && hit <= 4) {
    result[hit - 1] = true
  }
}

console.log(result.includes(false) ? 'No' : 'Yes')
</script>
