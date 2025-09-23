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

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
        templeName: "Syracuse Utah",
        location: "Syracuse, Utah",
        dedicated: "2025, June, 8",
        area: 90526,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/syracuse-utah-temple/syracuse-utah-temple-60529-main.jpg"
    },
    {
        templeName: "Bountiful Utah",
        location: "Bountiful, Utah",
        dedicated: "1995, January, 8-14",
        imageURL:
            "https://churchofjesuschristtemples.org/assets/img/temples/bountiful-utah-temple/bountiful-utah-temple-40955-main.jpg"
    },
    {
        templeName: "Frankfurt Germany",
        loacation: "Frankfurt, Germany",
        dedicated: "1987, August, 28-30",
        imageURL:
            "https://churchofjesuschristtemples.org/assets/img/temples/frankfurt-germany-temple/frankfurt-germany-temple-38924-main.jpg"
    }
];
// Temple card rendering
const container = document.getElementById('temple-cards');
if (container && Array.isArray(temples)) {
    function renderTemples(templeList) {
        if (!container) return;
        container.innerHTML = '';
        templeList.forEach(temple => {
            const card = document.createElement('div');
            card.className = 'temple-card';

            // Image (handle both imageUrl and imageURL keys)
            const img = document.createElement('img');
            img.src = temple.imageUrl || temple.imageURL || temple.image || '';
            img.alt = temple.templeName || temple.name || 'Temple image';
            img.loading = 'lazy';
            img.width = 400;
            img.height = 250;

            // Location
            const location = document.createElement('p');
            location.textContent = `Location: ${temple.location || temple.loacation || 'Unknown'}`;

            // Dedicated date
            const dedicated = document.createElement('p');
            dedicated.textContent = `Dedicated: ${temple.dedicated || 'Unknown'}`;

            // Area (if present)
            const area = document.createElement('p');
            if (temple.area) {
                area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;
            } else {
                area.textContent = 'Area: Unknown';
            }

            // Append all to card
            card.appendChild(img);
            card.appendChild(location);
            card.appendChild(dedicated);
            card.appendChild(area);

            // Append card to container
            container.appendChild(card);
        });
    }

    // Initial render (Home)
    renderTemples(temples);

    // --- Filtering logic ---
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = link.textContent.trim();
            let filtered = temples;
            if (filter === 'Old') {
                filtered = temples.filter(t => {
                    // Parse year from dedicated string
                    const year = parseInt((t.dedicated || '').split(',')[0], 10);
                    return year && year < 1900;
                });
            } else if (filter === 'New') {
                filtered = temples.filter(t => {
                    const year = parseInt((t.dedicated || '').split(',')[0], 10);
                    return year && year > 2000;
                });
            } else if (filter === 'Large') {
                filtered = temples.filter(t => t.area && t.area > 90000);
            } else if (filter === 'Small') {
                filtered = temples.filter(t => t.area && t.area < 10000);
            } // else Home: show all
            renderTemples(filtered);
        });
    });
}

