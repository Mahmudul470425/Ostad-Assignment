document.querySelectorAll('.package').forEach(package => {
    const minusBtn = package.querySelector('.minus');
    const plusBtn = package.querySelector('.plus');
    const roomInfo = package.querySelector('.room-info');
    const thankYouMessage = package.querySelector('.thank-you-message');
    let roomCount = 1;

    minusBtn.addEventListener('click', () => {
        if (roomCount > 1) {
            roomCount--;
            roomInfo.textContent = `${roomCount} room${roomCount > 1 ? 's' : ''}`;
        }
    });

    plusBtn.addEventListener('click', () => {
        roomCount++;
        roomInfo.textContent = `${roomCount} room${roomCount > 1 ? 's' : ''}`;
    });

    package.querySelector('.signup').addEventListener('click', () => {
        thankYouMessage.textContent = `Thank you for choosing ${roomCount} room${roomCount > 1 ? 's' : ''}`;
        thankYouMessage.style.display = 'block';
    });
});

// Add JavaScript to handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us!');
    this.reset();
});
