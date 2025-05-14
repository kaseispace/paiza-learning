<script setup lang="ts">
const s = 'a9!-9999';
const pattern = /\w{3}-\d{3,4}/;
const match = pattern.exec(s);
console.log(match?.index);

const s2 = '\[1 + 1 = 2\] \(x^2 + y^2 = z^2\)';
const pattern2 = /\\\(.*\\\)$/;
const match2 = pattern2.exec(s2);
console.log(match2?.index);

const s3 = 'Re: Checking in on your progress';
const pattern3 = /^Re:/;
const match3 = pattern3.test(s3);
console.log(match3 ? 'Yes' : 'No');

const s4 = '%20 %E3%83%91%E3%82%A4%E3%82%B6';
const pattern4 = /(%[a-zA-Z0-9]{2}){2,}/;
const match4 = pattern4.exec(s4);
console.log(match4?.index);
</script>