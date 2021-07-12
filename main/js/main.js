// import  as num from '../zoom/img_box.js'


// let localData = JSON.parse(localStorage.getItem('DATA'))

// localStorage.setItem('DATA', JSON.stringify(DATA))
// let localData = JSON.parse(localStorage.getItem('DATA'))

// localStorage.setItem('data', JSON.stringify(obj))

// let obj = {
//     name: 0
// }
let localData = JSON.parse(localStorage.getItem('DATA'))

const DATA = (localStorage.getItem('DATA')) ? localData : [
    {
        id: 1,
        name: 'Sukhrobjonv',
        phone: '+998946382280',
        photo: '../img/my.jpg',
        username: '@Sukhrobjonov',
        bio: '😉',
        messages: [
            {
                body: 'Nma gap',
                isMine: true
            },
            {
                body: 'tinc ozindac',
                isMine: false
            }
        ]
    },
    {
        id: 2,
        name: 'Midkhatov',
        phone: '+998933788121',
        photo: '../img/Midkhatov.jpg',
        username: '@Midxatov13',
        bio: 'Midxatov',
        messages: [
            {
                body: 'Ubay',
                isMine: true
            },
            {
                body: 'nma',
                isMine: false
            }
        ]
    },
    {
        id: 3,
        name: 'Qosimov',
        phone: '+998909566802',
        photo: '../img/qosimov.jpg',
        username: '@Qossimov',
        bio: '🍃😖',
        messages: [
            {
                body: 'nma gapp',
                isMine: true
            },
            {
                body: 'tinc',
                isMine: false
            }
        ]
    },
    {
        id: 4,
        name: 'Muhammad Yunus',
        phone: '+998 99 9815064',
        photo: '../img/muhammad.jpg',
        username: '@muhammad_yunusoff',
        bio: '19 y.o. Fullstack developer',
        messages: [
            {
                body: 'Oka ulgurmiman yakshanba kuni topshirishga svet vawwe oynavoti',
                isMine: true
            },
            {
                body: 'mayli siz dushanba kuni topshira qolin',
                isMine: false
            }
        ]
    },
    {
        id: 5,
        name: 'Abdulaziz',
        phone: '+998 90 3175939',
        photo: '../img/abdulaziz.jpg',
        username: '@Sukhrobjonov02',
        bio: 'Blog: @semicoderr',
        messages: [
            {
                body: 'Abdulaziz',
                isMine: true
            },
            {
                body: 'nma',
                isMine: false
            }
        ]
    },
    {
        id: 6,
        name: 'BS',
        phone: '+998 97 7528899',
        photo: '../img/bobir.jpg',
        username: '@Bobir405',
        bio: 'Astauzi billa kulli nafsin za iqotul Mavt !',
        messages: [
            {
                body: 'Bobir',
                isMine: true
            },
            {
                body: 'nma',
                isMine: false
            }
        ]
    },
    {
        id: 7,
        name: 'MB',
        phone: '+998 94 4001911',
        photo: '../img/begzod.jpg',
        username: '@begzod98',
        bio: 'Begzod',
        messages: [
            {
                body: 'Begzod',
                isMine: true
            },
            {
                body: 'nma',
                isMine: false
            }
        ]
    },
    {
        id: 8,
        name: 'Usmonxon',
        phone: '+998 99 1423471',
        photo: '../img/usmon.jpg',
        username: '@not_an_old_man',
        bio: 'Shaxsiy blog @ulatipov',
        messages: [
            {
                body: 'Usmon',
                isMine: true
            },
            {
                body: 'nma',
                isMine: false
            }
        ]
    },
    {
        id: 9,
        name: 'Sayriddin',
        phone: '+998 99 9018167',
        photo: '../img/sayriddin.jpg',
        username: '@Nizomiddinov511',
        bio: 'Верить в наше время нельзя никому. Даже себе. Мне – можно!😁😁',
        messages: [
            {
                body: 'Usmon',
                isMine: true
            },
            {
                body: 'nma',
                isMine: false
            }
        ]
    }
]



// localStorage.setItem('DATA', JSON.stringify(DATA))


