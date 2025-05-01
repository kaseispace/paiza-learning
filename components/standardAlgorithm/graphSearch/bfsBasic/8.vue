<script setup lang="ts">
const lines = [
    '5 3 2',
    '1 2',
    '2 3',
    '3 4',
    '4 5'
];
const [N, X, Y] = lines[0].split(' ').map(Number);
const edges = lines.slice(1).map(line => line.split(' ').map(Number));
const connections: Map<number, number[]> = new Map();

for (const [a, b] of edges) {
    if(!connections.has(a)) connections.set(a, []);
    if(!connections.has(b)) connections.set(b, []);
    connections.get(a)!.push(b);
    connections.get(b)!.push(a);
}

const queue = [[Y, 0]];
const visited: Set<number> = new Set();
visited.add(Y);

while (queue.length > 0) {
    const next = queue.shift();
    if(!next) break;
    
    const [node, depth] = next;
    
    if(node === X) {
        console.log(depth);
        break;
    }
    
    for(const nextNode of connections.get(node) || []) {
        if(!visited.has(nextNode)) {
            queue.push([nextNode, depth + 1]);
            visited.add(nextNode);
        }
    }
}
</script>