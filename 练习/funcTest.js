const a = 1
function foo() {
  const a = 2
  return function () {
    console.log(a)
  }
}

function bar() {
  const a = 3
  const b = foo()
  return b
}

const run = bar()
run()