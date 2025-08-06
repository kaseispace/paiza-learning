<script setup lang="ts">
const lines = [
  '3 2 4',
  '4 1',
  '4 6',
  '1',
  '3',
]
const [N, _, R] = lines[0].split(' ').map(Number)
const edges = lines.slice(1, N).map(line => line.split(' ').map(Number))
const queries = lines.slice(N).map(Number)

// BST構築
const tree = new Map<number, { left?: number, right?: number }>()

for (const [parent, child] of edges) {
  if (!tree.has(parent)) tree.set(parent, {})
  if (child < parent) {
    tree.get(parent)!.left = child
  }
  else {
    tree.get(parent)!.right = child
  }
}

// 探索関数
const contains = (node: number | undefined, target: number): boolean => {
  while (node !== undefined) {
    if (node === target) return true
    if (target < node) {
      node = tree.get(node)?.left
    }
    else {
      node = tree.get(node)?.right
    }
  }
  return false
}

// クエリ処理
for (const q of queries) {
  console.log(contains(R, q) ? 'Yes' : 'No')
}
</script>
