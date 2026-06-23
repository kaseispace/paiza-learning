<script setup lang="ts">
const lines = [
  '1 2',
  '4 1',
  '0 -2',
  '-3 0',
  '7 8',
]
const [N, M] = lines[0].split(' ').map(Number)

let idx = 1
const A: number[][][][] = []

for (let i = 0; i < N; i++) {
  A.push([])

  for (let j = 0; j < N; j++) {
    const mat: number[][] = []

    for (let r = 0; r < M; r++) {
      mat.push(lines[idx++].split(' ').map(Number))
    }

    A[i].push(mat)
  }
}

const B: number[][][][] = []

for (let i = 0; i < N; i++) {
  B.push([])

  for (let j = 0; j < N; j++) {
    const mat: number[][] = []

    for (let r = 0; r < M; r++) {
      mat.push(lines[idx++].split(' ').map(Number))
    }

    B[i].push(mat)
  }
}

const ans: string[] = []

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    for (let r = 0; r < M; r++) {
      const row: number[] = []

      for (let c = 0; c < M; c++) {
        row.push(A[i][j][r][c] + B[i][j][r][c])
      }

      ans.push(row.join(' '))
    }
  }
}

console.log(ans.join('\n'))
</script>
