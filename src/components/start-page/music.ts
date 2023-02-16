import { Mood } from '../../models/types';
import SoundPlayer from '../player';
import { defaultSoundsLinks } from '../../audio/audio-moods/default/index';
import { categoryArray } from './categories';
import renderVisualization from '../visualization';
import { SelectedLanguage } from '../../models/enums';

const defaultMood = defaultSoundsLinks.map((link) => link.soundSrc);
const defaultNames = defaultSoundsLinks.map((link) => link.soundName);
let player = new SoundPlayer(defaultMood);

const volumes = document.querySelectorAll('.sound-volume');
let isPlay = false;
const playButton = document.querySelector('.play');

function changeVolume(this: HTMLInputElement) {
    const index = +this.id.slice(7);
    player.setVolumeId(index, +this.value);
}

volumes.forEach((input, ind) => {
    if (input instanceof HTMLInputElement) {
        const title = defaultNames[ind];
        input.setAttribute('title', title);
        input.addEventListener('input', changeVolume);
    }
});

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
    // const mood = target.closest('.category-card')?.querySelector('.category-name')?.textContent;
    const mood = target.closest('.category-card')?.querySelector('.category-name')?.getAttribute('localization-key');

    isTheSameMood = rangeArea?.textContent?.split(' /')[0] === mood;
    const moodObj = categoryArray.find((obj) => obj.mood === mood);

    if (moodObj && !isTheSameMood) {
        player.stopAll();
        isPlay = false;
        (playButton as HTMLButtonElement).textContent =
            JSON.parse(localStorage.getItem('Active Language') as string) === SelectedLanguage.english
                ? 'Play'
                : 'Играть';
        // player = new SoundPlayer(moodObj.soundsDirect);
        player = new SoundPlayer(moodObj.soundsLinks.map((linkObj) => linkObj.soundSrc));
        player.loadAll();
        volumes.forEach((input, ind) => {
            if (input instanceof HTMLInputElement) {
                // const filePath = moodObj.soundsDirect[ind];
                // const title = filePath.slice(filePath.lastIndexOf('/') + 1, filePath.lastIndexOf('.'));
                const title = moodObj.soundsLinks[ind].soundName;
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
    renderVisualization(player);
    player.getHowl().forEach((aud, index) => {
        aud.volume(+(document.getElementById(`volume-${index}`) as HTMLInputElement).value);
    });
    if (isPlay) {
        player.stopAll();
        this.textContent = 'Play';
    } else {
        player.loadAll();
        player.playAll();
        this.textContent = 'Stop';
    }
    isPlay = !isPlay;
}

function activateMoodCard(e: Event) {
    const cardList = document.querySelectorAll('.category-card');
    cardList.forEach((card) => {
        card.classList.remove('active-card');
        card.querySelector('.presets-block')?.classList.add('opacity-0');
    });
    if (e.target instanceof HTMLElement) {
        const card = e.target.closest('.category-card');
        if (card instanceof HTMLElement) {
            card.classList.add('active-card');
            card.querySelector('.presets-block')?.classList.remove('opacity-0');
            applyMood(e.target);
        }
    }
}

const wrapper = document.querySelector('.card-wrapper');
wrapper?.addEventListener('click', activateMoodCard);

export default playMusic;
