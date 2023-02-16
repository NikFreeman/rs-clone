const sciFiSounds: string[] = [];

const sciFiSoundsLinks = [
    {
        soundName: 'Deep Dark Times',
        soundSrc: 'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/sci-fi/deep-dark-times.mp3',
    },
    {
        soundName: 'Future ambience',
        soundSrc: 'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/sci-fi/future-ambience.mp3',
    },
    {
        soundName: 'It follows me',
        soundSrc: 'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/sci-fi/it-follows-me.mp3',
    },
    {
        soundName: 'Lost Dreams',
        soundSrc: 'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/sci-fi/lost-dreams.mp3',
    },
    {
        soundName: 'Old VHS',
        soundSrc: 'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/sci-fi/old-vhs.mp3',
    },
    {
        soundName: 'RetroFuture',
        soundSrc: 'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/sci-fi/retrofuture.mp3',
    },
    {
        soundName: 'RetroWave',
        soundSrc: 'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/sci-fi/retrowave.mp3',
    },
];

const sciFiSoundsPack = {
    categoryName: 'science fiction',
    mood: 'Sci-fi',
    moodRu: 'Научная фантастика',
    description:
        'Stuff your eyes with wonder, live as if you’d drop dead in 10 seconds. See the world. It’s more fantastic than any dream made or paid for in factories.',
    descriptionRu:
        'Шире открой глаза, живи так жадно, как будто через десять секунд умрешь. Старайся увидеть мир. Он прекрасней любой мечты, созданной на фабрике и оплаченной деньгами.',
    presets: [
        {
            presetName: 'The Left Hand of Darkness',
            presetNameRu: 'Левая рука Тьмы',
            presetValues: [0.85, 1, 0, 1, 0, 0, 0],
        },
        {
            presetName: 'Solaris',
            presetNameRu: 'Солярис',
            presetValues: [0, 0, 0.9, 1, 0, 1, 0],
        },
        {
            presetName: 'Altered Carbon',
            presetNameRu: 'Видоизмененный углерод',
            presetValues: [1, 0.5, 0, 0.3, 0.8, 0.55, 0],
        },
        {
            presetName: 'Foundation',
            presetNameRu: 'Основание',
            presetValues: [0.9, 0, 1, 0, 0.7, 0.9, 0],
        },
        {
            presetName: 'Blade Runner',
            presetNameRu: 'Бегущий по лезвию',
            presetValues: [0, 0.8, 0, 1, 0.7, 0.9, 0.9],
        },
    ],
    soundsDirect: sciFiSounds,
    soundsLinks: sciFiSoundsLinks,
};

export default sciFiSoundsPack;
