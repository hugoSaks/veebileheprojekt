
const KõigeOlulisemad = [
  { os: 'Windows', description: 'Kuva töölaud / tagasi', keys: ['Win', 'D'] },
  { os: 'Windows', description: 'Ava File Explorer', keys: ['Win', 'E'] },
  { os: 'Windows', description: 'Lukusta arvuti', keys: ['Win', 'L'] },
  { os: 'Windows', description: 'Vaheta akende vahel', keys: ['Alt', 'Tab'] },
  { os: 'Windows', description: 'Ava otsing', keys: ['Win', 'S'] },
  { os: 'Windows', description: 'Ava Run dialoog', keys: ['Win', 'R'] },
  { os: 'Windows', description: 'Power User menüü', keys: ['Win', 'X'] },
  { os: 'Windows', description: 'Sulge aken / välju programmist', keys: ['Alt', 'F4'] },
  { os: 'Windows', description: 'Task Manager otse', keys: ['Ctrl', 'Shift', 'Esc'] },
  { os: 'Windows', description: 'Akna kinnitus vasakule', keys: ['Win', 'Left'] },
  { os: 'Windows', description: 'Akna kinnitus paremale', keys: ['Win', 'Right'] },
  { os: 'Windows', description: 'Maksimeeri / taasta', keys: ['Win', 'Up'] },
  { os: 'Windows', description: 'Minimeeri / taasta', keys: ['Win', 'Down'] },
];

const Dokumendid = [
  { os: 'Windows', description: 'Kopeeri', keys: ['Ctrl', 'C'] },
  { os: 'Windows', description: 'Lõika', keys: ['Ctrl', 'X'] },
  { os: 'Windows', description: 'Kleebi', keys: ['Ctrl', 'V'] },
  { os: 'Windows', description: 'Võta tagasi (Undo)', keys: ['Ctrl', 'Z'] },
  { os: 'Windows', description: 'Tee uuesti (Redo)', keys: ['Ctrl', 'Y'] },
  { os: 'Windows', description: 'Vali kõik', keys: ['Ctrl', 'A'] },
  { os: 'Windows', description: 'Otsi', keys: ['Ctrl', 'F'] },
  { os: 'Windows', description: 'Asenda', keys: ['Ctrl', 'H'] },
  { os: 'Windows', description: 'Salvesta', keys: ['Ctrl', 'S'] },
  { os: 'Windows', description: 'Prindi', keys: ['Ctrl', 'P'] },
  { os: 'Windows', description: 'Bold / Italic / Underline', keys: ['Ctrl', 'B / I / U'] },
  { os: 'Windows', description: 'Lisa link', keys: ['Ctrl', 'K'] },
  { os: 'Windows', description: 'Märgista (tähed)', keys: ['Shift', 'Arrow keys'] },
  { os: 'Windows', description: 'Märgista sõna kaupa', keys: ['Ctrl', 'Shift', 'Left/Right'] },
  { os: 'Windows', description: 'Kustuta eelnev/järgmine sõna', keys: ['Ctrl', 'Backspace/Delete'] },
  { os: 'Windows', description: 'Liigu sõna kaupa', keys: ['Ctrl', 'Left/Right'] },
  { os: 'Windows', description: 'Rea algus / lõpp', keys: ['Home / End'] },
  { os: 'Windows', description: 'Dokumendi algus / lõpp', keys: ['Ctrl', 'Home/End'] },
];

const FileExplorer = [
  { os: 'Windows', description: 'Ava File Explorer', keys: ['Win', 'E'] },
  { os: 'Windows', description: 'Uus kaust', keys: ['Ctrl', 'Shift', 'N'] },
  { os: 'Windows', description: 'Nimeta ümber', keys: ['F2'] },
  { os: 'Windows', description: 'Tagasi / Edasi', keys: ['Alt', 'Left/Right'] },
  { os: 'Windows', description: 'Üles üks tase', keys: ['Alt', 'Up'] },
  { os: 'Windows', description: 'Fookus aadressiribale', keys: ['Ctrl', 'L'] },
  { os: 'Windows', description: 'Omadused (Properties)', keys: ['Alt', 'Enter'] },
  { os: 'Windows', description: 'Uus Explorer aken', keys: ['Ctrl', 'N'] },
  { os: 'Windows', description: 'Sulge vahekaart/aken', keys: ['Ctrl', 'W'] },
];

