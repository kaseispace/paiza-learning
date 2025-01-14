<script setup lang="ts">
// 1~10までの数値を半角スペース区切りで表示
const data = Array.from({length : 10}, (_, i) => i + 1).join(' ') + ' '
console.log(data);

// 配列内の要素を一行に表示する
const lines = ['q', 'bpdi', 'u', 'ky', 'meqt', 'rrnc', 'co', 'jjw', 'e', 'fwio']
const data2 = lines.join(' ')
console.log(data2);

// 配列内の要素を'|'でつなげる
console.log(lines.join('|'))

// ある要素を別の要素の置換（ここでは、スペースを点に置換し、最後に点を追加）
console.log(lines[0].replace(/ /g, ',') + ',');

// lines2が数値として無効な文字列である場合、NaNになることに注意
const lines2 = ['15070963905637201951972668392497062111663006737465271733530338682355401465585936270']
console.log(parseInt(lines2[0], 10).toLocaleString());

// BigIntは大きい数字にも対応している
console.log('大きい値', BigInt(lines2[0]).toLocaleString());

// 3の倍数であることが決まっていた場合
// 単純に先頭から順に取り出す
const data3 = lines2[0];
    let result3 = '';
    
    for (let i = 0; i < data.length; i += 3) { 
        result3 += data3.slice(i, i + 3) + ',';
        
    }
    console.log('3の倍数', result3.substring(0, result3.length - 1));

// 不定であった場合
// 単純に先頭から順に取り出すとカンマの位置がおかしくなる
// 文字列を逆にし、逆にしたものの先頭からカンマをつけていく
const data4 = lines2[0]
const rev = data4.split('').reverse().join('')
let result4 = ''

for (let i = 0; i < rev.length; i += 3) { 
    result4 += rev.slice(i, i + 3) + ','
}
console.log('不定の場合', result4.split('').reverse().join('').substring(1))



</script>

<template>
    <div></div>
</template>