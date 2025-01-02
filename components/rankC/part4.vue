<script setup lang="ts">
const lines = ['0', '1']
const [a, b] = lines[0].split(' ').map(Number);
const c = a & b; // AND計算
const s = a ^ b; // XOR計算
console.log(c + ' ' + s);

// 全加算器
const lines1 = ['0', '1', '1']
const [a1, b1, c1] = lines1[0].split(' ').map(Number);
  function halfAdder(a, b) {
      const sum1 = a ^ b;
      const carry1 = a & b;
      
      return [sum1, carry1];
  }
  
  const [sum1, carry1] = halfAdder(a1, b1);
  const [sum2, carry2] = halfAdder(c1, sum1);
  
  const carry3 = carry1 ^ carry2;
  
  console.log(carry3 + ' ' + sum2);

// 論理演算
const [a2, b2, c2, d2] = lines[0].split(' ').map(Number);
const ab = Number(!a2) & Number(!b2);
const abc = ab | Number(!c2);
const abcd = Number(!abc) ^ d2;
  
console.log(abcd);
// ドモルガンの法則を使った場合
console.log(( ((a2 || b2) && c2) ^ d2));


const lines2 = [
  '3 5',
  '1 2 3',
  '0 10',
  '0 12',
  '2',
  '1',
  '2'
]
const [a3, b3] = lines2[0].split(' ').map(Number);
const n = lines2[1].split(' ').map(Number);

for(let i = 2; i < lines2.length; i++) {
  switch (lines2[i][0]) {
    case '0':
      const m = lines2[i].split(' ').map(Number);
      n.push(m[1]);
      break;
    case '1':
      n.pop();
      break;
      case '2':
        console.log(n.join(' '));
        break;
  }
}
</script>