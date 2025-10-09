//slide show
let slideIndex = 0;
const slides = document.querySelectorAll('.gallery-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'))
    dots.forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function changeSlide(direction) {
    slideIndex += direction;

    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;

    showSlide(slideIndex);
}

function currentSlide(index) {
    slideIndex = index - 1;
    showSlide(slideIndex);
}
//slide show

//background-video
document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('background-video');

    //safari-specific handling
    if (video) {
        video.muted = true;
        video.loop = true;

        //Force play for Safari
        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log('Autoplay prevented:', error);
            });

        }
    }
})
//background-video

// Auto-advance slides every 4 seconds
setInterval(() => {
    changeSlide(1);
}, 4000);

// Additional DOM interactions for enhanced user experience
document.addEventListener('DOMContentLoaded', function () {
    // Form validation example (if appointment form exists)
    const form = document.querySelector('.appointment-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            const nameField = document.getElementById('name');
            const phoneField = document.getElementById('phone');

            // Basic validation
            if (nameField && nameField.value.trim() === '') {
                e.preventDefault();
                alert('Please enter your name');
                nameField.focus();
                return;
            }

            if (phoneField && phoneField.value.trim() === '') {
                e.preventDefault();
                alert('Please enter your phone number');
                phoneField.focus();
                return;
            }
        });
    }

    // Gallery interaction enhancement
    const galleryContainer = document.querySelector('.gallery-container');
    if (galleryContainer) {
        // Pause slideshow on hover
        galleryContainer.addEventListener('mouseenter', function () {
            // Could add pause functionality here
            this.style.animationPlayState = 'paused';
        });

        galleryContainer.addEventListener('mouseleave', function () {
            // Resume slideshow
            this.style.animationPlayState = 'running';
        });
    }

    // Dynamic copyright year update
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.querySelector('.copyright-year');
    if (copyrightElement) {
        copyrightElement.textContent = currentYear;
    }
});

// Enhanced JavaScript features to meet all requirements
class VisitorTracker {
    constructor() {
        this.visits = this.getVisitHistory();
        this.currentVisit = {
            timestamp: new Date().toISOString(),
            page: window.location.pathname,
            userAgent: navigator.userAgent
        };
        this.updateVisitCount();
    }

    getVisitHistory() {
        const stored = localStorage.getItem('hobbyForgeVisits');
        return stored ? JSON.parse(stored) : [];
    }

    updateVisitCount() {
        this.visits.push(this.currentVisit);

        // Keep only last 10 visits to avoid storage bloat
        if (this.visits.length > 10) {
            this.visits = this.visits.slice(-10);
        }

        localStorage.setItem('hobbyForgeVisits', JSON.stringify(this.visits));
        this.displayVisitInfo();
    }

    displayVisitInfo() {
        const visitCount = this.visits.length;
        const lastVisit = this.visits.length > 1 ? this.visits[this.visits.length - 2] : null;

        // Template literals for string building
        let welcomeMessage;
        if (visitCount === 1) {
            welcomeMessage = `Welcome to The Hobby Forge! This is your first visit.`;
        } else if (visitCount <= 5) {
            welcomeMessage = `Welcome back! Visit #${visitCount}`;
        } else {
            welcomeMessage = `Welcome back, valued visitor! Visit #${visitCount}`;
        }

        // Conditional branching based on visit history
        if (lastVisit) {
            const lastVisitDate = new Date(lastVisit.timestamp).toLocaleDateString();
            welcomeMessage += ` Last visit: ${lastVisitDate}`;
        }

        console.log(welcomeMessage);

        // Display visit counter if element exists
        const visitCounterElement = document.querySelector('.visit-counter');
        if (visitCounterElement) {
            visitCounterElement.textContent = `Visit #${visitCount}`;
        }
    }

    getVisitsByPage() {
        return this.visits.reduce((acc, visit) => {
            const page = visit.page || 'unknown';
            acc[page] = (acc[page] || 0) + 1;
            return acc;
        }, {});
    }
}