const animation = document.querySelector('.animation')
const burgerMenu = document.querySelector('.menu')
const tgSettingsSection = document.querySelector('.telegram__settings-section')
const settingsLink = document.querySelector('.settings-link')
const usersSectionList = document.querySelector('.telegram__users-section__body__list')
const chatSectionList = document.querySelector('.telegram__chat-section__list')
const chatSectionBody = document.querySelector('.telegram__chat-section__body')
const chatSectionHeader = document.querySelector('.telegram__chat-section__header')
const chatSectionBodyForm = document.querySelector('.telegram__chat-section__body__form')
const chatSectionHeaderInfo = document.querySelector('.telegram__chat-section__header__info')
const chatSection = document.querySelector('.telegram__chat-section')
const telegramInfoSection = document.querySelector('.telegram__info-section')
const chatSectionFormInput = document.querySelector('.telegram__chat-section__body__form__input')
const searchInput = document.querySelector('.telegram__users-section__header__searchbar')
let currentChatId = 0
////////////////////////////////////////////////////////
function add() {
    animation.classList.add('off')
}
setTimeout(add, 1000);
////////////////////////////////////////////////////////

burgerMenu.addEventListener('click', event => {
    // 
    burgerMenu.classList.toggle('opened')
    burgerMenu.setAttribute('aria-expanded', burgerMenu.classList.contains('opened'))
    tgSettingsSection.classList.toggle('open')
    active.classList.remove('open')
})

chatSection.addEventListener('click', event => {
    burgerMenu.classList.remove('opened')
    // active.classList.remove('open')
    tgSettingsSection.classList.remove('open')
    // active.classList.remove('open')
})
/////////////////////////////////////////////////////////////
settingsLink.addEventListener('click', event => {
    settingsLink.href = '../settings/index.html'
    active.classList.remove('open')
})

