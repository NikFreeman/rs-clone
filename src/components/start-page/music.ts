import { songs } from '../player';
/* eslint-disable global-require */
/* eslint-disable no-param-reassign */
const melodySrcs = [...songs];

const volumes = document.querySelectorAll('.slider');

function playMusic() {
    melodySrcs.forEach((aud, index) => {
        aud.play();
        aud.loop(true);
        aud.volume(+(document.getElementById(`volume-${index}`) as HTMLInputElement).value / 100);
        console.log(aud);
    });
}

function changeVolume(this: HTMLInputElement) {
    const index = +this.id.slice(7);
    melodySrcs[index].volume(+this.value / 100);
    console.log('this.value', this.value);
}

volumes.forEach((input) => {
    if (input instanceof HTMLInputElement) {
        input.addEventListener('change', changeVolume);
    }
});

export default playMusic;
