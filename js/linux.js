// 1. Terminal: Vahelehed ja aknad
const linuxTabs = [
  { os: 'Linux', description: 'Avab uue terminali vahelehe', keys: ['Ctrl', 'Shift', 'T'] },
  { os: 'Linux', description: 'Sulgeb aktiivse vahelehe', keys: ['Ctrl', 'Shift', 'W'] },
  { os: 'Linux', description: 'Liigub järgmisele vahelehele', keys: ['Ctrl', 'Tab'] },
  { os: 'Linux', description: 'Liigub eelmisele vahelehele', keys: ['Ctrl', 'Shift', 'Tab'] },
  { os: 'Linux', description: 'Liigub vahelehtede vahel', keys: ['Ctrl', 'PgUp/PgDn'] },
  { os: 'Linux', description: 'Jagab akna pooleks (Split)', keys: ['Alt', 'Shift', 'D'] },
  { os: 'Linux', description: 'Jaga aken (Horisontaalne)', keys: ['Alt', 'Shift', '+'] },
  { os: 'Linux', description: 'Jaga aken (Vertikaalne)', keys: ['Alt', 'Shift', '-'] },
  { os: 'Linux', description: 'Liigub aktiivse jaotuse fookusega', keys: ['Alt', 'Nooleklahv'] },
  { os: 'Linux', description: 'Muudab aktiivse jaotuse suurust', keys: ['Alt', 'Shift', 'Nooleklahv'] },
  { os: 'Linux', description: 'Avab terminali seadete JSON-faili', keys: ['Ctrl', ','] }
];

// 2. Terminal: Kopeerimine ja käsud
const linuxGeneral = [
  { os: 'Linux', description: 'Kopeerib valitud teksti', keys: ['Ctrl', 'Shift', 'C'] },
  { os: 'Linux', description: 'Kleebib teksti', keys: ['Ctrl', 'Shift', 'V'] },
  { os: 'Linux', description: 'Otsib terminali ajaloost teksti', keys: ['Ctrl', 'Shift', 'F'] },
  { os: 'Linux', description: 'Muudab teksti suurust', keys: ['Ctrl', 'Hiirekerimine'] },
  { os: 'Linux', description: 'SIGINT. Sinu "paanikanupp"', keys: ['Ctrl', 'C'] },
  { os: 'Linux', description: 'SIGTSTP. Lükkab taustale (fg toob tagasi)', keys: ['Ctrl', 'Z'] },
  { os: 'Linux', description: 'Sulgeb kesta või kustutab märgi', keys: ['Ctrl', 'D'] },
  { os: 'Linux', description: 'Peatab terminali väljundi', keys: ['Ctrl', 'S'] },
  { os: 'Linux', description: 'Jätkab terminali tööd (pärast Ctrl+S)', keys: ['Ctrl', 'Q'] },
  { os: 'Linux', description: 'Puhastab terminali ekraani', keys: ['Ctrl', 'L'] }
];

// 3. Terminal: Kursor ja teksti toimetamine
const linuxEditing = [
  { os: 'Linux', description: 'Liigub kursori rea algusesse', keys: ['Ctrl', 'A'] },
  { os: 'Linux', description: 'Liigub kursori rea lõppu', keys: ['Ctrl', 'E'] },
  { os: 'Linux', description: 'Liigub ühe tähe võrra edasi/tagasi', keys: ['Ctrl', 'F / B'] },
  { os: 'Linux', description: 'Liigub ühe sõna võrra edasi/tagasi', keys: ['Alt', 'F / B'] },
  { os: 'Linux', description: 'Hüppab rea alguse ja kursori vahel', keys: ['Ctrl', 'X', 'Ctrl', 'X'] },
  { os: 'Linux', description: 'Kustutab kursorist rea algusesse', keys: ['Ctrl', 'U'] },
  { os: 'Linux', description: 'Kustutab kursorist rea lõpuni', keys: ['Ctrl', 'K'] },
  { os: 'Linux', description: 'Kustutab eelmise sõna', keys: ['Ctrl', 'W'] },
  { os: 'Linux', description: 'Kustutab sõna alates kursorist', keys: ['Alt', 'D'] },
  { os: 'Linux', description: 'Kleebib tagasi kustutatud teksti (Yank)', keys: ['Ctrl', 'Y'] },
  { os: 'Linux', description: 'Vahetab kaks viimast tähte (typo fix)', keys: ['Ctrl', 'T'] },
  { os: 'Linux', description: 'Muudab sõna Suureks/väikeseks', keys: ['Alt', 'U / L'] }
];

// 4. Terminal: Ajalugu ja "Magic" käsud
const linuxHistory = [
  { os: 'Linux', description: 'Otsib ajaloost tagurpidi', keys: ['Ctrl', 'R'] },
  { os: 'Linux', description: 'Võtab ajaloost eelmise/järgmise käsu', keys: ['Nool Üles / Alla'] },
  { os: 'Linux', description: 'Kordab viimast käsku (nt sudo !!)', keys: ['!!'] },
  { os: 'Linux', description: 'Võtab eelmise käsu viimase argumendi', keys: ['!$'] },
  { os: 'Linux', description: 'Võtab eelmise käsu viimase argumendi (Alt)', keys: ['Alt', '.'] },
  { os: 'Linux', description: 'Automaatne täitmine (Tab)', keys: ['Tab'] },
  { os: 'Linux', description: 'Sisestab kõik Tab-i võimalikud vasted', keys: ['Alt', '*'] }
];

