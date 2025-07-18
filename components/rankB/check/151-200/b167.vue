<script setup lang="ts">
const lines = [
  '5',
  '71717',
  '20002',
  '20417',
  '20700',
  '71600',
]
const N = Number(lines[0])
const grid = lines.slice(1).map(line => line.split('').map(Number))
const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]
const repair: [string, number][] = [
  ['1_1', 1], ['2_2', 2], ['3_3', 5], ['4_4', 6], ['5_5', 3], ['6_6', 4],
  ['1_2', 4], ['2_1_5', 5], ['2_1_3', 6], ['2_1_1', 3],
  ['3_1', 5], ['1_3_3', 4], ['1_3_4', 1],
  ['1_4', 1], ['4_1_1', 3], ['4_1_3', 6],
  ['5_1_4', 1], ['5_1_1', 3], ['5_1_3', 6],
  ['1_6', 4], ['6_1_4', 1], ['6_1_5', 5],
  ['2_3_2', 2], ['2_3_5', 5], ['2_3_3', 6],
  ['4_2', 2], ['2_4_3', 6], ['2_4_5', 5],
  ['2_5', 3], ['5_2_2', 2], ['5_2_3', 4],
  ['6_2', 4], ['2_6_2', 2], ['2_6_1', 3],
  ['3_4', 5], ['4_3_2', 2], ['4_3_3', 6],
  ['5_3_4', 1], ['5_3_2', 2], ['5_3_4', 3],
  ['6_3_4', 1], ['6_3_5', 5], ['6_3_3', 4],
  ['4_5', 3], ['5_4_4', 1], ['5_4_3', 6],
  ['6_4', 1], ['4_6_2', 2], ['4_6_1', 3],
  ['5_6_2', 2], ['5_6_1', 3], ['5_6_3', 4],
]
const repairMap: Map<string, number> = new Map(repair)

grid.forEach((row, y) => {
  for (let x = 0; x < N; x++) {
    // 修理
    if (row[x] === 7) {
      const road = []
      let sum = 0
      for (let i = 0; i < 4; i++) {
        const [dy, dx] = directions[i]
        const ny = dy + y
        const nx = dx + x

        if (ny >= 0 && ny < N && nx >= 0 && nx < N && grid[ny][nx] !== 7 && grid[ny][nx] !== 0) {
          road.push(grid[ny][nx])
          sum += i
        }
      }
      let result = road.join('_')
      if (!repairMap.has(result)) {
        result += `_${sum}`
      }

      grid[y][x] = repairMap.get(result)
    }
  }
})

grid.forEach(row => console.log(row.join('')))
</script>
