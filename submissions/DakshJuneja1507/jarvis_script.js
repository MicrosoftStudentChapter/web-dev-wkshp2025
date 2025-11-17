// Page Navigation
const navButtons = document.querySelectorAll('.nav-btn');
const pages = document.querySelectorAll('.page');

navButtons.forEach(button => {
    button.addEventListener('click', function() {
        const targetPage = this.getAttribute('data-page');
        
        // Remove active class from all buttons and pages
        navButtons.forEach(btn => btn.classList.remove('active'));
        pages.forEach(page => page.classList.remove('active'));
        
        // Add active class to clicked button and target page
        this.classList.add('active');
        document.getElementById(targetPage).classList.add('active');
        
        // Animate connection line for active page
        animateConnectionLine(targetPage);
    });
});

// Animate connection lines
function animateConnectionLine(page) {
    const lines = document.querySelectorAll('.line');
    lines.forEach(line => {
        line.style.strokeWidth = '1';
        line.style.stroke = 'rgba(0, 150, 255, 0.3)';
    });
    
    const activeLine = document.querySelector(`.line-${page}`);
    if (activeLine) {
        activeLine.style.strokeWidth = '2';
        activeLine.style.stroke = 'rgba(0, 255, 200, 0.8)';
    }
}

// Particle System for Background
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
const particleCount = 80;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
    }
    
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
    }
    
    draw() {
        ctx.fillStyle = `rgba(0, 200, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 120) {
                ctx.strokeStyle = `rgba(0, 150, 255, ${0.2 * (1 - distance / 120)})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    
    connectParticles();
    requestAnimationFrame(animateParticles);
}

// Initialize particles
initParticles();
animateParticles();

// Handle window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
});

// Add hover effect to skill tags
const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
});

// Add parallax effect to project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `translateY(-8px) scale(1.02) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', function() {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Initialize connection line animation
animateConnectionLine('home');

// Add typing effect to page titles (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Add glitch effect on title hover
const titleGlitches = document.querySelectorAll('.title-glitch');
titleGlitches.forEach(title => {
    title.addEventListener('mouseenter', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'glitch 0.3s';
        }, 10);
    });
});

// Add sound effects on navigation (optional - commented out)
// function playClickSound() {
//     const audio = new Audio('click.mp3');
//     audio.volume = 0.3;
//     audio.play();
// }

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    const currentPage = document.querySelector('.page.active').id;
    let nextPage;
    
    switch(e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
            if (currentPage === 'home') nextPage = 'projects';
            else if (currentPage === 'projects') nextPage = 'skills';
            else nextPage = 'home';
            break;
        case 'ArrowLeft':
        case 'ArrowUp':
            if (currentPage === 'home') nextPage = 'skills';
            else if (currentPage === 'skills') nextPage = 'projects';
            else nextPage = 'home';
            break;
        case '1':
            nextPage = 'home';
            break;
        case '2':
            nextPage = 'projects';
            break;
        case '3':
            nextPage = 'skills';
            break;
    }
    
    if (nextPage) {
        const targetButton = document.querySelector(`[data-page="${nextPage}"]`);
        if (targetButton) targetButton.click();
    }
});

// Add smooth scroll behavior for internal navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Performance monitoring (optional)
let lastFrameTime = Date.now();
let fps = 60;

function updateFPS() {
    const now = Date.now();
    fps = 1000 / (now - lastFrameTime);
    lastFrameTime = now;
    
    // Reduce particles if FPS drops below 30
    if (fps < 30 && particles.length > 40) {
        particles = particles.slice(0, Math.floor(particles.length * 0.8));
    }
}

setInterval(updateFPS, 1000);

console.log('🚀 Jarvis Portfolio Initialized');
console.log('💡 Keyboard shortcuts: Arrow keys or 1/2/3 to navigate');