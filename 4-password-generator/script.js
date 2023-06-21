// DOM Elements
const inputLength = document.querySelector('.length')

const optionLetters = document.querySelector('.letters')
const optionNumbers = document.querySelector('.numbers')
const optionSymbols = document.querySelector('.symbols')

const generateButton = document.querySelector('.button')

const resultEl = document.querySelector('.result')

const errorEl = document.querySelector('.error')

// Variables
let passwordLength = 0
let isLetters = false
let isNumbers = false
let isSymbols = false
let generatedPassword = ''

inputLength.addEventListener('input', e => {
  passwordLength = e.target.value
})

optionLetters.addEventListener('change', () => {
  isLetters = optionLetters.checked
})

optionNumbers.addEventListener('change', () => {
  isNumbers = optionNumbers.checked
})

optionSymbols.addEventListener('change', () => {
  isSymbols = optionSymbols.checked
})

generateButton.addEventListener('click', () => {
  resultEl.classList.add('hide')

  if (!passwordLength || passwordLength < 5 || passwordLength > 15) {
    errorEl.childNodes[1].textContent = 'Please Enter Number Between 5 to 15'

    setTimeout(() => {
      errorEl.childNodes[1].textContent = ''
    }, 3000)

    return
  }

  if (!isLetters && !isNumbers && !isSymbols) {
    errorEl.childNodes[1].textContent = 'You must select atleast 1 option'

    setTimeout(() => {
      errorEl.childNodes[1].textContent = ''
    }, 3000)

    return
  }

  if (passwordLength && (isLetters || isNumbers || isSymbols)) {
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = '123456789'
    const symbols = '!@#$%^&*()'
    let selectedOptions = ''

    if (isLetters) {
      selectedOptions += letters
    }

    if (isNumbers) {
      selectedOptions += numbers
    }

    if (isSymbols) {
      selectedOptions += symbols
    }

    selectedOptions = selectedOptions.split('')

    for (let i = 0; i < passwordLength; i++) {
      generatedPassword +=
        selectedOptions[Math.floor(Math.random() * selectedOptions.length)]
    }

    resultEl.classList.remove('hide')
    resultEl.childNodes[3].textContent = generatedPassword

    generatedPassword = ''
  }
})
