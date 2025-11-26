// Tab Navigation
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');

            // Smooth scroll to top of content
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });

    // Initialize countdown timer
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Gallery Modal Functionality
    initGalleryModal();

    // Add stagger animation to player cards
    const playerCards = document.querySelectorAll('.player-card-pro');
    playerCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Add stagger animation to gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });

    // Animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.player-card-pro, .feature-card, .gallery-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
});

// Gallery Modal/Lightbox
function initGalleryModal() {
    // Create modal element
    const modal = document.createElement('div');
    modal.className = 'gallery-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close">&times;</span>
            <span class="modal-prev">&#10094;</span>
            <span class="modal-next">&#10095;</span>
            <img class="modal-image" src="" alt="Gallery Image">
            <div class="modal-caption"></div>
        </div>
    `;
    document.body.appendChild(modal);

    const galleryItems = document.querySelectorAll('.gallery-item');
    const modalImage = modal.querySelector('.modal-image');
    const modalCaption = modal.querySelector('.modal-caption');
    const closeBtn = modal.querySelector('.modal-close');
    const prevBtn = modal.querySelector('.modal-prev');
    const nextBtn = modal.querySelector('.modal-next');

    let currentIndex = 0;
    const images = Array.from(galleryItems).map(item => {
        const img = item.querySelector('img');
        const caption = item.querySelector('.gallery-caption p');
        return {
            src: img ? img.src : item.querySelector('.image-placeholder-gallery').style.backgroundImage,
            caption: caption ? caption.textContent : 'Gallery Image'
        };
    });

    // Open modal on gallery item click
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentIndex = index;
            showImage(currentIndex);
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Previous image
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    // Next image
    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            closeModal();
        } else if (e.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        } else if (e.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }
    });

    function showImage(index) {
        const img = images[index];
        modalImage.src = img.src;
        modalCaption.textContent = img.caption;
        
        // Add zoom animation
        modalImage.style.animation = 'none';
        setTimeout(() => {
            modalImage.style.animation = 'zoomIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        }, 10);
    }
}

// Countdown Timer for Next Match
function updateCountdown() {
    // First Match - December 7, 2025, 02:45 PM (14:45)
    const matchDate = new Date('December 7, 2025 14:45:00').getTime();
    const now = new Date().getTime();
    const distance = matchDate - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
    } else {
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (daysEl) daysEl.textContent = '00';
        if (hoursEl) hoursEl.textContent = '00';
        if (minutesEl) minutesEl.textContent = '00';
        if (secondsEl) secondsEl.textContent = '00';
    }

    // Second Match - December 7, 2025, 05:00 PM (17:00)
    const matchDate2 = new Date('December 7, 2025 17:00:00').getTime();
    const distance2 = matchDate2 - now;

    if (distance2 > 0) {
        const days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
        const hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
        const seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);

        const daysEl2 = document.getElementById('days2');
        const hoursEl2 = document.getElementById('hours2');
        const minutesEl2 = document.getElementById('minutes2');
        const secondsEl2 = document.getElementById('seconds2');

        if (daysEl2) daysEl2.textContent = String(days2).padStart(2, '0');
        if (hoursEl2) hoursEl2.textContent = String(hours2).padStart(2, '0');
        if (minutesEl2) minutesEl2.textContent = String(minutes2).padStart(2, '0');
        if (secondsEl2) secondsEl2.textContent = String(seconds2).padStart(2, '0');
    } else {
        const daysEl2 = document.getElementById('days2');
        const hoursEl2 = document.getElementById('hours2');
        const minutesEl2 = document.getElementById('minutes2');
        const secondsEl2 = document.getElementById('seconds2');

        if (daysEl2) daysEl2.textContent = '00';
        if (hoursEl2) hoursEl2.textContent = '00';
        if (minutesEl2) minutesEl2.textContent = '00';
        if (secondsEl2) secondsEl2.textContent = '00';
    }
}