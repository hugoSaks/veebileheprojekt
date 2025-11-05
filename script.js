document.addEventListener('DOMContentLoaded', () => {
    // Kõikide kiirklahvide andmebaas (placeholder).
    // Tulevikus saad selle täita päris andmetega.
    const allShortcuts = [
        { os: 'MacOS', description: 'Kopeeri valitud tekst', keys: ['Cmd', 'C'] },
        { os: 'MacOS', description: 'Aseta kopeeritud tekst', keys: ['Cmd', 'V'] },
        { os: 'Windows', description: 'Kopeeri valitud tekst', keys: ['Ctrl', 'C'] },
        { os: 'Windows', description: 'Aseta kopeeritud tekst', keys: ['Ctrl', 'V'] },
        { os: 'Linux', description: 'Ava terminal', keys: ['Ctrl', 'Alt', 'T'] },
        { os: 'Igas', description: 'Salvesta fail', keys: ['Ctrl', 'S'] },
        { os: 'Igas', description: 'Prindi dokument', keys: ['Ctrl', 'P'] }
    ];

    // Leia vajalikud HTML elemendid
    const searchInput = document.querySelector('.otsingu_sisend');
    const shortcutsContainer = document.getElementById('shortcuts-container');
    const osChoicesContainer = document.querySelector('.Valikud');

    // Kui mõni oluline element puudub, ära tee midagi
    if (!searchInput || !shortcutsContainer || !osChoicesContainer) {
        return;
    }

    // Funktsioon, mis loob HTML elemendi ühe kiirklahvi jaoks
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

    // Otsingukasti sündmusekuulaja
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        if (searchTerm.length > 0) {
            // Kui otsingus on teksti
            osChoicesContainer.classList.add('peidetud'); // Peida OS valikud
            shortcutsContainer.classList.remove('peidetud'); // Näita tulemuste konteinerit
            shortcutsContainer.innerHTML = ''; // Tühjenda vanad tulemused

            const filteredShortcuts = allShortcuts.filter(sc =>
                sc.description.toLowerCase().includes(searchTerm) ||
                sc.os.toLowerCase().includes(searchTerm) ||
                sc.keys.join(' ').toLowerCase().includes(searchTerm)
            );

            filteredShortcuts.forEach(sc => {
                shortcutsContainer.appendChild(createShortcutElement(sc));
            });
        } else {
            // Kui otsingukast on tühi
            osChoicesContainer.classList.remove('peidetud'); // Näita uuesti OS valikuid
            shortcutsContainer.classList.add('peidetud'); // Peida tulemuste konteiner
        }
    });
});