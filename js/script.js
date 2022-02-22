{
    let burger = document.querySelector('.burger');
    let burger_menu = document.querySelector('.burger_menu');
    burger.addEventListener('click', () => {
        burger_menu.classList.add('scale');
    })
    let close = document.querySelector('.close_btn');
    close.addEventListener('click', () => {
        burger_menu.classList.remove('scale');
    })
}