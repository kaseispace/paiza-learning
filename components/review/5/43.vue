<script setup lang="ts">
const lines = [
  '10 10',
  '85 -46 93 44 -40 -75 -75 -18 -54 95',
  '1 95 -92 -90 32 -25 36 55 22 86',
]
const a = lines[1].split(' ').map(Number)
const b = lines[2].split(' ').map(Number)
let result = a[0] * b[0]

for (let i = 0; i < a.length; i++) {
  for (let j = 0; j < b.length; j++) {
    const num = a[i] * b[j]
    // result.push(a[i] * b[j]);

    if (num > result) {
      result = num
    }
  }
}
</script>
