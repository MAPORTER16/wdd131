// Fill footer year and last modified
const yearEl = document.getElementById("currentyear");
if (yearEl) {
	yearEl.textContent = `©${new Date().getFullYear()} ⚔️Matthew Porter⚔️ UTAH⛰️ `;
}

const modifiedEl = document.getElementById("LastModified");
if (modifiedEl) {
	modifiedEl.textContent = `Last Modification: ${document.lastModified}`;
}

// Wind chill calculation and display
// Using metric units (°C and km/h). Static values must match the displayed weather text.
// Per requirements: temperature <= 10°C and wind speed > 4.8 km/h are required for calculation.

/**
 * Calculate wind chill using the metric formula (°C, km/h).
 * Return value is rounded to one decimal place.
 * Uses a single-line return as required.
 */
function calculateWindChill(tempC, windKmh) {
	return Math.round((13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16)) * 10) / 10;
}

// Static inputs that mirror the markup. Update these when switching to live data.
const staticTempC = 11; // matches "Temperature: 11°C" in the markup
const staticWindKmh = 4; // matches "Wind: 4km/h" in the markup

// Find the wind chill paragraph in the Weather section. If it doesn't exist, create/append it.
const weatherSection = document.querySelector('.hero-image .Weather');
if (weatherSection) {
	// Find existing Wind Chill paragraph if present
	let windChillPara = null;
	weatherSection.querySelectorAll('p').forEach(p => {
		if (p.textContent.toLowerCase().includes('wind chill')) windChillPara = p;
	});

	if (!windChillPara) {
		windChillPara = document.createElement('p');
		weatherSection.appendChild(windChillPara);
	}

	// Determine whether conditions are valid for wind chill calculation
	const qualifiesForWindChill = (tempC, windKmh) => (tempC <= 10 && windKmh > 4.8);

	if (qualifiesForWindChill(staticTempC, staticWindKmh)) {
		const wc = calculateWindChill(staticTempC, staticWindKmh);
		windChillPara.textContent = `Wind Chill: ${wc}°C`;
	} else {
		windChillPara.textContent = 'Wind Chill: N/A';
	}
}