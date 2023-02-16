const meditationSounds: string[] = [];

const meditationSoundsLinks = [
    {
        soundName: 'Calm melody',
        soundSrc: 'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/meditate-me/calm-melody.mp3',
    },
    {
        soundName: 'Deep Chakra',
        soundSrc: 'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/meditate-me/deep-chakra.mp3',
    },
    {
        soundName: 'Distant sky',
        soundSrc: 'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/meditate-me/distant-sky.mp3',
    },
    {
        soundName: 'Heart of gold',
        soundSrc:
            'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/meditate-me/heart-of-gold.mp3',
    },
    {
        soundName: 'Hope still here',
        soundSrc:
            'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/meditate-me/hope-still-here.mp3',
    },
    {
        soundName: 'Marimba',
        soundSrc: 'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/meditate-me/marimba.mp3',
    },
    {
        soundName: 'Mind Cleaner',
        soundSrc:
            'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/meditate-me/mind-cleaner.mp3',
    },
];

const meditationSoundsPack = {
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
            presetValues: [0, 0, 0.75, 0.95, 0.75, 0, 0],
        },
    ],
    soundsDirect: meditationSounds,
    soundsLinks: meditationSoundsLinks,
};

export default meditationSoundsPack;
