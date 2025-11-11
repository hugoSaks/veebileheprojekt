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
});