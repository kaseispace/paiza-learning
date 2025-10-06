<script setup lang="ts">
const lines = [
  '10 20 30',
  '10 10 10 10 10',
  '100 200 300 400 500 600',
]
const [y, x, h] = lines[0].split(' ').map(Number)
const [l1, l2, l3, l4, l5] = lines[1].split(' ').map(Number)
const [m1, m2, m3, m4, m5, m6] = lines[2].split(' ').map(Number)

let result = 0

if (h <= l1) {
  if (Math.max(y, x) <= l2) {
    result = m1
  }
  else if (y + x <= l3) {
    result = m2
  }
  else {
    result = m3
  }
}
else if (Math.max(y, x, h) <= l4) {
  result = m4
}
else if (y + x + h <= l5) {
  result = m5
}
else {
  result = y * x * h * m6
}

console.log(result)
</script>
