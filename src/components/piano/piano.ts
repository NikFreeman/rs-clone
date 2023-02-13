import { getNullCheckedElement, addRemoveDomClass } from '../../models/utils';
import notes from '../../audio/audio-piano-notes/index';
import SoundPlayer from '../player';

const piano = getNullCheckedElement(document, '.piano') as HTMLDivElement;

const pianoButton = getNullCheckedElement(document, '.piano-btn') as HTMLButtonElement;

pianoButton.addEventListener('click', () => addRemoveDomClass(piano, 'hidden', 'toggle'));

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

const pianoKeys = document.querySelectorAll('.key');
const pianoNotes = new SoundPlayer(notes.slice(3, 28));
pianoNotes.loadAll();
const notesArr = pianoNotes.getHowl();
notesArr.forEach((note) => note.loop(false));

pianoKeys.forEach((key, index) => {
    key.addEventListener('pointerdown', () => {
        key.classList.add('pressed');
        notesArr[index].play();
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
