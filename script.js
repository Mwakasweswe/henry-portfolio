
// HAMBURGER MENU FUNCTIONALITY

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Open and close navigation menu
menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

});

// Close menu after clicking a link
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function(item) {

    item.addEventListener("click", function() {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});
// ACTIVE NAVIGATION LINK

const sections = document.querySelectorAll("section");
const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {
    let currentSection = "";

    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navigationLinks.forEach(function (link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});
// BACK TO TOP BUTTON

const backToTopButton = document.getElementById("back-to-top");

// Show button when scrolling down
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

// Scroll smoothly to the top
backToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// Scroll Reveal Animation
const revealElements = document.querySelectorAll(
    '.section-heading, .about-container, .skills-container, .projects-container, .contact-container, .footer-container'
);

revealElements.forEach(element => {
    element.classList.add('reveal');
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});
// Typing Animation
const typingText = document.getElementById("typing-text");

const words = [
    "Software Developer",
    "Database Administrator",
    "Creative Media Designer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingText.textContent = currentWord.substring(0, charIndex);

    let speed = deleting ? 60 : 100;

    if (!deleting && charIndex === currentWord.length) {
        deleting = true;
        speed = 1500;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

if (typingText) {
    typeEffect();
}
// EmailJS Contact Form
emailjs.init({
    publicKey: "RdDzKIP3zWS7IEdoK"
});
const contactForm = document.getElementById("contact-form");
if (contactForm) {
    const sendButton = contactForm.querySelector("button[type='submit']");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        sendButton.disabled = true;
        sendButton.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

        emailjs.sendForm(
            "service_syu3pfv",
            "template_p7t03wu",
            this
        ).then(
            function() {
                alert("Message sent successfully!");
                contactForm.reset();

                sendButton.disabled = false;
                sendButton.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
            },
            function(error) {
                alert("Failed to send message. Please try again.");
                console.error("Status:", error.status);
                console.error("Error Details:", error.text);

                sendButton.disabled = false;
                sendButton.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
            }
        );
    });
}
    // DARK / LIGHT MODE

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeIcon.classList.replace("fa-moon", "fa-sun");
}

// Toggle theme
themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    const isLight = document.body.classList.contains("light-mode");

    if (isLight) {
        themeIcon.classList.replace("fa-moon", "fa-sun");
        localStorage.setItem("theme", "light");
    } else {
        themeIcon.classList.replace("fa-sun", "fa-moon");
        localStorage.setItem("theme", "dark");
    }

});
// SCROLL PROGRESS BAR

const scrollProgress = document.getElementById("scroll-progress");

window.addEventListener("scroll", function () {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrollPercentage = (scrollTop / scrollHeight) * 100;

    scrollProgress.style.width = scrollPercentage + "%";

});
// PRELOADER

window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    preloader.classList.add("hide");


});
