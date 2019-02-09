const container = document.querySelector('.container')
container.addEventListener('animationend', () => {
    container.classList.remove('active');
});
