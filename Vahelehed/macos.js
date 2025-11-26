const macShortcuts = [
    { os: 'MacOS', description: 'Valib kõik ja kopeerib üksuse lõikelauale', keys: ['Cmd', 'A'] },
    { os: 'MacOS', description: 'Leia: Avab otsinguakna või otsib dokumentidest', keys: ['Cmd', 'F'] },
    { os: 'MacOS', description: 'Otsi Uuesti: Leiab otsitava üksuse järgmise esinemisjuhu', keys: ['Cmd', 'G'] },
    { os: 'MacOS', description: 'Peidab aktiivse rakenduse aknad', keys: ['Cmd', 'H'] },
    { os: 'MacOS', description: 'Minimeerib aktiivse akna Doki', keys: ['Cmd', 'M'] },
    { os: 'MacOS', description: 'Avab uue dokumendi või akna', keys: ['Cmd', 'N'] },
    { os: 'MacOS', description: 'Avab valitud üksuse või avab dialoogi faili valimiseks', keys: ['Cmd', 'O'] },
    { os: 'MacOS', description: 'Prindib aktiivse dokumendi', keys: ['Cmd', 'P'] },
    { os: 'MacOS', description: 'Sulgeb (Quit) rakenduse', keys: ['Cmd', 'Q'] },
    { os: 'MacOS', description: 'Salvestab aktiivse dokumendi', keys: ['Cmd', 'S'] },
    { os: 'MacOS', description: 'Kleebib lõikelaua sisu aktiivsesse dokumenti', keys: ['Cmd', 'V'] },
    { os: 'MacOS', description: 'Sulgeb aktiivse akna', keys: ['Cmd', 'W'] },
    { os: 'MacOS', description: 'Lõikab valitud üksuse ja kopeerib lõikelauale', keys: ['Cmd', 'X'] },
    { os: 'MacOS', description: 'Võtab viimase käsu tagasi (Undo)', keys: ['Cmd', 'Z'] },
    { os: 'MacOS', description: 'Kordab eelnevat tegevust (Redo)', keys: ['Cmd', 'Shift', 'Z'] },
    { os: 'MacOS', description: 'Sundlõpetamine (Force Quit): Valib rakenduse sundlõpetamiseks', keys: ['Cmd', 'Option', 'Esc'] },
    { os: 'MacOS', description: 'Vahetab rakenduste vahel', keys: ['Cmd', 'Tab'] },
    { os: 'MacOS', description: 'Vahetab akende vahel', keys: ['Cmd', 'Shift', 'Tilde'] },
    { os: 'MacOS', description: 'Terve ekraani kuvatõmmis (screenshot)', keys: ['Cmd', 'Shift', '3'] },
    { os: 'MacOS', description: 'Valitud ala kuvatõmmis', keys: ['Cmd', 'Shift', '4'] },
    { os: 'MacOS', description: 'Avab aktiivse rakenduse eelistused (Preferences)', keys: ['Cmd', 'Comma'] }
];

const powerShortcuts = [
    { os: 'MacOS', description: 'Sunnib Maci taaskäivituma (restart)', keys: ['Cmd', 'Ctrl', 'Power'] },
    { os: 'MacOS', description: 'Paneb Maci unerežiimi (sleep)', keys: ['Cmd', 'Ctrl', 'Power'] },
    { os: 'MacOS', description: 'Paneb kuvarid unerežiimi', keys: ['Shift', 'Ctrl', 'Power'] },
    { os: 'MacOS', description: 'Sulgeb kõik rakendused ja taaskäivitab Maci', keys: ['Cmd', 'Ctrl', 'Power'] },
    { os: 'MacOS', description: 'Sulgeb kõik rakendused ja lülitab Maci välja (shut down)', keys: ['Cmd', 'Option', 'Ctrl', 'Power'] },
    { os: 'MacOS', description: 'Logib macOSi kasutajakontolt välja', keys: ['Cmd', 'Shift', 'Q'] },
    { os: 'MacOS', description: 'Logib koheselt macOSi kasutajakontolt välja (ilma kinnituseta)', keys: ['Cmd', 'Shift', 'Option', 'Q'] }
];

