import { getNullCheckedElement } from '../../models/utils';
import { ThemeName } from '../../models/enums';

const themeButton = getNullCheckedElement(document, '.themeButton');
const html = document.getElementById('theme-switcher') as Element;
const rsLogo = getNullCheckedElement(document, '.footer-logo');

function invertLogoColor(activeTheme: string): void {
    if (activeTheme === ThemeName.light && rsLogo.classList.contains('invert')) {
        rsLogo.classList.remove('invert');
    } else {
        rsLogo.classList.add('invert');
    }
}

function switchHtmlTheme(activeTheme: string): void {
    if (activeTheme === ThemeName.light) {
        html.className = '';
    } else {
        html.className = 'dark';
    }
}

function switchThemeOnClick(): void {
    let currentTheme = localStorage.getItem('Active Theme');
    if (currentTheme) {
        const activeTheme = JSON.parse(currentTheme);
        if (activeTheme === ThemeName.light) {
            localStorage.setItem('Active Theme', JSON.stringify(`${ThemeName.dark}`));
            themeButton.innerHTML = `Theme: ${ThemeName.dark}`;
            currentTheme = localStorage.getItem('Active Theme') as string;
            switchHtmlTheme(JSON.parse(currentTheme));
            invertLogoColor(JSON.parse(currentTheme));
        } else if (activeTheme === ThemeName.dark) {
            localStorage.setItem('Active Theme', JSON.stringify(`${ThemeName.light}`));
            themeButton.innerHTML = `Theme: ${ThemeName.light}`;
            currentTheme = localStorage.getItem('Active Theme') as string;
            switchHtmlTheme(JSON.parse(currentTheme));
            invertLogoColor(JSON.parse(currentTheme));
        }
    }
}

function initLocalStorage(): void {
    const storageContent = localStorage.getItem('Active Theme');
    if (!storageContent) {
        localStorage.setItem('Active Theme', JSON.stringify(`${ThemeName.light}`));
        themeButton.innerHTML = `Theme: ${ThemeName.light}`;
    } else {
        switchHtmlTheme(JSON.parse(storageContent));
        invertLogoColor(JSON.parse(storageContent));
        if (JSON.parse(storageContent) === ThemeName.light) {
            themeButton.innerHTML = `Theme: ${ThemeName.light}`;
        } else if (JSON.parse(storageContent) === ThemeName.dark) {
            themeButton.innerHTML = `Theme: ${ThemeName.dark}`;
        }
    }
}

initLocalStorage();

themeButton.addEventListener('click', switchThemeOnClick);
