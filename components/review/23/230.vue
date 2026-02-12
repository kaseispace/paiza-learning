<script setup lang="ts">
const lines = ['3']
const n = Number(lines[0].trim())

const used: boolean[] = Array(n + 1).fill(false)
const perm: number[] = []
const out: string[] = []

const dfs = () => {
  if (perm.length === n) {
    out.push(perm.join(' '))
    return
  }

  for (let i = 1; i <= n; i++) {
    if (!used[i]) {
      used[i] = true
      perm.push(i)
      dfs()
      perm.pop()
      used[i] = false
    }
  }
}

dfs()
console.log(out.join('\n'))
</script>
