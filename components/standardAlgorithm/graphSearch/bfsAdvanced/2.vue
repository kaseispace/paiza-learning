<script setup lang="ts">
type BFSParams = {
    x: number;
    y: number;
    connections: Map<number, number[]>;
}
const lines = [
    '5 6 1 5',
    '1 2',
    '2 3',
    '1 4',
    '2 4',
    '2 5',
    '5 3'
];
const [N, M, X, Y] = lines[0].split(' ').map(Number);
const edges = lines.slice(1).map(line => line.split(' ').map(Number));
const connections: Map<number, number[]> = new Map();

for(const [a, b] of edges) {
    if(!connections.has(a)) connections.set(a, []);
    if(!connections.has(b)) connections.set(b, []);
    connections.get(a)!.push(b);
    connections.get(b)!.push(a);
}

const findShortestDistance = (data: BFSParams) => {
    const queue = [[data.x, 0]];
    const visited = new Set();
    visited.add(data.x);

    while(queue.length > 0) {
        const next = queue.shift();
        if(!next) break;

        const [node, depth] = next;
        
        if(node === data.y) {
            console.log(depth);
            return;
        }
        
        for(const nextNode of (data.connections.get(node) || [])) {
            if(!visited.has(nextNode)) {
                visited.add(nextNode);
                queue.push([nextNode, depth + 1]);
            }
        }
    }
    
    console.log('-1');
}

const data: BFSParams = {x: X, y: Y, connections};
findShortestDistance(data);
</script>