document.addEventListener('DOMContentLoaded', () => {
    // 1. Võtame mälust lemmikud
    const favorites = JSON.parse(localStorage.getItem('shortcutFavorites')) || [];
    const container = document.getElementById('favorites-container');
    
    if (favorites.length === 0) {
        container.innerHTML = '<h3 style="grid-column: 1/-1; text-align: center; color: #555;">Sul pole veel lemmikuid. Mine lisa mõni! 💔</h3>';
    } else {
        renderShortcuts(favorites, '#favorites-container');
    }

    // Otsingu funktsionaalsus lemmikute lehel
    const otsing = document.querySelector('.otsingu_sisend');
    if (otsing) {
        otsing.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            document.querySelectorAll('.shortcut-card').forEach(card => {
                card.style.display = card.textContent.toLowerCase().includes(term) ? 'flex' : 'none';
            });
        });
    }
});

// Kopeeri siia ka see SAMA renderShortcuts ja toggleFavorite kood, 
// mis on punktis 2 (või tee eraldi fail functions.js ja ühenda kõigiga).
// Lihtsuse mõttes võid praegu kopeerida:

function renderShortcuts(arr, selector) {
    const container = document.querySelector(selector);
    if (!container) return;
    container.innerHTML = '';
    
    // Siin lehel on kõik nagunii lemmikud
    const favorites = JSON.parse(localStorage.getItem('shortcutFavorites')) || [];

    arr.forEach(s => {
        const card = document.createElement('li');
        card.className = 'shortcut-card';

        const heart = document.createElement('i');
        heart.className = 'fa-solid fa-heart favorite-icon active'; // Siin on alati punane
        
        heart.onclick = (e) => {
            e.stopPropagation();
            toggleFavorite(s, heart);
            // ERIJUHT: Lemmikute lehel tahame kaardi kohe eemaldada, kui süda ära võtta
            card.remove(); 
            
            // Kui kõik on kustutatud, kuva sõnum
            if (document.querySelectorAll('.shortcut-card').length === 0) {
                container.innerHTML = '<h3 style="grid-column: 1/-1; text-align: center; color: #555;">Kõik lemmikud kustutatud! 💔</h3>';
            }
        };

        const keyWrapper = document.createElement('div');
        keyWrapper.className = 'key-wrapper';
        s.keys.forEach(k => {
            const keyTag = document.createElement('kbd');
            keyTag.textContent = k;
            keyWrapper.appendChild(keyTag);
        });

        const descSpan = document.createElement('span');
        descSpan.className = 'card-description';
        // Lisame ka OS nime, et teaks, mis süsteemist see pärit on
        descSpan.innerHTML = `<b>(${s.os})</b> ${s.description}`;

        card.appendChild(heart);
        card.appendChild(keyWrapper);
        card.appendChild(descSpan);
        container.appendChild(card);
    });
}

function toggleFavorite(shortcut, iconElement) {
    let favorites = JSON.parse(localStorage.getItem('shortcutFavorites')) || [];
    const index = favorites.findIndex(fav => fav.description === shortcut.description && fav.os === shortcut.os);

    if (index !== -1) {
        favorites.splice(index, 1); // Kustutame
        localStorage.setItem('shortcutFavorites', JSON.stringify(favorites));
    }
}