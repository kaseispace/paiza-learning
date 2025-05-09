<script setup lang="ts">
const lines = [
    '6 1 5',
    '1 2',
    '1 3',
    '1 4',
    '2 5',
    '3 6'
];
const [N, X, Y] = lines[0].split(' ').map(Number);
const edges = lines.slice(1).map(line => line.split(' ').map(Number));
const graph: Map<number, number[]> = new Map();

for(const [a, b] of edges) {
    if(!graph.has(a)) graph.set(a, []);
    if(!graph.has(b)) graph.set(b, []);
    graph.get(a)!.push(b);
    graph.get(b)!.push(a);
}

for(const [node, neighbors] of graph.entries()) {
    neighbors.sort((a, b) => a - b);
}

// 幅優先探索
let bfs_queue = [X];
const bfs_visited: Set<number> = new Set();
bfs_visited.add(X);
let bfs_result = 0;

while(bfs_queue.length > 0) {
    const node = bfs_queue.shift();
    if(!node) break;
    if(node === Y) {
        bfs_result = bfs_visited.size;
        break;
    }
    
    
    for(const nextNode of graph.get(node) || []) {
        if(!bfs_visited.has(nextNode)) {
            bfs_queue.push(nextNode);
            bfs_visited.add(nextNode);
        }
    }
}

// 深さ優先探索
let dfs_queue = [X];
const dfs_visited: Set<number> = new Set();
dfs_visited.add(X);
let dfs_result = 0;

const dfs = (x: number) => {
    if(x === Y) {
        dfs_result = dfs_visited.size;
        return;
    }
    
    for(const nextNode of graph.get(x) || []) {
        if(!dfs_visited.has(nextNode)) {
            dfs_visited.add(nextNode);
            dfs(nextNode);
        }
    }
    
    dfs_queue = dfs_queue.sort((a, b) => a - b);
};

dfs(X);

console.log(bfs_result === dfs_result ? 'same' : bfs_result > dfs_result ? 'dfs' : 'bfs');
</script>