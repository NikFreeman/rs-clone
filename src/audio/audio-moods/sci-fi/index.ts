import deepDarkTimes from './Deep Dark Times.mp3';
import futureAmbience from './Future ambience.mp3';
import itFollowsMe from './It follows me.mp3';
import lostDreams from './Lost Dreams.mp3';
import oldVhs from './Old VHS.mp3';
import retroFuture from './RetroFuture.mp3';
import retroWave from './RetroWave.mp3';

const sciFiSounds: string[] = [deepDarkTimes, futureAmbience, itFollowsMe, lostDreams, oldVhs, retroFuture, retroWave];

const sciFiSoundsLinks = [
    {
        soundName: 'Deep Dark Times',
        soundSrc: 'https://docs.google.com/uc?export=download&id=12Y1p6jDcChNQ66sWsOb9r3VBsP2JIZpa',
    },
    {
        soundName: 'Future ambience',
        soundSrc: 'https://docs.google.com/uc?export=download&id=13LOxujim4TrGHVwCAy7bKGXiFtqeZxxk',
    },
    {
        soundName: 'It follows me',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1IIolmdiEk96rp4g_fm5evPMHCe7rpmXm',
    },
    {
        soundName: 'Lost Dreams',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1gNIcTeAoBMJIcyC0jLfB1k12PSzMuDlv',
    },
    {
        soundName: 'Old VHS',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1i8UlOIaujRwWrX9uGG8vM2WZUfpmEqtJ',
    },
    {
        soundName: 'RetroFuture',
        soundSrc: 'https://docs.google.com/uc?export=download&id=11DZ4OdEXmdtzh9aLCJVmsZG1HBWZty-D',
    },
    {
        soundName: 'RetroWave',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1PYANFZ-CiEb_EZmRY1u7abWUutAHAx4F',
    },
];

export const sciFiSoundsPack = [
    {
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
                presetValues: [0.85, 1, 0 , 1, 0, 0, 0],
            },
            {
                presetName: 'Solaris',
                presetNameRu: 'Солярис',
                presetValues: [0, 0, 0.9, 1, 0, 1, 0],
            },
            {
                presetName: 'Altered Carbon',
                presetNameRu: 'Видоизмененный углерод',
                presetValues: [1, 0.5, 0 , 0.3, 0.8, 0.55, 0],
            },
            {
                presetName: 'Foundation',
                presetNameRu: 'Основание',
                presetValues: [0.9, 0, 1 , 0, 0.7, 0.9, 0],
            },
            {
                presetName: 'Blade Runner',
                presetNameRu: 'Бегущий по лезвию',
                presetValues: [0, 0.8, 0, 1, 0.7, 0.9, 0.9],
            },
        ],
        soundsDirect: sciFiSounds,
        soundsLinks: sciFiSoundsLinks,
    },
];