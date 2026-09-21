// --- VIDEO & ELEMENT REFERENCES ---
const defaultVideo = document.querySelector('.video-default');
const oceanVideo = document.querySelector('.video-fire');
const forestVideo = document.querySelector('.video-around');
const philVideo = document.querySelector('.video-phil');
const allVideos = [defaultVideo, oceanVideo, forestVideo, philVideo];

const oceanLink = document.querySelector('.link-fire');
const forestLink = document.querySelector('.link-around');
const philLink = document.querySelector('.link-phil');

function playOnly(activeVideo) {
    allVideos.forEach(vid => {
        if (vid === activeVideo) {
            vid.play().catch(() => {});
        }
    });
}

// --- HOVER TRIGGERS ---
oceanLink.addEventListener('mouseenter', () => playOnly(oceanVideo));
forestLink.addEventListener('mouseenter', () => playOnly(forestVideo));
philLink.addEventListener('mouseenter', () => playOnly(philVideo));

oceanLink.addEventListener('mouseleave', () => playOnly(defaultVideo));
forestLink.addEventListener('mouseleave', () => playOnly(defaultVideo));
philLink.addEventListener('mouseleave', () => playOnly(defaultVideo));


// --- CANVAS & FIRE PARTICLES SETUP ---
const canvas = document.getElementById('fire-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
let mouse = { x: -100, y: -100, lastX: -100, lastY: -100 };
let shakeIntensity = 0;
let edgeHeatAlpha = 0;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);


// --- FIRE PARTICLE CLASS ---
class FireParticle {
    constructor(x, y, vx, vy, type = 'fire', options = {}) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.type = type;
        this.life = 1.0;

