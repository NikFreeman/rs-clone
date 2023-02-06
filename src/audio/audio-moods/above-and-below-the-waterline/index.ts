import ocean from './Ocean.mp3';
import riverAndBirds from './River and Birds.mp3';
import riverHeavy from './River Heavy.mp3';
import riverLight from './River Light.mp3';
import riverMedium from './River Medium.mp3';
import waterfall from './Waterfall.mp3';
import waves from './Waves.mp3';

const waterSounds: string[] = [ocean, riverAndBirds, riverHeavy, riverLight, riverMedium, waterfall, waves];

const waterSoundsLinks = [
    {
        soundName: 'Ocean',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1TwdACjpAdWWetCMEnxFtSkrWBRRYoFvn',
    },
    {
        soundName: 'River and Birds',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1L89OiGD_dvClLZAihSgY9cl69YhLIMRQ',
    },
    {
        soundName: 'River Heavy',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1GT0UALxqcbR7iOwHAQ1zL6PBOLy9vMKA',
    },
    {
        soundName: 'River Light',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1D64Bunz6tNuZJsbup74pRdxNoGsSWpDK',
    },
    {
        soundName: 'River Medium',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1PWXJ1psDgV5huXF-JroDZH2qLhm6x1pi',
    },
    {
        soundName: 'Waterfall',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1woENw77DWFg3tCHxIRUXHNp8K0bevcm3',
    },
    {
        soundName: 'Waves',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1bPoe5lurguDIlI7Vx_E4yvTwWp12hktV',
    },
];

export const waterSoundsPack = [
    {
        categoryName: 'water',
        mood: 'Above and below the Waterline',
        moodRu: 'Выше и ниже ватерлинии',
        description:
            'Sea waves, rain and beautiful birds - the perfect natural soundscape to block out a noisy office.',
        descriptionRu:
            'Волны, дождь и птицы — прекрасное звуковое сопровождение, которое поможет сосредоточиться и забыть об окружающем мире.',
        presets: [
            {
                presetName: 'The Waterfall',
                presetValues: [0, 0, 0.3, 0.4, 0.2, 0.85, 0],
            },
            {
                presetName: 'By the River',
                presetValues: [0, 0.8, 0.5, 0.4, 0.8, 0, 0],
            },
            {
                presetName: 'Seashore',
                presetValues: [0.8, 0, 0, 0.45, 0, 0, 0.65],
            },
            {
                presetName: 'Water Around Us',
                presetValues: [0.5, 0, 0, 0.45, 0.3, 0.2, 0.6],
            },
            {
                presetName: 'Ocean',
                presetValues: [0.4, 0.5, 0.3, 0, 0, 0, 0.85],
            },
        ],
        presetsRu: [
            {
                presetName: 'Водопад',
                presetValues: [0, 0, 0.3, 0.4, 0.2, 0.85, 0],
            },
            {
                presetName: 'Вниз по реке',
                presetValues: [0, 0.8, 0.5, 0.4, 0.8, 0, 0],
            },
            {
                presetName: 'Молчаливое побережье',
                presetValues: [0.8, 0, 0, 0.45, 0, 0, 0.65],
            },
            {
                presetName: 'В окружении воды',
                presetValues: [0.5, 0, 0, 0.45, 0.3, 0.2, 0.6],
            },
            {
                presetName: 'Бездонный океан',
                presetValues: [0.4, 0.5, 0.3, 0, 0, 0, 0.85],
            },
        ],
        soundsDirect: waterSounds,
        soundsLinks: waterSoundsLinks
    },
];
