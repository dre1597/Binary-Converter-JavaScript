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
        error = true
        return;
    }
    if(decimal < 0) {
        spanDecimal.textContent = ''
        spanMessage.textContent = 'Enter a positive number'
        error = true
        return;
    }
    if(decimal > 255) {
        spanDecimal.textContent = ''
        spanMessage.textContent = 'The maximum decimal is 255'
        error = true
        return;
    }
    if(error === false) {
        const binary = parseInt(decimal).toString(2)
        spanDecimal.textContent = `Result: ${binary}`
        decimalInput.value = ''
    }
})