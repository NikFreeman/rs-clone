import { getNullCheckedElement, addRemoveDomClass } from '../../models/utils';

const piano = getNullCheckedElement(document, '.piano') as HTMLDivElement;

const pianoButton = getNullCheckedElement(document, '.piano-btn') as HTMLButtonElement;

pianoButton.addEventListener('click', () => addRemoveDomClass(piano, 'hidden', 'toggle'));

// drag and drop
piano.onmousedown = function takePiano(event: MouseEvent) {
    const volumeRange = piano.querySelector('.piano-volume');
    if (event.target === volumeRange) {
        return;
    }
    addRemoveDomClass(piano, 'cursor-grabbing', 'add');
    const shiftX = event.clientX - piano.getBoundingClientRect().left;
    const shiftY = event.clientY - piano.getBoundingClientRect().top;

    function moveAt(pageX: number, pageY: number) {
        piano.style.left = `${pageX - shiftX}px`;
        piano.style.top = `${pageY - shiftY}px`;
    }

    moveAt(event.pageX, event.pageY);

    function onMouseMove(e: MouseEvent) {
        moveAt(e.pageX, e.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    piano.onmouseup = function upMouse() {
        addRemoveDomClass(piano, 'cursor-grabbing', 'remove');
        document.removeEventListener('mousemove', onMouseMove);
        piano.onmouseup = null;
    };
};

piano.ondragstart = function startDrag() {
    return false;
};
