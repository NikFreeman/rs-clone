import { getNullCheckedElement, addRemoveDomClass } from '../../models/utils';

const preloader = getNullCheckedElement(document, '.preloader');
const playBtn = getNullCheckedElement(document, '.play');
const playText = getNullCheckedElement(document, '.play-text');
const restText = getNullCheckedElement(document, '.rest-text');

function loadedSound() {
    addRemoveDomClass(preloader, 'hidden', 'add');
    playText.textContent = 'Play';
    restText.textContent = '';
    playBtn.removeAttribute('disabled');
}

export default loadedSound;
