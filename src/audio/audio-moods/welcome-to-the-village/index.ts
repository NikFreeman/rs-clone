import chickens from './Chickens.mp3';
import countryRoad from './Country Road.mp3';
import farmLife from './Farm Life.mp3';
import goats from './Goats.mp3';
import littleOne from './Little one with instrument.mp3';
import windchimes from './Windchimes.mp3';
import windmill from './Windmill.mp3';

const villageSounds: string[] = [chickens, countryRoad, farmLife, goats, littleOne, windchimes, windmill];

const villageSoundsLinks = [
    {
        soundName: 'Chickens',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1EuIWfkcD9EGId8tUFlQdjpZFRryjLOB7',
    },
    {
        soundName: 'Country Road',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1-BwqSZPgr6Uhcq-TXT5hqYerknqUZQAz',
    },
    {
        soundName: 'Farm Life',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1GEZ68V-MfFjScnciBEFxzQka_CY0m3oA',
    },
    {
        soundName: 'Goats',
        soundSrc: 'https://docs.google.com/uc?export=download&id=19wC_eSOs9QViuhNfWVncAhPVMHxxoYfJ',
    },
    {
        soundName: 'Little one with instrument',
        soundSrc: 'https://docs.google.com/uc?export=download&id=11BRWIvOOsl7A0mp0dFn4irlZxUYuwjqE',
    },
    {
        soundName: 'Windchimes',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1ttt6X0FGtE265LwUZ9ytRozPdnjz-7ZK',
    },
    {
        soundName: 'Windmill',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1bGoJkBL8rF0ZDZEmK81eSx_gNchXFZdl',
    },
];

export const villageSoundsPack = [
    {
        categoryName: 'village',
        mood: 'Welcome to the village',
        moodRu: 'Добро пожаловать в деревню',
        description: 'It\'s time to relax and enjoy the countryside atmosphere. Move to a place where people are simpler, and mutual assistance still means something.',
        descriptionRu: 'Пора расслабиться и насладиться загородной атмосферой. Перенеситесь в место, где люди проще, а взаимопомощь еще что-то значит.',
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
    },
];
