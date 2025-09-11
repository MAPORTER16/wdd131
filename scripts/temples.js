document.getElementById("currentyear").textContent = `©${new Date().getFullYear()} ⚔️Matthew Porter⚔️ UTAH⛰️ `;

document.getElementById("LastModified").textContent = `Last Modification: ${document.lastModified}`;


// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    // Toggle hamburger icon between ☰ and X
    hamburger.textContent = nav.classList.contains('open') ? '✖' : '☰';
});