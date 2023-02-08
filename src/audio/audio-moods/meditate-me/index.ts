import calmMelody from './Calm melody.mp3';
import deepChakra from './Deep Chakra.mp3';
import distantSky from './Distant sky.mp3';
import heartOfGold from './Heart of gold.mp3';
import hopeStillHere from './Hope still here.mp3';
import marimba from './Marimba.mp3';
import mindCleaner from './Mind Cleaner.mp3';

const meditationSounds: string[] = [calmMelody, deepChakra, distantSky, heartOfGold, hopeStillHere, marimba, mindCleaner];

const meditationSoundsLinks = [
    {
        soundName: 'Calm melody',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1uWnsIsiouhLNvUie5-rAgKNITHdRgWXs',
    },
    {
        soundName: 'Deep Chakra',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1XJTg_otyNFxO3dWibr0D6RO4GTl-R31w',
    },
    {
        soundName: 'Distant sky',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1lJArVQya34XEf_8XFzFuMaBqGfua-heh',
    },
    {
        soundName: 'Heart of gold',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1Am0rqd8XoPq_ESdeDkgxSMsSUNK8M2-B',
    },
    {
        soundName: 'Hope still here',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1adtRZeWa5rXVlZn5QNXMiICTwRjKxFv0',
    },
    {
        soundName: 'Marimba',
        soundSrc: 'https://docs.google.com/uc?export=download&id=16izgTNzmtb5nL73Ti8Bm0coetX1ICtHi',
    },
    {
        soundName: 'Mind Cleaner',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1f3gEHWC1mtJOIgWHhEC2gyrCFaiWSYKY',
    },
];

export const meditationSoundsPack = [
    {
        categoryName: 'meditation',
        mood: 'Meditate me',
        moodRu: 'Время медитации',
        description:
            'Desires make people run in circles, just as mirages attract thirsty doe. When a new desire is born, it is based on the light of knowledge.',
        descriptionRu:
            'Желания заставляют людей бегать по кругу, как миражи притягивают лань, изнывающую от жажды. Когда зарождается новое желание, в его основе лежит свет знания.',
        presets: [
            {
                presetName: 'Deep Inside',
                presetNameRu: 'Глубоко внутри',
                presetValues: [0, 0.9, 0.65, 0, 0, 0, 0.8],
            },
            {
                presetName: 'Free Yourself',
                presetNameRu: 'Освободи себя',
                presetValues: [0, 0, 0, 0.9, 0.8, 0.45, 0.55],
            },
            {
                presetName: 'High in the mountains of Tibet',
                presetNameRu: 'В горах Тибета',
                presetValues: [0.5, 0, 0.85, 0.4, 0, 0.8, 0],
            },
            {
                presetName: 'Soul Resurrection',
                presetNameRu: 'Воскрешение души',
                presetValues: [0, 0.6, 0, 0.9, 0.35, 0, 0.85],
            },
            {
                presetName: 'Light of knowledge',
                presetNameRu: 'Свет знания',
                presetValues: [0, 0, 0.75 , 0.95, 0.75, 0, 0],
            },
        ],
        soundsDirect: meditationSounds,
        soundsLinks: meditationSoundsLinks,
    },
];