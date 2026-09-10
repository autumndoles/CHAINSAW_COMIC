// 1. LIST YOUR COMIC PAGES HERE (In chronological order)
const comicPages = [
    { image: "images/page1.jpg", title: "Chapter 1: Page 1" },
    { image: "images/page2.jpg", title: "Chapter 1: Page 2" },
    { image: "images/page3.jpg", title: "Chapter 1: Page 3" }
];

// 2. Track the current page using URL parameters (e.g., mysite.github.io/?p=2)
const urlParams = new URLSearchParams(window.location.search);
let currentPageIndex = parseInt(urlParams.get('p')) || 0;

// Bounds safety check
if (currentPageIndex < 0) currentPageIndex = 0;
if (currentPageIndex >= comicPages.length) currentPageIndex = comicPages.length - 1;

// 3. Function to display the active page
function renderPage() {
    const page = comicPages[currentPageIndex];
    
    // Update the image source and title header
    document.getElementById("comic-image").src = page.image;
    document.getElementById("comic-title").innerText = page.title;
    
    // Update the browser URL without reloading the page so people can share links to specific pages
    const newUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?p=${currentPageIndex}`;
    window.history.replaceState({ path: newUrl }, '', newUrl);
}

// 4. Navigation controls
function changePage(direction) {
    let targetIndex = currentPageIndex + direction;
    if (targetIndex >= 0 && targetIndex < comicPages.length) {
        currentPageIndex = targetIndex;
        renderPage();
    }
}

function goToPage(index) {
    currentPageIndex = index;
    renderPage();
}

// Run on page load
renderPage();

