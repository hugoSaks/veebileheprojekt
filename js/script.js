const allShortcuts = [
    // --- WINDOWS ---
    { os: 'Windows', description: 'Kopeeri', keys: ['Ctrl', 'C'] },
    { os: 'Windows', description: 'Kleebi', keys: ['Ctrl', 'V'] },
    { os: 'Windows', description: 'Lõika', keys: ['Ctrl', 'X'] },
    { os: 'Windows', description: 'Ava File Explorer', keys: ['Win', 'E'] },
    { os: 'Windows', description: 'Lukusta arvuti', keys: ['Win', 'L'] },
    { os: 'Windows', description: 'Tegumihaldur (Task Manager)', keys: ['Ctrl', 'Shift', 'Esc'] },
    { os: 'Windows', description: 'Kuva töölaud', keys: ['Win', 'D'] },

    // --- MACOS ---
    { os: 'MacOS', description: 'Kopeeri', keys: ['Cmd', 'C'] },
    { os: 'MacOS', description: 'Kleebi', keys: ['Cmd', 'V'] },
    { os: 'MacOS', description: 'Spotlight otsing', keys: ['Cmd', 'Space'] },
    { os: 'MacOS', description: 'Tee ekraanipilt (terve ekraan)', keys: ['Cmd', 'Shift', '3'] },
    { os: 'MacOS', description: 'Sulge programm', keys: ['Cmd', 'Q'] },
    { os: 'MacOS', description: 'Finder: Uus aken', keys: ['Cmd', 'N'] },

    // --- LINUX ---
    { os: 'Linux', description: 'Terminal: Uus vaheleht', keys: ['Ctrl', 'Shift', 'T'] },
    { os: 'Linux', description: 'Terminal: Kopeeri', keys: ['Ctrl', 'Shift', 'C'] },
    { os: 'Linux', description: 'Terminal: Kleebi', keys: ['Ctrl', 'Shift', 'V'] },
    { os: 'Linux', description: 'Sudo käsu kordamine', keys: ['sudo', '!!'] },
    { os: 'Linux', description: 'Puhasta terminal', keys: ['Ctrl', 'L'] }
];

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
        description.innerHTML = `<strong>${shortcut.os}</strong>: ${shortcut.description}`;
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
        const searchTerm = e.target.value.toLowerCase().trim();
        if (searchTerm.length > 0) {
            osChoicesContainer.classList.add('peidetud');
            shortcutsContainer.classList.remove('peidetud'); 
            shortcutsContainer.innerHTML = '';
            const filteredShortcuts = allShortcuts.filter(sc =>
                sc.description.toLowerCase().includes(searchTerm) ||
                sc.os.toLowerCase().includes(searchTerm) ||
                sc.keys.join(' ').toLowerCase().includes(searchTerm)
            );
            if (filteredShortcuts.length > 0) {
                filteredShortcuts.forEach(sc => {
                    shortcutsContainer.appendChild(createShortcutElement(sc));
                });
            } else {
                shortcutsContainer.innerHTML = '<p style="color: white; text-align: center;">Tulemusi ei leitud.</p>';
            }
        } else {
            osChoicesContainer.classList.remove('peidetud'); 
            shortcutsContainer.classList.add('peidetud'); 
        }
    });

    // --- JÕULUTEEMA (Lumehelbed) ---
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
        snowInterval = setInterval(createSnowflake, 200); 
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
});