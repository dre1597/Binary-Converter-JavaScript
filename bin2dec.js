const binaryInput = document.querySelector('#binary')
const btnConvert = document.querySelector('#convert')
const spanDecimal = document.querySelector('#decimal')
const spanMessage = document.querySelector('#message')


btnConvert.addEventListener('click', (event) => {
    event.preventDefault()
    let error = false
    spanMessage.textContent = ''
    const binary = binaryInput.value
    
    if(binary === '') {
        spanDecimal.textContent = ''
        spanMessage.textContent = 'Input empty'
        error = true
        return;
    }
    if(binary.split('').length > 8){
        spanDecimal.textContent = ''
        spanMessage.textContent = 'The maximum digits is 8'
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
    if(error === false){
        const decimal = parseInt(binary, 2)
        spanDecimal.textContent = decimal
        binaryInput.value = ''
    }
})

console.log()