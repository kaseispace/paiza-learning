<script setup lang="ts">
const lines = [
  '6 9 E',
  'R',
]
const [Y, X, D] = lines[0].split(' ') as [number, number, string]
const d = lines[1]

let y = Y
let x = X

if (D === 'N') {
  if (d === 'L') {
    x--
  }
  else {
    x++
  }
}
else if (D === 'S') {
  if (d === 'L') {
    x++
  }
  else {
    x--
  }
}
else if (D === 'E') {
  if (d === 'L') {
    y--
  }
  else {
    y++
  }
}
else if (d === 'L') {
  y++
}
else {
  y--
}

console.log(y, x)
</script>
