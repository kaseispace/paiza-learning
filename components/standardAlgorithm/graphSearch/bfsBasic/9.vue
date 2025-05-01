<script setup lang="ts">
const lines = [
    '8 1 7',
    '1 2',
    '1 3',
    '3 4',
    '3 5',
    '4 6',
    '5 7',
    '5 8'
];
const [N, X, Y] = lines[0].split(' ').map(Number);
const edges = lines.slice(1).map(line => line.split(' ').map(Number));
const connections: Map<number, number[]> = new Map();

// 隣接リストの構築
for(const [a, b] of edges) {
    if(!connections.has(a)) connections.set(a, []);
    if(!connections.has(b)) connections.set(b, []);
    connections.get(a)!.push(b);
    connections.get(b)!.push(a);
}

const queue: [number, number[]][] = [[X, [X]]]; // [現在の頂点、　ここまでの経路]
const visited: Set<number> = new Set();
visited.add(X);

while(queue.length > 0) {
    const next = queue.shift();
    if(!next) break;

    const [node, path] = next;
    
    if(node === Y) {
        path.forEach(node => console.log(node));
        break;
    }
    
    for(const nextNode of (connections.get(node) || [])) {
        if(!visited.has(nextNode)) {
            visited.add(nextNode);
            queue.push([nextNode, [...path, nextNode]]);
        }
    }
}
</script>