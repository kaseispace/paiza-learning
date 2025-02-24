<script setup>
const n = Number(lines[0]);
const keyword = lines[1];
let foundLogs = [];

for(let i = 2; i <= n + 1; i++) {
    if(lines[i].includes(keyword)) {
        foundLogs.push(lines[i]);
    }
}

if(foundLogs.length > 0) {
    foundLogs.forEach(log => console.log(log));
}else{
    console.log('None');
}
</script>