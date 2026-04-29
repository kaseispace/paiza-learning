<script setup lang="ts">
const lines = [
  '6 5',
  '3 5 0 2 1',
]
const [, k] = lines[0].split(' ').map(Number)
let ans = 0

if (k > 0) {
  const s = lines[1].split(' ').map(Number)

  for (const v of s) {
    ans |= (1 << v)
  }
}

console.log(ans)
</script>
