<script setup lang="ts">
const lines = [
  '1 10',
  '9',

]
const [N, M] = lines[0].split(' ').map(Number)
const A = lines[1].split(' ').map(Number)

let l = 0
let sum = 0
let ans = Infinity

for (let r = 0; r < N; r++) {
  sum += A[r]

  while (sum >= M) {
    ans = Math.min(ans, r - l + 1)
    sum -= A[l]
    l++
  }
}

console.log(ans === Infinity ? -1 : ans)
</script>
