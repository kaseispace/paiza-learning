<script setup lang="ts">
const lines = [
  '5',
  '6',
  '7',
  '10',
  '1',
  '15',
]
const T = parseInt(lines[0])

for (let i = 1; i <= T; i++) {
  const x = BigInt(lines[i])
  console.log(x.toString(2))
}
</script>
