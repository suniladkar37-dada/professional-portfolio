const currentPage = window.location.pathname.split("/").pop() || "index.html";
const currentHash = window.location.hash;

const activeLinks = {
    home: currentPage === "index.html" && !currentHash,
    about: currentPage === "index.html" && currentHash === "#about",
    skills: currentPage === "index.html" && currentHash === "#skills",
    experience: currentPage === "experience.html",
    gallery: currentPage === "gallery.html",
    slideshow: currentPage === "slideshow.html",
    contact: currentPage === "contact.html"
};

function navigationLink(href, label, active) {
    return `<a href="${href}"${active ? ' class="active" aria-current="page"' : ""}>${label}</a>`;
}

const headerContainer = document.querySelector("[data-site-header]");
if (headerContainer) {
    headerContainer.innerHTML = `
        <header class="main-header">
            <h1>My Personal Website</h1>
            <p>Welcome to my professional profile</p>
            <nav class="navbar">
                ${navigationLink("index.html", "Home", activeLinks.home)}
                ${navigationLink("index.html#about", "About", activeLinks.about)}
                ${navigationLink("index.html#skills", "Skills", activeLinks.skills)}
                ${navigationLink("experience.html", "Experience", activeLinks.experience)}
                <div class="dropdown">
                    <button class="dropbtn" type="button">More ▼</button>
                    <div class="dropdown-content">
                        ${navigationLink("gallery.html", "Gallery", activeLinks.gallery)}
                        ${navigationLink("slideshow.html", "Slideshow", activeLinks.slideshow)}
                        ${navigationLink("contact.html", "Contact", activeLinks.contact)}
                    </div>
                </div>
            </nav>
            <div class="header-controls">
                <div id="clock-section">
                    <h2>Current Time</h2>
                    <div id="digitalClock">00:00:00</div>
                </div>
                <div id="search-section">
                    <h2>Search This Page</h2>
                    <input type="text" id="searchInput" placeholder="Search here...">
                    <button type="button" onclick="searchWebsite()">Search</button>
                    <p id="searchResult"></p>
                </div>
                <div id="theme-section">
                    <button id="themeBtn" type="button" onclick="changeTheme()">Dark Mode</button>
                </div>
            </div>
        </header>`;
}

const footerContainer = document.querySelector("[data-site-footer]");
if (footerContainer) {
    footerContainer.innerHTML = `
        <footer class="main-footer">
            <p>© 2026 My Personal Website</p>
            <p>Created by Me | All Rights Reserved</p>
        </footer>
        <button id="topBtn" type="button" onclick="goToTop()">↑ Back to Top</button>`;
}
