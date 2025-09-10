// Show Book Now container on button click
const showBookNowContainerBtn = document.getElementById('showBookNowContainerBtn');
const bookNowContainer = document.getElementById('bookNowContainer');
if (showBookNowContainerBtn && bookNowContainer) {
    showBookNowContainerBtn.addEventListener('click', function() {
        showBookNowContainerBtn.style.display = 'none';
        bookNowContainer.style.display = 'block';
        bookNowContainer.style.animation = 'fadeInBookNow 0.5s';
    });
}
// Modal open/close logic
const loginBtn = document.querySelector('.login-btn');
const modal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');
loginBtn.addEventListener('click', function (e) {
    e.preventDefault();
    modal.style.display = 'block';
});
closeModal.onclick = function () {
    modal.style.display = 'none';
    document.getElementById('loginMessage').textContent = '';
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        document.getElementById('loginMessage').textContent = '';
    }
}

// Auto-scroll the image track horizontally every 3 seconds
const track = document.getElementById('imageTrack');
let currentIndex = 0;
function scrollImages() {
    const images = track.querySelectorAll('img');
    if (images.length === 0) return;
    currentIndex = (currentIndex + 1) % images.length;
    // Each image fills the viewport, so scroll by 100vw per image
    track.style.transform = `translateX(-${window.innerWidth * currentIndex}px)`;
}
setInterval(scrollImages, 3000);

// Simple login handler (demo only)
document.getElementById('loginForm').onsubmit = function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // Demo: Accepts only a fixed email/password
    if (email === 'user@example.com' && password === 'password123') {
        document.getElementById('loginMessage').style.color = '#388e3c';
        document.getElementById('loginMessage').textContent = 'Login successful!';
        setTimeout(() => { modal.style.display = 'none'; }, 1200);
    } else {
        document.getElementById('loginMessage').style.color = '#d32f2f';
        document.getElementById('loginMessage').textContent = 'Invalid email or password.';
    }
}


// Book Now form handler (demo only)
document.getElementById('bookNowForm').onsubmit = function (e) {
    e.preventDefault();
    const name = document.getElementById('bookName').value.trim();
    const contact = document.getElementById('bookContact').value.trim();
    const address = document.getElementById('bookAddress').value.trim();
    if (!name || !contact || !address) {
        document.getElementById('bookNowMessage').style.color = '#d32f2f';
        document.getElementById('bookNowMessage').textContent = 'Please fill all required fields.';
        return;
    }
    document.getElementById('bookNowMessage').style.color = '#388e3c';
    document.getElementById('bookNowMessage').textContent = 'Thank you! Your booking has been received.';
    setTimeout(() => { document.getElementById('bookNowMessage').textContent = ''; document.getElementById('bookNowForm').reset(); }, 2000);
}

// Show form on Book Now button click (with smooth animation)
const showBookFormBtn = document.getElementById('showBookFormBtn');
const bookNowForm = document.getElementById('bookNowForm');
if (showBookFormBtn && bookNowForm) {
    showBookFormBtn.addEventListener('click', function () {
        showBookFormBtn.style.display = 'none';
        bookNowForm.classList.add('open');
        bookNowForm.style.maxHeight = '900px';
        bookNowForm.style.opacity = '1';
    });
}