import SoundPlayer from '../player';
import ambienceCollection from '../../audio/ambience/index';
import { categoryArray } from './categories';

let player = new SoundPlayer(ambienceCollection);

const volumes = document.querySelectorAll('.slider');
let isPlay = false;

function changeVolume(this: HTMLInputElement) {
    const index = +this.id.slice(7);
    player.getHowl()[index].volume(+this.value);
}

function applyMood(target: HTMLElement) {
    const rangeArea = document.querySelector('.preset-name');
    const mood = target.closest('.category-card')?.querySelector('.category-name')?.textContent;
    const moodObj = categoryArray.find((obj) => obj.mood === mood);
    if (moodObj) {
        player = new SoundPlayer(moodObj.src);
        player.loadAll();
        volumes.forEach((input, ind) => {
            if (input instanceof HTMLInputElement) {
                const filePath = moodObj.src[ind];
                const title = filePath.slice(filePath.lastIndexOf('/') + 1, filePath.lastIndexOf('.'));
                input.setAttribute('title', title);
                input.addEventListener('input', changeVolume);
            }
        });
    }
    const preset = target.classList.contains('preset') ? ` / ${target.textContent}` : '';
    if (rangeArea && mood) {
        rangeArea.textContent = mood + preset;
    }
}

function playMusic(this: HTMLButtonElement) {
    if (isPlay) {
        player.stopAll();
        this.textContent = 'Play';
    } else {
        player.playAll();
        this.textContent = 'Stop';
    }
    player.getHowl().forEach((aud, index) => {
        aud.volume(+(document.getElementById(`volume-${index}`) as HTMLInputElement).value);
    });
    isPlay = !isPlay;
}

function activateMoodCard(e: Event) {
    const cardList = document.querySelectorAll('.category-card');
    cardList.forEach((card) => {
        card.classList.remove('active-card');
        card.querySelector('.presets-block')?.classList.add('hidden');
    });
    if (e.target instanceof HTMLElement) {
        const card = e.target.closest('.category-card');
        if (card instanceof HTMLElement) {
            card.classList.add('active-card');
            card.querySelector('.presets-block')?.classList.remove('hidden');
            applyMood(e.target);
        }
    }
}

const wrapper = document.querySelector('.card-wrapper');
wrapper?.addEventListener('click', activateMoodCard);

export default playMusic;
