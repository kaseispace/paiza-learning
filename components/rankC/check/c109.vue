<script setup>
const n = Number(lines[0]);
const rank = [];
const userMap = new Map();

for(let i = 1; i <= n; i++) {
    const userId = lines[i];
    const match = userId.match(/\d+$/);
    
    if(match) {
        rank.push(match[0]);
        userMap.set(match[0], userId);
    }
}

rank.sort((a, b) => a - b);
rank.forEach(num => {
    console.log(userMap.get(num))
})
</script>