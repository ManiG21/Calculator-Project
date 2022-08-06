let numbersAll = document.querySelectorAll(".numbers")
let operationsAll = document.querySelectorAll(".operations")
let clearBox = document.querySelector("#clear")
let output = document.querySelector("#product")
let answer = document.querySelector("#equal")

// Causees 0 to be a placeholder when you first load calc
function inputChange(e) {
  if (output.innerText === "0") {
    output.innerText = ""
  }
  // Allows numbers to be inputed in screen
  let targetElement = e.target
  let buttonValue = targetElement.innerText
  output.innerText += buttonValue

}

function allEventListeners(all) {
  for (let i = 0; i < all.length; i++) {
    all[i].addEventListener("click", inputChange)
  }
}
allEventListeners(numbersAll)
allEventListeners(operationsAll)

// Allows to clear button to empty inputted values
function clearDelete() {
  output.innerText = ""
}
clearBox.addEventListener("click", clearDelete)

// parseFloat had to be used instead of parseInt because parseFloat includes decimals
function outputScreen(screenItems) {
  for (let i = 0; i < screenItems.length; i++) {
    if (screenItems[i] === '+') {
      let addition = screenItems.split("+")
      return (parseFloat(addition[0]) + parseFloat(addition[1]))
    } else if (screenItems[i] === '-') {
      let subtraction = screenItems.split("-")
      return (parseFloat(subtraction[0]) - parseFloat(subtraction[1]))
    } else if (screenItems[i] === 'x') {
      let multiplication = screenItems.split("x")
      return (parseFloat(multiplication[0]) * parseFloat(multiplication[1]))
    } else if (screenItems[i] === '÷') {
      let division = screenItems.split("÷")
      return (parseFloat(division[0]) / parseFloat(division[1]))
    } else if (screenItems[i] === '√') {
      let squareRoot = screenItems.split("√")
      return (parseFloat(Math.sqrt(squareRoot[0])))
    } else if (screenItems[i] === '^') {
      let squared = screenItems.split("^")
      return Math.pow(parseInt(squared[0]), parseInt(squared[1]))
      // }else if (screenItems[i] === '+' && screenItems[i] === 'x') {
      // let orderx = screenItems.split("+", "x")
      // return (parseFloat(addition[0]) + (parseFloat(multiplication[0]) * parseFloat(multiplication[1])))
        // }else if (screenItems[i] === '+' && screenItems[i] ==='x')
        // return parseFloat(addition[0]) + (parseFloat(multiplication[0]) * parseFloat(multiplication[1]))
    }
  }
}

// Adds product to calculator after pressing the equal button
function equalsButton() {
  output.innerText = outputScreen(output.innerText)
}
answer.addEventListener("click", equalsButton)
// return(parseInt(addition[0])+parseInt(addition[1]))
