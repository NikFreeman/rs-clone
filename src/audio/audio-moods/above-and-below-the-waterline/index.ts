const waterSounds: string[] = [];

const waterSoundsLinks = [
    {
        soundName: 'Ocean',
        soundSrc:
            'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/above-and-below-the-waterline/ocean.mp3',
    },
    {
        soundName: 'River and Birds',
        soundSrc:
            'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/above-and-below-the-waterline/river-and-birds.mp3',
    },
    {
        soundName: 'River Heavy',
        soundSrc:
            'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/above-and-below-the-waterline/river-heavy.mp3',
    },
    {
        soundName: 'River Light',
        soundSrc:
            'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/above-and-below-the-waterline/river-light.mp3',
    },
    {
        soundName: 'River Medium',
        soundSrc:
            'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/above-and-below-the-waterline/river-medium.mp3',
    },
    {
        soundName: 'Waterfall',
        soundSrc:
            'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/above-and-below-the-waterline/waterfall.mp3',
    },
    {
        soundName: 'Waves',
        soundSrc:
            'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/above-and-below-the-waterline/waves.mp3',
    },
];

const waterSoundsPack = {
    categoryName: 'water',
    mood: 'Above and below the Waterline',
    moodRu: 'Выше и ниже ватерлинии',
    description: 'Sea waves, rain and beautiful birds - the perfect natural soundscape to block out a noisy office.',
    descriptionRu:
        'Волны, дождь и птицы — прекрасное звуковое сопровождение, которое поможет сосредоточиться и забыть об окружающем мире.',
    presets: [
        {
            presetName: 'The Waterfall',
            presetNameRu: 'Водопад',
            presetValues: [0, 0, 0.3, 0.4, 0.2, 0.85, 0],
        },
        {
            presetName: 'By the River',
            presetNameRu: 'Вниз по реке',
            presetValues: [0, 0.8, 0.5, 0.4, 0.8, 0, 0],
        },
        {
            presetName: 'Seashore',
            presetNameRu: 'Молчаливое побережье',
            presetValues: [0.8, 0, 0, 0.45, 0, 0, 0.65],
        },
        {
            presetName: 'Water Around Us',
            presetNameRu: 'В окружении воды',
            presetValues: [0.5, 0, 0, 0.45, 0.3, 0.2, 0.6],
        },
        {
            presetName: 'Ocean',
            presetNameRu: 'Бездонный океан',
            presetValues: [0.4, 0.5, 0.3, 0, 0, 0, 0.85],
        },
    ],
    soundsDirect: waterSounds,
    soundsLinks: waterSoundsLinks,
};

export default waterSoundsPack;
