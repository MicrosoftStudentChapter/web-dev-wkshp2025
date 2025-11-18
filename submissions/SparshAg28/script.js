// Mobile menu
let menuBtn = document.getElementById("menuBtn");
let navLinks = document.getElementById("navLinks");

menuBtn.onclick = () => {
    navLinks.style.display =
        navLinks.style.display === "flex" ? "none" : "flex";
};


// Popup modal

let modal = document.getElementById("projectModal");
let modalTitle = document.getElementById("modalTitle");
let modalDescription = document.getElementById("modalDescription");
modal.style.display = "none";

function openProject(id) {
    if (id === "vocab") {
        modalTitle.innerText = "The Vocab Learner";
        modalDescription.innerHTML = "The Vocab Learner is a Python-based smart tool designed to enhance vocabulary acquisition through spaced repetition and daily revision. This application focuses on making the process of learning new words systematic and efficient, storing words and tracking user progress. It ensures continuous improvement by prioritizing the review of challenging words, making it an excellent utility for students preparing for standardized tests or anyone looking to build a robust English lexicon. <br><a href='https://github.com/SparshAg28/English-Vocabulary-Builder.git' target='_blank'>View on GitHub</a>";
    }

    if (id === "glove") {
        modalTitle.innerText = "Robotic Glove";
        modalDescription.innerText =
            "The Robotic Assistive Glove is a low-cost, 3D-printed exoskeleton designed to help paralytic individuals regain control of their palm and finger movements. Its lightweight PLA structure ensures comfort, while an Arduino Uno acts as the central controller, coordinating signals that drive servo motors connected to each finger through tendon-like mechanisms. This setup allows the glove to mimic natural hand motion with accuracy and reliability. Costing under ₹2000, the glove focuses on accessibility and real-world usability. By enabling basic gripping and movement, it helps users perform everyday tasks more independently, ultimately improving their confidence and quality of life. Its affordable, modular, and sustainable design makes it a practical assistive device for low-resource environments and a strong example of technology used for social good.";
    }

    if (id === "trolley") {
        modalTitle.innerText = "Robotic Trolley";
        modalDescription.innerText =
            "The Robotic Trolley is a touchless, remotely controlled system designed to transport essential items—such as medicines, supplies, and documents—without requiring direct human contact. The trolley is powered by an Arduino Uno, which serves as the main controller to operate the motors and manage incoming commands. A Bluetooth module (HC-05) enables wireless communication, allowing the trolley to receive instructions from a smartphone in real time. The entire control interface is built using MIT App Inventor, providing a simple and intuitive app that can direct the trolley’s movement effortlessly. Originally created during the COVID-19 period, this project aimed to reduce physical interaction and ensure safer delivery of materials within hospitals, homes, or quarantine environments. The robotic trolley can move forward, backward, and turn smoothly, making it highly usable in narrow or crowded spaces. With its low-cost components and practical design, it offers an efficient, safe, and affordable solution for contactless transportation in emergency or health-sensitive situations.";
    }

    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
};


let darkToggle = document.getElementById("darkToggle");
let body = document.body;


const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    darkToggle.textContent = '☀️';
} else {
    darkToggle.textContent = '🌙';
}


darkToggle.onclick = () => {
    body.classList.toggle('dark-mode');


    if (body.classList.contains('dark-mode')) {
        darkToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        darkToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
};