let str = ''
for (let i = 1; i < 21; i++) {
  if (i % 2) {
    str = ' is odd number.'
  } else {
    str = ' is even number.'
  }
  console.log(i + str)
}