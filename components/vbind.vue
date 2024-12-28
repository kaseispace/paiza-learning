
<script setup lang="ts">
const id = 'name'
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
  style: 'background-color:green'
}

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

// 算出プロパティの参照
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})

let lines = ['aa bb cc']
const array = lines[0].split(' ')


// splitは、指定された区切り文字や正規表現で分割し、配列を返す（例：['aa', 'bb', 'cc']）
console.log(lines[0].split(' ').join('\n'));
for (let i = 0; i < array.length; i++) {
  console.log(array[i])
}

// 商と余りを求める
const A = 437326;
const B = 9085;
    
// 小数点以下を切り捨てるMath関数
const remainder = Math.floor( A / B);
const quotient = A % B;
console.log(remainder, + ' ' + quotient);


// 累乗の計算
const numA = 202;
const numB = 134;
const numC = 107;
    
console.log(Math.pow((numA + numB) * numC, 2));

// es6以上なら
// console.log(((numA + numB) * numC) ** 2);

// 以上以下の条件式（参考演算子を使った例）、>=（以上）、<=（以下）
console.log(200 <= 100 ? 'YES' : 'NO');


for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

// 最も小さい数字を見つける
const minArray = [397, 646, 12312, 256, 789]
console.log(Math.min(...minArray));
// console.log(Math.max(...minArray));

// forを使う場合
let result = minArray[0]
for (let i = 1; i < minArray.length; i++) {
 if(minArray[i] < result) {
  result = minArray[i]
 }
}
console.log(result)

// 文字列の繰り返し
const lines2 = ['3']
const word = '*'.repeat(parseInt(lines2[0], 10))
console.log(word)
</script>


<template>
<!-- 同名省略記法 -->
<div :id>Hello</div>

<!-- 複数の属性を動的にバインドさせる -->
<div v-bind="objectOfAttrs">Hello</div>

<span>{{ publishedBooksMessage }}</span>
</template>