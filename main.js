// main.js
document.addEventListener('DOMContentLoaded', () => {
    const pendantButton = document.querySelector('.pendant-overlay');
    let hasSpun = false;

    function handleClick() {
        if (hasSpun) {
            return;
        }
        hasSpun = true;

        // Trigger the spin animation
        pendantButton.classList.remove('spin');
        void pendantButton.offsetWidth; // Force reflow
        pendantButton.classList.add('spin');

        // Update text
        pendantButton.textContent = 'Do you wanna be my Valentine?';

        // Create two new buttons
        const newButtonA = document.createElement('button');
        newButtonA.textContent = 'Yes';
        // Add a class to the button
        newButtonA.classList.add('my-custom-button-class');

        const newButtonB = document.createElement('button');
        newButtonB.textContent = 'No';
        newButtonB.classList.add('my-custom-button-class');

        // Append them so they're visible in the document
        document.body.appendChild(newButtonA);
        document.body.appendChild(newButtonB);
    }

    pendantButton.addEventListener('click', handleClick);

    pendantButton.addEventListener('animationend', (event) => {
        if (event.animationName === 'coin-spin') {
            pendantButton.style.pointerEvents = 'none';
        }
    });
});