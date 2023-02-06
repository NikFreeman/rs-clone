import SoundPlayer from '../player';
import ambienceCollection from '../../audio/ambience/index';

export const player = new SoundPlayer(ambienceCollection);
const melodySrcs = player.getHowl();
player.loadAll();

const volumes = document.querySelectorAll('.slider');
let isPlay = false;

export function playMusic(this: HTMLButtonElement) {
    if (isPlay) {
        player.stopAll();
        this.textContent = 'Play';
    } else {
        player.playAll();
        this.textContent = 'Stop';
    }
    melodySrcs.forEach((aud, index) => {
        aud.volume(+(document.getElementById(`volume-${index}`) as HTMLInputElement).value);
    });
    isPlay = !isPlay;
}

function changeVolume(this: HTMLInputElement) {
    const index = +this.id.slice(7);
    melodySrcs[index].volume(+this.value);
}

volumes.forEach((input, ind) => {
    if (input instanceof HTMLInputElement) {
        const filePath = ambienceCollection[ind];
        const title = filePath.slice(filePath.lastIndexOf('/') + 1, filePath.lastIndexOf('.'));
        input.setAttribute('title', title);
        input.addEventListener('input', changeVolume);
    }
});
