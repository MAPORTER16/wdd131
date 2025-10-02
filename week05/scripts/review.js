// review.js - Handle localStorage counter and display form data

document.addEventListener('DOMContentLoaded', function () {
    // Increment and display review counter
    incrementReviewCounter();

    // Display submitted form data
    displayFormData();
});

function incrementReviewCounter() {
    // Get current count from localStorage, default to 0 if doesn't exist
    let reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;

    // Increment the counter
    reviewCount++;

    // Save back to localStorage
    localStorage.setItem('reviewCount', reviewCount);

    // Display the counter
    const countElement = document.getElementById('review-count');
    if (countElement) {
        countElement.textContent = reviewCount;
    }

    console.log(`Review submitted! Total reviews: ${reviewCount}`);
}

function displayFormData() {
    // Get URL parameters from form submission
    const urlParams = new URLSearchParams(window.location.search);
    const reviewInfo = document.getElementById('review-info');

    if (!reviewInfo) return;

    // Extract form data
    const product = urlParams.get('product');
    const rating = urlParams.get('pumpkins');
    const installDate = urlParams.get('ds');
    const features = [];

    // Check for feature checkboxes
    if (urlParams.get('durability')) features.push('Durability');
    if (urlParams.get('ease of use')) features.push('Ease of Use');
    if (urlParams.get('performance')) features.push('Performance');
    if (urlParams.get('design')) features.push('Design');

    // Display the information
    let html = '<h3>Review Details:</h3>';

    if (product) {
        html += `<p><strong>Product:</strong> ${decodeURIComponent(product)}</p>`;
    }

    if (rating) {
        html += `<p><strong>Rating:</strong> ${rating} pumpkin${rating !== '1' ? 's' : ''} 🎃</p>`;
    }

    if (installDate) {
        html += `<p><strong>Installation Date:</strong> ${installDate}</p>`;
    }

    if (features.length > 0) {
        html += `<p><strong>Useful Features:</strong> ${features.join(', ')}</p>`;
    }

    reviewInfo.innerHTML = html;
}

// Optional: Function to reset counter (for testing purposes)
function resetReviewCounter() {
    localStorage.removeItem('reviewCount');
    const countElement = document.getElementById('review-count');
    if (countElement) {
        countElement.textContent = '0';
    }
    console.log('Review counter reset');
}

// Optional: Function to get current count
function getCurrentReviewCount() {
    return parseInt(localStorage.getItem('reviewCount')) || 0;
}