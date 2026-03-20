<script setup lang="ts">
const lines = [
  '2 4 1 3 6 5',
  '5',
]

const [T, B, U, D, L, R] = lines[0].split(' ').map(Number)
const Q = Number(lines[1])
let ans = 0

if (Q === T) ans = B
else if (Q === B) ans = T
else if (Q === U) ans = D
else if (Q === D) ans = U
else if (Q === L) ans = R
else if (Q === R) ans = L

console.log(ans)
</script>
