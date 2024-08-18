// script.js

document.addEventListener('DOMContentLoaded', () => {
    const bookButtons = document.querySelectorAll('#hero button, #cta button');

    bookButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Redirecting to booking page...');
            // Here you can add code to redirect to a booking page
            // window.location.href = 'booking-page.html';
        });
    });
});
