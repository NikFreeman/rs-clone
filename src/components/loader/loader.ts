import { getNullCheckedElement, addRemoveDomClass, choseTranslation } from '../../models/utils';

const indexes: number[] = [];
const preloader = getNullCheckedElement(document, '.preloader');
const playBtn = getNullCheckedElement(document, '.play');
const playText = getNullCheckedElement(document, '.play-text');
const restText = getNullCheckedElement(document, '.rest-text');
const soundsAmount = document.querySelectorAll('.sound-volume').length;
const languageButton = getNullCheckedElement(document, '.language-button');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function loadedSound(ind: number, arr: string[]) {
    if (arr.length > soundsAmount) {
        return;
    }
    if (indexes.includes(ind)) {
        indexes.length = 0;
        indexes.push(ind);
    } else {
        indexes.push(ind);
    }
    // eslint-disable-next-line no-plusplus
    if (indexes.length === arr.length) {
        addRemoveDomClass(preloader, 'hidden', 'add');
        playText.textContent = choseTranslation('Play', 'Играть');
        restText.textContent = '';
        playBtn.removeAttribute('disabled');
        languageButton.removeAttribute('disabled');
    }
}

export default loadedSound;
