document.addEventListener('DOMContentLoaded', () => {

    const searchInput = document.querySelector('.otsingu_sisend');
    const shortcutsContainer = document.getElementById('shortcuts-container');
    const osChoicesContainer = document.querySelector('.Valikud');

    if (!searchInput || !shortcutsContainer || !osChoicesContainer) {
        return;
    }

    function createShortcutElement(shortcut) {

        const item = document.createElement('div');
        item.className = 'shortcut-item';

        const description = document.createElement('span');
        description.className = 'shortcut-description';
        description.textContent = `(${shortcut.os}) ${shortcut.description}`;

        const keysContainer = document.createElement('div');
        keysContainer.className = 'shortcut-keys';
        shortcut.keys.forEach((key, index) => {
            const kbd = document.createElement('kbd');
            kbd.textContent = key;
            keysContainer.appendChild(kbd);
            if (index < shortcut.keys.length - 1) {
                keysContainer.append(' + ');
            }
        });

        item.appendChild(description);
        item.appendChild(keysContainer);
        return item;
    }

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        if (searchTerm.length > 0) {
            osChoicesContainer.classList.add('peidetud');
            shortcutsContainer.classList.remove('peidetud'); 
            shortcutsContainer.innerHTML = ''; 

            const filteredShortcuts = allShortcuts.filter(sc =>
                sc.description.toLowerCase().includes(searchTerm) ||
                sc.os.toLowerCase().includes(searchTerm) ||
                sc.keys.join(' ').toLowerCase().includes(searchTerm)
            );

            filteredShortcuts.forEach(sc => {
                shortcutsContainer.appendChild(createShortcutElement(sc));
            });
        } else {
            osChoicesContainer.classList.remove('peidetud'); 
            shortcutsContainer.classList.add('peidetud'); 
        }
    });
    // --- UUS KOOD: Jõuluteema (Easter Egg) ---
    const titleImage = document.querySelector('.tiitli_pilt');
    let clickCount = 0;
    let snowInterval = null;
    if (titleImage) {
        titleImage.style.cursor = 'pointer';
        titleImage.addEventListener('click', () => {
            clickCount++;
            console.log("Logo klikk:", clickCount);
            if (clickCount === 3 && !snowInterval) {
                startSnowing();
                clickCount = 0; 
            }
        });
    }

    function startSnowing() {
        snowInterval = setInterval(createSnowflake, 100);
    }
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❄';
        snowflake.style.left = Math.random() * 100 + 'vw';
        const size = Math.random() * 20 + 10;
        snowflake.style.fontSize = size + 'px';
        const duration = Math.random() * 5 + 3;
        snowflake.style.animationDuration = duration + 's';
        snowflake.style.opacity = Math.random() * 0.7 + 0.3;
        document.body.appendChild(snowflake);
        setTimeout(() => {
            snowflake.remove();
        }, duration * 1000);
    }
    // --- MATRIX ANIMATSIOON ---
    const canvas = document.getElementById('matrix-bg');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        const keys = ['1', '0', '•', '|', ':', '.', 'cmd', 'alt', 'Ctrl', 'Shift', 'C', 'V', 'Win', 'Tab', 'Cmd', '3x', 'Name', 'Secret']; 
        const fontSize = 14;
        const columns = Math.floor(canvas.width / fontSize);
        const drops = Array(columns).fill(canvas.height / fontSize);
        function drawMatrix() {
            ctx.globalCompositeOperation = 'destination-out';
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; 
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.globalCompositeOperation = 'source-over';
            ctx.font = fontSize + 'px monospace';
            ctx.fillStyle = 'rgba(100, 100, 100, 0.6)'; 
            for (let i = 0; i < drops.length; i++) {
                const text = keys[Math.floor(Math.random() * keys.length)];
                const x = i * fontSize;
                const y = drops[i] * fontSize;
                ctx.fillText(text, x, y);
                if (y > canvas.height && Math.random() > 0.95) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
            setTimeout(() => {
                requestAnimationFrame(drawMatrix);
            }, 50);
        }

        drawMatrix();
    }
});