const Veebibrauser = [
  { os: 'Windows', description: 'Uus vahekaart', keys: ['Ctrl', 'T'] },
  { os: 'Windows', description: 'Sulge vahekaart', keys: ['Ctrl', 'W'] },
  { os: 'Windows', description: 'Taasta suletud vahekaart', keys: ['Ctrl', 'Shift', 'T'] },
  { os: 'Windows', description: 'Liigu vahekaartidel edasi', keys: ['Ctrl', 'Tab'] },
  { os: 'Windows', description: 'Liigu vahekaartidel tagasi', keys: ['Ctrl', 'Shift', 'Tab'] },
  { os: 'Windows', description: 'Hüppa vahekaardile #1–#8', keys: ['Ctrl', '1–8'] },
  { os: 'Windows', description: 'Hüppa viimasele vahekaardile', keys: ['Ctrl', '9'] },
  { os: 'Windows', description: 'Fookus aadressiribale', keys: ['Ctrl', 'L'] },
  { os: 'Windows', description: 'Otsi lehelt', keys: ['Ctrl', 'F'] },
  { os: 'Windows', description: 'Värskenda / Karmi värskendus', keys: ['F5 / Ctrl+F5'] },
  { os: 'Windows', description: 'Suum sisse / välja / algseis', keys: ['Ctrl', '+ / - / 0'] },
  { os: 'Windows', description: 'Allalaadimised', keys: ['Ctrl', 'J'] },
  { os: 'Windows', description: 'Ajalugu', keys: ['Ctrl', 'H'] },
  { os: 'Windows', description: 'Tagasi / Edasi', keys: ['Alt', 'Left/Right'] },
];

const AknadJaTöölauad = [
  { os: 'Windows', description: 'Akna kinnitus vasak/parem', keys: ['Win', 'Left/Right'] },
  { os: 'Windows', description: 'Maksimeeri / Taasta', keys: ['Win', 'Up'] },
  { os: 'Windows', description: 'Minimeeri / Taasta', keys: ['Win', 'Down'] },
  { os: 'Windows', description: 'Liiguta aken teisele monitorile', keys: ['Win', 'Shift', 'Left/Right'] },
  { os: 'Windows', description: 'Minimeeri kõik', keys: ['Win', 'M'] },
  { os: 'Windows', description: 'Taasta minimeeritud aknad', keys: ['Win', 'Shift', 'M'] },
  { os: 'Windows', description: 'Task View (ülevaade)', keys: ['Win', 'Tab'] },
  { os: 'Windows', description: 'Uus virtuaaltöölaud', keys: ['Win', 'Ctrl', 'D'] },
  { os: 'Windows', description: 'Vaheta virtuaaltöölauda', keys: ['Win', 'Ctrl', 'Left/Right'] },
  { os: 'Windows', description: 'Sulge aktiivne virtuaaltöölaud', keys: ['Win', 'Ctrl', 'F4'] },
];

const EkraanipildidJaSalvestus = [
  { os: 'Windows', description: 'Snipping Tool (ala valik klipp-lauale)', keys: ['Win', 'Shift', 'S'] },
  { os: 'Windows', description: 'Salvesta kogu ekraan pildifailina', keys: ['Win', 'PrtSc'] },
  { os: 'Windows', description: 'Aktiivse akna pilt lõikelauale', keys: ['Alt', 'PrtSc'] },
  { os: 'Windows', description: 'Xbox Game Bar (salvestus)', keys: ['Win', 'G'] },
];

const SüsteemJaKiirseaded = [
  { os: 'Windows', description: 'Settings', keys: ['Win', 'I'] },
  { os: 'Windows', description: 'Quick Settings (heli, Wi-Fi, heleduse slaider)', keys: ['Win', 'A'] },
  { os: 'Windows', description: 'Notifications', keys: ['Win', 'N'] },
  { os: 'Windows', description: 'Connect (traadita ekraan/seadmed)', keys: ['Win', 'K'] },
  { os: 'Windows', description: 'Accessibility', keys: ['Win', 'U'] },
  { os: 'Windows', description: 'Turvaekraan (lukusta, logi välja, TM)', keys: ['Ctrl', 'Alt', 'Delete'] },
];

const TootlikkusBoonused = [
  { os: 'Windows', description: 'Emoji / Sümbolid / GIF-id', keys: ['Win', '.'] },
  { os: 'Windows', description: 'Lõikelaua ajalugu', keys: ['Win', 'V'] },
  { os: 'Windows', description: 'Dikteerimine', keys: ['Win', 'H'] },
  { os: 'Windows', description: 'Käivita tegumiriba ikoon #1–#9', keys: ['Win', '1–9'] },
  { os: 'Windows', description: 'Fookus tegumiribale (Enter avab)', keys: ['Win', 'T'] },
  { os: 'Windows', description: 'Vaheta sisestuskeelt/paigutust', keys: ['Win', 'Space'] },
];

const TerminalJaArendus = [
  { os: 'Windows', description: 'Power User menüü (Terminal jms)', keys: ['Win', 'X'] },
  { os: 'Windows', description: 'Kopeeri / Kleebi (Windows Terminal)', keys: ['Ctrl', 'C / V'] },
  { os: 'Windows', description: 'Uus terminali vahekaart', keys: ['Ctrl', 'Shift', 'T'] },
  { os: 'Windows', description: 'Sulge terminali vahekaart', keys: ['Ctrl', 'Shift', 'W'] },
];

