const villageSounds: string[] = [];

const villageSoundsLinks = [
    {
        soundName: 'Chickens',
        soundSrc:
            'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/welcome-to-the-village/chickens.mp3',
    },
    {
        soundName: 'Country Road',
        soundSrc:
            'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/welcome-to-the-village/country-road.mp3',
    },
    {
        soundName: 'Farm Life',
        soundSrc:
            'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/welcome-to-the-village/farm-life.mp3',
    },
    {
        soundName: 'Goats',
        soundSrc:
            'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/welcome-to-the-village/goats.mp3',
    },
    {
        soundName: 'Little one with instrument',
        soundSrc:
            'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/welcome-to-the-village/little-one-with-instrument.mp3',
    },
    {
        soundName: 'Windchimes Soft',
        soundSrc:
            'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/welcome-to-the-village/windchimes-soft.mp3',
    },
    {
        soundName: 'Windmill',
        soundSrc:
            'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/welcome-to-the-village/windmill.mp3',
    },
];

const villageSoundsPack = {
    categoryName: 'village',
    mood: 'Welcome to the village',
    moodRu: 'Добро пожаловать в деревню',
    description:
        "It's time to relax and enjoy the countryside atmosphere. Move to a place where people are simpler, and mutual assistance still means something.",
    descriptionRu:
        'Пора расслабиться и насладиться загородной атмосферой. Перенеситесь в место, где люди проще, а взаимопомощь еще что-то значит.',
    presets: [
        {
            presetName: 'Bologna 1530',
            presetNameRu: 'Болонья 1530',
            presetValues: [0, 0.8, 1, 0, 0.3, 0.65, 0.55],
        },
        {
            presetName: 'Rural vibe',
            presetNameRu: 'Сельская атмосфера',
            presetValues: [0.8, 0.7, 0.9, 0.85, 0, 0, 0],
        },
        {
            presetName: 'Ordinary day at the crossroads',
            presetNameRu: 'Обычный день на перекрестке',
            presetValues: [0, 0.7, 0.6, 0, 0.6, 0.35, 0],
        },
        {
            presetName: 'Mother Miranda',
            presetNameRu: 'Мать Миранда',
            presetValues: [0, 0, 0.95, 0.95, 0, 0, 1],
        },
        {
            presetName: 'Dimetrescu',
            presetNameRu: 'Димитреску',
            presetValues: [0, 0.6, 0.5, 0, 0, 0, 0.8],
        },
    ],
    soundsDirect: villageSounds,
    soundsLinks: villageSoundsLinks,
};

export default villageSoundsPack;
