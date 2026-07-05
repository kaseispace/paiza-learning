<script setup lang="ts">
const lines = [
  '3 6 5',
  '1 3',
  '4 2',
  '2 3',
]
const [T, L, H] = lines[0].split(' ').map(Number)
let water = H
let ok = true

for (let i = 0; i < T; i++) {
  const [A, B] = lines[i + 1].split(' ').map(Number)

  water = Math.min(L, water + A)

  if (water < B) {
    ok = false
    break
  }

  water -= B
}

console.log(ok ? 'Yes' : 'No')
</script>
