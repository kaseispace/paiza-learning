<script setup lang="ts">
const S = 'DDRRAAAAALLLRB'

const commands = {
  LLLRB: 'rolling',
  DDRRA: 'upper',
  AAAAA: 'rush',
}

let i = 0
while (i < S.length) {
  let matched = false
  for (const [cmd, name] of Object.entries(commands)) {
    if (S.startsWith(cmd, i)) {
      console.log(name)
      i += cmd.length // コマンド分を消費
      matched = true
      break
    }
  }
  if (!matched) {
    i++
  }
}
</script>
