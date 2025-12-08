// Laeb andmed mälust, otsustab kas näidata tühja lehe teadet või kaarte, ja paneb tööle otsingu.
document.addEventListener('DOMContentLoaded', () => {
    const favorites = JSON.parse(localStorage.getItem('shortcutFavorites')) || [];
    const container = document.getElementById('favorites-container');
    const searchInput = document.getElementById('searchInput');
    if (favorites.length === 0) {
        container.innerHTML = '<h3 style="grid-column: 1/-1; text-align: center; margin-top: 50px;">Sul pole veel lemmikuid salvestatud. <br>Mine lisa mõni Windowsi, Maci või Linuxi lehelt!</h3>';
    } else {
        renderFavorites(favorites, container);
    }
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const cards = document.querySelectorAll('.shortcut-card');
            cards.forEach(card => {
                const text = card.textContent.toLowerCase();
                if (text.includes(term)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});

// Ehitab andmemassiivi põhjal HTML elemendid ja lisab need ekraanile.
function renderFavorites(arr, container) {
    container.innerHTML = '';
    arr.forEach(s => {
        const card = document.createElement('li');
        card.className = 'shortcut-card';
        const keyWrapper = document.createElement('div');
        keyWrapper.className = 'key-wrapper';
        s.keys.forEach(k => {
            const keyTag = document.createElement('kbd');
            keyTag.textContent = k;
            keyWrapper.appendChild(keyTag);
        });
        const descSpan = document.createElement('span');
        descSpan.className = 'card-description';
        descSpan.innerHTML = `<b>(${s.os})</b> ${s.description}`;
        const heart = document.createElement('i');
        heart.className = 'fa-solid fa-heart favorite-icon active';
        heart.onclick = () => {
            removeFavorite(s, card, container);
        };
        card.appendChild(keyWrapper);
        card.appendChild(descSpan);
        card.appendChild(heart);
        container.appendChild(card);
    });
}

// Eemaldab otsetee nii brauseri mälust kui ka visuaalselt lehelt.
function removeFavorite(shortcut, cardElement, container) {
    let favorites = JSON.parse(localStorage.getItem('shortcutFavorites')) || [];
    favorites = favorites.filter(fav =>
        !(fav.description === shortcut.description && fav.os === shortcut.os)
    );
    localStorage.setItem('shortcutFavorites', JSON.stringify(favorites));
    cardElement.remove();
    if (favorites.length === 0) {
        container.innerHTML = '<h3 style="grid-column: 1/-1; text-align: center; margin-top: 50px;">Kõik lemmikud kustutatud! 🗑️</h3>';
    }
}
