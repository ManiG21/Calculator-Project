let numbersAll = document.querySelectorAll(".numbers")
let operationsAll = document.querySelectorAll(".operations")
let clearBox = document.querySelector("#clear")
let output = document.querySelector("#product")
let answer = document.querySelector("#equal")


function inputChange(e) {
  let targetElement = e.target
  let buttonValue = targetElement.innerText
  output.innerText += buttonValue
}

function allEventListeners(nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i].addEventListener("click", inputChange)
  }
}
allEventListeners(numbersAll)
allEventListeners(operationsAll)

function clearDelete() {
  output.innerText = ""
}
output.addEventListener("click", clearDelete)
clearBox.addEventListener("click", clearDelete)

function outputScreen(screenItems) {
  for (let i = 0; i < screenItems.length; i++) {
    if (screenItems[i] === '+') {
      let addition = screenItems.split("+")
      return (parseInt(addition[0]) + parseInt(addition[1]))
    } else if (screenItems[i] === '-') {
      let subtraction = screenItems.split("-")
      return (parseInt(subtraction[0]) - parseInt(subtraction[1]))
    }else if (screenItems[i] === 'x') {
      let multiplication = screenItems.split("x")
      return (parseInt(multiplication[0]) * parseInt(multiplication[1]))
    } else if (screenItems[i] === '/') {
      let division = screenItems.split("/")
      return (parseInt(division[0]) / parseInt(division[1]))
    }else if (screenItems[i] === '√') {
      let squareRoot = screenItems.split("√")
      return (parseInt(squareRoot[0]) + parseInt(squareRoot[1]))
    }
  }
}


function equalsButton() {
  output.innerText = outputScreen(output.innerText)
}
answer.addEventListener("click", equalsButton)
// return(parseInt(addition[0])+parseInt(addition[1]))