// Tutorial progress tracker using objects and arrays
class TutorialProgress {
    constructor() {
        this.tutorials = [
            { id: 'base-coating', title: 'Base Coating Fundamentals', completed: false },
            { id: 'shading', title: 'Shading & Washing Techniques', completed: false },
            { id: 'highlighting', title: 'Edge Highlighting Mastery', completed: false },
            { id: 'weathering', title: 'Advanced Weathering Effects', completed: false },
            { id: 'face-painting', title: 'Face Painting Techniques', completed: false },
            { id: 'metallics', title: 'Metallics & Non-Metallic Metal', completed: false }
        ];
        this.loadProgress();
        this.initializeTutorialTracking();
    }

    loadProgress() {
        const saved = localStorage.getItem('tutorialProgress');
        if (saved) {
            const savedProgress = JSON.parse(saved);
            this.tutorials = this.tutorials.map(tutorial => {
                const savedTutorial = savedProgress.find(t => t.id === tutorial.id);
                return savedTutorial ? { ...tutorial, completed: savedTutorial.completed } : tutorial;
            });
        }
    }

    saveProgress() {
        localStorage.setItem('tutorialProgress', JSON.stringify(this.tutorials));
    }

    markCompleted(tutorialId) {
        const tutorial = this.tutorials.find(t => t.id === tutorialId);
        if (tutorial) {
            tutorial.completed = true;
            this.saveProgress();
            this.updateProgressDisplay();
        }
    }

    getCompletedCount() {
        return this.tutorials.filter(tutorial => tutorial.completed).length;
    }

    getProgressPercentage() {
        return Math.round((this.getCompletedCount() / this.tutorials.length) * 100);
    }

    updateProgressDisplay() {
        const progressElement = document.querySelector('.progress-display');
        if (progressElement) {
            const completedCount = this.getCompletedCount();
            const totalCount = this.tutorials.length;
            const percentage = this.getProgressPercentage();

            // Template literal for complex string building
            const progressHTML = `
                <div class="progress-stats">
                    <h4>Tutorial Progress</h4>
                    <p>Completed: ${completedCount}/${totalCount} (${percentage}%)</p>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${percentage}%"></div>
                    </div>
                </div>
            `;

            progressElement.innerHTML = progressHTML;
        }
    }

    initializeTutorialTracking() {
        // Add click handlers to tutorial links
        const tutorialLinks = document.querySelectorAll('.tutorial-link');
        tutorialLinks.forEach((link, index) => {
            link.addEventListener('click', () => {
                // Conditional logic for tutorial completion
                if (index < this.tutorials.length) {
                    const tutorial = this.tutorials[index];
                    if (!tutorial.completed) {
                        // Mark as completed after a delay (simulating watching)
                        setTimeout(() => {
                            this.markCompleted(tutorial.id);
                            alert(`Tutorial "${tutorial.title}" marked as completed!`);
                        }, 2000);
                    }
                }
            });
        });
    }
}

// Form enhancement with advanced validation
class FormEnhancer {
    constructor() {
        this.formData = {};
        this.validationRules = {
            name: { required: true, minLength: 2 },
            email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
            phone: { required: true, pattern: /^[\d\s\-\+\(\)]+$/ }
        };
        this.initializeForms();
    }

    initializeForms() {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => this.handleFormSubmission(e));

