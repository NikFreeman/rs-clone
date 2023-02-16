import { getNullCheckedElement } from '../../models/utils';
import { SelectedLanguage } from '../../models/enums';

const languageButton = getNullCheckedElement(document, '.language-button');

function switchLanguageOnClick(): void {
    let currentLanguage = localStorage.getItem('Active Language');
    if (currentLanguage) {
        const activeTheme = JSON.parse(currentLanguage);
        if (activeTheme === SelectedLanguage.english) {
            localStorage.setItem('Active Language', JSON.stringify(`${SelectedLanguage.russian}`));
            languageButton.innerHTML = `Язык: ${SelectedLanguage.russian}`;
            currentLanguage = localStorage.getItem('Active Language') as string;
        } else if (activeTheme === SelectedLanguage.russian) {
            localStorage.setItem('Active Language', JSON.stringify(`${SelectedLanguage.english}`));
            languageButton.innerHTML = `Language: ${SelectedLanguage.english}`;
            currentLanguage = localStorage.getItem('Active Language') as string;
        }
    }
}

function initLanguageStorage(): void {
    const storageContent = localStorage.getItem('Active Language');
    if (!storageContent) {
        localStorage.setItem('Active Language', JSON.stringify(`${SelectedLanguage.english}`));
        languageButton.innerHTML = `Language: ${SelectedLanguage.english}`;
    } else if (JSON.parse(storageContent) === SelectedLanguage.english) {
        languageButton.innerHTML = `Language: ${SelectedLanguage.english}`;
    } else if (JSON.parse(storageContent) === SelectedLanguage.russian) {
        languageButton.innerHTML = `Язык: ${SelectedLanguage.russian}`;
    }
}

initLanguageStorage();

languageButton.addEventListener('click', switchLanguageOnClick);
