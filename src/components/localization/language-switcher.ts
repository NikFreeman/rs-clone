import { getNullCheckedElement } from '../../models/utils';
import { SelectedLanguage } from '../../models/enums';
import { Localization } from '../../models/types';
import { localizationEng, localizationRu } from './vocabulary';

const languageButton = getNullCheckedElement(document, '.language-button');
const rangeArea = getNullCheckedElement(document, '.preset-name');

localStorage.setItem('Tagline Content', JSON.stringify(`${rangeArea?.textContent}`));

function translatePage(language: string): void {
    let translation: Localization;
    if (language === SelectedLanguage.russian) {
        translation = localizationRu;
    } else if (language === SelectedLanguage.english) {
        translation = localizationEng;
    }
    document.querySelectorAll('[localization-key]').forEach((element) => {
        const key = element.getAttribute('localization-key');
        if (key && translation[key]) {
            element.innerHTML = translation[key]; // eslint-disable-line no-param-reassign
        }
    });
}

function switchLanguageOnClick(): void {
    let currentLanguage = localStorage.getItem('Active Language');
    if (currentLanguage) {
        const activeTheme = JSON.parse(currentLanguage);
        if (activeTheme === SelectedLanguage.english) {
            localStorage.setItem('Active Language', JSON.stringify(`${SelectedLanguage.russian}`));
            languageButton.innerHTML = `Язык: ${SelectedLanguage.russian}`;
            currentLanguage = localStorage.getItem('Active Language') as string;
            translatePage(SelectedLanguage.russian);
        } else if (activeTheme === SelectedLanguage.russian) {
            localStorage.setItem('Active Language', JSON.stringify(`${SelectedLanguage.english}`));
            languageButton.innerHTML = `Language: ${SelectedLanguage.english}`;
            currentLanguage = localStorage.getItem('Active Language') as string;
            translatePage(SelectedLanguage.english);
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
        translatePage(SelectedLanguage.english);
    } else if (JSON.parse(storageContent) === SelectedLanguage.russian) {
        languageButton.innerHTML = `Язык: ${SelectedLanguage.russian}`;
        translatePage(SelectedLanguage.russian);
    }
}

initLanguageStorage();

languageButton.addEventListener('click', switchLanguageOnClick);
