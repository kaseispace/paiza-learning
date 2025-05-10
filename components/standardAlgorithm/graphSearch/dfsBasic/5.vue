<script setup lang="ts">
const lines = [
    '6 1 5',
    '1 2',
    '1 3',
    '1 4',
    '2 5',
    '3 6'
];
const [N, X, Y] = lines[0].split(" ").map(Number);
const edges = lines.slice(1).map(line => line.split(" ").map(Number));

function compareBFSandDFS(N: number, X: number, Y: number, edges: number[][]) {
    const graph: number[][] = Array.from({ length: N }, () => []);
    for (const [a, b] of edges) {
        graph[a - 1].push(b - 1);
        graph[b - 1].push(a - 1);
    }
    
    function dfs(stack: number[], seen: number[], times: number) {
        const now = stack.pop();
        if (now === Y - 1) return times;
        
        for (const next of graph[now!].sort((s, b) => b - s)) {
            if (!seen.includes(next)) {
                stack.push(next);
                seen.push(next);
            }
        }
        return dfs(stack, seen, times + 1);
    }
    
    function bfs(queue: number[], seen: number[], times: number) {
        const now = queue.shift();
        if (now === Y - 1) return times;
        
        for (const next of graph[now!].sort((s, b) => s - b)) {
            if (!seen.includes(next)) {
                queue.push(next);
                seen.push(next);
            }
        }
        return bfs(queue, seen, times + 1);
    }
    
    const dfsCount = dfs([X - 1], [X - 1], 0);
    const bfsCount = bfs([X - 1], [X - 1], 0);
    
    if (dfsCount === bfsCount) {
        console.log("same");
    } else {
        console.log(dfsCount! < bfsCount! ? "dfs" : "bfs");
    }
}

compareBFSandDFS(N, X, Y, edges);
</script>