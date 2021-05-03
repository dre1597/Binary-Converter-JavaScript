const decimalInput = document.querySelector('#decimal')
const btnConvert = document.querySelector('#convert')
const spanDecimal = document.querySelector('#result')
const spanMessage = document.querySelector('#message')


btnConvert.addEventListener('click', (event) => {
    event.preventDefault()
    let error = false
    spanMessage.textContent = ''
    const decimal = decimalInput.value

    if(decimal === '') {
        spanDecimal.textContent = ''
        spanMessage.textContent = 'Input empty'
        spanMessage.style.color = 'red'
        error = true
        return;
    }
    if(decimal < 0) {
        spanDecimal.textContent = ''
        spanMessage.textContent = 'Enter a positive number'
        spanMessage.style.color = 'red'
        decimalInput.value = ''
        error = true
        return;
    }
    if(decimal > 255) {
        spanDecimal.textContent = ''
        spanMessage.textContent = 'The maximum decimal is 255'
        spanMessage.style.color = 'red'
        decimalInput.value = ''
        error = true
        return;
    }
    if(decimal.includes('.')) {
        spanDecimal.textContent = ''
        spanMessage.textContent = 'Please enter a integer'
        spanMessage.style.color = 'red'
        decimalInput.value = ''
        error = true
        return;
    }
    if(error === false) {
        const binary = parseInt(decimal).toString(2)
        spanDecimal.textContent = `Decimal: ${decimal} | Binary: ${binary}`
        spanDecimal.style.color = 'green'
        decimalInput.value = ''
    }
})