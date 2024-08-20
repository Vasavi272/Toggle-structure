document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('toggleButton');
    const text = document.getElementById('text');
    const container = document.querySelector('.container');

    let isToggled = false;

    button.addEventListener('click', () => {
        if (isToggled) {
            // Revert to initial state
            button.textContent = 'Press me';
            text.textContent = 'Initial Text';
            container.classList.remove('active');
        } else {
            // Change to active state
            button.textContent = 'Clicked';
            text.textContent = 'Text Changed';
            container.classList.add('active');
        }
        isToggled = !isToggled;
    });
});