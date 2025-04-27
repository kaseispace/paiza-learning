<script setup lang="ts">
const lines = [
    '7 7',
    '7 5',
    '5 6',
    '1 5',
    '1 4',
    '1 2',
    '1 3'
];
const [N, X] = lines[0].split(' ').map(Number);
const edges = lines.slice(1).map(line => line.split(' ').map(Number));
const adjList: Map<number, number[]> = new Map();

// 各頂点が隣接する頂点を探す
for(const [a, b] of edges) {
    if(!adjList.has(a)) adjList.set(a, []);
    if(!adjList.has(b)) adjList.set(b, []);
    adjList.get(a)!.push(b);
    adjList.get(b)!.push(a);
}

// 幅優先探索
const queue = [[X, 0]];
const visited: Set<number> = new Set();
visited.add(X);

const result: number[] = [];

while(queue.length > 0) {
    const next = queue.shift();
    if(!next) break;

    const [node, depth] = next;
    
    if(depth === 3) {
        result.push(node);
        continue;
    }
    
    for(const neighbor of (adjList.get(node) || [])) {
        if(!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push([neighbor, depth + 1]);
        }
    }
}

result.sort((a, b) => a - b);
result.forEach(num => console.log(num));
</script>