const textEditingShortcuts = [
    { os: 'MacOS', description: 'Teeb valitud teksti paksuks (Bold)', keys: ['Cmd', 'B'] },
    { os: 'MacOS', description: 'Teeb valitud teksti kaldkirjas (Italics)', keys: ['Cmd', 'I'] },
    { os: 'MacOS', description: 'Allakriipsutab valitud teksti (Underline)', keys: ['Cmd', 'U'] },
    { os: 'MacOS', description: 'Kuvab või peidab fondiakna', keys: ['Cmd', 'T'] },
    { os: 'MacOS', description: 'Valib töölauakataloogi (Desktop) Avamise või Salvestamise dialoogis', keys: ['Cmd', 'D'] },
    { os: 'MacOS', description: 'Kuvab või peidab valitud sõna definitsiooni', keys: ['Cmd', 'Ctrl', 'D'] },
    { os: 'MacOS', description: 'Kuvab akna Õigekiri ja Grammatika', keys: ['Cmd', ':'] },
    { os: 'MacOS', description: 'Otsib dokumendist valesti kirjutatud sõnu', keys: ['Cmd', ';'] },
    { os: 'MacOS', description: 'Kustutab sõna kursori vasakul poolel', keys: ['Option', 'Delete'] },
    { os: 'MacOS', description: 'Kustutab tähemärgi kursori vasakul poolel', keys: ['Ctrl', 'H'] },
    { os: 'MacOS', description: 'Kustutab tähemärgi kursori paremal poolel', keys: ['Ctrl', 'D'] },
    { os: 'MacOS', description: 'Edasi-kustutamine klaviatuuridel ilma vastava klahvita', keys: ['Fn', 'Delete'] },
    { os: 'MacOS', description: 'Kustutab teksti kursorist rea või lõigu lõpuni', keys: ['Ctrl', 'K'] },
    { os: 'MacOS', description: 'Valib dialoogis Kustuta (Delete) või Ära salvesta (Don\'t Save)', keys: ['Cmd', 'Delete'] },
    { os: 'MacOS', description: 'Kerib ühe lehekülje võrra üles', keys: ['Fn', 'Up'] },
    { os: 'MacOS', description: 'Kerib ühe lehekülje võrra alla', keys: ['Fn', 'Down'] },
    { os: 'MacOS', description: 'Kerib dokumendi algusesse', keys: ['Fn', 'Left'] },
    { os: 'MacOS', description: 'Kerib dokumendi lõppu', keys: ['Fn', 'Right'] },
    { os: 'MacOS', description: 'Liigutab kursori dokumendi algusesse', keys: ['Cmd', 'Up'] },
    { os: 'MacOS', description: 'Liigutab kursori dokumendi lõppu', keys: ['Cmd', 'Down'] },
    { os: 'MacOS', description: 'Liigutab kursori aktiivse rea algusesse', keys: ['Cmd', 'Left'] },
    { os: 'MacOS', description: 'Liigutab kursori aktiivse rea lõppu', keys: ['Cmd', 'Right'] },
    { os: 'MacOS', description: 'Liigutab kursori eelmise sõna algusesse', keys: ['Option', 'Left'] },
    { os: 'MacOS', description: 'Liigutab kursori järgmise sõna lõppu', keys: ['Option', 'Right'] },
    { os: 'MacOS', description: 'Valib teksti kursorist dokumendi alguseni', keys: ['Cmd', 'Shift', 'Up'] },
    { os: 'MacOS', description: 'Valib teksti kursorist dokumendi lõpuni', keys: ['Cmd', 'Shift', 'Down'] },
    { os: 'MacOS', description: 'Valib teksti kursorist aktiivse rea alguseni', keys: ['Cmd', 'Shift', 'Left'] },
    { os: 'MacOS', description: 'Valib teksti kursorist aktiivse rea lõpuni', keys: ['Cmd', 'Shift', 'Right'] },
    { os: 'MacOS', description: 'Laiendab teksti valikut ühe rea võrra üles', keys: ['Shift', 'Up'] },
    { os: 'MacOS', description: 'Laiendab teksti valikut ühe rea võrra alla', keys: ['Shift', 'Down'] },
    { os: 'MacOS', description: 'Laiendab teksti valikut ühe tähemärgi võrra vasakule', keys: ['Shift', 'Left'] },
    { os: 'MacOS', description: 'Laiendab teksti valikut ühe tähemärgi võrra paremale', keys: ['Shift', 'Right'] },
    { os: 'MacOS', description: 'Laiendab teksti valikut aktiivse lõigu alguseni', keys: ['Shift', 'Option', 'Up'] },
    { os: 'MacOS', description: 'Laiendab teksti valikut aktiivse lõigu lõpuni', keys: ['Shift', 'Option', 'Down'] },
    { os: 'MacOS', description: 'Laiendab teksti valikut aktiivse sõna alguseni', keys: ['Shift', 'Option', 'Left'] },
    { os: 'MacOS', description: 'Laiendab teksti valikut aktiivse sõna lõpuni', keys: ['Shift', 'Option', 'Right'] },
    { os: 'MacOS', description: 'Liigub rea või lõigu algusesse', keys: ['Ctrl', 'A'] },
    { os: 'MacOS', description: 'Liigub ühe tähemärgi võrra tagasi', keys: ['Ctrl', 'B'] },
    { os: 'MacOS', description: 'Liigub rea või lõigu lõppu', keys: ['Ctrl', 'E'] },
    { os: 'MacOS', description: 'Liigub ühe tähemärgi võrra edasi', keys: ['Ctrl', 'F'] },
    { os: 'MacOS', description: 'Tsentreerib kursori või valiku nähtavas alas', keys: ['Ctrl', 'L'] },
    { os: 'MacOS', description: 'Liigub ühe rea võrra alla', keys: ['Ctrl', 'N'] },
    { os: 'MacOS', description: 'Lisab pärast kursorit uue rea', keys: ['Ctrl', 'O'] },
    { os: 'MacOS', description: 'Liigub ühe rea võrra üles', keys: ['Ctrl', 'P'] },
    { os: 'MacOS', description: 'Vahetab kursori ees ja taga olevad tähemärgid', keys: ['Ctrl', 'T'] },
    { os: 'MacOS', description: 'Vasakjoondus', keys: ['Cmd', '{'] },
    { os: 'MacOS', description: 'Paremjoondus', keys: ['Cmd', '}'] },
    { os: 'MacOS', description: 'Keskele joondus', keys: ['Cmd', 'Shift', '|'] },
    { os: 'MacOS', description: 'Liigub otsinguväljale', keys: ['Cmd', 'Option', 'F'] },
    { os: 'MacOS', description: 'Kuvab või peidab rakenduse tööriistariba', keys: ['Cmd', 'Option', 'T'] },
    { os: 'MacOS', description: 'Kopeeri Stiil: Kopeerib valitud üksuse vorminduse seaded', keys: ['Cmd', 'Option', 'C'] },
    { os: 'MacOS', description: 'Kleebi Stiil: Rakendab kopeeritud stiili valitud üksusele', keys: ['Cmd', 'Option', 'V'] },
    { os: 'MacOS', description: 'Kleebi ja Sobita Stiiliga', keys: ['Cmd', 'Shift', 'Option', 'V'] },
    { os: 'MacOS', description: 'Kuvab või peidab inspektori akna', keys: ['Cmd', 'Option', 'I'] },
    { os: 'MacOS', description: 'Lehekülje seadistus: Kuvab dokumendi seadete akna', keys: ['Cmd', 'Shift', 'P'] },
    { os: 'MacOS', description: 'Kuvab dialoogi Salvesta nimega või dubleerib aktiivse dokumendi', keys: ['Cmd', 'Shift', 'S'] },
    { os: 'MacOS', description: 'Vähendab valitud üksuse suurust', keys: ['Cmd', 'Shift', '-'] },
    { os: 'MacOS', description: 'Suurendab valitud üksuse suurust', keys: ['Cmd', 'Shift', '+'] },
    { os: 'MacOS', description: 'Avab Abimenüü (Help)', keys: ['Cmd', 'Shift', '?'] }
];

