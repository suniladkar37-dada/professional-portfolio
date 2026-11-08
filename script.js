// Show the current time in the digital clock element.
function showClock() {
    const clock = document.getElementById("digitalClock");
    if (!clock) return;

    clock.textContent = new Date().toLocaleTimeString();
}

// Search the website for a specific term and display the result.
function searchWebsite() {
    const input = document.getElementById("searchInput");
    const result = document.getElementById("searchResult");
    const query = input.value.trim().toLowerCase();

    if (!query) {
        result.textContent = "Enter a search term.";
        return;
    }

    const matches = Array.from(document.querySelectorAll("main section, body > section"))
        .filter(section => section.textContent.toLowerCase().includes(query));

    if (matches.length === 0) {
        result.textContent = "No matching content found.";
        return;
    }

    const firstMatch = matches[0];
    const heading = firstMatch.querySelector("h1, h2, h3");
    result.textContent = `Found ${matches.length} matching section${matches.length === 1 ? "" : "s"}${heading ? `, starting with "${heading.textContent.trim()}".` : "."}`;
    firstMatch.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Toggle between light and dark mode for the website.
function changeTheme() {
    document.body.classList.toggle("dark-mode");

    const button = document.getElementById("themeBtn");
    if (button) {
        button.textContent = document.body.classList.contains("dark-mode")
            ? "Light Mode"
            : "Dark Mode";
    }
}

// Open an image in a lightbox for larger viewing.
function openImage(image) {
    const lightbox = document.getElementById("lightbox");
    const largeImage = document.getElementById("largeImage");

    if (!lightbox || !largeImage || !image) return;

    largeImage.src = image.src;
    largeImage.alt = image.alt;
    lightbox.style.display = "flex";
}

// Close the lightbox when clicking outside the image or on the close button.
function closeImage(event) {
    if (event.target.id !== "lightbox" && !event.target.classList.contains("close")) {
        return;
    }

    const lightbox = document.getElementById("lightbox");
    if (lightbox) {
        lightbox.style.display = "none";
    }
}

// Show the next or previous slide in the image gallery.
const slideImages = Array.from(document.querySelectorAll(".gallery img, .slide-sources img"))
    .map(image => image.getAttribute("src"))
    .filter(Boolean);
let currentSlide = 0;

// Display the current slide image in the gallery.
function showSlide() {
    const slideImage = document.getElementById("slideImage");
    if (!slideImage || slideImages.length === 0) return;

    slideImage.src = slideImages[currentSlide];
}
// Display the previous slide in the image gallery.
function previousSlide() {
    if (slideImages.length === 0) return;

    currentSlide = (currentSlide - 1 + slideImages.length) % slideImages.length;
    showSlide();
}

// Display the next slide in the image gallery.
function nextSlide() {
    if (slideImages.length === 0) return;

    currentSlide = (currentSlide + 1) % slideImages.length;
    showSlide();
}

// Go to the top of the page when the "Top" button is clicked.
function goToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Initialize the clock and slideshow.
showClock();
window.setInterval(showClock, 1000);
showSlide();
// Show the back-to-top button after the page is scrolled.
const topButton = document.getElementById("topBtn");
if (topButton) {
    window.addEventListener("scroll", () => {
        topButton.style.display = window.scrollY > 300 ? "block" : "none";
    });
}

// Automatically change slides every 3 seconds.
window.setInterval(nextSlide, 3000);

// Highlight the selected navigation link.
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelectorAll(".navbar a").forEach(item => {
            item.classList.remove("active");
        });
        link.classList.add("active");
    });
});

// Handle contact form submission by composing an email with the mailto protocol.
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", event => {
        event.preventDefault();

        const name = document.getElementById("visitorName").value.trim();
        const email = document.getElementById("visitorEmail").value.trim();
        const message = document.getElementById("visitorMessage").value.trim();
        const result = document.getElementById("result");

        if (!name || !email || !message) {
            result.textContent = "Please complete all fields.";
            return;
        }

        const subject = "Website Contact Message";
        const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
        window.location.href = `mailto:suniladkar37@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
}
