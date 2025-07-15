<script setup lang="ts">
const lines = [
  '4',
  '12',
  '5',
  '36',
  '12',
]
const users = lines.slice(1).map(Number)
const Users = lines.slice(1).map(Number)
const ranking: Map<number, number> = new Map()
let count = 1

users.sort((a, b) => b - a)
users.forEach((user) => {
  if (!ranking.has(user)) {
    ranking.set(user, count)
  }

  count++
})

Users.forEach((user) => {
  console.log(ranking.get(user))
})
</script>
