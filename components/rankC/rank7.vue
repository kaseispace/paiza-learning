<script setup lang="ts">
const lines = [
    "3 2", 
    "a", 
    "b", 
    "c",
    "b",
    "d"
];

  const [n, m] = lines.shift().split(' ').map(Number);
  const x = lines.slice(0, n);
  const s = lines.slice(n);
  
  
  for(let i = 0; i < m; i++) {
      const num = x.findIndex(item => item == s[i]);
      if(num !== -1) {
           console.log(num + 1);
      } else {
          console.log(num);
      }
  }
</script>