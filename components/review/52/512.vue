<script setup lang="ts">
const lines = [
  '2 2',
  '1 2',
  '3 4',
]
const [n, k] = lines[0].split(' ').map(Number)
const MOD = 10000000

let A = new Float64Array(n * n)
for (let i = 0; i < n; i++) {
  const row = lines[1 + i].split(' ').map(Number)

  for (let j = 0; j < n; j++) {
    A[i * n + j] = row[j] % MOD
  }
}

function mul(X: Float64Array, Y: Float64Array) {
  const Z = new Float64Array(n * n)

  for (let i = 0; i < n; i++) {
    for (let t = 0; t < n; t++) {
      const x = X[i * n + t]
      if (x === 0) {
        continue
      }

      for (let j = 0; j < n; j++) {
        Z[i * n + j] = (Z[i * n + j] + x * Y[t * n + j]) % MOD
      }
    }
  }

  return Z
}

let R = new Float64Array(n * n)
for (let i = 0; i < n; i++) {
  R[i * n + i] = 1
}

let e = k
while (e > 0) {
  if (e % 2 === 1) {
    R = mul(R, A)
  }

  A = mul(A, A)
  e = Math.floor(e / 2)
}

let ans = 0
for (let i = 0; i < n * n; i++) {
  ans = (ans + R[i]) % MOD
}

console.log(String(ans))
</script>
