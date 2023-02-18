const darknessSoundsLinks = [
    {
        soundName: 'Abyss',
        soundSrc: 'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/darkness-within/abyss.mp3',
    },
    {
        soundName: 'Dark Side',
        soundSrc:
            'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/darkness-within/dark-side.mp3',
    },
    {
        soundName: 'Drone',
        soundSrc: 'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/darkness-within/drone.mp3',
    },
    {
        soundName: 'Last Violin in hell',
        soundSrc:
            'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/darkness-within/last-violin-in-hell.mp3',
    },
    {
        soundName: 'Nothing Here',
        soundSrc:
            'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/darkness-within/nothing-here.mp3',
    },
    {
        soundName: 'Something Big',
        soundSrc:
            'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/darkness-within/something-big.mp3',
    },
    {
        soundName: 'Synthetic Evil',
        soundSrc:
            'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/darkness-within/synthetic-evil.mp3',
    },
];

const darknessSoundsPack = {
    categoryName: 'darkness',
    mood: 'Darkness Within',
    moodRu: 'Тьма внутри',
    description:
        "From time to time, every last one of us feels something dark inside, something gloomy. That feeling does not let us sleep. It's time to reconcile with your dark side and recognize it as part of you.",
    descriptionRu:
        'Время от времени каждый из нас ощущает внутри что-то темное, что-то мрачное, что не дает уснуть. Пришло время примириться со своей темной стороной и признать ее частью себя.',
    presets: [
        {
            presetName: 'Gravedigger',
            presetNameRu: 'Гробокопатель',
            presetValues: [0, 0, 0.65, 0, 0, 1, 1],
        },
        {
            presetName: 'Reflections are lies',
            presetNameRu: 'Отражения - ложь',
            presetValues: [0, 0.65, 0, 0.9, 0.95, 0.7, 0],
        },
        {
            presetName: 'Right behind your back',
            presetNameRu: 'Прямо за спиной',
            presetValues: [0.95, 0.6, 0, 0.7, 0.3, 0, 0.95],
        },
        {
            presetName: 'Withered earth',
            presetNameRu: 'Увядшая земля',
            presetValues: [0.95, 0.7, 0.35, 0, 0.7, 0, 0],
        },
        {
            presetName: "Don't be afraid of the dark",
            presetNameRu: 'Не бойся темноты',
            presetValues: [0.7, 0.95, 0, 0, 0, 0.9, 0],
        },
    ],
    soundsLinks: darknessSoundsLinks,
};

export default darknessSoundsPack;
