const citySoundsLinks = [
    {
        soundName: 'Beltline',
        soundSrc: 'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/city-vibes/beltline.mp3',
    },
    {
        soundName: 'Market',
        soundSrc: 'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/city-vibes/market.mp3',
    },
    {
        soundName: 'Music Lounge',
        soundSrc: 'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/city-vibes/music-lounge.mp3',
    },
    {
        soundName: 'Park',
        soundSrc: 'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/city-vibes/park.mp3',
    },
    {
        soundName: 'Playground',
        soundSrc: 'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/city-vibes/playground.mp3',
    },
    {
        soundName: 'Traffic',
        soundSrc: 'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/city-vibes/traffic.mp3',
    },
    {
        soundName: 'Walking',
        soundSrc: 'https://rockmonolit.github.io/rs-clone-audio/rs-clone-audio/audio-moods/city-vibes/walking.mp3',
    },
];

const citySoundsPack = {
    categoryName: 'city',
    mood: 'City Vibes',
    moodRu: 'В ритме города',
    description:
        'Do you miss busy streets and noisy highways? Do you miss the atmosphere of a big city bustling with life? Then "City Vibes" is exactly what you need!',
    descriptionRu:
        'Скучаете по шумным улицам и оживленным шоссе? Вам не достает атмосферы большого города в котором кипит жизнь? Тогда "City Vibes" именно то, что вам нужно!',
    presets: [
        {
            presetName: 'Walk in the park',
            presetNameRu: 'Прогулка в парке',
            presetValues: [0, 0, 0, 0.85, 0.75, 0, 0.6],
        },
        {
            presetName: 'Down the street',
            presetNameRu: 'Вдоль дороги',
            presetValues: [0.9, 0, 0, 0, 0, 0.95, 0],
        },
        {
            presetName: 'Night City',
            presetNameRu: 'Ночной город',
            presetValues: [0.45, 0.5, 0.95, 0, 0, 0.5, 0.3],
        },
    ],
    soundsLinks: citySoundsLinks,
};

export default citySoundsPack;
