const binaryInput = document.querySelector('#binary')
const btnConvert = document.querySelector('#convert')
const spanDecimal = document.querySelector('#result')
const spanMessage = document.querySelector('#message')


btnConvert.addEventListener('click', (event) => {
    event.preventDefault()
    let error = false
    spanMessage.textContent = ''
    const binary = binaryInput.value
    
    if(binary === '') {
        spanDecimal.textContent = ''
        spanMessage.textContent = 'Input empty'
        spanMessage.style.color = 'red'
        error = true
        return;
    }
    if(binary.split('').length > 8) {
        spanDecimal.textContent = ''
        spanMessage.textContent = 'The maximum digits is 8'
        spanMessage.style.color = 'red'
        error = true
        return;
    }
    binary.split('').map( (digit) => {
        if( digit !== '0' && digit !== '1') {
            spanDecimal.textContent = ''
            spanMessage.textContent = 'Enter a binary number'
            error = true
            return;
        }
    })
    if(error === false) {
        const decimal = parseInt(binary, 2)
        spanDecimal.textContent = `Result: ${decimal}`
        spanDecimal.style.color = 'green'
        binaryInput.value = ''
    }
})