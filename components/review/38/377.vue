<script setup lang="ts">
const lines = [
  '7 0',
  '1 0 0 1 1 0 1',
]
const [N, L] = lines[0].split(' ').map(Number)
const B = lines[1].split(' ').map(Number)

let left = 0
let work = 0
let ans = 0

for (let right = 0; right < N; right++) {
  if (B[right] === 0) {
    work++
  }

  while (work > L) {
    if (B[left] === 0) {
      work--
    }

    left++
  }

  ans = Math.max(ans, right - left + 1)
}

console.log(ans)
</script>
