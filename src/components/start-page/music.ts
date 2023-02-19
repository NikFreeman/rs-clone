import { Mood } from '../../models/types';
import SoundPlayer from '../player';
import defaultSoundsLinks from '../../audio/audio-moods/default/index';
import { categoryArray } from './categories';
import renderVisualization from '../visualization';
import { getNullCheckedElement, addRemoveDomClass, choseTranslation } from '../../models/utils';
// import { SelectedLanguage } from '../../models/enums';

const defaultMood = defaultSoundsLinks.map((link) => link.soundSrc);
const defaultNames = defaultSoundsLinks.map((link) => link.soundName);
let player = new SoundPlayer(defaultMood);

const volumes = document.querySelectorAll('.sound-volume');
let isPlay = false;
const playButton = getNullCheckedElement(document, '.play');

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
        const currPreset = currentMood.presets.find(
            (preset) => preset.presetName === selectPreset || preset.presetNameRu === selectPreset
        );
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
const preloader = getNullCheckedElement(document, '.preloader');
const playText = getNullCheckedElement(document, '.play-text');
const restText = getNullCheckedElement(document, '.rest-text');

function applyMood(target: HTMLElement) {
    const rangeArea = document.querySelector('.preset-name');

    const mood = target.closest('.category-card')?.querySelector('.category-name')?.textContent;
    // const mood = target.closest('.category-card')?.querySelector('.category-name')?.getAttribute('localization-key');

    isTheSameMood = rangeArea?.textContent?.split(' /')[0] === mood;
    const moodObj = categoryArray.find((obj) => obj.mood === mood || obj.moodRu === mood);

    // console.log([mood, moodObj])

    if (moodObj && !isTheSameMood) {
        player.stopAll();
        isPlay = false;
        // (playButton as HTMLButtonElement).textContent = choseTranslation('Play', 'Играть');
        // player = new SoundPlayer(moodObj.soundsDirect);
        player = new SoundPlayer(moodObj.soundsLinks.map((linkObj) => linkObj.soundSrc));
        if (!player.isLoaded()) {
            playText.textContent = choseTranslation('L', '');
            restText.textContent = choseTranslation('ading', 'жидайте');
            addRemoveDomClass(preloader, 'hidden', 'remove');
            playButton.setAttribute('disabled', 'disabled');
            player.loadAll();
        }
        // player.loadAll();
        volumes.forEach((input, ind) => {
            if (input instanceof HTMLInputElement) {
                const title = moodObj.soundsLinks[ind].soundName;
                input.setAttribute('title', title);
                input.addEventListener('input', changeVolume);
            }
        });
    }

    const preset = target.classList.contains('preset') ? ` / ${target.textContent}` : '';
    const indexedPreset = target.classList.contains('preset') ? moodObj?.presets[+target.id].presetName : '';

    if (rangeArea && mood) {
        rangeArea.textContent = mood + preset;
    }

    if (indexedPreset && moodObj) {
        localStorage.setItem('Current Preset', JSON.stringify({ mood: moodObj, preset: +target.id }));
        applyPreset(moodObj, indexedPreset);
    } else {
        volumes.forEach((slider, ind) => {
            if (slider instanceof HTMLInputElement) {
                // eslint-disable-next-line no-param-reassign
                slider.value = '0.25';
                player.setVolumeId(ind, +slider.value);
            }
        });
    }
    localStorage.setItem('Tagline Content', JSON.stringify(`${rangeArea?.textContent}`));
}

function playMusic(this: HTMLButtonElement) {
    player.getHowl().forEach((aud, index) => {
        aud.volume(+(document.getElementById(`volume-${index}`) as HTMLInputElement).value);
    });
    renderVisualization(player);
    if (isPlay) {
        player.stopAll();
        playText.textContent = choseTranslation('Play', 'Играть');
        isPlay = !isPlay;
    } else if (!player.isLoaded()) {
        playText.textContent = choseTranslation('L', '');
        restText.textContent = choseTranslation('ading', 'жидайте');
        addRemoveDomClass(preloader, 'hidden', 'remove');
        playButton.setAttribute('disabled', 'disabled');
        player.loadAll();
    } else {
        // player.loadAll();
        player.playAll();
        playText.textContent = choseTranslation('Stop', 'Остановить');
        renderVisualization(player);
        isPlay = !isPlay;
    }
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