        if (type === 'fire') {
            this.size = options.size || (Math.random() * 22 + 12);
            this.decay = options.decay || (Math.random() * 0.025 + 0.015);
            this.drag = options.drag || 0.94;
            this.turbulence = (Math.random() - 0.5) * 1.5;
        } else if (type === 'spark') {
            this.size = Math.random() * 4 + 2;
            this.decay = Math.random() * 0.03 + 0.008;
            this.drag = 0.96;
            this.turbulence = (Math.random() - 0.5) * 0.8;
        }
    }

    update() {
        this.x += this.vx + this.turbulence;
        this.y += this.vy;

        this.vx *= this.drag;
        this.vy *= this.drag;

        if (this.type === 'fire') {
            this.size *= 0.95;
            this.vy -= 0.22; // Natural flame rise
        } else if (this.type === 'spark') {
            this.vy += 0.08; // Ember gravity drop
        }

        this.life -= this.decay;
    }

    draw() {
        if (this.life <= 0) return;

        ctx.save();
        ctx.globalAlpha = Math.max(0, this.life);

        if (this.type === 'spark') {
            ctx.globalCompositeOperation = 'lighter';
            ctx.fillStyle = '#fffaa6';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        } else {
            // High-performance color blending without radial gradients
            ctx.globalCompositeOperation = 'lighter';
            ctx.fillStyle = `rgba(255, ${Math.floor(this.life * 160)}, 20, ${this.life})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.restore();
    }
}


// --- CURSOR FIRE TRAIL ---
window.addEventListener('mousemove', (e) => {
    const vx = e.clientX - mouse.lastX;
    const vy = e.clientY - mouse.lastY;

    mouse.x = e.clientX;
    mouse.y = e.clientY;

    const speed = Math.hypot(vx, vy);
    const particleCount = Math.min(Math.floor(speed * 0.4) + 2, 8);

    for (let i = 0; i < particleCount; i++) {
        particles.push(new FireParticle(
            mouse.x + (Math.random() * 6 - 3),
            mouse.y + (Math.random() * 6 - 3),
            vx * 0.2 + (Math.random() * 1.5 - 0.75),
            vy * 0.2 - (Math.random() * 3 + 1.0),
            'fire',
            { size: Math.random() * 14 + 8, drag: 0.95 }
        ));
    }

    mouse.lastX = e.clientX;
    mouse.lastY = e.clientY;
});


// --- HOLD SPACEBAR & TRANSITION LOGIC ---
const spacebarKey = document.getElementById('spacebar-key');
const fireFill = document.getElementById('fire-fill');
const targetPage = 'try.html';
const holdDuration = 1500; // ms

let isHolding = false;
let isTransitioning = false;
let startTime = 0;
let animationFrameId = null;

function emitSpacebarFire(progress) {
    const rect = spacebarKey.getBoundingClientRect();
    const fillWidth = rect.width * progress;

    const particleCount = Math.floor(progress * 6) + 2;
    for (let i = 0; i < particleCount; i++) {
        const spawnX = rect.left + Math.random() * fillWidth;
        const spawnY = rect.bottom - Math.random() * 8;
        particles.push(new FireParticle(
            spawnX, spawnY, 0, -3.5, 'fire',
            { size: Math.random() * 18 + 10, decay: 0.03, drag: 0.93 }
        ));
    }
}

function triggerTransition() {
    isTransitioning = true;
    shakeIntensity = 28;
    edgeHeatAlpha = 1.0;

    const corners = [
        { x: 0, y: 0, dirX: 1, dirY: 1 },
        { x: canvas.width, y: 0, dirX: -1, dirY: 1 },
        { x: 0, y: canvas.height, dirX: 1, dirY: -1 },
        { x: canvas.width, y: canvas.height, dirX: -1, dirY: -1 }
    ];

    corners.forEach(corner => {
        for (let i = 0; i < 40; i++) {
            const speed = Math.random() * 35 + 10;
            const angle = (Math.random() * Math.PI) / 2;
            const vx = Math.cos(angle) * speed * corner.dirX;
            const vy = Math.sin(angle) * speed * corner.dirY;

            particles.push(new FireParticle(corner.x, corner.y, vx, vy, 'spark'));
        }
    });

    setTimeout(() => {
        document.body.classList.add('fade-out');
    }, 350);

    setTimeout(() => {
        window.location.href = targetPage;
    }, 850);
}

function updateProgress() {
    if (!isHolding) return;

    const elapsedTime = Date.now() - startTime;
    const progressPercent = Math.min(elapsedTime / holdDuration, 1.0);

    fireFill.style.width = `${progressPercent * 100}%`;
    emitSpacebarFire(progressPercent);

    if (elapsedTime >= holdDuration) {
        isHolding = false;
        triggerTransition();
    } else {
        animationFrameId = requestAnimationFrame(updateProgress);
    }
}

window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();

        if (isHolding || e.repeat || isTransitioning) return;

        isHolding = true;
        startTime = Date.now();
        spacebarKey.classList.add('active');
        fireFill.style.transition = 'none';
        animationFrameId = requestAnimationFrame(updateProgress);
    }
});

window.addEventListener('keyup', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();

        if (isTransitioning) return;

        isHolding = false;
        cancelAnimationFrame(animationFrameId);

        spacebarKey.classList.remove('active');
        fireFill.style.transition = 'width 0.2s ease-out';
        fireFill.style.width = '0%';
    }
});


// --- SCREEN SHAKE & HEAT GLOW HELPERS ---
function applyScreenShake() {
    if (shakeIntensity > 0) {
        const dx = (Math.random() - 0.5) * shakeIntensity;
        const dy = (Math.random() - 0.5) * shakeIntensity;
        document.body.style.transform = `translate(${dx}px, ${dy}px)`;
        shakeIntensity *= 0.88;

        if (shakeIntensity < 0.4) {
            shakeIntensity = 0;
            document.body.style.transform = 'none';
        }
    }
}

function drawEdgeHeat() {
    if (edgeHeatAlpha <= 0) return;

    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    ctx.globalAlpha = edgeHeatAlpha;

    const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, Math.min(canvas.width, canvas.height) * 0.4,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) * 0.8
    );
    gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
    gradient.addColorStop(0.5, 'rgba(255, 80, 0, 0.25)');
    gradient.addColorStop(1, 'rgba(255, 140, 0, 0.6)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.restore();
    edgeHeatAlpha *= 0.92;
}


// --- MAIN ANIMATION LOOP ---
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    applyScreenShake();
    drawEdgeHeat();

    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].draw();

        if (particles[i].life <= 0) {
            particles.splice(i, 1);
        }
    }

    requestAnimationFrame(animateParticles);
}

animateParticles();