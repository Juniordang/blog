const menu = document.querySelector('.c-menu')
const button = document.getElementById('btn')
button.addEventListener('click', function() {
    if (menu.style.display === 'none') {
        menu.style.display = 'block'
    }else {
        menu.style.display = 'none'
    }
})