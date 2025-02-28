<script setup lang="ts">
const lines = [
    '6 3 2',
    '2',
    '4',
    '5'
]
const [N, M, K] = lines[0].split(' ').map(Number);
const boys = lines.slice(1).map(Number);
let reaction = 0;
let count = 0;

for(let i = 1; i <= N; i++) {
    
    if(boys.includes(i)) {
        reaction++;
        if(reaction === K) break;
    }else{
        count++;
        reaction = 0;
    }
}

console.log(count);
</script>