//////////////////////////////////////////////////////////////
function rendorUsers(parentElement, data) {
    for (const user of data) {
        // CREATE ELEMENT
        let newLiElement = document.createElement('li')
        let newButtonElement = document.createElement('button')
        let userImg = document.createElement('img')
        let userInfoElemenet = document.createElement('div')
        let userName = document.createElement('h3')
        let lastSeen = document.createElement('p')
        // CLASS LIST
        newLiElement.classList.add('telegram__users-section__body__list__item')
        newButtonElement.classList.add('telegram__users-section__body__list__item__button')
        userImg.classList.add('telegram__users-section__body__list__item__button__img')
        userInfoElemenet.classList.add('telegram__users-section__body__list__item__button__info')
        userName.classList.add('telegram__users-section__body__list__item__button__info__name')
        lastSeen.classList.add('telegram__users-section__body__list__item__button__info__lastseen')
        // TEXT CONTENT
        userImg.src = user.photo
        userName.textContent = user.name
        lastSeen.textContent = 'last seen just now'
        // APPEND CHILD
        parentElement.appendChild(newLiElement)
        newLiElement.appendChild(newButtonElement)
        newButtonElement.appendChild(userImg)
        newButtonElement.appendChild(userInfoElemenet)
        userInfoElemenet.appendChild(userName)
        userInfoElemenet.appendChild(lastSeen)
        // 
        // FUNCTION
        newLiElement.addEventListener('click', event => {
            active.classList.remove('open')
            telegramInfoSection.textContent = ''
            chatSectionHeaderInfo.textContent = ''
            currentChatId = user.id
            chatSectionList.classList.add('open')
            rendorMessages(chatSectionList, user.messages)
            chatSectionHeader.classList.add('open')
            chatSectionBodyForm.classList.add('open')
            burgerMenu.classList.remove('opened')
            tgSettingsSection.classList.remove('open')
            chatSectionBody.classList.add('open')
            // CREATE ELEMENT
            const chatHeaderInfoImg = document.createElement('img')
            const chatHeaderInfoText = document.createElement('div')
            const chatHeaderInfoName = document.createElement('h3')
            const chatHeaderInfoLastSeen = document.createElement('p')
            // TEXT CONTENT
            chatHeaderInfoImg.src = user.photo
            chatHeaderInfoName.textContent = user.name
            chatHeaderInfoLastSeen.textContent = 'lastseen just now'
            // CLASS LIST
            chatHeaderInfoImg.classList.add('telegram__chat-section__header__info__img')
            chatHeaderInfoText.classList.add('telegram__chat-section__header__info__text')
            chatHeaderInfoName.classList.add('telegram__chat-section__header__info__text__name')
            chatHeaderInfoLastSeen.classList.add('telegram__chat-section__header__info__text__lastseen')
            // APPEND CHILD
            chatSectionHeaderInfo.appendChild(chatHeaderInfoImg)
            chatSectionHeaderInfo.appendChild(chatHeaderInfoText)
            chatHeaderInfoText.appendChild(chatHeaderInfoName)
            chatHeaderInfoText.appendChild(chatHeaderInfoLastSeen)
            //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ 
            // CREATE ELEMENT
            const telegramInfoHeader = document.createElement('div')
            const telegramInfoBody = document.createElement('div')
            const telegramInfoFooter = document.createElement('ul')
            const telegramInfoHeaderButton = document.createElement('button')
            const telegramInfoHeaderTitle = document.createElement('h3')
            const telegramInfoBodyImg = document.createElement('img')
            const telegramInfoBodyInfo = document.createElement('div')
            const telegramInfoBodyInfoName = document.createElement('h3')
            const telegramInfoBodyInfoStatus = document.createElement('p')
            const telegramInfoFooterPhone = document.createElement('li')
            const telegramInfoFooterPhoneWrapper = document.createElement('div')
            const telegramInfoFooterPhoneP = document.createElement('p')
            const telegramInfoFooterPhonePInfo = document.createElement('p')
            const telegramInfoFooterUserName = document.createElement('li')
            const telegramInfoFooterUserNameWrapper = document.createElement('div')
            const telegramInfoFooterUserNameP = document.createElement('p')
            const telegramInfoFooterUserNamePInfo = document.createElement('p')
            const telegramInfoFooterBio = document.createElement('li')
            const telegramInfoFooterBioWrapper = document.createElement('div')
            const telegramInfoFooterBioP = document.createElement('p')
            const telegramInfoFooterBioPInfo = document.createElement('p')
            // CLASS LIST
            telegramInfoHeader.classList.add('telegram__info-section__header')
            telegramInfoBody.classList.add('telegram__info-section__body')
            telegramInfoFooter.classList.add('telegram__info-section__footer')
            telegramInfoHeaderButton.classList.add('telegram__info-section__header__button')
            telegramInfoHeaderTitle.classList.add('telegram__info-section__header__title')
            telegramInfoBodyImg.classList.add('telegram__info-section__body__img')
            telegramInfoBodyInfo.classList.add('telegram__info-section__body__info')
            telegramInfoBodyInfoName.classList.add('telegram__info-section__body__info__name')
            telegramInfoBodyInfoStatus.classList.add('telegram__info-section__body__info__status')
            telegramInfoFooterPhone.classList.add('telegram__info-section__footer__item')
            telegramInfoFooterPhoneWrapper.classList.add('telegram__info-section__footer__item__info')
            telegramInfoFooterPhoneP.classList.add('telegram__info-section__footer__item__p')
            telegramInfoFooterPhonePInfo.classList.add('telegram__info-section__footer__item__p__info')
            telegramInfoFooterUserName.classList.add('telegram__info-section__footer__item')
            telegramInfoFooterUserNameWrapper.classList.add('telegram__info-section__footer__item__info')
            telegramInfoFooterUserNameP.classList.add('telegram__info-section__footer__item__p')
            telegramInfoFooterUserNamePInfo.classList.add('telegram__info-section__footer__item__p__info')
            telegramInfoFooterBio.classList.add('telegram__info-section__footer__item')
            telegramInfoFooterBioWrapper.classList.add('telegram__info-section__footer__item__info')
            telegramInfoFooterBioP.classList.add('telegram__info-section__footer__item__p')
            telegramInfoFooterBioPInfo.classList.add('telegram__info-section__footer__item__p__info')
            // TEXT CONTENT
            telegramInfoHeaderButton.innerHTML = "<i class='bx bx-x'></i>"
            // FUNCTION
            telegramInfoHeaderButton.addEventListener('click', event => {
                active.classList.remove('open')
                chatSection.classList.remove('open')
                burgerMenu.classList.remove('opened')
                tgSettingsSection.classList.remove('open')
                telegramInfoSection.classList.remove('open')
                // telegramInfoSection.classList.add('close')
                document.body.style.overflow = 'hidden'
            })
            telegramInfoHeaderTitle.textContent = 'Profile'
            telegramInfoBodyImg.src = user.photo
            telegramInfoBodyInfoName.textContent = user.name
            telegramInfoBodyInfoStatus.textContent = 'last seen just now'

            telegramInfoFooterPhone.innerHTML = "<i class='bx bx-phone' ></i>"
            telegramInfoFooterUserName.innerHTML = "<i class='bx bx-at' ></i>"
            telegramInfoFooterBio.innerHTML = "<i class='bx bx-error-circle' ></i>"

            telegramInfoFooterPhoneP.textContent = user.phone
            telegramInfoFooterPhonePInfo.textContent = 'Phone'
            telegramInfoFooterUserNameP.textContent = user.username
            telegramInfoFooterUserNamePInfo.textContent = 'Username'
            telegramInfoFooterBioP.textContent = user.bio
            telegramInfoFooterBioPInfo.textContent = 'Bio'
            // APPEND CHILD
            telegramInfoSection.appendChild(telegramInfoHeader)
            telegramInfoSection.appendChild(telegramInfoBody)
            telegramInfoSection.appendChild(telegramInfoFooter)
            telegramInfoHeader.appendChild(telegramInfoHeaderButton)
            telegramInfoHeader.appendChild(telegramInfoHeaderTitle)
            telegramInfoBody.appendChild(telegramInfoBodyImg)
            telegramInfoBody.appendChild(telegramInfoBodyInfo)
            telegramInfoBodyInfo.appendChild(telegramInfoBodyInfoName)
            telegramInfoBodyInfo.appendChild(telegramInfoBodyInfoStatus)
            telegramInfoFooter.appendChild(telegramInfoFooterPhone)
            telegramInfoFooter.appendChild(telegramInfoFooterUserName)
            telegramInfoFooter.appendChild(telegramInfoFooterBio)
            telegramInfoFooterPhone.appendChild(telegramInfoFooterPhoneWrapper)
            telegramInfoFooterUserName.appendChild(telegramInfoFooterUserNameWrapper)
            telegramInfoFooterBio.appendChild(telegramInfoFooterBioWrapper)
            telegramInfoFooterPhoneWrapper.appendChild(telegramInfoFooterPhoneP)
            telegramInfoFooterUserNameWrapper.appendChild(telegramInfoFooterUserNameP)
            telegramInfoFooterBioWrapper.appendChild(telegramInfoFooterBioP)
            telegramInfoFooterPhoneWrapper.appendChild(telegramInfoFooterPhonePInfo)
            telegramInfoFooterUserNameWrapper.appendChild(telegramInfoFooterUserNamePInfo)
            telegramInfoFooterBioWrapper.appendChild(telegramInfoFooterBioPInfo)
            // 

            // img_box(user.photo)
            // FUNCTION
            chatSectionHeaderInfo.addEventListener('click', event => {
                active.classList.remove('open')
                telegramInfoSection.textContent = ''
                chatSection.classList.add('open')
                burgerMenu.classList.remove('opened')
                tgSettingsSection.classList.remove('open')
                telegramInfoSection.classList.add('open')
                telegramInfoBodyImg.addEventListener('click', event => {
                    img_box(user.photo)
                })
                // APPEND CHILD
                telegramInfoSection.appendChild(telegramInfoHeader)
                telegramInfoSection.appendChild(telegramInfoBody)
                telegramInfoSection.appendChild(telegramInfoFooter)
                telegramInfoHeader.appendChild(telegramInfoHeaderButton)
                telegramInfoHeader.appendChild(telegramInfoHeaderTitle)
                telegramInfoBody.appendChild(telegramInfoBodyImg)
                telegramInfoBody.appendChild(telegramInfoBodyInfo)
                telegramInfoBodyInfo.appendChild(telegramInfoBodyInfoName)
                telegramInfoBodyInfo.appendChild(telegramInfoBodyInfoStatus)
                telegramInfoFooter.appendChild(telegramInfoFooterPhone)
                telegramInfoFooter.appendChild(telegramInfoFooterUserName)
                telegramInfoFooter.appendChild(telegramInfoFooterBio)
                telegramInfoFooterPhone.appendChild(telegramInfoFooterPhoneWrapper)
                telegramInfoFooterUserName.appendChild(telegramInfoFooterUserNameWrapper)
                telegramInfoFooterBio.appendChild(telegramInfoFooterBioWrapper)
                telegramInfoFooterPhoneWrapper.appendChild(telegramInfoFooterPhoneP)
                telegramInfoFooterUserNameWrapper.appendChild(telegramInfoFooterUserNameP)
                telegramInfoFooterBioWrapper.appendChild(telegramInfoFooterBioP)
                telegramInfoFooterPhoneWrapper.appendChild(telegramInfoFooterPhonePInfo)
                telegramInfoFooterUserNameWrapper.appendChild(telegramInfoFooterUserNamePInfo)
                telegramInfoFooterBioWrapper.appendChild(telegramInfoFooterBioPInfo)
            })
        })
        searchInput.addEventListener('keyup', event => {
            active.classList.remove('open')
            let insensitveInput = searchInput.value.toLowerCase()
            let ins = user.name.toLowerCase()
            if (insensitveInput.includes(ins)) {
                console.log(user);
                newLiElement.style.backgroundColor = '#3689F4'
            }
            else if (insensitveInput == '') {
                newLiElement.style.backgroundColor = 'white'
            }
            insensitveInput = ''
            // let insensitveUserName = users.name.toLowerCase()
            // if (insensitveUserName.includes(insensitveInput)) {
            // console.log(user);
            // }
            // console.log(insensitveInputUserName);
            // console.log(insensitveInput);
        })
    }
}
/////////////////////////////////////////////////////////////////////////////////////
chatSectionHeaderInfo.addEventListener('click', event => {
    telegramInfoSection.textContent = ''
    chatSection.classList.add('open')
    active.classList.remove('open')
    // CREATE ELEMET
    const telegramInfoHeader = document.createElement('div')
    const telegramInfoBody = document.createElement('div')
    const telegramInfoBodyImg = document.createElement('img')
    const telegramInfoHeaderButton = document.createElement('button')
    const telegramInfoHeaderTitle = document.createElement('h3')
    // CLASS LIST
    telegramInfoHeader.classList.add('telegram__info-section__header')
    telegramInfoBody.classList.add('telegram__info-section__body')
    telegramInfoBodyImg.classList.add('telegram__info-section__body__img')
    telegramInfoHeaderButton.classList.add('telegram__info-section__header__button')
    telegramInfoHeaderTitle.classList.add('telegram__info-section__header__title')
    // TEXT CONTENT
    telegramInfoHeaderButton.innerHTML = "<i class='bx bx-x'></i>"
    telegramInfoHeaderTitle.textContent = 'Profile'
    // APPEND CHILD
    telegramInfoSection.appendChild(telegramInfoHeader)
    telegramInfoSection.appendChild(telegramInfoBody)
    telegramInfoBody.appendChild(telegramInfoBodyImg)
    telegramInfoHeader.appendChild(telegramInfoHeaderButton)
    telegramInfoHeader.appendChild(telegramInfoHeaderTitle)
})
////////////////////////////////////
rendorUsers(usersSectionList, DATA)
///////////////////////////////////
function rendorMessages(parentElement, data) {
    parentElement.textContent = ''
    for (const message of data) {
        // CONDITION
        if (message.isMine) {
            let textRight = document.createElement('div')
            let newPElement = document.createElement('p')
            newPElement.textContent = message.body
            textRight.classList.add('telegram__chat-section__list__text-right')
            newPElement.classList.add('telegram__chat-section__list__text-right__item-right')
            textRight.appendChild(newPElement)
            parentElement.appendChild(textRight)
        } else {
            let textLeft = document.createElement('div')
            let newPElement = document.createElement('p')
            newPElement.textContent = message.body
            textLeft.classList.add('telegram__chat-section__list__text-left')
            newPElement.classList.add('telegram__chat-section__list__text-left__item-left')
            textLeft.appendChild(newPElement)
            parentElement.appendChild(textLeft)
        }
    }
}


