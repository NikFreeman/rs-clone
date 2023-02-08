import campfire from './Campfire.mp3';
import birds from './Cute Birds.mp3';
import leaves from './Feel the Leaves.mp3';
import forest from './Forest.mp3';
import bard from './Lonely Bard.mp3';
import tree from './Tree Soul.mp3';
import wind from './Wind inside my head.mp3';

const natureSounds: string[] = [campfire, birds, leaves, forest, bard, tree, wind];

const natureSoundsLinks = [
    {
        soundName: 'Campfire',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1X8nSVM71PGmanab9dpq9ReBI_jv3ogtC',
    },
    {
        soundName: 'Cute Birds',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1rLGMGz1C4A83LgHXqNf9KgDn7Uh_wKLW',
    },
    {
        soundName: 'Feel the Leaves',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1yWQQscXQes9NYRcogGmIbdl7Gkrh31AC',
    },
    {
        soundName: 'Forest',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1O9P0s6bs9qe5OVgoE4ms0qBRdd53vOp7',
    },
    {
        soundName: 'Lonely Bard',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1C7EgqkyR4Yzd1sCAkDHbZcCZcggRvveo',
    },
    {
        soundName: 'Tree Soul',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1x0NAC0s4BNwXvgdVykvijVxoOI_EOWBJ',
    },
    {
        soundName: 'Wind inside my head',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1UA4ldF_pmeqgd22HdgUkoIbu6MiwPbTV',
    },
];

const natureSoundsPack = {
    categoryName: 'nature',
    mood: 'Close to Nature',
    moodRu: 'На лоне природы',
    description:
        'Forget about the bustle of the unrelenting city. Leave behind the crushing walls of huge skyscrapers. Get back to your roots and feel Mother Nature inside you.',
    descriptionRu:
        'Забудь про суету не стихающего города. Оставь позади давящие стены огромных небоскребов. Вернись к своим корням и почувствуй Мать-Природу.',
    presets: [
        {
            presetName: 'Сampfire Пathering',
            presetNameRu: 'Посиделки у костра',
            presetValues: [0.9, 0.4, 0, 0.55, 0.7, 0, 0],
        },
        {
            presetName: 'Feel the Forest',
            presetNameRu: 'Прочувствуй лес',
            presetValues: [0, 0.9, 0, 0.6, 0, 0.75, 0.65],
        },
        {
            presetName: 'Rhythm of nature',
            presetNameRu: 'Ритм природы',
            presetValues: [0, 0, 0.55, 0.75, 0.8, 0.95, 0.8],
        },
        {
            presetName: 'Rustling Leaves',
            presetNameRu: '',
            presetValues: [0.55, 0.8, 0.9, 0.6, 0, 0, 0],
        },
        {
            presetName: 'Farewell',
            presetNameRu: 'Прощание',
            presetValues: [0.7, 0, 0, 0.7, 0.25, 0.3, 0.35],
        },
    ],
    soundsDirect: natureSounds,
    soundsLinks: natureSoundsLinks,
};

export default natureSoundsPack;
