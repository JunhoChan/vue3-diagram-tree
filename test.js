// console.log(process.argv)
// console.log(process.argv.slice(2))
// console.log("--start".startsWith("--"))
['--port', '3000'].reduce((memo, current, index, arr) => {
  console.log(current)
  if(current.startsWith('--')) {
    memo[current.slice(2)] = arr[index + 1]
  }
  return memo
}, {})
