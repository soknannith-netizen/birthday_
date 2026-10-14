const openCardBtn = document.getElementById('openCardBtn');
const closeCardBtn = document.getElementById('closeCardBtn');
const modalOverlay = document.getElementById('modalOverlay');
const pandaContainer = document.getElementById('pandaContainer');
const musicToggleBtn = document.getElementById('musicToggleBtn');
const bgMusic = document.getElementById('bgMusic');
const nameInput = document.getElementById('nameInput');
const saveNameBtn = document.getElementById('saveNameBtn');
const displayName = document.getElementById('displayName');
const interactiveCake = document.getElementById('interactiveCake');
const candleFlame = document.getElementById('candleFlame');
const typedMessage = document.getElementById('typedMessage');

const messageText = "Happy birthday! 🥳🎉 The day you came into my life I wasn't really much attached to you, but day by day you became close to my heart, and now you are truly special to me. I wish I could take away some of the pain you carry alone. You're always welcome you can talk to me anytime, especially about what you can't tell others. May all your dreams come true this year. 🎈 Don't be sad, ok? Be happy! 😊";

// Typewriter effect function
function typeWriter(text, i = 0) {
    if (i === 0) typedMessage.innerHTML = "";
    if (i < text.length) {
        typedMessage.innerHTML += text.charAt(i);
        setTimeout(() => typeWriter(text, i + 1), 18);
    }
}

// Open Card Modal + Confetti + Typewriter
openCardBtn.addEventListener('click', () => {
    modalOverlay.classList.add('active');
    confetti({
        particleCount: 180,
        spread: 100,
        origin: { y: 0.6 }
    });
    setTimeout(() => typeWriter(messageText), 500);
});

// Close Card Modal
closeCardBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});

// Interactive Candle Blowing
let candleBlown = false;
interactiveCake.addEventListener('click', () => {
    if (!candleBlown) {
        candleBlown = true;
        candleFlame.innerText = "💨";
        setTimeout(() => { candleFlame.style.display = 'none'; }, 400);
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.5 }
        });
    }
});

// Click Panda for mini confetti
pandaContainer.addEventListener('click', () => {
    confetti({
        particleCount: 50,
        angle: 60,
        spread: 60,
        origin: { x: 0.8, y: 0.8 }
    });
});

// Custom Name / Wish Setter
saveNameBtn.addEventListener('click', () => {
    const val = nameInput.value.trim();
    if (val !== "") {
        displayName.innerText = val;
        nameInput.value = "";
        confetti({ particleCount: 30, spread: 40, origin: { y: 0.4 } });
    }
});

// Floating elements generator
function createFloatingElements() {
    const bgElements = document.getElementById('bgElements');
    const symbols = ['💖', '✨', '🌸', '🤍', '⭐', '🎈'];
    
    setInterval(() => {
        const span = document.createElement('span');
        span.classList.add('floating-symbol');
        span.innerText = symbols[Math.floor(Math.random() * symbols.length)];
        span.style.left = Math.random() * 100 + 'vw';
        span.style.fontSize = (Math.random() * 1.2 + 0.8) + 'rem';
        span.style.animationDuration = (Math.random() * 3 + 4) + 's';
        bgElements.appendChild(span);
        
        setTimeout(() => { span.remove(); }, 7000);
    }, 400);
}
window.addEventListener('load', createFloatingElements);

// Mouse Sparkle Magic Effect
document.addEventListener('mousemove', (e) => {
    if (Math.random() < 0.2) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkle.innerText = ['✨', '💖', '⭐'][Math.floor(Math.random() * 3)];
        sparkle.style.left = e.pageX + 'px';
        sparkle.style.top = e.pageY + 'px';
        document.body.appendChild(sparkle);
        setTimeout(() => { sparkle.remove(); }, 800);
    }
});

// Music Toggle Logic
let isMusicPlaying = false;
musicToggleBtn.addEventListener('click', () => {
    if (!isMusicPlaying) {
        bgMusic.play().then(() => {
            isMusicPlaying = true;
            musicToggleBtn.innerText = "🔇 បិទភ្លេង";
        }).catch(err => {
            alert("សូមដាក់ໄຟល໌ MP3 ឈ្មោះ song.mp3 ទុកក្នុង Folder ជាមួយគ្នា!");
        });
    } else {
        bgMusic.pause();
        isMusicPlaying = false;
        musicToggleBtn.innerText = "🎵 បើកភ្លេង";
    }
});