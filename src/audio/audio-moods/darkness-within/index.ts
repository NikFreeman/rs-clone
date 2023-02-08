import abyss from './Abyss.mp3';
import darkSide from './Dark Side.mp3';
import drone from './Drone.mp3';
import lastViolin from './Last Violin in hell.mp3';
import nothingHere from './Nothing Here.mp3';
import somethingBig from './Something Big.mp3';
import syntheticEvil from './Synthetic Evil.mp3';

const darknessSounds: string[] = [abyss, darkSide, drone, lastViolin, nothingHere, somethingBig, syntheticEvil];

const darknessSoundsLinks = [
    {
        soundName: 'Abyss',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1acPr8SKu77_h4HNvj4wegYpaoDv-5tq_',
    },
    {
        soundName: 'Dark Side',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1WaCW71QKrVhFD9y2HrmvtJRbOBRwBbdz',
    },
    {
        soundName: 'Drone',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1bi85kFFAOQsQdlq7oyX7oyezCz8t-LYl',
    },
    {
        soundName: 'Last Violin in hell',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1F2k5XBJRzku_Q0IV2C_QT1To5GEkBsZT',
    },
    {
        soundName: 'Nothing Here',
        soundSrc: 'https://docs.google.com/uc?export=download&id=173G9iyV2SZE0JDbYmER8_xo-JnEtNqCs',
    },
    {
        soundName: 'Something Big',
        soundSrc: 'https://docs.google.com/uc?export=download&id=1qnKB4fzy0K3KR-dHmsW_YNd-dwXcOWXI',
    },
    {
        soundName: 'Synthetic Evil',
        soundSrc: 'https://docs.google.com/uc?export=download&id=13gtuLJr_p_R5BTntEXsgoJo2V9XBouxr',
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
    soundsDirect: darknessSounds,
    soundsLinks: darknessSoundsLinks,
};

export default darknessSoundsPack;
