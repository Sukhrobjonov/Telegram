const main = document.querySelector('.main')
const countryCode = document.querySelector('#country-code')
const inputElement = document.querySelector('.form__number')
const link = document.querySelector('.form__button')
const form = document.querySelector('.form-section')

function add() {
    main.classList.add('open')
}

form.addEventListener('submit', event => {
    event.preventDefault()
})

// add()
setTimeout(add, 100);

countryCode.addEventListener('change', event => {
    if (countryCode.value == 'uz') {
        inputElement.value = '+998'
    } else if (countryCode.value == 'ru') {
        inputElement.value = '+7'
    } else if (countryCode.value = 'us') {
        inputElement.value = '+1'
    }
})


link.addEventListener("click", event => {
    if (inputElement.value.length == 13) {
        link.href = './main/index.html'
    } else {
        alert('Incorrect number')
    }
})
