<script setup lang="ts">
type Plan = {
  months: number
  price: number
}

const lines = ['123 456']
const [A, B] = lines[0].split(' ').map(Number)
const plans: Plan[] = [
  { months: 12, price: 7200 },
  { months: 6, price: 4080 },
  { months: 1, price: 880 },
]

function normalPlansCost(months: number) {
  const dp: number[] = Array(months + 1).fill(0)
  const choice: number[] = Array(months + 1).fill(0)

  for (let remaining = 1; remaining <= months; remaining++) {
    let bestCost = Infinity
    let bestPlan = 0

    for (const plan of plans) {
      const next = Math.max(0, remaining - plan.months)
      const cost = plan.price + dp[next]

      if (cost < bestCost) {
        bestCost = cost
        bestPlan = plan.months
      }
    }

    dp[remaining] = bestCost
    choice[remaining] = bestPlan
  }

  return { dp, choice }
}

function makePlanList(months: number, choice: number[]) {
  const result: string[] = []
  let remaining = months

  while (remaining > 0) {
    const plan = choice[remaining]

    result.push(String(plan))
    remaining -= plan
  }

  return result
}

function solve(months: number) {
  if (months === 0) {
    return { cost: 0, list: ['0'] }
  }

  const { dp, choice } = normalPlansCost(months)

  let minCost = dp[months]
  let planList = makePlanList(months, choice)

  if (months >= 2) {
    const campaignCost = 880 + dp[months - 2]

    if (campaignCost < minCost) {
      minCost = campaignCost
      planList = ['2', ...makePlanList(months - 2, choice)]
    }
  }

  return { cost: minCost, list: planList }
}

const planA = solve(A)
const planB = solve(B)

console.log(planA.cost + planB.cost)
console.log(planA.list.join(' '))
console.log(planB.list.join(' '))
</script>
