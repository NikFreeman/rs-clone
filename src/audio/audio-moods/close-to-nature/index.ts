const natureSoundsLinks = [
    {
        soundName: 'Campfire',
        soundSrc:
            'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/close-to-nature/campfire.mp3',
    },
    {
        soundName: 'Cute Birds',
        soundSrc:
            'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/close-to-nature/cute-birds.mp3',
    },
    {
        soundName: 'Feel the Leaves',
        soundSrc:
            'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/close-to-nature/feel-the-leaves.mp3',
    },
    {
        soundName: 'Forest',
        soundSrc: 'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/close-to-nature/forest.mp3',
    },
    {
        soundName: 'Lonely Bard',
        soundSrc:
            'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/close-to-nature/lonely-bard.mp3',
    },
    {
        soundName: 'Tree Soul',
        soundSrc:
            'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/close-to-nature/tree-soul.mp3',
    },
    {
        soundName: 'Wind inside my head',
        soundSrc:
            'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/close-to-nature/wind-inside-my-head.mp3',
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
            presetName: 'Сampfire Gathering',
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
    soundsLinks: natureSoundsLinks,
};

export default natureSoundsPack;
