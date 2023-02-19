import { getNullCheckedElement, choseTranslation } from '../../models/utils';
import { SelectedLanguage, ThemeName, ThemeState, Tagline, PlayButtonStates } from '../../models/enums';
import { Localization } from '../../models/types';
import { localizationEng, localizationRu } from './vocabulary';

const languageButton = getNullCheckedElement(document, '.language-button');
const rangeArea = getNullCheckedElement(document, '.preset-name');
const themeButton = getNullCheckedElement(document, '.themeButton');
const playButton = getNullCheckedElement(document, '.play-text');

localStorage.setItem('Tagline Content', JSON.stringify(`${rangeArea?.textContent}`));

function translatePlayButton() {
    if (playButton.textContent === PlayButtonStates.loadEng || playButton.textContent === PlayButtonStates.loadRu) {
        playButton.textContent = choseTranslation(PlayButtonStates.loadEng, PlayButtonStates.loadRu);
    } else if (
        playButton.textContent === PlayButtonStates.playEng ||
        playButton.textContent === PlayButtonStates.playRu
    ) {
        playButton.textContent = choseTranslation(PlayButtonStates.playEng, PlayButtonStates.playRu);
    }
}

function translateThemeButton() {
    const currentTheme = localStorage.getItem('Active Theme');
    if (currentTheme) {
        const activeTheme = JSON.parse(currentTheme);
        if (activeTheme === ThemeName.dark) {
            themeButton.textContent = choseTranslation(ThemeState.darkEng, ThemeState.darkRu);
        } else if (activeTheme === ThemeName.light) {
            themeButton.textContent = choseTranslation(ThemeState.lightEng, ThemeState.lightRu);
        }
    }
}

function translateRangeArea() {
    const currentTaglineContent = localStorage.getItem('Tagline Content');
    const currentPreset = localStorage.getItem('Current Preset');
    if (
        (currentTaglineContent && JSON.parse(currentTaglineContent) === Tagline.english) ||
        (currentTaglineContent && JSON.parse(currentTaglineContent) === Tagline.russian)
    ) {
        rangeArea.textContent = choseTranslation(Tagline.english, Tagline.russian);
    } else if (currentPreset) {
        const currentMood = JSON.parse(currentPreset).mood;
        const currentPresetIndex = JSON.parse(currentPreset).preset;
        rangeArea.textContent = `${choseTranslation(currentMood.mood, currentMood.moodRu)} / ${choseTranslation(
            currentMood.presets[currentPresetIndex].presetName,
            currentMood.presets[currentPresetIndex].presetNameRu
        )}`;
    }
}

function translatePage(language: string): void {
    let translation: Localization;
    if (language === SelectedLanguage.russian) {
        translation = localizationRu;
    } else if (language === SelectedLanguage.english) {
        translation = localizationEng;
    }
    translateThemeButton();
    translateRangeArea();
    translatePlayButton();
    document.querySelectorAll('[localization-key]').forEach((element) => {
        const key = element.getAttribute('localization-key');
        if (key && translation[key]) {
            element.textContent = translation[key]; // eslint-disable-line no-param-reassign
        }
    });
}

function switchLanguageOnClick(): void {
    let currentLanguage = localStorage.getItem('Active Language');
    if (currentLanguage) {
        const activeTheme = JSON.parse(currentLanguage);
        if (activeTheme === SelectedLanguage.english) {
            localStorage.setItem('Active Language', JSON.stringify(`${SelectedLanguage.russian}`));
            languageButton.textContent = `Язык: ${SelectedLanguage.russian}`;
            currentLanguage = localStorage.getItem('Active Language') as string;
            translatePage(SelectedLanguage.russian);
        } else if (activeTheme === SelectedLanguage.russian) {
            localStorage.setItem('Active Language', JSON.stringify(`${SelectedLanguage.english}`));
            languageButton.textContent = `Language: ${SelectedLanguage.english}`;
            currentLanguage = localStorage.getItem('Active Language') as string;
            translatePage(SelectedLanguage.english);
        }
    }
}

function initLanguageStorage(): void {
    const storageContent = localStorage.getItem('Active Language');
    if (!storageContent) {
        localStorage.setItem('Active Language', JSON.stringify(`${SelectedLanguage.english}`));
        languageButton.textContent = `Language: ${SelectedLanguage.english}`;
    } else if (JSON.parse(storageContent) === SelectedLanguage.english) {
        languageButton.textContent = `Language: ${SelectedLanguage.english}`;
        translatePage(SelectedLanguage.english);
    } else if (JSON.parse(storageContent) === SelectedLanguage.russian) {
        languageButton.textContent = `Язык: ${SelectedLanguage.russian}`;
        translatePage(SelectedLanguage.russian);
    }
}

initLanguageStorage();

languageButton.addEventListener('click', switchLanguageOnClick);
