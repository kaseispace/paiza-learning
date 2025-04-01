<script setup lang="ts">
const s = 'Send an email to contact@mydomain.com or admin@server.net.';
const pattern = /\S+@\S+/;
const match = s.match(pattern);
match?.forEach(w => console.log(w));

const s2 = '12.01/1900 12.02/1900';
const pattern2 = /\d{2}@\d{2}/;
const match2 = s2.replace(pattern2, match => match.replace('.', '/'));
console.log(s2);

const s3 = 's = raw_input("(Y/n)") + raw_input()';
const pattern3 = /raw_input/g;
const match3 = s3.replace(pattern3, 'input');
console.log(match3);

const s4 = '';
const pattern4 = /-{3,}/g;
const result = s4.split(pattern4);
result.forEach(w => console.log(w));
</script>