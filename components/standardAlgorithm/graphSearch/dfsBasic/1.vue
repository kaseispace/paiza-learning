<script setup lang="ts">
type DFSParams = {
    H: number;
    W: number;
    x: number;
    y: number;
    depth: number;
}
const lines = ['7 7 3 3'];
const [H, W, y, x] = lines[0].split(' ').map(Number); 
const depth: number = 0;

const dfs = (data: DFSParams) => {
    if(data.depth === 3) {
        console.log(y, x)
        return; 
    }
    
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]; 
    
    for(const [dy, dx] of directions) {
        const ny = dy + data.y;
        const nx = dx + data.x;
        
        if(ny < 0 || ny >= H || nx < 0 || nx >= W) continue;
        
        const nextData: DFSParams = {H: data.H, W: data.W, y: ny, x: nx, depth: data.depth + 1};
        dfs(nextData); 
    }
};

const data: DFSParams = {H, W, y, x, depth}
dfs(data);
</script>