chatSectionBodyForm.addEventListener('submit', event => {
    event.preventDefault()
    active.classList.remove('open')
    let textRight = document.createElement('div')
    let newPElement = document.createElement('p')
    let messageBody = chatSectionFormInput.value
    console.log(chatSectionFormInput.value);
    textRight.appendChild(newPElement)
    let userData = DATA.find(user => user.id == currentChatId)
    // const active = document.querySelector('.active')
    // const input = document.querySelector('.input')
    // const emojies = document.querySelectorAll('.emoji')
    if (chatSectionFormInput.value == '') {
        alert('Pleace write something')
    } else {
        userData.messages.push({
            body: messageBody,
            isMine: true
        })
    }
    localStorage.setItem('DATA', JSON.stringify(DATA))
    rendorMessages(chatSectionList, userData.messages)
    chatSectionBodyForm.reset()
})

const active = document.querySelector('.active')
const emojies = document.querySelectorAll('.emoji')

active.addEventListener('click', event => {
    active.classList.toggle('open')
})

for (const emoji of emojies) {
    emoji.addEventListener('click', event => {
        chatSectionFormInput.value += emoji.textContent
        console.log('hi');
    })
}

// const searchInput = document.querySelector('.telegram__users-section__header__searchbar')

// searchInput.addEventListener('keyup', event => {
//     // for (const user of DATA) {
//     //     if()
//     // }
// })

