import './style.css';
import { getLinkToImage, getRandomWallpaper } from './components/start-page/wall';
import { categoryArray, renderCard } from './components/start-page/categories';
import './components/volume-control';
// import SoundPlayer from './components/player';
// import ambienceCollection from './audio/ambience';
import { playMusic } from './components/start-page/music';

getRandomWallpaper();
categoryArray.forEach((_, i) => renderCard(i));
document.body.addEventListener('click', getLinkToImage);

const volume = document.createElement('volume-control');
const div = document.querySelector('.test');
div?.append(volume);
// const btnLoad = document.querySelector('.load');
const btnPlay = document.querySelector('.play');
// const player = new SoundPlayer(ambienceCollection);

// btnLoad?.addEventListener('click', () => {
//     player.loadAll();
// });
btnPlay?.addEventListener('click', playMusic);
