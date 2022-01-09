// alert message

var optionSelect = document.querySelector('.option-item-select--inactive')

optionSelect.addEventListener('click', function alertMessage() {
    alert('Tính năng này sẽ được cập nhật sớm')
})

var facebookRegister = document.querySelector('.js-facebook-register')
var googleRegister = document.querySelector('.js-google-register')
var facebookLogin = document.querySelector('.js-facebook-login')
var googleLogin = document.querySelector('.js-google-login')

facebookRegister.addEventListener('click', function facebookRegister() {
    alert('Tính năng đăng ký qua Facebook sẽ được cập nhật sớm')
})

googleRegister.addEventListener('click', function googleRegister() {
    alert('Tính năng đăng ký qua Google sẽ được cập nhật sớm')
})

facebookLogin.addEventListener('click', function facebooklogin() {
    alert('Tính năng đăng nhập qua Facebook sẽ được cập nhật sớm')
})

googleLogin.addEventListener('click', function googleLogin() {
    alert('Tính năng đăng nhập qua Google sẽ được cập nhật sớm')
})

// open modal

var modal = document.querySelector('.modal')
var register = document.querySelector('.js-register')
var login = document.querySelector('.js-login')
var backBtns = document.querySelectorAll('.js-back')
var modalRegister = document.querySelector('.js-modal-register')
var modalLogin = document.querySelector('.js-modal-login')
var switchLogin = document.querySelector('.js-switch-login')
var switchRegister = document.querySelector('.js-switch-register')
var modalBoxes = document.querySelectorAll('.js-modal-box')

function openModalRegister() {
    modal.classList.add('open')
    modalRegister.classList.add('open')
    modalLogin.classList.remove('open')
}

function openModalLogin() {
    modal.classList.add('open')
    modalLogin.classList.add('open')
    modalRegister.classList.remove('open')
}


function switchModalLogin() {
    modalRegister.classList.remove('open')
    modalLogin.classList.add('open')
}

function switchModalRegister() {
    modalLogin.classList.remove('open')
    modalRegister.classList.add('open')
}

function closeModal() {
    modal.classList.remove('open')
    modalLogin.classList.remove('open')
    modalRegister.classList.remove('open')
}

// register & login
register.addEventListener('click', openModalRegister)
login.addEventListener('click', openModalLogin)
switchLogin.addEventListener('click', switchModalLogin)
switchRegister.addEventListener('click', switchModalRegister)

// back
for (const backBtn of backBtns) {
    backBtn.addEventListener('click', closeModal)
}

modal.addEventListener('click', closeModal)

for (const modalBox of modalBoxes) {
    modalBox.addEventListener('click', function (e) {
        e.stopPropagation()
    })
}

document.addEventListener('keydown', function (event) {
    if (event.keyCode == 27) {
        closeModal()
    }
})

// just for fun 

var removeBtns = document.querySelectorAll('.header__cart-item-remove')
var modalGif = document.querySelector('.modal__gif')
var modalGifBody = document.querySelector('.modal__gif-body')

for (const removeBtn of removeBtns) {
    removeBtn.addEventListener('click', function removeItem() {
        alert('Xin lỗi quý khách hàng đã bỏ vào giỏ rồi không thể trả lại :)')
        modalGif.classList.add('open')
    })
}


function closeTroll() {
    modalGif.classList.remove('open')
}

modalGif.addEventListener('click', closeTroll)

document.addEventListener('keydown', function (eventGif) {
    if (eventGif.keyCode == 27) {
        closeTroll()
    }
})

