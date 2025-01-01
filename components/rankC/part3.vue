<script setup lang="ts">
const lines = [
    "3", 
    "1 8",
    "2 8 1",
    "3 8 1 3"
]

for(let i = 1; i < lines.length; i++) { 
    const n = lines[i].split(' '); 
    const result = []; 
    
    for(let j = 1; j <= n.length; j++) { 
        result.push(n[j]); 
    } 
    console.log(result.join(' ').trim()); 
}

console.log(parseInt("123aa23"))
</script>