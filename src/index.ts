import './style.css';
import { getLinkToImage, getRandomWallpaper } from './components/start-page/wall';
import { categoryArray, renderCard } from './components/start-page/categories';
// import SoundPlayer from './components/player';
// import ambienceCollection from './audio/ambience';
import createVisual from './components/visualization';
import playMusic from './components/start-page/music';

getRandomWallpaper();
categoryArray.forEach((_, i) => renderCard(i));
document.body.addEventListener('click', getLinkToImage);

const volume = document.createElement('volume-control');
const div = document.querySelector('.test');
div?.append(volume);
// const btnLoad = document.querySelector('.load');
const btnPlay = document.querySelector('.play');
// const player = new SoundPlayer(ambienceCollection);

btnPlay?.addEventListener('click', playMusic);
