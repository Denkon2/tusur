const openModal = ()=>{
    
    let el = document.querySelector('html')

    if(el){
        el.classList.add('show-event-popup')
    } else {
        return false;
    }
    
}
const closeModal = ()=>{
    
    let el = document.querySelector('html')

    if(el){
        el.classList.remove('show-event-popup')
    } else {
        return false;
    }
    
}

const btnToggleMenu = (e)=>{
    if(!e) return false
    let el = document.querySelector(e)
    let hasClass = el.classList.contains('active')
    hasClass ? el.classList.remove('active') : el.classList.add('active')
}

let btn = document.querySelector('[data-pp]')
let btnClose = document.querySelector('[data-pp-close]')
let btnMobileMenu = document.querySelector('.page-header__nav-toggle')

if(btn) btn.addEventListener('click', openModal)
    
if(btnClose) btnClose.addEventListener('click', closeModal)

if(btnMobileMenu) btnMobileMenu.addEventListener('click', function(){
    btnToggleMenu('.page-header__nav')
})