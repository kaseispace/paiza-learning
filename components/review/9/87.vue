<script setup lang="ts">
const lines = [
  'shinagawa',
  '428',
  'ha',
  '3150',
]
const s1 = lines[0]
const i1 = parseInt(lines[1])
const s2 = lines[2]
const i2 = parseInt(lines[3])

const sumS1 = [...s1].reduce((acc, c) => acc + c.charCodeAt(0), 0)
const sumS2 = [...s2].reduce((acc, c) => acc + c.charCodeAt(0), 0)

const H = (sumS1 * i1 + sumS2 * i2) % 1000

console.log(H)
</script>