const finderShortcuts = [
    { os: 'MacOS', description: 'Dubleerib valitud failid', keys: ['Cmd', 'D'] },
    { os: 'MacOS', description: 'Eemaldab (Eject) valitud ketta või mahu', keys: ['Cmd', 'E'] },
    { os: 'MacOS', description: 'Alustab Spotlighti otsingut Finderi aknas', keys: ['Cmd', 'F'] },
    { os: 'MacOS', description: 'Kuvab valitud faili teabeakna (Get Info)', keys: ['Cmd', 'I'] },
    { os: 'MacOS', description: 'Avab Arvuti akna (Computer)', keys: ['Cmd', 'Shift', 'C'] },
    { os: 'MacOS', description: 'Avab Töölaua (Desktop) kausta', keys: ['Cmd', 'Shift', 'D'] },
    { os: 'MacOS', description: 'Avab Kõik Minu Failid akna (All My Files)', keys: ['Cmd', 'Shift', 'F'] },
    { os: 'MacOS', description: 'Avab Mine Kausta akna (Go to Folder)', keys: ['Cmd', 'Shift', 'G'] },
    { os: 'MacOS', description: 'Avab aktiivse macOSi kasutaja Kodukausta (Home)', keys: ['Cmd', 'Shift', 'H'] },
    { os: 'MacOS', description: 'Avab iCloud Drive\'i', keys: ['Cmd', 'Shift', 'I'] },
    { os: 'MacOS', description: 'Avab Võrgu akna (Network)', keys: ['Cmd', 'Shift', 'K'] },
    { os: 'MacOS', description: 'Avab Allalaadimiste (Downloads) kausta', keys: ['Cmd', 'Shift', 'L'] },
    { os: 'MacOS', description: 'Avab Dokumentide (Documents) kausta', keys: ['Cmd', 'Shift', 'O'] },
    { os: 'MacOS', description: 'Avab AirDropi akna', keys: ['Cmd', 'Shift', 'R'] },
    { os: 'MacOS', description: 'Avab Utiliitide (Utilities) kausta', keys: ['Cmd', 'Shift', 'U'] },
    { os: 'MacOS', description: 'Kuvab või peidab Doki', keys: ['Cmd', 'Option', 'D'] },
    { os: 'MacOS', description: 'Lisab valitud üksuse külgribale', keys: ['Cmd', 'Ctrl', 'T'] },
    { os: 'MacOS', description: 'Peidab või kuvab teeriba (path bar) Finderi akendes', keys: ['Cmd', 'Option', 'P'] },
    { os: 'MacOS', description: 'Peidab või kuvab külgriba (Sidebar) Finderi akendes', keys: ['Cmd', 'Option', 'S'] },
    { os: 'MacOS', description: 'Peidab või kuvab olekuriba (status bar) Finderi akendes', keys: ['Cmd', '/'] },
    { os: 'MacOS', description: 'Kuvab vaatamise seaded (View Options)', keys: ['Cmd', 'J'] },
    { os: 'MacOS', description: 'Avab ühenda serveriga akna (Connect to Server)', keys: ['Cmd', 'K'] },
    { os: 'MacOS', description: 'Loob valitud üksusest otsetee (alias)', keys: ['Cmd', 'L'] },
    { os: 'MacOS', description: 'Avab uue Finderi akna', keys: ['Cmd', 'N'] },
    { os: 'MacOS', description: 'Loob uue kausta', keys: ['Cmd', 'Shift', 'N'] },
    { os: 'MacOS', description: 'Loob uue Nutika Kausta (Smart Folder)', keys: ['Cmd', 'Option', 'N'] },
    { os: 'MacOS', description: 'Kuvab valitud otsetee (alias) algse faili', keys: ['Cmd', 'R'] },
    { os: 'MacOS', description: 'Kuvab või peidab vaheleheriba, kui avatud on üks vaheleht', keys: ['Cmd', 'T'] },
    { os: 'MacOS', description: 'Kuvab või peidab Finderi vahelehe', keys: ['Cmd', 'Shift', 'T'] },
    { os: 'MacOS', description: 'Kuvab või peidab tööriistariba, kui avatud on üks vaheleht', keys: ['Cmd', 'Option', 'T'] },
    { os: 'MacOS', description: 'Liigutab lõikelaual olevad failid algsest asukohast (kleebi/lõika)', keys: ['Cmd', 'Option', 'V'] },
    { os: 'MacOS', description: 'Kuvab valitud failide Quick Looki slaidiesitluse', keys: ['Cmd', 'Option', 'Y'] },
    { os: 'MacOS', description: 'Kasutab Quick Looki valitud failide eelvaateks', keys: ['Cmd', 'Y'] },
    { os: 'MacOS', description: 'Vaatab Finderi üksusi ikoonidena', keys: ['Cmd', '1'] },
    { os: 'MacOS', description: 'Vaatab Finderi üksusi loendina', keys: ['Cmd', '2'] },
    { os: 'MacOS', description: 'Vaatab Finderi üksusi veergudena', keys: ['Cmd', '3'] },
    { os: 'MacOS', description: 'Vaatab Finderi üksusi Cover Flow\'ga', keys: ['Cmd', '4'] },
    { os: 'MacOS', description: 'Liigub eelmisesse kausta', keys: ['Cmd', 'Left'] },
    { os: 'MacOS', description: 'Liigub järgmisesse kausta', keys: ['Cmd', 'Right'] },
    { os: 'MacOS', description: 'Avab kausta, mis sisaldab aktiivset kausta', keys: ['Cmd', 'Up'] },
    { os: 'MacOS', description: 'Avab kausta, mis sisaldab aktiivset kausta, uues aknas', keys: ['Cmd', 'Ctrl', 'Up'] },
    { os: 'MacOS', description: 'Avab valitud üksuse', keys: ['Cmd', 'Down'] },
    { os: 'MacOS', description: 'Kuvab töölaua (Mission Control)', keys: ['Cmd', 'Mission Control'] },
    { os: 'MacOS', description: 'Lülitab sihtkuva režiimi (Target Display Mode) sisse/välja', keys: ['Cmd', 'Brightness Up'] },
    { os: 'MacOS', description: 'Lülitab kuva peegeldamise sisse/välja (mitme kuvariga)', keys: ['Cmd', 'Brightness Down'] },
    { os: 'MacOS', description: 'Avab valitud kausta (ainult loendivaates)', keys: ['Right Arrow'] },
    { os: 'MacOS', description: 'Sulgeb valitud kausta (ainult loendivaates)', keys: ['Left Arrow'] },
    { os: 'MacOS', description: 'Avab kausta eraldi aknas ja sulgeb aktiivse', keys: ['Option', 'Double-click'] },
    { os: 'MacOS', description: 'Avab kausta eraldi vahelehel või aknas', keys: ['Cmd', 'Double-click'] },
    { os: 'MacOS', description: 'Liigutab valitud üksuse prügikasti', keys: ['Cmd', 'Delete'] },
    { os: 'MacOS', description: 'Tühjendab prügikasti', keys: ['Cmd', 'Shift', 'Delete'] },
    { os: 'MacOS', description: 'Tühjendab prügikasti ilma kinnitusdialoogita', keys: ['Cmd', 'Shift', 'Option', 'Delete'] },
    { os: 'MacOS', description: 'Kasutab Quick Looki failide eelvaateks', keys: ['Cmd', 'Y'] },
    { os: 'MacOS', description: 'Avab Kuvarite eelistused', keys: ['Option', 'Brightness Up'] },
    { os: 'MacOS', description: 'Avab Mission Controli eelistused', keys: ['Option', 'Mission Control'] },
    { os: 'MacOS', description: 'Avab Heli eelistused', keys: ['Option', 'Volume Up'] },
    { os: 'MacOS', description: 'Liigutab lohistatud üksuse teisele mahule või asukohale', keys: ['Cmd', 'Drag'] },
    { os: 'MacOS', description: 'Kopeerib lohistatud üksuse', keys: ['Option', 'Drag'] },
    { os: 'MacOS', description: 'Loob lohistatud üksusest otsetee (alias)', keys: ['Cmd', 'Option', 'Drag'] }
];
function renderShortcuts(arr, selector) {
    const container = document.querySelector(selector);
    if (!container) return;
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
        descSpan.textContent = s.description;
        card.appendChild(keyWrapper);
        card.appendChild(descSpan);
        container.appendChild(card);
    });
}

// --- SEE OSA OLI PUUDU (KOPEERI SEE OMA FAILIST) ---
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
        // Ohutusabinõu: kui listi pole, liigu edasi
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
// ---------------------------------------------------

function init() {
    // Veendu, et need ID-d (#shortcuts, #power jne) on sinu HTML-is olemas!
    renderShortcuts(macShortcuts, '#shortcuts');
    renderShortcuts(powerShortcuts, '#power');
    renderShortcuts(textEditingShortcuts, '#text-editing');
    renderShortcuts(finderShortcuts, '#finder');

    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchShortcuts(e.target.value);
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}