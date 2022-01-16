async function async1() {
  console.log('a1 start')
  await async2()
  console.log('a1 end')
}

async function async2() {
  console.log('a2')
}

setTimeout(() => console.log('setTimeout'))

async1()
console.log('start')

new Promise((resolve) => {
  console.log('p1')
  resolve()
}).then(() => {
  console.log('p2')
})

console.log('end')