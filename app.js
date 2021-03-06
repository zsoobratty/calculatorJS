const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandText = document.querySelector('[data-previous-operand]')
const currentOperandText = document.querySelector('[data-current-operand]')

let selectedOperation
// Event listeners
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        handleNumber(button.innerText)
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        handleOperation(button.innerText)
    })
})

allClearButton.addEventListener('click', () => {
    handleClear()
})

equalsButton.addEventListener('click', () => {
    calculateSum()
})

deleteButton.addEventListener('click', () => {
    handleDelete()
})

const handleClear = () => {
    previousOperandText.innerText = ''
    currentOperandText.innerText = ''
}

const handleDelete = () => {
    currentOperandText.innerText = currentOperandText.innerText.slice(0, -1)
}

const handleNumber = (button) => {
    if(button === '.' && currentOperandText.innerText.includes('.')) return
    currentOperandText.append(button)
}

const handleOperation = (operation) => {
    if(currentOperandText.innerText === '') return
    if(previousOperandText !== '') {
        calculateSum()
    }
    selectedOperation = operation
    previousOperandText.innerText = `${currentOperandText.innerText} ${selectedOperation}`
    currentOperandText.innerText = ''
}

const calculateSum = () => {
    let sum
    const prev = parseFloat(previousOperandText.innerText)
    const current = parseFloat(currentOperandText.innerText)
    console.log(prev, selectedOperation, current)
    if(isNaN(prev) || isNaN(current)) return
    switch(selectedOperation) {
        case '+':
            sum = prev + current
            break
        case '-':
            sum = prev - current
            break
        case '*':
            sum = prev * current
            break
        case '÷':
            sum = prev / current
            break
        default:
            return
    }
    console.log(sum)
    currentOperandText.innerText = sum
    operation = undefined
    previousOperandText.innerText = ''
}