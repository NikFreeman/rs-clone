import { getNullCheckedElement } from '../../models/utils';
import { ThemeName } from '../../models/enums';

const themeButton = getNullCheckedElement(document, '.themeButton');
const html = document.getElementById('theme-switcher') as Element;
const rsLogo = getNullCheckedElement(document, '.footer-logo');

function invertLogoColor(activeTheme: string): void {
    if (activeTheme === ThemeName.light) {
        if (rsLogo.classList.contains('invert')) {
            rsLogo.classList.remove('invert');
            rsLogo.classList.add('invert-0');
        }
    } else if (activeTheme === ThemeName.dark) {
        if (!rsLogo.classList.contains('invert') || rsLogo.classList.contains('invert-0')) {
            rsLogo.classList.remove('invert-0');
            rsLogo.classList.add('invert');
        }
    }
}

function switchHtmlTheme(activeTheme: string): void {
    if (activeTheme === ThemeName.light) {
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            html.classList.add('light');
        }
    } else if (activeTheme === ThemeName.dark) {
        if (!html.classList.contains('dark')) {
            html.classList.remove('light');
            html.classList.add('dark');
        }
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
        console.log(JSON.parse(storageContent));
        if (JSON.parse(storageContent) === ThemeName.light) {
            themeButton.innerHTML = `Theme: ${ThemeName.light}`;
        } else if (JSON.parse(storageContent) === ThemeName.dark) {
            themeButton.innerHTML = `Theme: ${ThemeName.dark}`;
        }
    }
}

initLocalStorage();

themeButton.addEventListener('click', switchThemeOnClick);
