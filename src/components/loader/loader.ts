import { getNullCheckedElement, addRemoveDomClass } from '../../models/utils';

const preloader = getNullCheckedElement(document, '.preloader');
const playBtn = getNullCheckedElement(document, '.play');
const playText = getNullCheckedElement(document, '.play-text');
const restText = getNullCheckedElement(document, '.rest-text');

function loadedSound(e: Event) {
    const DEFAULT_SOUND = 7;
    const lengthLoadSound = (e as CustomEvent).detail;
    if (lengthLoadSound === DEFAULT_SOUND) {
        addRemoveDomClass(preloader, 'hidden', 'add');
        playText.textContent = 'Play';
        restText.textContent = '';
        playBtn.removeAttribute('disabled');
    }
}

export default loadedSound;
