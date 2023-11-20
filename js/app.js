if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./sw.js')
        .then((registration) => {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
            console.error('Service Worker registration failed:', error);
        });
}

const externalLinks = document.querySelectorAll('.external__links');

function checkInternetConnectivity() {
    if (navigator.onLine) {
        externalLinks.forEach((link) => (link.style.display = 'block'));
    } else {
        externalLinks.forEach((link) => (link.style.display = 'none'));
    }
}

checkInternetConnectivity();

window.addEventListener('online', checkInternetConnectivity);
window.addEventListener('offline', checkInternetConnectivity);
