import { Mood } from '../../models/types';
import SoundPlayer from '../player';
import ambienceCollection from '../../audio/ambience/index';
// import defaultSounds from '../../audio/audio-moods/default/index';
import { categoryArray } from './categories';
import renderVisualization from '../visualization';

let player = new SoundPlayer(ambienceCollection);

const volumes = document.querySelectorAll('.slider');
let isPlay = false;
const playButton = document.querySelector('.play');

function changeVolume(this: HTMLInputElement) {
    const index = +this.id.slice(7);
    player.setVolumeId(index, +this.value);
}

function applyPreset(currentMood: Mood, selectPreset: string) {
    if (currentMood.presets.some((preset) => preset.presetName === selectPreset)) {
        const currPreset = currentMood.presets.find((preset) => preset.presetName === selectPreset);
        volumes.forEach((slider, ind) => {
            if (slider instanceof HTMLInputElement && currPreset) {
                // eslint-disable-next-line no-param-reassign
                slider.value = currPreset?.presetValues[ind].toString();
                player.setVolumeId(ind, +slider.value);
            }
        });
    }
}

let isTheSameMood = false;

function applyMood(target: HTMLElement) {
    const rangeArea = document.querySelector('.preset-name');
    const mood = target.closest('.category-card')?.querySelector('.category-name')?.textContent;

    isTheSameMood = rangeArea?.textContent?.split(' /')[0] === mood;
    const moodObj = categoryArray.find((obj) => obj.mood === mood);

    if (moodObj && !isTheSameMood) {
        player.stopAll();
        isPlay = false;
        (playButton as HTMLButtonElement).textContent = 'Play';
        player = new SoundPlayer(moodObj.soundsDirect);
        // player = new SoundPlayer(moodObj.soundsLinks.map((linkObj) => linkObj.soundSrc));
        player.loadAll();
        volumes.forEach((input, ind) => {
            if (input instanceof HTMLInputElement) {
                const filePath = moodObj.soundsDirect[ind];
                const title = filePath.slice(filePath.lastIndexOf('/') + 1, filePath.lastIndexOf('.'));
                // const title = moodObj.soundsLinks[ind].soundName;
                input.setAttribute('title', title);
                input.addEventListener('input', changeVolume);
            }
        });
    }

    const preset = target.classList.contains('preset') ? ` / ${target.textContent}` : '';
    if (rangeArea && mood) {
        rangeArea.textContent = mood + preset;
    }

    if (preset && moodObj) {
        applyPreset(moodObj, preset.slice(3));
    } else {
        volumes.forEach((slider, ind) => {
            if (slider instanceof HTMLInputElement) {
                // eslint-disable-next-line no-param-reassign
                slider.value = '0.25';
                player.setVolumeId(ind, +slider.value);
            }
        });
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
    renderVisualization(player);
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
