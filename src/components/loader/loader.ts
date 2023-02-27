import { getNullCheckedElement, addRemoveDomClass, choseTranslation } from '../../models/utils';

const preloader = getNullCheckedElement(document, '.preloader');
const playBtn = getNullCheckedElement(document, '.play');
const playText = getNullCheckedElement(document, '.play-text');
const restText = getNullCheckedElement(document, '.rest-text');

function loadedSound(e: Event) {
    const DEFAULT_SOUND = 7;
    const lengthLoadSound = (e as CustomEvent).detail;
    if (lengthLoadSound === DEFAULT_SOUND) {
        const languageButton = getNullCheckedElement(document, '.language-button');
        addRemoveDomClass(preloader, 'hidden', 'add');
        playText.textContent = choseTranslation('Play', 'Играть');
        restText.textContent = '';
        playBtn.removeAttribute('disabled');
        languageButton.removeAttribute('disabled');
    }
}

export default loadedSound;
