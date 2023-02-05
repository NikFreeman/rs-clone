import { songs } from '../player';

const melodySrcs = [...songs];

const volumes = document.querySelectorAll('.slider');
let isPlay = false;

function playMusic(this: HTMLButtonElement) {
    melodySrcs.forEach((aud, index) => {
        if (isPlay) {
            aud.stop();
            this.textContent = 'Play';
        } else {
            aud.play();
            this.textContent = 'Stop';
        }
        aud.loop(true);
        aud.volume(+(document.getElementById(`volume-${index}`) as HTMLInputElement).value);
    });
    isPlay = !isPlay;
}

function changeVolume(this: HTMLInputElement) {
    const index = +this.id.slice(7);
    melodySrcs[index].volume(+this.value);
}

volumes.forEach((input) => {
    if (input instanceof HTMLInputElement) {
        input.addEventListener('input', changeVolume);
    }
});

export default playMusic;
