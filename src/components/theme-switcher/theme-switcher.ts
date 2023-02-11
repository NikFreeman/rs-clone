import { getNullCheckedElement } from '../../models/utils';
import { ThemeName } from '../../models/enums';

const themeButton = getNullCheckedElement(document, '.themeButton');
const html = document.getElementById('theme-switcher') as Element;

function switchHtmlTheme(activeTheme: string) {
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
        if (JSON.parse(currentTheme) === ThemeName.light) {
            localStorage.setItem('Active Theme', JSON.stringify(`${ThemeName.dark}`));
            themeButton.innerHTML = `Theme: ${ThemeName.dark}`;
            currentTheme = localStorage.getItem('Active Theme') as string;
            switchHtmlTheme(JSON.parse(currentTheme));
        } else if (JSON.parse(currentTheme) === ThemeName.dark) {
            localStorage.setItem('Active Theme', JSON.stringify(`${ThemeName.light}`));
            themeButton.innerHTML = `Theme: ${ThemeName.light}`;
            currentTheme = localStorage.getItem('Active Theme') as string;
            switchHtmlTheme(JSON.parse(currentTheme));
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
