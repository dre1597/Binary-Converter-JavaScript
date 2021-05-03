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
    if(decimal < 0 || decimal > 255 || decimal.includes('.') || decimal.includes('e') || decimal.includes('E')) {
        spanDecimal.textContent = ''
        spanMessage.textContent = 'Please enter a integer between 1 and 225'
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