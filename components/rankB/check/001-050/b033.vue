<script setup lang="ts">
const lines = [
  '2',
  'id name',
  '3',
  '1 ito',
  '2 sakakibara',
  '3 takahashi',
]
const W = Number(lines[0])
const headers = lines[1].split(' ')
const H = Number(lines[2])
const data = lines.slice(3).map(line => line.split(' '))
const maxLength: number[] = Array(W).fill(0)
const result: string[][] = Array.from({ length: H + 2 }, () => [])

for (let i = 0; i < W; i++) {
  maxLength[i] = headers[i].length

  for (let j = 0; j < H; j++) {
    maxLength[i] = Math.max(maxLength[i], data[j][i].length)
  }
}

const formatCell = (text: string, width: number) => ' ' + text + ' '.repeat(width - text.length) + ' |'

//  見出しの作成
headers.forEach((header, i) => {
  if (i === 0) {
    result[0].push('|')
  }

  result[0].push(formatCell(header, maxLength[i]))
})

// 仕切りの作成
for (let i = 0; i < W; i++) {
  if (i === 0) {
    result[1].push('|')
  }

  const margin = maxLength[i] + 2
  result[1].push('-'.repeat(margin) + '|')
}

// データの作成
data.forEach((D, i) => {
  D.forEach((d, j) => {
    if (j === 0) {
      result[i + 2].push('|')
    }

    result[i + 2].push(formatCell(d, maxLength[j]))
  })
})

result.forEach(col => console.log(col.join('')))
</script>
