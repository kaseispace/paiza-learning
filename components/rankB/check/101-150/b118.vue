<script setup lang="ts">
const lines = [
  '5',
  'aria 145 12',
  'bim 132 8',
  'cindy 178 4',
  'deen 145 3',
  'emma 145 3',
]
const N = Number(lines[0])
const students: [string, number, number][] = []

for (let i = 1; i <= N; i++) {
  const [x, y, z] = lines[i].split(' ')
  students.push([x, Number(y), Number(z)])
}

students.sort((a, b) => {
  if (a[1] !== b[1]) {
    return a[1] - b[1]
  }
  else if (a[2] !== b[2]) {
    return b[2] - a[2]
  }
  else {
    return a[0].localeCompare(b[0])
  }
})

students.forEach(student => console.log(student[0]))
</script>
