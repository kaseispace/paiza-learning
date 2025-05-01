<script setup lang="ts">
const lines = [
    '7 5 2',
    '7 5',
    '5 6',
    '1 5',
    '1 4',
    '1 2',
    '1 3'
];
const [N, X, L] = lines[0].split(' ').map(Number);
const edges = lines.slice(1).map(line => line.split(' ').map(Number));
const connections: Map<number, number[]> = new Map();

for(const [a, b] of edges) {
    if(!connections.has(a)) connections.set(a, []);
    if(!connections.has(b)) connections.set(b, []);
    connections.get(a)!.push(b);
    connections.get(b)!.push(a);
}

const queue = [[X, 0]];
const visited: Set<number> = new Set();
visited.add(X);

const result: number[] = [];

while(queue.length > 0) {
    const next = queue.shift();
    if(!next) break;

    const [node, depth] = next;
    
    if(depth === L) {
        result.push(node);
        continue;
    }
    
    for(const nextNode of (connections.get(node) || [])) {
        if(!visited.has(nextNode)) {
            queue.push([nextNode, depth + 1]);
            visited.add(nextNode);
        }
    }
}

result.sort((a, b) => a - b);
result.forEach(num => console.log(num));
</script>