// 5. Töölaud ja Süsteem
const linuxSystem = [
  { os: 'Linux', description: 'Avab uue terminaliakna', keys: ['Ctrl', 'Alt', 'T'] },
  { os: 'Linux', description: 'Liigub avatud rakenduste vahel', keys: ['Alt', 'Tab'] },
  { os: 'Linux', description: 'Liigub "koodi" ja "brauseri" töölaua vahel', keys: ['Ctrl', 'Alt', 'Nool'] },
  { os: 'Linux', description: 'Vii aken teisele töölauale', keys: ['Super', 'Shift', 'Nool'] },
  { os: 'Linux', description: 'Salvestab pildi (Screenshot)', keys: ['PrtScn'] },
  { os: 'Linux', description: 'Valib ala pildi tegemiseks', keys: ['Shift', 'PrtScn'] },
  { os: 'Linux', description: 'Avab "Run" dialoogi', keys: ['Alt', 'F2'] },
  { os: 'Linux', description: 'Lukustab ekraani', keys: ['Super', 'L'] },
  { os: 'Linux', description: 'Paigutab akna poolele ekraanile', keys: ['Super', '← / →'] },
  { os: 'Linux', description: 'Sulgeb aktiivse akna', keys: ['Alt', 'F4'] }
];

// 6. Veebibrauser
const linuxBrowser = [
  { os: 'Linux', description: 'Ava uus vaheleht', keys: ['Ctrl', 'T'] },
  { os: 'Linux', description: 'Sulge vaheleht', keys: ['Ctrl', 'W'] },
  { os: 'Linux', description: 'Taasta suletud vaheleht', keys: ['Ctrl', 'Shift', 'T'] },
  { os: 'Linux', description: 'Liigu vahelehtede vahel', keys: ['Ctrl', 'Tab'] },
  { os: 'Linux', description: 'Ava uus Incognito aken', keys: ['Ctrl', 'Shift', 'N'] },
  { os: 'Linux', description: 'Laadi leht uuesti', keys: ['Ctrl', 'R'] },
  { os: 'Linux', description: 'Arendaja tööriistad (DevTools)', keys: ['F12'] },
  { os: 'Linux', description: 'Mine aadressiribale', keys: ['Ctrl', 'L'] },
  { os: 'Linux', description: 'Otsi lehelt', keys: ['Ctrl', 'F'] },
  { os: 'Linux', description: 'Ajalugu', keys: ['Ctrl', 'H'] },
  { os: 'Linux', description: 'Allalaadimised', keys: ['Ctrl', 'J'] }
];

// 1. Renderdamine: Genereerib HTML-i (kaardid) etteantud andmemassiivi ja sihtkoha ID põhjalfunction renderShortcuts(arr, selector) {
    const container = document.querySelector(selector);
    if (!container) return;
    container.innerHTML = ''; 
    const favorites = JSON.parse(localStorage.getItem('shortcutFavorites')) || [];
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
        descSpan.textContent = s.description;
        const heart = document.createElement('i');
        const isFav = favorites.some(fav => fav.description === s.description && fav.os === s.os);
        heart.className = isFav ? 'fa-solid fa-heart favorite-icon active' : 'fa-regular fa-heart favorite-icon';
        heart.onclick = function() {
            toggleFavorite(s, heart);
        };
        card.appendChild(keyWrapper);
        card.appendChild(descSpan);
        card.appendChild(heart);
        container.appendChild(card);
    });
}

// 2. Lemmikud: Haldab lemmikute lisamist ja eemaldamist localStorage-is ning uuendab südame ikoonifunction.
    let favorites = JSON.parse(localStorage.getItem('shortcutFavorites')) || [];
    const index = favorites.findIndex(fav => fav.description === shortcut.description && fav.os === shortcut.os);

    if (index === -1) {
        favorites.push(shortcut);
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid', 'active');
    } else {
        favorites.splice(index, 1);
        icon.classList.remove('fa-solid', 'active');
        icon.classList.add('fa-regular');
    }
    localStorage.setItem('shortcutFavorites', JSON.stringify(favorites));
}
//Filtreerib kaarte vastavalt kasutaja sisestatud tekstile ja peidab tühjaks jäänud sektsioonid.
function searchShortcuts(searchTerm) {
    searchTerm = searchTerm.toLowerCase();
    document.querySelectorAll('.shortcut-card').forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
    document.querySelectorAll('section').forEach(section => {
        const list = section.querySelector('ul');
        if (!list) return;
        const visibleItems = list.querySelectorAll('li[style="display: flex;"]').length;
        if (searchTerm === '') {
             section.style.display = 'block';
             return;
        }
        if (visibleItems === 0 && list.children.length > 0) {
            section.style.display = 'none';
        } else {
            section.style.display = 'block';
        }
    });
}

// 3. Otsing: Filtreerib kaarte vastavalt otsingusõnale ja peidab tühjaks jäänud sektsioonid
document.addEventListener('DOMContentLoaded', () => {
    renderShortcuts(linuxTabs, '#linux-tabs');
    renderShortcuts(linuxGeneral, '#linux-general');
    renderShortcuts(linuxEditing, '#linux-editing');
    renderShortcuts(linuxHistory, '#linux-history');
    renderShortcuts(linuxSystem, '#linux-system');
    renderShortcuts(linuxBrowser, '#linux-browser');
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchShortcuts(e.target.value);
        });
    }
});
