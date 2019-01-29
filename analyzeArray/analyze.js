const analyze = (arrayInput) => {
  const length = arrayInput.length
  const average = arrayInput.reduce((prev, curr) => prev + curr , 0)/length
  const max = Math.max(...arrayInput)
  const min = Math.min(...arrayInput)

  return {average, min, max, length}
}

module.exports = analyze