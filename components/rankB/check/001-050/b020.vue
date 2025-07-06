<script setup lang="ts">
const lines = [
  '5',
  'go to blank page',
  'go to bja n',
  'go to va',
  'use the back button',
  'use the back button',
]
const actions = lines.slice(2).map(line => line.split(' '))
const pages = ['blank page']

console.log('blank page')

actions.forEach((page) => {
  if (page[0] === 'go') {
    const p = page.slice(2).join(' ')
    pages.push(p)
    console.log(p)
  }
  else {
    pages.pop()
    console.log(pages[pages.length - 1])
  }
})
</script>
