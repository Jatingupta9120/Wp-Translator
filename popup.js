document.getElementById('save-btn').addEventListener('click', () => {
    if (typeof chrome !== 'undefined' && chrome.storage) {
        const selectedLanguage = document.getElementById('language-select').value;
        console.log("Selected Language:", selectedLanguage);

        chrome.storage.sync.set({ language: selectedLanguage }, () => {
            console.log('Language saved:', selectedLanguage);
        });
    } else {
        console.error('Chrome storage is not available.');
    }
});
