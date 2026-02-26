<script setup lang="ts">
const lines = [
  '4 2',
  '5 3 8 2',
]
const [n, k] = lines[0].split(' ').map(Number)
const a = lines[1].split(' ').map(Number)

let sum = 0
for (let i = 0; i < k; i++) {
  sum += a[i]
}

let ans = sum
for (let i = 0; i + k < n; i++) {
  sum = sum - a[i] + a[i + k]
  if (sum > ans) ans = sum
}

console.log(ans)
</script>
