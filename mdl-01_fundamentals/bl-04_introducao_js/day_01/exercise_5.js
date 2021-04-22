let a = 30
let b = 60
let c = 20

if (a < 0 || b < 0 || c < 0) {
  console.log("ERROR!! Insert valid value")
} else {
  if (a + b + c === 180) {
    console.log(true)
  } else {
    console.log(false)
  }
}
