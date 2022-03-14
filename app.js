const barMenu = document.querySelector(".bar")
const closeBtn = document.querySelector('.close-pic')
const openBtn = document.querySelector('.r-btn')

closeBtn.addEventListener('click' , close)
openBtn.addEventListener('click' , open)


function close(){
    barMenu.classList.toggle('active')
    barMenu.classList.remove('active_o')
}
function open(){
    barMenu.classList.toggle('active_o')
    barMenu.classList.remove('active')
    
}

