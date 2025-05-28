<script setup lang="ts">
const lines = [
  '5 8',
  '00000100',
  '00001100',
  '00011100',
  '00111110',
  '11111111',
]
const [H, W] = lines[0].split(' ').map(Number)
const pixelGrid = lines.slice(1).map(line => line.split('').map(Number))
const mountainStarts: number[] = []
const mountainEnds: number[] = []
let largestMountainSize = 0

let inMountain = false
for (let col = 0; col < W; col++) {
  if (pixelGrid[H - 1][col] === 1 && !inMountain) {
    mountainStarts.push(col)
    inMountain = true
  }
  else if (pixelGrid[H - 1][col] === 0 && inMountain) {
    mountainEnds.push(col)
    inMountain = false
  }
  else if (col === W - 1 && inMountain) {
    mountainEnds.push(col)
    inMountain = false
  }
}

mountainStarts.forEach((startCol, i) => {
  const endCol = Math.min(mountainEnds[i] + 1, W)
  const mountainSize = pixelGrid.reduce((totalSize, row) =>
    totalSize + row.slice(startCol, endCol).reduce((sum, pixel) => sum + pixel, 0),
  0)

  largestMountainSize = Math.max(largestMountainSize, mountainSize)
})

console.log(largestMountainSize)
</script>
