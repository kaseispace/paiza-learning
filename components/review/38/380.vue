<script setup lang="ts">
const lines = [
  '2 3',
  '###',
  '...',
]
const [n, m] = lines[0].split(' ').map(Number)
const grid = lines.slice(1)

let vertical = true
for (let i = 0; i < n && vertical; i++) {
  for (let j = 0; j < m; j++) {
    if (grid[i][j] !== grid[i][m - 1 - j]) {
      vertical = false
      break
    }
  }
}

let horizontal = true
for (let i = 0; i < n && horizontal; i++) {
  for (let j = 0; j < m; j++) {
    if (grid[i][j] !== grid[n - 1 - i][j]) {
      horizontal = false
      break
    }
  }
}

const lineSymmetry = vertical || horizontal

let pointSymmetry = true
for (let i = 0; i < n && pointSymmetry; i++) {
  for (let j = 0; j < m; j++) {
    if (grid[i][j] !== grid[n - 1 - i][m - 1 - j]) {
      pointSymmetry = false
      break
    }
  }
}

if (lineSymmetry && pointSymmetry) {
  console.log('line point symmetry')
}
else if (lineSymmetry) {
  console.log('line symmetry')
}
else if (pointSymmetry) {
  console.log('point symmetry')
}
else {
  console.log('none')
}
</script>
