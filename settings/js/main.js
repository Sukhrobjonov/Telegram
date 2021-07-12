const animation = document.querySelector('.animation')
const editName = document.querySelector('#edit')
const input = document.querySelector('.flexme')
const button = document.querySelector('.set')
const changeName = document.querySelector('.telegram-settings-body__name')

// localStorage.setItem('DATA', JSON.stringify(DATA))



let localData = JSON.parse(localStorage.getItem('name'))

changeName.textContent = localData

editName.addEventListener('click', event => {
    input.classList.add('open')

    // editName.textContent = ''
    // const input = document.createElement('input')
    // input.classList.add('change__name')
    // editName.appendChild(input)
})



// let localData = JSON.parse(localStorage.getItem('DATA'))

button.addEventListener('click', event => {
    changeName.textContent = input.value;
    localStorage.setItem('name', JSON.stringify(changeName.textContent))
    editName.removeChild(input, button)

    input.classList.remove('open')
})
// let changeName = document.querySelector('#change')
// let editName = document.querySelector('#edit')

// editName.addEventListener('click', event => {
//     // 
//     changeName.disabled = false
//     changeName.style.backgroundColor = '#f4f4f4'
// })

// changeName.addEventListener('change', event => {
//     // console.log(changeName.value);
// })


function add() {
    animation.classList.add('off')
}
setTimeout(add, 500);

const logOut = document.querySelector('.log-out');
const back = document.querySelector('.back');

logOut.addEventListener('click', event => {
    logOut.href = '../index.html'
})

back.addEventListener('click', event => {
    back.href = '../main/index.html'
})
