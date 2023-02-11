const piano: HTMLDivElement | null = document.querySelector('.piano');

if (piano) {
    piano.onmousedown = function takePiano(event: MouseEvent) {
        const shiftX = event.clientX - piano.getBoundingClientRect().left;
        const shiftY = event.clientY - piano.getBoundingClientRect().top;

        function moveAt(pageX: number, pageY: number) {
            if (piano) {
                piano.style.left = `${pageX - shiftX}px`;
                piano.style.top = `${pageY - shiftY}px`;
            }
        }

        moveAt(event.pageX, event.pageY);

        function onMouseMove(e: MouseEvent) {
            moveAt(e.pageX, e.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        piano.onmouseup = function upMouse() {
            document.removeEventListener('mousemove', onMouseMove);
            piano.onmouseup = null;
        };
    };

    piano.ondragstart = function startDrag() {
        return false;
    };
}
