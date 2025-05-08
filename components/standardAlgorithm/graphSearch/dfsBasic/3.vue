<script setup lang="ts">
const lines = [
    "5 2",
    "1 2",
    "1 3",
    "2 4",
    "4 5"
];
const [N, X] = lines[0].split(' ').map(Number);
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

const visited: Set<number> = new Set();

const dfs = (node: number) => {
    console.log(node);
    visited.add(node);
    
    for(const neighbors of graph.get(node) || []) {
        if(!visited.has(neighbors)) {
            dfs(neighbors);
        }
    }
};

dfs(X);
</script>