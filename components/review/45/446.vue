<script setup lang="ts">
const lines = [
  '5',
  'usr 0 1 2',
  'local 0 1 3',
  'bin 0 2 4 5',
  'gcc 100 0',
  'clang 200 0',
]
const n = Number(lines[0])

const names: string[] = Array(n)
const children = Array(n)
const sizes: number[] = Array(n).fill(0)

for (let i = 0; i < n; i++) {
  const data = lines[i + 1].split(' ')

  names[i] = data[0]

  if (data[1] === '0') {
    const childCount = Number(data[2])

    children[i] = []

    for (let j = 0; j < childCount; j++) {
      children[i].push(Number(data[j + 3]) - 1)
    }
  }
  else {
    sizes[i] = Number(data[1])
    children[i] = null
  }
}

for (let i = n - 1; i >= 0; i--) {
  if (children[i] === null) {
    continue
  }

  let total = 0

  for (const child of children[i]) {
    total += sizes[child]
  }

  sizes[i] = total
}

const answer: string[] = []

for (let i = 0; i < n; i++) {
  answer.push(`${names[i]} ${sizes[i]}`)
}

console.log(answer.join('\n'))
</script>
