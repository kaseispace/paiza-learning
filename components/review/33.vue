<script setup lang="ts">
const lines = [
  '2 7',
  'nene',
  'ao',
  'handshake',
  'leave nene',
  'join neko',
  'join koko',
  'handshake',
  'leave neko',
  'handshake',
]

const [n, k] = lines[0].split(' ').map(Number)
const users = new Set()

for (let i = 1; i <= n; i++) {
  users.add(lines[i])
}

for (let i = n + 1; i <= n + k; i++) {
  const data = lines[i].split(' ')

  switch (data[0]) {
    case 'join':
      users.add(data[1])
      break
    case 'leave':
      users.delete(data[1])
      break
    case 'handshake':
      if (users.size !== 0) {
        Array.from(users).sort().forEach(user => console.log(user))
      }
      break
  }
}
</script>
