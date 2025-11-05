document.addEventListener('DOMContentLoaded', () => {
    // Kõikide kiirklahvide andmebaas (placeholder).
    // Tulevikus saad selle täita päris andmetega.
    const MAcShortcuts = [
        { os: 'MacOS', description: 'Copy item to Clipboard', keys: ['Cmd', 'A'] },
        { os: 'MacOS', description: 'Find: Open a Find window, or find items in a document', keys: ['Cmd', 'F'] },
        { os: 'MacOS', description: 'Find Again: Find the next occurrence of the item', keys: ['Cmd', 'G'] },
        { os: 'MacOS', description: 'Hide the windows of the front app', keys: ['Cmd', 'H'] },
        { os: 'MacOS', description: 'Minimize the front window to the Dock', keys: ['Cmd', 'M'] },
        { os: 'MacOS', description: 'Open a new document or window', keys: ['Cmd', 'N'] },
        { os: 'MacOS', description: 'Open the selected item, or open a dialog to select a file to open', keys: ['Cmd', 'O'] },
        { os: 'MacOS', description: 'Print current document', keys: ['Cmd', 'P'] },
        { os: 'MacOS', description: 'Quit the app', keys: ['Cmd', 'Q'] },
        { os: 'MacOS', description: 'Save the current document', keys: ['Cmd', 'S'] },
        { os: 'MacOS', description: 'Paste contents of Clipboard in current document', keys: ['Cmd', 'V'] },
        { os: 'MacOS', description: 'Close the front window', keys: ['Cmd', 'W'] },
        { os: 'MacOS', description: 'Cut selected item and copy to the Clipboard', keys: ['Cmd', 'X'] },
        { os: 'MacOS', description: 'Undo the previous command', keys: ['Cmd', 'Z'] },
        { os: 'MacOS', description: 'Redo', keys: ['Cmd', 'Shift', 'Z'] },
        { os: 'MacOS', description: 'Force Quit: Choose an app to force quit', keys: ['Cmd', 'Option', 'Esc'] },
        { os: 'MacOS', description: 'Switch apps', keys: ['Cmd', 'Tab'] },
        { os: 'MacOS', description: 'Switch windows', keys: ['Cmd', 'Shift', 'Tilde'] },
        { os: 'MacOS', description: 'Screenshot of the entire screen', keys: ['Cmd', 'Shift', '3'] },
        { os: 'MacOS', description: 'Select area screenshot', keys: ['Cmd', 'Shift', '4'] },
        { os: 'MacOS', description: 'Open preferences for the front app', keys: ['Cmd', 'Comma'] }
    ];

    const powerShortcuts = [
        { os: 'MacOS', description: 'Force your Mac to restart', keys: ['Cmd', 'Ctrl', 'Power'] },
        { os: 'MacOS', description: 'Put your Mac to sleep', keys: ['Cmd', 'Ctrl', 'Power'] },
        { os: 'MacOS', description: 'Put your displays to sleep', keys: ['Shift', 'Ctrl', 'Power'] },
        { os: 'MacOS', description: 'Quit all apps, then restart your Mac', keys: ['Cmd', 'Ctrl', 'Power'] },
        { os: 'MacOS', description: 'Quit all apps, then shut down your Mac', keys: ['Cmd', 'Option', 'Ctrl', 'Power'] },
        { os: 'MacOS', description: 'Log out of your macOS user account', keys: ['Cmd', 'Shift', 'Q'] },
        { os: 'MacOS', description: 'Log out of your macOS user account immediately (no confirmation)', keys: ['Cmd', 'Shift', 'Option', 'Q'] }
    ];

    const textEditingShortcuts = [
        { os: 'MacOS', description: 'Boldface the selected text, or turn boldfacing on or off', keys: ['Cmd', 'B'] },
        { os: 'MacOS', description: 'Italicize the selected text, or turn italics on or off', keys: ['Cmd', 'I'] },
        { os: 'MacOS', description: 'Underline the selected text, or turn underlining on or off', keys: ['Cmd', 'U'] },
        { os: 'MacOS', description: 'Show or hide the Fonts window', keys: ['Cmd', 'T'] },
        { os: 'MacOS', description: 'Select the Desktop folder from within an Open or Save dialog', keys: ['Cmd', 'D'] },
        { os: 'MacOS', description: 'Show or hide the definition of the selected word', keys: ['Cmd', 'Ctrl', 'D'] },
        { os: 'MacOS', description: 'Display the Spelling and Grammar window', keys: ['Cmd', ':'] },
        { os: 'MacOS', description: 'Find misspelled words in the document', keys: ['Cmd', ';'] },
        { os: 'MacOS', description: 'Delete the word to the left of the insertion point', keys: ['Option', 'Delete'] },
        { os: 'MacOS', description: 'Delete the character to the left of the insertion point', keys: ['Ctrl', 'H'] },
        { os: 'MacOS', description: 'Delete the character to the right of the insertion point', keys: ['Ctrl', 'D'] },
        { os: 'MacOS', description: 'Forward delete on keyboards without Forward Delete key', keys: ['Fn', 'Delete'] },
        { os: 'MacOS', description: 'Delete text between the insertion point and the end of the line or paragraph', keys: ['Ctrl', 'K'] },
        { os: 'MacOS', description: 'Select Delete or Don’t Save in a dialog', keys: ['Cmd', 'Delete'] },
        { os: 'MacOS', description: 'Scroll up one page', keys: ['Fn', 'Up'] },
        { os: 'MacOS', description: 'Scroll down one page', keys: ['Fn', 'Down'] },
        { os: 'MacOS', description: 'Scroll to the beginning of a document', keys: ['Fn', 'Left'] },
        { os: 'MacOS', description: 'Scroll to the end of a document', keys: ['Fn', 'Right'] },
        { os: 'MacOS', description: 'Move the insertion point to the beginning of the document', keys: ['Cmd', 'Up'] },
        { os: 'MacOS', description: 'Move the insertion point to the end of the document', keys: ['Cmd', 'Down'] },
        { os: 'MacOS', description: 'Move the insertion point to the beginning of the current line', keys: ['Cmd', 'Left'] },
        { os: 'MacOS', description: 'Move the insertion point to the end of the current line', keys: ['Cmd', 'Right'] },
        { os: 'MacOS', description: 'Move the insertion point to the beginning of the previous word', keys: ['Option', 'Left'] },
        { os: 'MacOS', description: 'Move the insertion point to the end of the next word', keys: ['Option', 'Right'] },
        { os: 'MacOS', description: 'Select text between insertion point and beginning of document', keys: ['Cmd', 'Shift', 'Up'] },
        { os: 'MacOS', description: 'Select text between insertion point and end of document', keys: ['Cmd', 'Shift', 'Down'] },
        { os: 'MacOS', description: 'Select text between insertion point and beginning of current line', keys: ['Cmd', 'Shift', 'Left'] },
        { os: 'MacOS', description: 'Select text between insertion point and end of current line', keys: ['Cmd', 'Shift', 'Right'] },
        { os: 'MacOS', description: 'Extend text selection to same horizontal location on line above', keys: ['Shift', 'Up'] },
        { os: 'MacOS', description: 'Extend text selection to same horizontal location on line below', keys: ['Shift', 'Down'] },
        { os: 'MacOS', description: 'Extend text selection one character to the left', keys: ['Shift', 'Left'] },
        { os: 'MacOS', description: 'Extend text selection one character to the right', keys: ['Shift', 'Right'] },
        { os: 'MacOS', description: 'Extend text selection to the beginning of the current paragraph', keys: ['Shift', 'Option', 'Up'] },
        { os: 'MacOS', description: 'Extend text selection to the end of the current paragraph', keys: ['Shift', 'Option', 'Down'] },
        { os: 'MacOS', description: 'Extend text selection to the beginning of the current word', keys: ['Shift', 'Option', 'Left'] },
        { os: 'MacOS', description: 'Extend text selection to the end of the current word', keys: ['Shift', 'Option', 'Right'] },
        { os: 'MacOS', description: 'Move to the beginning of the line or paragraph', keys: ['Ctrl', 'A'] },
        { os: 'MacOS', description: 'Move one character backward', keys: ['Ctrl', 'B'] },
        { os: 'MacOS', description: 'Move to the end of a line or paragraph', keys: ['Ctrl', 'E'] },
        { os: 'MacOS', description: 'Move one character forward', keys: ['Ctrl', 'F'] },
        { os: 'MacOS', description: 'Center the cursor or selection in the visible area', keys: ['Ctrl', 'L'] },
        { os: 'MacOS', description: 'Move down one line', keys: ['Ctrl', 'N'] },
        { os: 'MacOS', description: 'Insert a new line after the insertion point', keys: ['Ctrl', 'O'] },
        { os: 'MacOS', description: 'Move up one line', keys: ['Ctrl', 'P'] },
        { os: 'MacOS', description: 'Swap characters behind and in front of insertion point', keys: ['Ctrl', 'T'] },
        { os: 'MacOS', description: 'Left align', keys: ['Cmd', '{'] },
        { os: 'MacOS', description: 'Right align', keys: ['Cmd', '}'] },
        { os: 'MacOS', description: 'Center align', keys: ['Cmd', 'Shift', '|'] },
        { os: 'MacOS', description: 'Go to the search field', keys: ['Cmd', 'Option', 'F'] },
        { os: 'MacOS', description: 'Show or hide a toolbar in the app', keys: ['Cmd', 'Option', 'T'] },
        { os: 'MacOS', description: 'Copy Style: Copy formatting settings of the selected item', keys: ['Cmd', 'Option', 'C'] },
        { os: 'MacOS', description: 'Paste Style: Apply copied style to the selected item', keys: ['Cmd', 'Option', 'V'] },
        { os: 'MacOS', description: 'Paste and Match Style', keys: ['Cmd', 'Shift', 'Option', 'V'] },
        { os: 'MacOS', description: 'Show or hide the inspector window', keys: ['Cmd', 'Option', 'I'] },
        { os: 'MacOS', description: 'Page setup: Display document settings window', keys: ['Cmd', 'Shift', 'P'] },
        { os: 'MacOS', description: 'Display the Save As dialog or duplicate the current document', keys: ['Cmd', 'Shift', 'S'] },
        { os: 'MacOS', description: 'Decrease the size of the selected item', keys: ['Cmd', 'Shift', '-'] },
        { os: 'MacOS', description: 'Increase the size of the selected item', keys: ['Cmd', 'Shift', '+'] },
        { os: 'MacOS', description: 'Open the Help menu', keys: ['Cmd', 'Shift', '?'] }
    ];

    const finderShortcuts = [
        { os: 'MacOS', description: 'Duplicate the selected files', keys: ['Cmd', 'D'] },
        { os: 'MacOS', description: 'Eject the selected disk or volume', keys: ['Cmd', 'E'] },
        { os: 'MacOS', description: 'Start a Spotlight search in the Finder window', keys: ['Cmd', 'F'] },
        { os: 'MacOS', description: 'Show the Get Info window for a selected file', keys: ['Cmd', 'I'] },
        { os: 'MacOS', description: 'Open the Computer window', keys: ['Cmd', 'Shift', 'C'] },
        { os: 'MacOS', description: 'Open the Desktop folder', keys: ['Cmd', 'Shift', 'D'] },
        { os: 'MacOS', description: 'Open the All My Files window', keys: ['Cmd', 'Shift', 'F'] },
        { os: 'MacOS', description: 'Open a Go to Folder window', keys: ['Cmd', 'Shift', 'G'] },
        { os: 'MacOS', description: 'Open the Home folder of the current macOS user', keys: ['Cmd', 'Shift', 'H'] },
        { os: 'MacOS', description: 'Open iCloud Drive', keys: ['Cmd', 'Shift', 'I'] },
        { os: 'MacOS', description: 'Open the Network window', keys: ['Cmd', 'Shift', 'K'] },
        { os: 'MacOS', description: 'Open the Downloads folder', keys: ['Cmd', 'Shift', 'L'] },
        { os: 'MacOS', description: 'Open the Documents folder', keys: ['Cmd', 'Shift', 'O'] },
        { os: 'MacOS', description: 'Open the AirDrop window', keys: ['Cmd', 'Shift', 'R'] },
        { os: 'MacOS', description: 'Open the Utilities folder', keys: ['Cmd', 'Shift', 'U'] },
        { os: 'MacOS', description: 'Show or hide the Dock', keys: ['Cmd', 'Option', 'D'] },
        { os: 'MacOS', description: 'Add the selected item to the sidebar', keys: ['Cmd', 'Ctrl', 'T'] },
        { os: 'MacOS', description: 'Hide or show the path bar in Finder windows', keys: ['Cmd', 'Option', 'P'] },
        { os: 'MacOS', description: 'Hide or show the Sidebar in Finder windows', keys: ['Cmd', 'Option', 'S'] },
        { os: 'MacOS', description: 'Hide or show the status bar in Finder windows', keys: ['Cmd', '/'] },
        { os: 'MacOS', description: 'Show View Options', keys: ['Cmd', 'J'] },
        { os: 'MacOS', description: 'Open the Connect to Server window', keys: ['Cmd', 'K'] },
        { os: 'MacOS', description: 'Make an alias of the selected item', keys: ['Cmd', 'L'] },
        { os: 'MacOS', description: 'Open a new Finder window', keys: ['Cmd', 'N'] },
        { os: 'MacOS', description: 'Create a new folder', keys: ['Cmd', 'Shift', 'N'] },
        { os: 'MacOS', description: 'Create a new Smart Folder', keys: ['Cmd', 'Option', 'N'] },
        { os: 'MacOS', description: 'Show the original file for the selected alias', keys: ['Cmd', 'R'] },
        { os: 'MacOS', description: 'Show or hide the tab bar when a single tab is open', keys: ['Cmd', 'T'] },
        { os: 'MacOS', description: 'Show or hide a Finder tab', keys: ['Cmd', 'Shift', 'T'] },
        { os: 'MacOS', description: 'Show or hide the toolbar when a single tab is open', keys: ['Cmd', 'Option', 'T'] },
        { os: 'MacOS', description: 'Move the files in the Clipboard from their original location', keys: ['Cmd', 'Option', 'V'] },
        { os: 'MacOS', description: 'View a Quick Look slideshow of the selected files', keys: ['Cmd', 'Option', 'Y'] },
        { os: 'MacOS', description: 'Use Quick Look to preview the selected files', keys: ['Cmd', 'Y'] },
        { os: 'MacOS', description: 'View Finder items as icons', keys: ['Cmd', '1'] },
        { os: 'MacOS', description: 'View Finder items as a list', keys: ['Cmd', '2'] },
        { os: 'MacOS', description: 'View Finder items in columns', keys: ['Cmd', '3'] },
        { os: 'MacOS', description: 'View Finder items with Cover Flow', keys: ['Cmd', '4'] },
        { os: 'MacOS', description: 'Go to the previous folder', keys: ['Cmd', 'Left'] },
        { os: 'MacOS', description: 'Go to the next folder', keys: ['Cmd', 'Right'] },
        { os: 'MacOS', description: 'Open the folder that contains the current folder', keys: ['Cmd', 'Up'] },
        { os: 'MacOS', description: 'Open the folder that contains the current folder in a new window', keys: ['Cmd', 'Ctrl', 'Up'] },
        { os: 'MacOS', description: 'Open the selected item', keys: ['Cmd', 'Down'] },
        { os: 'MacOS', description: 'Show the desktop (Mission Control)', keys: ['Cmd', 'Mission Control'] },
        { os: 'MacOS', description: 'Turn Target Display Mode on or off', keys: ['Cmd', 'Brightness Up'] },
        { os: 'MacOS', description: 'Turn display mirroring on or off when connected to multiple displays', keys: ['Cmd', 'Brightness Down'] },
        { os: 'MacOS', description: 'Open the selected folder (List view only)', keys: ['Right Arrow'] },
        { os: 'MacOS', description: 'Close the selected folder (List view only)', keys: ['Left Arrow'] },
        { os: 'MacOS', description: 'Open a folder in a separate window and close the current one', keys: ['Option', 'Double-click'] },
        { os: 'MacOS', description: 'Open a folder in a separate tab or window', keys: ['Cmd', 'Double-click'] },
        { os: 'MacOS', description: 'Move the selected item to the Trash', keys: ['Cmd', 'Delete'] },
        { os: 'MacOS', description: 'Empty the Trash', keys: ['Cmd', 'Shift', 'Delete'] },
        { os: 'MacOS', description: 'Empty the Trash without confirmation dialog', keys: ['Cmd', 'Shift', 'Option', 'Delete'] },
        { os: 'MacOS', description: 'Use Quick Look to preview files', keys: ['Cmd', 'Y'] },
        { os: 'MacOS', description: 'Open Displays preferences', keys: ['Option', 'Brightness Up'] },
        { os: 'MacOS', description: 'Open Mission Control preferences', keys: ['Option', 'Mission Control'] },
        { os: 'MacOS', description: 'Open Sound preferences', keys: ['Option', 'Volume Up'] },
        { os: 'MacOS', description: 'Move dragged item to another volume or location', keys: ['Cmd', 'Drag'] },
        { os: 'MacOS', description: 'Copy the dragged item', keys: ['Option', 'Drag'] },
        { os: 'MacOS', description: 'Make an alias of the dragged item', keys: ['Cmd', 'Option', 'Drag'] }
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