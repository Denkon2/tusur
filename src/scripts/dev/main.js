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

let btn = document.querySelector('[data-pp]')
let btnClose = document.querySelector('[data-pp-close]')
if(btn){
btn.addEventListener('click', openModal)
}
if(btnClose) btnClose.addEventListener('click', closeModal)