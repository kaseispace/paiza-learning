<script setup lang="ts">
const lines = [
  '3 5 6 10',
  'paiza',
  'aizap',
  'pazia',
]
const [L, R] = lines[1].split(' ').map(Number)
const grid = lines.slice(2).map(line => line.split(''))
const result: string[] = []

while (result.length < R && grid.length > 0) {
  // 先頭行を抽出
  const startRow = grid.shift()
  if (startRow && startRow.length > 0) {
    result.push(...startRow)
  }

  // 右列抽出
  for (let y = 0; y < grid.length; y++) {
    const val = grid[y].pop()
    if (val !== undefined) {
      result.push(val)
    }
  }

  // 最後の行を抽出
  const lastRow = grid.pop()
  if (lastRow && lastRow.length > 0) {
    result.push(...lastRow.reverse())
  }

  // 左列抽出
  for (let y = grid.length - 1; y >= 0; y--) {
    const val = grid[y].shift()
    if (val !== undefined) {
      result.push(val)
    }
  }
}

console.log(result.slice(L - 1, R).join(''))
</script>
