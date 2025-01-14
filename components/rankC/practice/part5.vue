<script setup lang="ts">
// 数値の出現率
const lines = [
    '5',
    '1 2 3 3 6'
]
 const n = parseInt(lines[0]);
  const a = lines[1].split(' ').map(Number);
  let result = Array(10).fill(0);
  
  for (let i = 0; i < a.length; i++) {
      result[a[i]]++;
  }
  console.log(result.join(' '));

// 文字列の出現率1
const m = ['apple', 'banana', 'apple']
let output = '';
const fre = m.reduce((acc, cur) => {
    // 現在の値がcurにあり、例えば、acc['apple']
    // acc['apple']がまだ存在しない場合は、undefinedになるので0を、ある場合は1を加算する
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
}, {});

// entriesは、指定されたオブジェクトの自身の列挙可能なプロパティ [key, value] ペアの配列を返す
// { apple: 2, banana: 1 } なら、[['apple', 2], ['banana', 1]]
// Object.entries() によって生成された配列の中身は [key, value] ペアの配列、キーとして key1 と key2 の文字列のみが localeCompare で比較
const sortedEntries = Object.entries(result).sort(([key1], [key2]) => key1.localeCompare(key2));

// ソートされたsortedEntriesに対し、それぞれの値を取り出す
for(const [key, value] of sortedEntries) {
    output += `${key} ${value}\n`
}
console.log(output.trim())

// 文字列の出現率2(自分で無理なく書ける)
const lines2 = [
    '5',
    'bcd',
    'abc',
    'bcd',
    'bcd',
    'bcd',
]
lines2.shift();
lines2.sort();
const s = new Map();
  
  for(let i = 0; i < lines2.length; i++) {
      switch (s.has(lines2[i])) {
          case false:
              s.set(lines2[i], 1);
              break;
          case true:
               s.set(lines2[i], s.get(lines2[i]) + 1);
              break;
      }
  }
  
  for(const [key, value] of s) {
       console.log(key, value);
  }
</script>