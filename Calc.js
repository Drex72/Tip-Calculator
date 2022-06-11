function calculateTip(bill, oldRate, people) {
  let rate = parseInt(oldRate) / 100
  let tipAmount = (bill / people) * rate
  let total = bill / people + tipAmount
  console.log(total)
}

calculateTip(200, '10%', 8)
