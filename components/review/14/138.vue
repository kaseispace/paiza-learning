<script setup lang="ts">
const lines = [
  '5',
  '1 2 3 4 2',
]
const N = Number(lines[0])
const c = lines[1].split(' ').map(Number)

let left = 0
let maxLen = 0
const seen: Set<number> = new Set()

for (let right = 0; right < N; right++) {
  while (seen.has(c[right])) {
    seen.delete(c[left])
    left++
  }
  seen.add(c[right])
  maxLen = Math.max(maxLen, right - left + 1)
}

console.log(maxLen)
</script>
