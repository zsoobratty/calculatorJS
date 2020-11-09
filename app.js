const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandText = document.querySelector('[data-previous-operand]')
const currentOperandText = document.querySelector('[data-current-operand]')

// Event listeners
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        handleNumber(button)
    })
})

allClearButton.addEventListener('click', () => {
    handleClear()
})

const handleClear = () => {
    previousOperandText.innerText = ''
    currentOperandText.innerText = ''
}

const handleDelete = () => {
    
}

const handleNumber = (button) => {
    if(button.innerText === '.' && currentOperandText.innerText.includes('.')) return
    currentOperandText.append(button.innerText)
}

const chooseOperation = (operation) => {

}

const calculateSum = () => {

}

const handleDisplay = () => {

}