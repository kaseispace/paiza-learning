<script setup lang="ts">
const lines = [
  '4 1 5',
  '3 1 2 4',
  '1 1 1 msgA',
  '2 0 4 msgB',
  '4 1 1 msgC',
  '3 0 1 msgD',
  '2 1 1 msgE',

]
const [n, g, m] = lines[0].split(' ').map(Number)
const chatMessage: string[][] = Array.from({ length: n }, () => [])
const groupsMap: Map<number, number[]> = new Map()

for (let i = 1; i <= g; i++) {
  const group = lines[i].split(' ').map(Number)
  groupsMap.set(i, [])
  for (let j = 1; j <= group[0]; j++) {
    groupsMap.get(i)!.push(group[j])
  }
}

for (let i = g + 1; i <= g + m; i++) {
  const [s, c, t, msg] = lines[i].split(' ')
  const S = Number(s) - 1
  const C = Number(c)
  const T = Number(t) - 1

  // 社員向け
  if (C === 0) {
    chatMessage[S].push(msg)
    chatMessage[T].push(msg)
  }
  else {
    // 存在確認
    const group = groupsMap.get(T + 1)!
    if (group.includes(S + 1)) {
      for (let j = 0; j < group.length; j++) {
        const num = group[j] - 1
        chatMessage[num].push(msg)
      }
    }
  }
}

chatMessage.forEach((chat, i) => {
  for (let i = 0; i < chat.length; i++) {
    console.log(chat[i])
  }

  if (i < n - 1) {
    console.log('--')
  }
})
</script>
