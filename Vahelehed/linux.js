// Andmed CSV failist "Linuxi shortcutid - Sheet1 (1).csv"

const terminalShortcuts = [
  { os: 'Linux', description: 'Uus vaheleht (Tab)', keys: ['Ctrl', 'Shift', 'T'] },
  { os: 'Linux', description: 'Sulge vaheleht', keys: ['Ctrl', 'Shift', 'W'] },
  { os: 'Linux', description: 'Järgmine vaheleht', keys: ['Ctrl', 'Tab'] },
  { os: 'Linux', description: 'Eelmine vaheleht', keys: ['Ctrl', 'Shift', 'Tab'] },
  { os: 'Linux', description: 'Jaga aken pooleks (Split)', keys: ['Alt', 'Shift', 'D'] },
  { os: 'Linux', description: 'Kopeeri (Terminalis)', keys: ['Ctrl', 'Shift', 'C'] },
  { os: 'Linux', description: 'Kleebi (Terminalis)', keys: ['Ctrl', 'Shift', 'V'] },
  { os: 'Linux', description: 'Otsi terminalist', keys: ['Ctrl', 'Shift', 'F'] },
  { os: 'Linux', description: 'Katkesta protsess (SIGINT)', keys: ['Ctrl', 'C'] },
  { os: 'Linux', description: 'Puhasta ekraan', keys: ['Ctrl', 'L'] },
  { os: 'Linux', description: 'Ajaloo otsing (Reverse search)', keys: ['Ctrl', 'R'] },
  { os: 'Linux', description: 'Peata protsess (Taustale)', keys: ['Ctrl', 'Z'] },
  { os: 'Linux', description: 'Välju / EOF', keys: ['Ctrl', 'D'] },
  { os: 'Linux', description: 'Automaatne lõpetamine', keys: ['Tab'] },
  { os: 'Linux', description: 'Eelmine käsk ajaloost', keys: ['Nool Üles'] },
  { os: 'Linux', description: 'Järgmine käsk ajaloost', keys: ['Nool Alla'] },
  { os: 'Linux', description: 'Korda viimast käsku', keys: ['!!'] },
  { os: 'Linux', description: 'Eelmise käsu viimane argument', keys: ['!$'] },
  { os: 'Linux', description: 'Rea algusesse', keys: ['Ctrl', 'A'] },
  { os: 'Linux', description: 'Rea lõppu', keys: ['Ctrl', 'E'] },
  { os: 'Linux', description: 'Kustuta reast vasakule', keys: ['Ctrl', 'U'] },
  { os: 'Linux', description: 'Kustuta reast paremale', keys: ['Ctrl', 'K'] }
];

const desktopShortcuts = [
  { os: 'Linux', description: 'Ava Terminal', keys: ['Ctrl', 'Alt', 'T'] },
  { os: 'Linux', description: 'Tegevuste ülevaade', keys: ['Super'] },
  { os: 'Linux', description: 'Vaheta rakendusi', keys: ['Alt', 'Tab'] },
  { os: 'Linux', description: 'Vaheta virtuaalset töölauda', keys: ['Ctrl', 'Alt', 'Nooled'] },
  { os: 'Linux', description: 'Ekraanitõmmis (Terve ekraan)', keys: ['PrtScn'] },
  { os: 'Linux', description: 'Ekraanitõmmis (Valik)', keys: ['Shift', 'PrtScn'] },
  { os: 'Linux', description: 'Käivita käsk (Run dialog)', keys: ['Alt', 'F2'] },
  { os: 'Linux', description: 'Lukusta ekraan', keys: ['Super', 'L'] },
  { os: 'Linux', description: 'Akna paigutus (Snap)', keys: ['Super', 'Nooled'] },
  { os: 'Linux', description: 'Sulge aken', keys: ['Alt', 'F4'] },
  { os: 'Linux', description: 'Akna liigutamine', keys: ['Alt', 'F7'] },
  { os: 'Linux', description: 'Akna suuruse muutmine', keys: ['Alt', 'F8'] }
];

const browserShortcuts = [
  { os: 'Linux', description: 'Uus vaheleht', keys: ['Ctrl', 'T'] },
  { os: 'Linux', description: 'Sulge vaheleht', keys: ['Ctrl', 'W'] },
  { os: 'Linux', description: 'Taasta suletud vaheleht', keys: ['Ctrl', 'Shift', 'T'] },
  { os: 'Linux', description: 'Järgmine vaheleht', keys: ['Ctrl', 'Tab'] },
  { os: 'Linux', description: 'Uus aken', keys: ['Ctrl', 'N'] },
  { os: 'Linux', description: 'Incognito aken', keys: ['Ctrl', 'Shift', 'N'] },
  { os: 'Linux', description: 'Lae leht uuesti', keys: ['F5'] },
  { os: 'Linux', description: 'Arendaja tööriistad', keys: ['F12'] },
  { os: 'Linux', description: 'Mine aadressiribale', keys: ['Ctrl', 'L'] },
  { os: 'Linux', description: 'Otsi lehelt', keys: ['Ctrl', 'F'] },
  { os: 'Linux', description: 'Ajalugu', keys: ['Ctrl', 'H'] },
  { os: 'Linux', description: 'Allalaadimised', keys: ['Ctrl', 'J'] },
  // --- LISATUD UUED OTSETEED ---
  { os: 'Linux', description: 'Suurenda (Zoom in)', keys: ['Ctrl', '+'] },
  { os: 'Linux', description: 'Vähenda (Zoom out)', keys: ['Ctrl', '-'] },
  { os: 'Linux', description: 'Lähtesta suurus (Reset zoom)', keys: ['Ctrl', '0'] }
];

// Funktsioon, mis loob HTML sisu
function renderShortcuts(arr, selector) {
    const container = document.querySelector(selector);
    if (!container) {
        console.warn(`Elementi ${selector} ei leitud!`);
        return;
    }
    container.innerHTML = '';
    
    arr.forEach(s => {
        const li = document.createElement('li');
        
        // Klahvide konteiner
        const keysSpan = document.createElement('span');
        keysSpan.className = 'keys';
        
        // Loome iga klahvi jaoks eraldi <kbd> elemendi
        const keysHtml = s.keys.map(k => `<kbd>${k}</kbd>`).join(' + ');
        keysSpan.innerHTML = keysHtml;
        
        // Kirjelduse konteiner
        const descSpan = document.createElement('span');
        descSpan.className = 'desc';
        descSpan.textContent = ' — ' + s.description;
        
        li.appendChild(keysSpan);
        li.appendChild(descSpan);
        container.appendChild(li);
    });
}

// Käivitame renderdamise
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        renderShortcuts(terminalShortcuts, '#linux-terminal');
        renderShortcuts(desktopShortcuts, '#linux-desktop');
        renderShortcuts(browserShortcuts, '#linux-browser');
    });
} else {
    renderShortcuts(terminalShortcuts, '#linux-terminal');
    renderShortcuts(desktopShortcuts, '#linux-desktop');
    renderShortcuts(browserShortcuts, '#linux-browser');
}