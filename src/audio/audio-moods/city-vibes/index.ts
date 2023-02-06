import beltline from './Beltline.mp3';
import market from './Market.mp3';
import musicLounge from './Music Lounge.mp3';
import park from './Park.mp3';
import playground from './Playground.mp3';
import traffic from './Traffic.mp3';
import walking from './Walking.mp3';

const citySounds: string[] = [beltline, market, musicLounge, park, playground, traffic, walking];

const citySoundsLinks = [
    {
        soundName: 'Beltline',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1-u2l-9azxXtJhYDxrY1ZCqaY6gzdQIe6',
    },
    {
        soundName: 'Market',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1HQp3yPedU-eE1aYAOqG1fjjm6HNpLpHk',
    },
    {
        soundName: 'Music Lounge',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1ya2lEaoIcuPYouqWIip9GkiGMzJleVWJ',
    },
    {
        soundName: 'Park',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1xr38yii-V2-8YConjPpgANtV4oo1Ac3M',
    },
    {
        soundName: 'Playground',
        soundSrc: 'https://docs.google.com/uc?export=download&id=160jjfFUx8QRz2rdcPRQASNXpTb1R80IH',
    },
    {
        soundName: 'Traffic',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1QffwQ4jMjgFHjl7bjVacoFeYWXH9bL1h',
    },
    {
        soundName: 'Walking',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1Cno0GrtPIvOe0YNnx1bbGPWrHtwleglP',
    },
];

export const citySoundsPack = [
    {
        categoryName: 'city',
        mood: 'City Vibes',
        moodRu: 'Дух города',
        description:
            'Do you miss busy streets and noisy highways? Do you miss the atmosphere of a big city bustling with life? Then "City Vibes" is exactly what you need!',
        descriptionRu:
            'Скучаете по шумным улицам и оживленным шоссе? Вам не достает атмосферы большого города в котором кипит жизнь? Тогда "City Vibes" именно то, что вам нужно!',
        presets: [
            {
                presetName: 'Walk in the park',
                presetValues: [0, 0, 0, 0.85, 0.75, 0, 0.6],
            },
            {
                presetName: 'Down the street',
                presetValues: [0.9, 0, 0, 0, 0, 0.95, 0],
            },
            {
                presetName: 'Night City',
                presetValues: [0.45, 0.5, 0.95, 0, 0, 0.5, 0.3],
            },
        ],
        presetsRu: [
            {
                presetName: 'Прогулка в парке',
                presetValues: [0, 0, 0, 0.85, 0.75, 0, 0.6],
            },
            {
                presetName: 'Вдоль дороги',
                presetValues: [0.9, 0, 0, 0, 0, 0.95, 0],
            },
            {
                presetName: 'Ночной город',
                presetValues: [0.45, 0.5, 0.95, 0, 0, 0.5, 0.3],
            },
        ],
        soundsDirect: citySounds,
        soundsLinks: citySoundsLinks
    },
];
