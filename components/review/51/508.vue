<script setup lang="ts">
const lines = ['3 5 7 1000']
const [p1, p2, p3, k] = lines[0].split(' ').map(Number)
const seq = [1]

let i1 = 0
let i2 = 0
let i3 = 0

while (seq.length < k) {
  const c1 = seq[i1] * p1
  const c2 = seq[i2] * p2
  const c3 = seq[i3] * p3
  const next = Math.min(c1, c2, c3)
  seq.push(next)

  if (c1 === next) {
    i1++
  }

  if (c2 === next) {
    i2++
  }

  if (c3 === next) {
    i3++
  }
}

console.log(String(seq[k - 1]))
</script>
