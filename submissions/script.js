// ---------------------------
// Background Color Changer
// ---------------------------
function changeBackground(color) {
    document.body.style.backgroundColor = color;
}

// ---------------------------
// Smooth Scrolling to Sections
// ---------------------------
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ---------------------------
// Dynamic Greeting
// ---------------------------
function showGreeting() {
    const greeting = document.getElementById("greeting");
    const hour = new Date().getHours();

    if (hour < 12) {
        greeting.innerText = "Good Morning 🌅";
    } else if (hour < 18) {
        greeting.innerText = "Good Afternoon ☀️";
    } else {
        greeting.innerText = "Good Evening 🌙";
    }
}

showGreeting();
