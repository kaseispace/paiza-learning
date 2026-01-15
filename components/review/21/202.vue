<script setup lang="ts">
const lines = [
  '4 5.0',
  '5.0',
  '5.0',
  '7.5',
  '2.5',
]
const [, k] = lines[0].split(' ').map(Number)
const hp = lines.slice(1).map(Number)
let sum = 0

hp.forEach(num => sum += num)
const result = Math.ceil(sum / k)

console.log(result)
</script>
