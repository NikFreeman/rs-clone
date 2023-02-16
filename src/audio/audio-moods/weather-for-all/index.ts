import rainLight from './Rain Light.mp3';
import rainMedium from './Rain Medium.mp3';
import rainMuffled from './Rain Muffled.mp3';
import thunderClose from './Thunder Close.mp3';
import thunderDistant from './Thunder Distant.mp3';
import wind from './Wind.mp3';
import windchime from './Windchime.mp3';

const weatherSounds: string[] = [rainLight, rainMedium, rainMuffled, thunderClose, thunderDistant, wind, windchime];

const weatherSoundsLinks = [
    {
        soundName: 'Rain Light',
        soundSrc:
            'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/weather-for-all/rain-light.mp3',
    },
    {
        soundName: 'Rain Medium',
        soundSrc:
            'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/weather-for-all/rain-medium.mp3',
    },
    {
        soundName: 'Rain Muffled',
        soundSrc:
            'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/weather-for-all/rain-muffled.mp3',
    },
    {
        soundName: 'Thunder Close',
        soundSrc:
            'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/weather-for-all/thunder-close.mp3',
    },
    {
        soundName: 'Thunder Distant',
        soundSrc:
            'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/weather-for-all/thunder-distant.mp3',
    },
    {
        soundName: 'Wind',
        soundSrc: 'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/weather-for-all/wind.mp3',
    },
    {
        soundName: 'Windchimes',
        soundSrc:
            'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/weather-for-all/windchime.mp3',
    },
];

const weatherSoundsPack = {
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
};

export default weatherSoundsPack;
