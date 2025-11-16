<script setup lang="ts">
type Student = {
  height: number
  name: string
}

const lines = [
  '3',
  '173 Hashimoto',
  '195 Yamamoto',
  '113 Yoshida',
]
const N = parseInt(lines[0], 10)
const students: Student[] = []

for (let i = 1; i <= N; i++) {
  const [A, S] = lines[i].split(' ')
  students.push({ height: parseInt(A, 10), name: S })
}

students.sort((a, b) => b.height - a.height)

for (const st of students) {
  console.log(st.name)
}
</script>
