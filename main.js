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
        void pendantButton.offsetWidth; // Forces reflow
        pendantButton.classList.add('spin');

        // Update text
        pendantButton.textContent = 'Do you wanna be my Valentine?';

        // Create the new "Yes" button
        const newButtonA = document.createElement('button');
        newButtonA.textContent = 'Yes';
        // Add a specific class for the delegated listener
        newButtonA.classList.add('my-custom-button-class-yes');

        // Create a "No" button (if needed)
        const newButtonB = document.createElement('button');
        newButtonB.textContent = 'No';
        newButtonB.classList.add('my-custom-button-class-no');

        // Add them to the document
        document.body.appendChild(newButtonA);
        document.body.appendChild(newButtonB);
    }

    // Trigger button spin on click
    pendantButton.addEventListener('click', handleClick);

    // Once the spin animation ends, disable further clicks
    pendantButton.addEventListener('animationend', (event) => {
        if (event.animationName === 'coin-spin') {
            pendantButton.style.pointerEvents = 'none';
        }
    });
});