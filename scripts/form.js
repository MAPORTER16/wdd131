document.getElementById("currentyear").textContent = `©${new Date().getFullYear()} ⚔️Matthew Porter⚔️ UTAH⛰️ `;

document.getElementById("LastModified").textContent = `Last Modification: ${document.lastModified}`;

// Form submission handling
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (e) {
            // Form will submit naturally to review.html
            // The review.js script will handle the counter increment
            console.log('Form submitted - redirecting to review page');
        });
    }
});

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];