// /////////////////////////////////////////////////////////////////////////////////
let bg_color_img_box = 'rgba(0,0,0,0.9)'
let allow_hide_scroll_img_box = 'yes'
let use_fade_inout_img_box = 'yes'
let speed_img_box = 0.08
let z_index_dv_img_box = 999
let vopa_img_box, idpopup_img_box

window.onload = function () {
    let crtdv_img_box = document.createElement('div')
    crtdv_img_box.id = 'img_box'
    document.getElementsByTagName('body')[0].appendChild(crtdv_img_box)
    idpopup_img_box = document.getElementById("img_box")
    idpopup_img_box.style.top = 0
    idpopup_img_box.style.left = 0
    idpopup_img_box.style.opacity = 0
    idpopup_img_box.style.width = '100%'
    idpopup_img_box.style.height = '100%'
    idpopup_img_box.style.display = 'none'
    idpopup_img_box.style.position = 'fixed'
    idpopup_img_box.style.cursor = 'pointer'
    idpopup_img_box.style.textAlign = 'center'
    idpopup_img_box.style.zIndex = z_index_dv_img_box
    idpopup_img_box.style.backgroundColor = bg_color_img_box
}

function img_box(self) {
    let namepic_img_box = typeof self === 'string' ? self : self.src
    vopa_img_box = 0
    let hwin_img_box = window.innerHeight
    let wwin_img_box = window.innerWidth
    let himg_img_box, padtop_img_box, idfadein_img_box
    let img_img_box = new Image()
    img_img_box.src = namepic_img_box
    img_img_box.onload = function () {
        himg_img_box = img_img_box.height
        wimg_img_box = img_img_box.width
        idpopup_img_box.innerHTML = '<img src=' + namepic_img_box + '>'

        if (wimg_img_box > wwin_img_box) {
            idpopup_img_box.getElementsByTagName('img')[0].style.width = '90%'
        }
        else if (himg_img_box > hwin_img_box) {
            idpopup_img_box.getElementsByTagName('img')[0].style.height = '90%'
            himg_img_box = hwin_img_box * 90 / 100
        }

        if (himg_img_box < hwin_img_box) {
            padtop_img_box = (hwin_img_box / 2) - (himg_img_box / 2)
            idpopup_img_box.style.paddingTop = padtop_img_box + 'px'
        }
        else {
            idpopup_img_box.style.paddingTop = '0px'
        }

        if (allow_hide_scroll_img_box == 'yes') {
            document.body.style.overflow = 'hidden'
        }
        idpopup_img_box.style.display = 'block'
    }

    if (use_fade_inout_img_box == 'yes') {
        idfadein_img_box = setInterval(function () {
            if (vopa_img_box <= 1.1) {
                idpopup_img_box.style.opacity = vopa_img_box
                vopa_img_box += speed_img_box
            }
            else {
                idpopup_img_box.style.opacity = 1
                clearInterval(idfadein_img_box)
            }
        }, 10)
    }
    else {
        idpopup_img_box.style.opacity = 1
    }

    idpopup_img_box.onclick = function () {
        if (use_fade_inout_img_box == 'yes') {
            let idfadeout_img_box = setInterval(function () {
                if (vopa_img_box >= 0) {
                    idpopup_img_box.style.opacity = vopa_img_box
                    vopa_img_box -= speed_img_box
                }
                else {
                    idpopup_img_box.style.opacity = 0
                    clearInterval(idfadeout_img_box)
                    idpopup_img_box.style.display = 'none'
                    idpopup_img_box.innerHTML = ''
                    document.body.style.overflow = 'visible'
                    vopa_img_box = 0
                }
            }, 10)
        }
        else {
            idpopup_img_box.style.opacity = 0
            idpopup_img_box.style.display = 'none'
            idpopup_img_box.innerHTML = ''
            document.body.style.overflow = 'visible'
        }
    }
}

// ///////////////////////////////////////////////////////////////////////