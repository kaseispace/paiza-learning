<script setup lang="ts">
function main() {
  const S = ['nopaizanostudy']

  if (S.includes('paiza')) {
    console.log('paiza')
    return
  }

  const leetMap = [
    ['p'],
    ['a', '4', '@'],
    ['i', '1', '!'],
    ['z', '2'],
    ['a', '4', '@'],
  ]

  for (let i = 0; i <= S.length - 5; i++) {
    const slice = S.slice(i, i + 5)
    let match = true
    for (let j = 0; j < 5; j++) {
      if (!leetMap[j].includes(slice[j])) {
        match = false
        break
      }
    }
    if (match) {
      console.log('leet')
      return
    }
  }

  console.log('nothing')
}

main()
</script>
