const searchLink = document.querySelector('.search-link');
const modal = document.querySelector('.modal-container');
const buttonClose = document.querySelector('.button-close');

searchLink.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modal-open');
});

buttonClose.addEventListener('click', () => {
    modal.classList.remove('modal-open');
})
