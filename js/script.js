const body = document.querySelector('body');
const darkMode = document.querySelector('.darkModeToggle');

darkMode.addEventListener('click', () => {
    body.classList.toggle('dark-mode-theme');
});