const showOverlayButton = document.getElementById('show-overlay');
const closeOverlayButton = document.getElementById('close-overlay');
const overlay = document.getElementById('overlay');

showOverlayButton.addEventListener('click', () => {
    overlay.style.display = 'block';
})
closeOverlayButton.addEventListener('click', () => {
    overlay.style.display = 'none';
})