import { getNullCheckedElement, addRemoveDomClass } from '../../models/utils';
import notes from '../../audio/audio-piano-notes/index';
import SoundPlayer from '../player';
import { PianoKey } from '../../models/types';

const piano = getNullCheckedElement(document, '.piano') as HTMLDivElement;

const pianoButton = getNullCheckedElement(document, '.piano-btn') as HTMLButtonElement;
let isPianoVisible = false;

pianoButton.addEventListener('click', () => {
    addRemoveDomClass(piano, 'hidden', 'toggle');
    isPianoVisible = !isPianoVisible;
});

// drag and drop
piano.onmousedown = function takePiano(event: MouseEvent) {
    const pianoFrame = document.querySelector('.piano');
    if (event.target !== pianoFrame && event.target !== pianoFrame?.firstElementChild) {
        return;
    }
    addRemoveDomClass(piano, 'cursor-grabbing', 'add');
    let shiftX = event.clientX - piano.getBoundingClientRect().left;
    const shiftY = event.clientY - piano.getBoundingClientRect().top;

    function moveAt(pageX: number, pageY: number) {
        const isRightEdge =
            piano.getBoundingClientRect().left + piano.offsetWidth > document.documentElement.clientWidth;
        const docHeight = Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.body.clientHeight,
            document.documentElement.clientHeight
        );
        const isBottomEdge = pageY - shiftY + piano.offsetHeight >= docHeight;
        if (isRightEdge) {
            shiftX = piano.offsetWidth - (document.documentElement.clientWidth - pageX);
        }
        piano.style.left = `${pageX - shiftX}px`;
        if (piano.getBoundingClientRect().left < 0) {
            piano.style.left = '0px';
            shiftX = pageX;
        }
        piano.style.top = isBottomEdge ? `${docHeight - piano.offsetHeight}px` : `${pageY - shiftY}px`;
        if (piano.getBoundingClientRect().top + window.pageYOffset < 0) {
            piano.style.top = '0px';
        }
    }

    moveAt(event.pageX, event.pageY);

    function onMouseMove(e: MouseEvent) {
        moveAt(e.pageX, e.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    document.onmouseup = function upMouse() {
        addRemoveDomClass(piano, 'cursor-grabbing', 'remove');
        document.removeEventListener('mousemove', onMouseMove);
        document.onmouseup = null;
    };
};

piano.ondragstart = function startDrag() {
    return false;
};

// play
let isMouseDown = false;
document.addEventListener('pointerdown', () => {
    isMouseDown = true;
});
document.addEventListener('pointerup', () => {
    isMouseDown = false;
});

const pianoKeys: NodeListOf<PianoKey> = document.querySelectorAll('.key');
const pianoNotes = new SoundPlayer(notes.slice(3, 28));
pianoNotes.loadAll();
const notesArr = pianoNotes.getHowl();
notesArr.forEach((note) => note.loop(false));

// volume piano
const volumeRange = getNullCheckedElement(piano, '.piano-volume') as HTMLInputElement;
pianoNotes.setVolume(+volumeRange.value);

volumeRange.addEventListener('input', () => {
    pianoNotes.setVolume(+volumeRange.value);
});

// keypress listeners
pianoKeys.forEach((key, index) => {
    key.addEventListener('pointerdown', () => {
        key.classList.add('pressed');
        notesArr[index].play();
    });
    key.addEventListener('pointerover', () => {
        if (isMouseDown) {
            key.classList.add('pressed');
            notesArr[index].play();
        }
    });
    key.addEventListener('pointerout', () => {
        key.classList.remove('pressed');
        notesArr[index].stop();
    });
    key.addEventListener('pointerup', () => {
        key.classList.remove('pressed');
        notesArr[index].stop();
    });
});

// key events for piano keys
window.addEventListener('keydown', (e: KeyboardEvent) => {
    if (!isPianoVisible) return;
    pianoKeys.forEach((key, index) => {
        if (key.dataset.key === e.code) {
            e.preventDefault();
            if (!e.repeat) {
                key.classList.add('pressed');
                notesArr[index].play();
            }
        }
    });
});
window.addEventListener('keyup', (e: KeyboardEvent) => {
    pianoKeys.forEach((key, index) => {
        if (key.dataset.key === e.code) {
            key.classList.remove('pressed');
            notesArr[index].stop();
        }
    });
});

// show keys
const keysSwitcher = piano.querySelector('#show-keys');
const keyLetters = piano.querySelectorAll('.key-text');
if (keysSwitcher instanceof HTMLInputElement) {
    keysSwitcher.addEventListener('change', () => {
        if (keysSwitcher.checked) {
            keyLetters.forEach((key) => key.classList.remove('hidden'));
        } else {
            keyLetters.forEach((key) => key.classList.add('hidden'));
        }
    });
}