            // Real-time validation
            const inputs = form.querySelectorAll('input, textarea, select');
            inputs.forEach(input => {
                input.addEventListener('blur', () => this.validateField(input));
                input.addEventListener('input', () => this.clearFieldError(input));
            });
        });
    }

    validateField(field) {
        const fieldName = field.name;
        const value = field.value.trim();
        const rules = this.validationRules[fieldName];

        if (!rules) return true;

        let isValid = true;
        let errorMessage = '';

        // Conditional validation logic
        if (rules.required && !value) {
            isValid = false;
            errorMessage = `${this.capitalizeFirst(fieldName)} is required`;
        } else if (rules.minLength && value.length < rules.minLength) {
            isValid = false;
            errorMessage = `${this.capitalizeFirst(fieldName)} must be at least ${rules.minLength} characters`;
        } else if (rules.pattern && !rules.pattern.test(value)) {
            isValid = false;
            errorMessage = `Please enter a valid ${fieldName}`;
        }

        // DOM manipulation for error display
        this.displayFieldError(field, isValid ? '' : errorMessage);
        return isValid;
    }

    displayFieldError(field, message) {
        // Remove existing error
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }

        if (message) {
            // Create and append error element
            const errorElement = document.createElement('span');
            errorElement.className = 'field-error';
            errorElement.textContent = message;
            errorElement.style.color = 'var(--secondary-light)';
            errorElement.style.fontSize = '0.8rem';
            errorElement.style.fontFamily = 'Raleway, sans-serif';

            field.parentNode.appendChild(errorElement);
            field.style.borderColor = 'var(--secondary-light)';
        }
    }

    clearFieldError(field) {
        const errorElement = field.parentNode.querySelector('.field-error');
        if (errorElement) {
            errorElement.remove();
        }
        field.style.borderColor = 'var(--primary-dark)';
    }

    handleFormSubmission(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const data = {};

        // Convert FormData to object using array methods
        [...formData.entries()].forEach(([key, value]) => {
            data[key] = value;
        });

        // Validate all fields
        const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
        const validationResults = [...inputs].map(input => this.validateField(input));
        const isFormValid = validationResults.every(result => result);

        if (isFormValid) {
            // Store form data and show success
            this.saveFormData(data);
            this.showSuccessMessage(form);
        }
    }

    saveFormData(data) {
        const timestamp = new Date().toISOString();
        const submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');

        submissions.push({ ...data, timestamp });
        localStorage.setItem('formSubmissions', JSON.stringify(submissions));
    }

    showSuccessMessage(form) {
        // Template literal for success message
        const successHTML = `
            <div class="success-message" style="
                background-color: var(--primary-dark);
                color: var(--text-color);
                padding: 20px;
                border-radius: 8px;
                margin-top: 20px;
                text-align: center;
                font-family: 'Raleway', sans-serif;
            ">
                <h3>Thank you!</h3>
                <p>Your message has been received. We'll get back to you soon!</p>
            </div>
        `;

        // DOM manipulation to show success
        const existingSuccess = form.querySelector('.success-message');
        if (!existingSuccess) {
            form.insertAdjacentHTML('afterend', successHTML);

            // Auto-remove after 5 seconds
            setTimeout(() => {
                const successElement = form.parentNode.querySelector('.success-message');
                if (successElement) {
                    successElement.remove();
                }
            }, 5000);
        }
    }

    capitalizeFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}

// Initialize all enhanced features
document.addEventListener('DOMContentLoaded', function () {
    // Object instantiation with classes
    const visitorTracker = new VisitorTracker();
    const tutorialProgress = new TutorialProgress();
    const formEnhancer = new FormEnhancer();

    // Array methods for dynamic content
    const pageFeatures = ['slideshow', 'forms', 'navigation', 'tutorials'];
    const activeFeatures = pageFeatures.filter(feature => {
        return document.querySelector(`.${feature}`) !== null;
    });

    // Conditional feature initialization
    if (activeFeatures.length > 0) {
        console.log(`Active features on this page: ${activeFeatures.join(', ')}`);
    }

    // Store page analytics
    const analytics = {
        pageLoad: new Date().toISOString(),
        userAgent: navigator.userAgent,
        features: activeFeatures,
        visitNumber: visitorTracker.visits.length
    };

    localStorage.setItem('lastPageAnalytics', JSON.stringify(analytics));
});