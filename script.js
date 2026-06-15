/**
 * TORTRIXLAND - Tech Startup Style
 * Clean animations and pixel art background
 */

// ============================================
// LOADING - Quick load with fallback
// ============================================
function hideLoader() {
    const loader = document.getElementById('loader-wrapper');
    if (loader) {
        loader.classList.add('hidden');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 600);
    }
    document.body.classList.add('loaded');
    initPixelArt();
}

// Main load event
window.addEventListener('load', () => {
    setTimeout(hideLoader, 1000); // 1 second wait
});

// Fallback - if something goes wrong, show content after 3 seconds anyway
setTimeout(() => {
    if (!document.body.classList.contains('loaded')) {
        console.log('Fallback loader triggered');
        hideLoader();
    }
}, 3000);

// ============================================
// PIXEL ART BACKGROUND (like TRAE) - WITH EPIC ENTRANCE ANIMATION
// ============================================
function initPixelArt() {
    const canvas = document.getElementById('pixel-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let pixels = [];
    let animationId;
    let startTime = null;

    function resize() {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
        initPixels();
    }

    function initPixels() {
        pixels = [];
        const pixelSize = 6; // Smaller pixels for more detail
        const cols = Math.ceil(width / pixelSize);
        const rows = Math.ceil(height / pixelSize);

        // Center of the pixel art area
        const centerX = width * 0.6;
        const centerY = height * 0.45;

        for (let col = 0; col < cols; col++) {
            for (let row = 0; row < rows; row++) {
                const x = col * pixelSize;
                const y = row * pixelSize;

                // Create abstract patterns using noise-like function
                const noise = Math.sin(col * 0.08) * Math.cos(row * 0.08) +
                    Math.sin(col * 0.04 + row * 0.04) * 0.6 +
                    Math.cos(col * 0.12 - row * 0.06) * 0.3;

                // Distance from center
                const dist = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
                const maxDist = Math.min(width, height) * 0.55;

                // Create scattered pixel effect
                const probability = Math.max(0, 1 - dist / maxDist) * 0.5;
                const noiseEffect = (noise + 1.5) / 2.5;

                if (Math.random() < probability * noiseEffect) {
                    const brightness = Math.random() * 0.6 + 0.15;

                    // Entrance delay based on distance from center (creates ripple effect)
                    const entranceDelay = (dist / maxDist) * 2000 + Math.random() * 500;

                    pixels.push({
                        x,
                        y,
                        size: pixelSize - 1,
                        brightness,
                        currentOpacity: 0, // Start invisible
                        targetOpacity: 1,
                        entranceDelay,
                        phase: Math.random() * Math.PI * 2,
                        flickerSpeed: 0.0005 + Math.random() * 0.001,
                        // Random movement for some pixels
                        hasMovement: Math.random() > 0.7,
                        movePhase: Math.random() * Math.PI * 2,
                        moveAmplitude: Math.random() * 3
                    });
                }
            }
        }

        // Sort by distance for better rendering
        pixels.sort((a, b) => a.entranceDelay - b.entranceDelay);
    }

    function easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }

    function animate(time) {
        if (!startTime) startTime = time;
        const elapsed = time - startTime;

        ctx.clearRect(0, 0, width, height);

        pixels.forEach(pixel => {
            // Calculate entrance animation
            let opacity = 0;
            if (elapsed > pixel.entranceDelay) {
                const entranceProgress = Math.min(1, (elapsed - pixel.entranceDelay) / 800);
                opacity = easeOutCubic(entranceProgress);
            }

            if (opacity <= 0) return;

            // Flickering effect
            const flicker = Math.sin(time * pixel.flickerSpeed + pixel.phase) * 0.15;
            const alpha = Math.max(0.1, Math.min(1, (pixel.brightness + flicker) * opacity));

            // Movement for some pixels
            let offsetX = 0, offsetY = 0;
            if (pixel.hasMovement && opacity > 0.5) {
                offsetX = Math.sin(time * 0.001 + pixel.movePhase) * pixel.moveAmplitude;
                offsetY = Math.cos(time * 0.0008 + pixel.movePhase) * pixel.moveAmplitude * 0.5;
            }

            // Gray tones with slight color variation
            const baseColor = 70 + alpha * 110;
            const r = Math.floor(baseColor);
            const g = Math.floor(baseColor + Math.sin(pixel.phase) * 5);
            const b = Math.floor(baseColor + Math.cos(pixel.phase) * 10);

            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
            ctx.fillRect(
                pixel.x + offsetX,
                pixel.y + offsetY,
                pixel.size,
                pixel.size
            );
        });

        animationId = requestAnimationFrame(animate);
    }

    // Initialize
    resize();
    animate(0);

    // Handle resize
    window.addEventListener('resize', () => {
        cancelAnimationFrame(animationId);
        startTime = null;
        resize();
        animate(0);
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, delay * 100);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    // Observe cards
    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });

    // Observe section headers
    document.querySelectorAll('.section-header').forEach(header => {
        observer.observe(header);
    });

    // Observe payment cards
    document.querySelectorAll('.payment-card').forEach(card => {
        observer.observe(card);
    });
});

// ============================================
// SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offset = 80; // Navbar height
            const position = target.getBoundingClientRect().top + window.pageYOffset - offset;

            window.scrollTo({
                top: position,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.8)';
    }

    lastScroll = currentScroll;
});

// ============================================
// BUTTON HOVER EFFECT
// ============================================
document.querySelectorAll('.card-btn').forEach(btn => {
    btn.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.1) rotate(5deg)';
    });

    btn.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

console.log('🎮 TORTRIXLAND loaded');
