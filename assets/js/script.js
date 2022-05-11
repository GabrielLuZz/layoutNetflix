const navegar = document.querySelector('header nav span');
const headerContainer = document.querySelector('header .container');

navegar.addEventListener('click', () => {
    const menu = document.querySelector('header nav ul');

    menu.classList.toggle('aparecer')
})

setInterval(() => {
    if (window.scrollY >= 1) {
        headerContainer.classList.add('delizado')
    } else {
        headerContainer.classList.remove('delizado')
    }
}, 10)