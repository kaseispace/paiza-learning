<script setup lang="ts">
const lines = [
  '4 3 3 9',
  '1,4,7',
  '2,5,8',
  '3,6,9',
  '10,11,12',
]
const [n, , k, x] = lines[0].split(' ').map(Number)

for (let i = 0; i < n; i++) {
  const row = lines[1 + i]
  const cols = row.split(',').map(Number)

  if (cols[k - 1] >= x) {
    console.log(row)
  }
}
</script>
