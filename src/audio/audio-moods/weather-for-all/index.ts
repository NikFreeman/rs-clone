import rainLight from './Rain Light.mp3';
import rainMedium from './Rain Medium.mp3';
import rainMuffled from './Rain Muffled.mp3';
import thunderClose from './Thunder Close.mp3';
import thunderDistant from './Thunder Distant.mp3';
import wind from './Wind.mp3';
import windchimes from './Windchimes.mp3';

const weatherSounds: string[] = [rainLight, rainMedium, rainMuffled, thunderClose, thunderDistant, wind, windchimes];

const weatherSoundsLinks = [
    {
        soundName: 'Rain Light',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1hCCtQ87uX-hPrZNgiREEiVE7Rny4PW3J',
    },
    {
        soundName: 'Rain Medium',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1D85I2A2MVmwRAI4gHQSdIl10xfIKE1C0',
    },
    {
        soundName: 'Rain Muffled',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1ViiWV6n3QXeCm-bnksOwy9SOydLeOUSl',
    },
    {
        soundName: 'Thunder Close',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1z-0WJUPjzltQDYKt-UbQ0affF6FhDFNF',
    },
    {
        soundName: 'Thunder Distant',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1nD7pR1mtGFMglHja4vo2YOFowlpLNcQj',
    },
    {
        soundName: 'Wind',
        soundSrc: 'https://docs.google.com/uc?export=download&id=194qkOSXb-_Q9rtQw0aBizXKepa6o6XCx',
    },
    {
        soundName: 'Windchimes',
        soundSrc: 'https://docs.google.com/uc?export=download&id=17_uSIVr2pNY5qGIDgTeDUD17Bb72CbZ_',
    },
];

export const weatherSoundsPack = [
    {
        categoryName: 'weather',
        mood: 'Weather for all',
        moodRu: 'Погода на любой вкус',
        description: 'People only check the weather forecast to find out when the wind of change will finally come.',
        descriptionRu: 'Люди узнают прогноз погоды лишь для того, чтобы узнать, когда будет ветер перемен.',
        presets: [
            {
                presetName: 'Downpour',
                presetNameRu: 'Ливень',
                presetValues: [0, 0.95, 0, 0, 0.8, 0, 0.7],
            },
            {
                presetName: 'Far outside the window',
                presetNameRu: 'Далеко за окном',
                presetValues: [0.95, 0, 0.8, 0, 0, 0, 0],
            },
            {
                presetName: 'Power beyond control',
                presetNameRu: 'Неподвластная сила',
                presetValues: [0, 0.9, 0, 0.8, 0, 0.9, 0],
            },
            {
                presetName: 'Wall of water',
                presetNameRu: 'Стена воды',
                presetValues: [1, 0.85, 1, 0, 0, 0, 0],
            },
            {
                presetName: 'Muted groan',
                presetNameRu: 'Приглушенный стон',
                presetValues: [0, 0.3, 0.45, 0, 0.75, 0.3, 0.9],
            },
        ],
        soundsDirect: weatherSounds,
        soundsLinks: weatherSoundsLinks,
    },
];